import getDeterministicRandomPair from "@/lib/getDeterministicRandomPair";
import {
  BackgroundTheme,
  ForegroundTheme,
  backgroundColorMap,
  foregroundColorMap,
} from "@/lib/types";
import { useEffect, useState } from "react";

const useCapsuleColors = (tokenId: string) => {
  const [bgTheme, setBgTheme] = useState<BackgroundTheme | null>(null);
  const [fgTheme, setFgTheme] = useState<ForegroundTheme | null>(null);

  useEffect(() => {
    const init = async () => {
      const [bgThemeId, screenThemeId] = getDeterministicRandomPair(parseInt(tokenId, 10));
      setBgTheme(`theme-${bgThemeId}` as BackgroundTheme);
      setFgTheme(`theme-${screenThemeId}` as ForegroundTheme);
    };
    if (!tokenId) return;
    init();
  }, [tokenId]);

  return {
    bgTheme,
    fgTheme,
    bgColor: bgTheme && backgroundColorMap[bgTheme],
    primaryFgColor: fgTheme && foregroundColorMap[fgTheme]?.primary,
    secondaryFgColor: fgTheme && foregroundColorMap[fgTheme]?.secondary,
  };
};

export default useCapsuleColors;
