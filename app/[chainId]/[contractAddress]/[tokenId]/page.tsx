"use client";
import MusicPlayer from "@/components/ui/MusicPlayer";
import { Notches, Screws } from "@/components/ui";
import useCapsuleColors from "@/hooks/useCapsuleColors";
import useTokenboundAccount from "@/hooks/useTokenboundAccount";
import useTokenboundSongs from "@/hooks/useTokenboundSongs";

interface TokenParams {
  params: {
    tokenId: string;
    contractAddress: string;
    chainId: string;
  };
}

const Page = ({ params }: TokenParams) => {
  const { tokenId, contractAddress, chainId } = params;
  const chainIdNumber = parseInt(chainId);
  const { bgColor, primaryFgColor, secondaryFgColor } = useCapsuleColors(tokenId);
  const { account } = useTokenboundAccount(tokenId, contractAddress, chainIdNumber);
  const { songs } = useTokenboundSongs(account as string, parseInt(chainId, 10));

  const loadedMedadata = bgColor && primaryFgColor && secondaryFgColor;

  return (
    <>
      {loadedMedadata && (
        <div
          className="flex min-h-screen flex-col items-center justify-center p-4"
          style={{
            background: "var(--bg-color)",
            // @ts-ignore
            "--bg-color": bgColor,
            // @ts-ignore
            "--fg-color-primary": primaryFgColor,
            // @ts-ignore
            "--fg-color-secondary": secondaryFgColor,
          }}
        >
          <Notches />
          <Screws />
          <MusicPlayer songs={songs} />
        </div>
      )}
    </>
  );
};

export default Page;
