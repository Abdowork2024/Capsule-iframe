import _ from "lodash";
import { parseAbiItem } from "viem";
import { getPublicClient } from "../clients";
import aggregate3ValueRead from "../aggregate3ValueRead";
import getBalanceOfCall from "./getBalanceOfCall";
import abi from "@/lib/abi/zora-erc1155.json";
import getIpfsLink from "../utils/getIpfsLink";

const getZoraNfts = async (account: string, chainId: number) => {
  try {
    const publicClient = getPublicClient(chainId);
    const logs = await publicClient.getLogs({
      event: parseAbiItem(
        "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
      ),
      args: {
        to: account as `0x${string}`,
      },
      fromBlock: BigInt(0),
      toBlock: "latest",
    });
    const zoraNfts = logs.map((log) => {
      const contractAddress = log?.address;
      const tokenId = BigInt(`0x${log?.data.slice(2, 66)}`);
      return {
        contractAddress,
        tokenId,
        id: `${log?.address}:${tokenId.toString()}`,
      };
    });
    const mergedZoraNfts = _.uniqBy(zoraNfts, "id");
    const balanceOfCalls = mergedZoraNfts.map((nft) =>
      getBalanceOfCall(nft.contractAddress, nft.tokenId, account),
    );
    const response = (await aggregate3ValueRead(balanceOfCalls, chainId)) as any;
    if (response?.error) return [];

    const filteredNfts = response.map((balance: any, i: any) => {
      if (balance === BigInt(0)) return null;
      return mergedZoraNfts[i];
    });

    const finalNfts = _.compact(filteredNfts);

    const metadataPromise = finalNfts.map(async (nft: any) => {
      const collectionName = await publicClient.readContract({
        address: nft.contractAddress,
        abi,
        functionName: "name",
      });
      const tokenUri = await publicClient.readContract({
        address: nft.contractAddress,
        functionName: "uri",
        abi,
        args: [nft.tokenId],
      });
      const tokenUriLink = getIpfsLink(tokenUri as string);
      const response = await fetch(tokenUriLink);
      const tokenMetadata = await response.json();

      const name = tokenMetadata?.name;
      const image = getIpfsLink(tokenMetadata?.image);
      const animationUrl = getIpfsLink(tokenMetadata?.animation_url);
      const isMusic = tokenMetadata?.content?.mime?.includes?.("audio");

      return (
        isMusic && {
          cover: image,
          audio: animationUrl,
          duration: "",
          title: collectionName,
          album: collectionName,
          artist: name,
          featuring: "",
          token: {
            id: nft?.tokenId.toString(),
            contractAddress: nft?.contractAddress,
            chainId,
            type: "ERC1155",
          },
        }
      );
    });

    const nfts = await Promise.all(metadataPromise);

    return _.compact(nfts);
  } catch (error) {
    return [];
  }
};

export default getZoraNfts;
