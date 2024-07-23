import getNFTsForOwner from "@/lib/alchemy/v3/getNFTsForOwner";
import getFormattedSongs from "./getFormattedSongs";
import {
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sepolia,
  zora,
  zoraSepolia,
} from "viem/chains";
import { getCapsuleTracks } from "./firebase/getCapsuleTracks";
import getSortedTracks from "./getSortedTracks";
import getZoraNfts from "./zora/getZoraNfts";

const getMultichainNfts = async (account: string, contractAddress: string, chainId: number) => {
  try {
    const IS_TESTNET = chainId === baseSepolia.id;

    const [sepData, baseData, opData, polygonData] = (await Promise.all([
      getNFTsForOwner(account, contractAddress, IS_TESTNET ? baseSepolia.id : base.id),
      getNFTsForOwner(account, contractAddress, IS_TESTNET ? sepolia.id : mainnet.id),
      getNFTsForOwner(account, contractAddress, IS_TESTNET ? optimismSepolia.id : optimism.id),
      getNFTsForOwner(account, contractAddress, IS_TESTNET ? polygonMumbai.id : polygon.id),
    ])) as any;
    const zoraNfts = (await getZoraNfts(account, IS_TESTNET ? zoraSepolia.id : zora.id)) as any;
    const joined = [...sepData, ...baseData, ...opData, ...polygonData];
    const album = [...getFormattedSongs(joined), ...zoraNfts];
    const response = await getCapsuleTracks(account);
    const orderedTracks = getSortedTracks(album, response);
    return orderedTracks;
  } catch (error) {
    return { error };
  }
};

export default getMultichainNfts;
