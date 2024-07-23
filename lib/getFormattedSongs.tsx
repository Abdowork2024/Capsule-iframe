const getFormattedSongs = (nfts: Array<any>) => {
  const album = nfts.map((song) => {
    return {
      cover: song?.image?.cachedUrl,
      audio: song?.raw?.metadata?.animation_url || song?.raw?.metadata?.media?.[0]?.item,
      duration: "",
      title: song?.raw?.metadata?.title || song?.raw?.metadata?.name,
      album: song?.raw?.metadata?.title || song?.raw?.metadata?.name,
      artist: song?.raw?.metadata?.artist || song?.contract?.name || "",
      featuring: "",
      token: {
        id: parseInt(song?.tokenId, 10).toString(),
        contractAddress: song?.contract?.address,
        chainId: song?.chainId,
        type: song?.tokenType,
      },
    };
  });
  return album;
};

export default getFormattedSongs;
