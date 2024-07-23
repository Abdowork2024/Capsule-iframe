import { getPublicClient } from "@/lib/clients/viem";
import { implementationAbi, tokenboundAbi } from "@/lib/abi";
import { implementationAddress, salt, tokenboundAddress } from "@/lib/constants";

interface GetAccountStatus {
  data?: boolean;
  error?: string;
}

export async function getAccountStatus(
  chainId: number,
  account: string,
): Promise<GetAccountStatus> {
  try {
    const publicClient = getPublicClient(chainId);
    const response = (await publicClient.readContract({
      address: account as `0x${string}`,
      abi: implementationAbi,
      functionName: "isLocked",
    })) as boolean;

    return { data: response };
  } catch (error) {
    console.error(error);
    return {
      error: `failed getting account status for account: ${account}. It may not exist yet.`,
    };
  }
}

interface GetAccount {
  data?: string;
  error?: string;
}

export async function getAccount(
  tokenId: number,
  contractAddress: string,
  chainId: number,
): Promise<GetAccount> {
  try {
    const publicClient = getPublicClient(chainId);

    const response = (await publicClient.readContract({
      address: tokenboundAddress as `0x${string}`,
      abi: tokenboundAbi,
      functionName: "account",
      args: [implementationAddress, salt, chainId, contractAddress, tokenId],
    })) as string;
    return { data: response };
  } catch (err) {
    console.error(err);
    return { error: `failed getting account for token $id: {tokenId}` };
  }
}
