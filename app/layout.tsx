import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Providers from "@/components/layout/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamro Jatra",
  description:
    "Hamro Jatra – Explore, plan, and experience cultural journeys, festivals, and adventures across Nepal.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  return (
    <html
      className="light"
      suppressHydrationWarning
      lang="en"
      style={{ colorScheme: "light" }}
    >
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <NextTopLoader showSpinner={false} color="#950606" />
        <Navbar />
        {/* <Providers session={session}>{children}</Providers> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
