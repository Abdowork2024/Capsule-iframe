import { getCapsuleTracks } from "@/lib/firebase/getCapsuleTracks";
import getFormattedSongs from "@/lib/getFormattedSongs";
import getSortedTracks from "@/lib/getSortedTracks";
import { getNfts } from "@/lib/utils";
import getZoraNfts from "@/lib/zora/getZoraNfts";
import { useEffect, useState } from "react";
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

const useTokenboundSongs = (account: string, chainId: number) => {
  const [songs, setSongs] = useState([] as any);

  useEffect(() => {
    async function fetchNfts(account: string) {
      const IS_TESTNET = chainId === baseSepolia.id;
      const [ethData, baseData, opData, polygonData] = await Promise.all([
        getNfts(IS_TESTNET ? baseSepolia.id : base.id, account),
        getNfts(IS_TESTNET ? sepolia.id : mainnet.id, account),
        getNfts(IS_TESTNET ? optimismSepolia.id : optimism.id, account),
        getNfts(IS_TESTNET ? polygonMumbai.id : polygon.id, account),
      ]);
      const zoraNfts = (await getZoraNfts(account, IS_TESTNET ? zoraSepolia.id : zora.id)) as any;
      const joined = [...ethData, ...baseData, ...opData, ...polygonData];
      const album = [...getFormattedSongs(joined), ...zoraNfts];
      const response = await getCapsuleTracks(account);
      setSongs(getSortedTracks(album, response));
    }
    if (account) {
      fetchNfts(account);
    }
  }, [account, chainId]);

  return { songs };
};

export default useTokenboundSongs;
