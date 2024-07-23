import { base, baseSepolia } from "viem/chains";

export const tokenboundAddress = process.env.NEXT_PUBLIC_TOKENBOUND_ADDRESS || "";
export const implementationAddress = process.env.NEXT_PUBLIC_IMPLEMENTATION_ADDRESS || "";
export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true";
export const CHAIN = IS_TESTNET ? baseSepolia : base;
export const chainId = CHAIN.id;
export const salt =
  process.env.NEXT_PUBLIC_SALT ||
  "0x0000000000000000000000000000000000000000000000000000000000000000";
