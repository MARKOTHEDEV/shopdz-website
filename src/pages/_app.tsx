import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import Layout from "./layout";
import { useEffect } from "react";
import { markHydrated } from "../utils/lang";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/geist-sans/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Mark as hydrated after React has finished hydrating
    // This ensures server and client render match initially
    markHydrated();
  }, []);

  return (
    <div
      className={`${inter.variable} ${manrope.variable} ${geist.variable} font-sans`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
