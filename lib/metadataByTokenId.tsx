import { PLATES, SCREENS, chainId } from "./constants";
import getDeterministicRandomPair from "./getDeterministicRandomPair";

const metadataByTokenId = (tokenId: string) => {
  const [bgThemeId, screenThemeId] = getDeterministicRandomPair(parseInt(tokenId, 10));

  return {
    animation_url: `https://capsules-iframe.vercel.app/${chainId}/${process.env.NEXT_PUBLIC_DROP_ADDRESS}/${tokenId}`,
    name: `SC-${tokenId}`,
    description:
      "Sound Capsules are a collection of 10,000 NFTs on Base by sweetman.eth, truthpurity.eth, and rebeccapurple.eth. Each player has a smart wallet allowing owners to add, edit and remove audio NFTs to curate playlists that can be listened to or sold on any marketplace or wallet app. Learn more at soundcapsul.es",
    image: `https://capsules-iframe.vercel.app/api/og?chainId=${chainId}&contractAddress=${process.env.NEXT_PUBLIC_DROP_ADDRESS}&tokenId=${tokenId}`,
    seller_fee_basis_points: "500",
    seller_fee_recipient: process.env.NEXT_PUBLIC_MINT_REFERRAL,
    attributes: [
      {
        trait_type: "PLATE",
        value: PLATES[bgThemeId],
      },
      {
        trait_type: "SCREEN",
        value: SCREENS[screenThemeId],
      },
    ],
  };
};

export default metadataByTokenId;
