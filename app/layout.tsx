import "./globals.css";

export const metadata = {
  title: "Sound Capsules Player",
  description: "View your nft's TBA and it's nfts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
