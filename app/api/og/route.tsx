import { NextRequest } from "next/server";
import getTokenBoundAcccountAddress from "@/lib/getTokenboundAccountAddress";
import getMultichainNfts from "@/lib/getMultichainNfts";
import {
  BackgroundTheme,
  ForegroundTheme,
  backgroundColorMap,
  foregroundColorMap,
} from "@/lib/types";
import tokenMinted from "@/lib/tokenMinted";
import getDeterministicRandomPair from "@/lib/getDeterministicRandomPair";
import OgImage from "@/components/og/OgImage";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const tokenId: any = queryParams.get("tokenId");
  const contractAddress: any = queryParams.get("contractAddress");
  const chainId: any = queryParams.get("chainId");

  const account = (await getTokenBoundAcccountAddress(
    parseInt(chainId, 10),
    contractAddress,
    tokenId,
  )) as string;
  const songs = await getMultichainNfts(account, contractAddress, parseInt(chainId, 10));
  const isTokenMinted = await tokenMinted(chainId, contractAddress, tokenId);

  if (!isTokenMinted) throw Error("Not minted yet!");
  const [bgThemeId, screenThemeId] = getDeterministicRandomPair(parseInt(tokenId, 10));

  const bgColor = backgroundColorMap[`theme-${bgThemeId}` as BackgroundTheme];
  const fgPrimary = foregroundColorMap[`theme-${screenThemeId}` as ForegroundTheme].primary;
  const fgSecondary = foregroundColorMap[`theme-${screenThemeId}` as ForegroundTheme].secondary;

  const { ImageResponse } = await import("@vercel/og");
  const font = await fetch(new URL("/public/font.ttf", import.meta.url));
  const fontData = await font.arrayBuffer();

  return new ImageResponse(
    <OgImage bgColor={bgColor} fgPrimary={fgPrimary} fgSecondary={fgSecondary} songs={songs} />,
    {
      width: 600,
      height: 600,
      fonts: [
        {
          name: "m",
          weight: 400,
          style: "normal",
          data: fontData,
        },
      ],
    },
  );
}
