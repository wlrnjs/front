import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game-Bid",
  description: "Game-Bid 경매 플랫폼 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
