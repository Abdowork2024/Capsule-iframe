import hashJs from "hash.js";
import { backgroundColorMap, foregroundColorMap } from "./types";

const maxTokenID = 10000;

const generateSequence = (length: number) => Array.from({ length }, (_, index) => index + 1);

const deterministicShuffle = (array: Array<number>, seed: string) => {
  for (let i = array.length - 1; i > 0; i--) {
    const hash = hashJs
      .sha256()
      .update(seed + String(i))
      .digest("hex");
    const randomIndex = parseInt(BigInt("0x" + hash).toString()) % (i + 1);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

const shuffledList = deterministicShuffle(generateSequence(maxTokenID + 2), "CAPSULE");

const getDeterministicRandomPair = (tokenId: number) => {
  if (tokenId < 1 || tokenId > maxTokenID) {
    throw new Error("TokenId must be between 1 and 10000 inclusive.");
  }
  const index = (tokenId - 1) * 2;
  const firstNumber = shuffledList[index] % Object.keys(backgroundColorMap).length;
  const secondNumber = shuffledList[index + 1] % Object.keys(foregroundColorMap).length;
  return [firstNumber, secondNumber];
};

export default getDeterministicRandomPair;
