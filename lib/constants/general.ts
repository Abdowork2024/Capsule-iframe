import { nftUrl } from "@/lib/constants";

export const MAX_TOKEN_ID = Number(process.env.NEXT_PUBLIC_MAX_TOKEN_ID) || 10000;
export const HAS_CUSTOM_IMPLEMENTATION = !!nftUrl;
export const PLATES = [
  "Bone",
  "Egg",
  "Terra",
  "Sable",
  "Fog",
  "Bloom",
  "Lime",
  "Petrol",
  "Floss",
  "Grape",
  "Lavender",
  "Fawn",
  "Bubble",
];
export const SCREENS = [
  "Iridescent",
  "Clear",
  "Thermal",
  "Razor",
  "Reliance",
  "Luminous",
  "System",
  "Sport",
  "Citron",
  "Transparent",
];
export const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
