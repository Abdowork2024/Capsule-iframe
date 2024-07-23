import { encodeFunctionData } from "viem";
import abi from "@/lib/abi/zora-erc1155.json";

const getBalanceOfCall = (contractAdress: string, tokenId: bigint, owner: string) => {
  const balanceOfData = encodeFunctionData({
    abi: abi,
    functionName: "balanceOf",
    args: [owner, tokenId],
  });
  return {
    target: contractAdress,
    value: 0,
    allowFailure: false,
    callData: balanceOfData,
  };
};

export default getBalanceOfCall;
