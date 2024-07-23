import { Network } from "alchemy-sdk";
import {
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sepolia,
  zoraSepolia,
} from "viem/chains";

const getAlchemyNetwork = (chainId: number) => {
  if (chainId == mainnet.id) return Network.ETH_MAINNET;
  if (chainId == sepolia.id) return Network.ETH_SEPOLIA;
  if (chainId == base.id) return Network.BASE_MAINNET;
  if (chainId == baseSepolia.id) return Network.BASE_SEPOLIA;
  if (chainId == optimism.id) return Network.OPT_MAINNET;
  if (chainId == optimismSepolia.id) return Network.OPT_SEPOLIA;
  if (chainId == polygon.id) return Network.MATIC_MAINNET;
  if (chainId == polygonMumbai.id) return Network.MATIC_MUMBAI;
};

export default getAlchemyNetwork;
