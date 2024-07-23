/* eslint-disable */
import getAlchemyBaseUrl from "../getAlchemyBaseUrl";

const getNFTsForOwner = async (address: string, contractAddress: string, chainId: number = 5) => {
  let nfts: any = [];
  let pageKey = null;
  let totalCount = 0;

  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
  const optionalContractParam = contractAddress ? `&contractAddresses=${contractAddress}` : "";

  while (1) {
    try {
      const response = await fetch(
        `${getAlchemyBaseUrl(
          chainId,
        )}nft/v3/${alchemyKey}/getNFTsForOwner?owner=${address}${optionalContractParam}${
          pageKey ? `&pageKey=${pageKey}` : ""
        }`,
        {
          method: "GET",
          redirect: "follow",
        },
      );

      const data = await response.json();

      if (data.ownedNfts.length) nfts = nfts.concat(data.ownedNfts);
      if (data.totalCount) totalCount = data.totalCount;

      if (!data.pageKey) break;
      pageKey = data.pageKey;
    } catch (err) {
      break;
    }
  }

  return nfts;
};

export default getNFTsForOwner;
