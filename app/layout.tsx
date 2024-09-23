import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "einclair",
  description: "one-of-one fashion pieces handmade in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
