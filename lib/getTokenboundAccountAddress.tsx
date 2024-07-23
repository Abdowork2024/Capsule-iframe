import { tokenboundAbi } from "./abi";
import { getPublicClient } from "./clients";
import { implementationAddress, salt, tokenboundAddress } from "./constants";

const getTokenboundAccountAddress = async (
  chainId: number,
  contractAddress: string,
  tokenId: string,
) => {
  try {
    const publicClient = getPublicClient(chainId);
    const account = (await publicClient.readContract({
      address: tokenboundAddress as `0x${string}`,
      abi: tokenboundAbi,
      functionName: "account",
      args: [implementationAddress, salt, chainId, contractAddress, tokenId],
    })) as string;

    return account;
  } catch (error) {
    return { error };
  }
};

export default getTokenboundAccountAddress;
