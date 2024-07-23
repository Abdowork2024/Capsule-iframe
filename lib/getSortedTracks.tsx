const getSortedTracks = (onchainTracks: any, firebaseTracks: any) => {
  if (!firebaseTracks) {
    return onchainTracks;
  }

  const orderMap = new Map(
    firebaseTracks.map((item: any, index: number) => [
      item.token.contractAddress + item.token.id,
      index,
    ]),
  );

  const sortedTracks = onchainTracks
    .filter((track: any) => orderMap.has(track.token.contractAddress + track.token.id))
    .sort((a: any, b: any) => {
      const orderA = orderMap.get(a.token.contractAddress + a.token.id) as any;
      const orderB = orderMap.get(b.token.contractAddress + b.token.id) as any;
      return orderA - orderB;
    });

  const additionalTracks = onchainTracks.filter(
    (track: any) => !orderMap.has(track.token.contractAddress + track.token.id),
  );

  return [...sortedTracks, ...additionalTracks];
};

export default getSortedTracks;
