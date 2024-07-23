import { getAccount } from "@/lib/utils";
import useSWR from "swr";

const useTokenboundAccount = (tokenId: string, contractAddress: string, chainIdNumber: number) => {
  const { data: account } = useSWR(tokenId ? `/account/${tokenId}` : null, async () => {
    const result = await getAccount(Number(tokenId), contractAddress, chainIdNumber);
    return result.data;
  });

  return { account };
};

export default useTokenboundAccount;
