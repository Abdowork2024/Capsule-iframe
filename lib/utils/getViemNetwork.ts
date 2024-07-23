import {
  mainnet,
  optimism,
  baseSepolia,
  base,
  optimismSepolia,
  sepolia,
  zoraSepolia,
  zora,
} from "viem/chains";

const getViemNetwork = (chainId: number) => {
  if (chainId === mainnet.id) return mainnet;
  if (chainId === sepolia.id) return sepolia;
  if (chainId === optimism.id) return optimism;
  if (chainId === optimismSepolia.id) return optimismSepolia;
  if (chainId === baseSepolia.id) return baseSepolia;
  if (chainId === base.id) return base;
  if (chainId === zoraSepolia.id) return zoraSepolia;
  if (chainId === zora.id) return zora;
};

export default getViemNetwork;
