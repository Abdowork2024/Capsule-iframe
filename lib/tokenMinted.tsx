import { getPublicClient } from "./clients";
import erc721Abi from "@/lib/abi/erc721.json";

const tokenMinted = async (chainId: string, contractAddress: string, tokenId: string) => {
  const publicClient = getPublicClient(parseInt(chainId, 10));

  const response = (await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    functionName: "totalSupply",
    args: [],
    abi: erc721Abi as any,
  })) as string;
  const totalSupply = response.toString();

  if (parseInt(tokenId, 10) > parseInt(totalSupply, 10)) return false;

  return true;
};

export default tokenMinted;
