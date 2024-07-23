import { NftContract, OwnedNft } from "alchemy-sdk";

export interface TbaOwnedNft extends OwnedNft {
  hasApprovals?: boolean | undefined;
  [key: string]: any;
}

export interface TokenInfo {
  collection: string | undefined;
  title: string | undefined;
  approvals?: boolean | undefined;
}

export interface NftApprovalStatus {
  contract: string | NftContract;
  hasApprovals?: boolean;
  tokenId: string;
}

export const backgroundColorMap = {
  ["theme-0"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #E8E8E8",
  ["theme-1"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #E3E4DF",
  ["theme-2"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #CBCBC0",
  ["theme-3"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #E6FFE6",
  ["theme-4"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #C3C2C9",
  ["theme-5"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%), #B0E9ED",
  ["theme-6"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 100%), #C0FF8A",
  ["theme-7"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #FDD7BC",
  ["theme-8"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), #F0CBF6",
  ["theme-9"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), #A97BDC",
  ["theme-10"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%), #B5B3D1",
  ["theme-11"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 100%), #D1D0DB",
  ["theme-12"]:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 100%), #D9D6F0",
} as const;

export type BackgroundTheme = keyof typeof backgroundColorMap;

export const foregroundColorMap = {
  ["theme-0"]: { primary: "#C2D5DA", secondary: "#12151B" },
  ["theme-1"]: { primary: "#D9D9F2", secondary: "#212231" },
  ["theme-2"]: { primary: "#070D1C", secondary: "#9FF6FF" },
  ["theme-3"]: { primary: "#EFC9F0", secondary: "#270F3B" },
  ["theme-4"]: { primary: "#E2E1DC", secondary: "#0F0F11" },
  ["theme-5"]: { primary: "#EBF0F8", secondary: "#090720" },
  ["theme-6"]: { primary: "#B2B79B", secondary: "#191904" },
  ["theme-7"]: { primary: "#1464FF", secondary: "#B5E9D6" },
  ["theme-8"]: { primary: "#B1D44B", secondary: "#0F1B04" },
  ["theme-9"]: { primary: "#8F9A8D", secondary: "#040306" },
} as const;

export type ForegroundTheme = keyof typeof foregroundColorMap;
