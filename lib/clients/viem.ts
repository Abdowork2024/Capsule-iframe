import { createPublicClient, http } from "viem";
import getViemNetwork from "../utils/getViemNetwork";
import getAlchemyRpcUrl from "../alchemy/getAlchemyRpcUrl";

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId) as any;
  const RPC_URL = getAlchemyRpcUrl(chainId);
  const publicClient = createPublicClient({
    chain: chain,
    transport: http(RPC_URL),
  });
  return publicClient;
};

export const publicClient = getPublicClient(1);
