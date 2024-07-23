import { chainId } from "@/lib/constants";
import metadataByTokenId from "@/lib/metadataByTokenId";
import tokenMinted from "@/lib/tokenMinted";
import { NextRequest, NextResponse } from "next/server";

async function getMetadata(req: NextRequest): Promise<NextResponse> {
  const tokenId = req.nextUrl.searchParams.get("tokenId") as string;

  const isTokenMinted = await tokenMinted(
    chainId.toString(),
    process.env.NEXT_PUBLIC_DROP_ADDRESS as string,
    tokenId,
  );
  if (!isTokenMinted) {
    return new NextResponse("Not minted yet!", {
      status: 422,
    });
  }

  return new NextResponse(JSON.stringify(metadataByTokenId(tokenId)), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  return getMetadata(req);
}
