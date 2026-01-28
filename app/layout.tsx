import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunlight Landscape | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Sunlight Landscape, Pompano Beach's premier lawn care and landscaping company. Created by Ryan Cwynar.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%2316a34a' width='100' height='100' rx='15'/><text x='50' y='68' text-anchor='middle' font-size='55' fill='white'>☀️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Sunlight Landscape | Free Mockup",
    description: "A free website redesign mockup created by Ryan Cwynar",
    type: "website",
  },
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
