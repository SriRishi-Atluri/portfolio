import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sri Rishi Atluri",
  description:
    "Personal website of Sri Rishi Atluri — data & software engineer building pipelines, research tools, and thoughtful software.",
  openGraph: {
    title: "Sri Rishi Atluri",
    description:
      "Personal website of Sri Rishi Atluri — data & software engineer building pipelines, research tools, and thoughtful software.",
    type: "website",
    url: "https://sririshi-atluri.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('light');
              }
            } catch (e) {}`,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
