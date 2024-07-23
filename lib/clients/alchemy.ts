import { Alchemy, Network } from "alchemy-sdk";
import getAlchemyNetwork from "../utils/getAlchemyNetwork";
import { chainId } from "../constants";

export const getAlchemy = (chainId: any) => {
  const network = getAlchemyNetwork(chainId);
  const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    network,
  };
  const alchemy = new Alchemy(config);
  return alchemy;
};

export const alchemy = getAlchemy(chainId);

const configLens = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
  network: Network.MATIC_MAINNET,
};

export const alchemyLens = new Alchemy(configLens);
