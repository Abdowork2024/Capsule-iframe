import { MULTICALL3_ADDRESS } from "@/lib/constants";
import abi from "@/lib/abi/multicall3.json";
import { getPublicClient } from "@/lib/clients";

const aggregate3ValueRead = async (calls: any[], chainId: number) => {
  try {
    const tx = await getPublicClient(chainId).readContract({
      address: MULTICALL3_ADDRESS,
      abi,
      functionName: "aggregate3Value",
      args: [calls],
    });
    return tx;
  } catch (error) {
    return { error };
  }
};

export default aggregate3ValueRead;
