import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opposing Probables Grid",
  description:
    "See which pitchers your MLB team is facing — an inverted FanGraphs Probables Grid.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚾</text></svg>",
  },
  openGraph: {
    title: "Opposing Probables Grid",
    description: "See which pitchers your MLB team is facing — an inverted FanGraphs Probables Grid.",
    url: "https://opposing-probables.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Opposing Probables Grid",
    description: "See which pitchers your MLB team is facing — an inverted FanGraphs Probables Grid.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
