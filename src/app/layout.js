import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ShipmentProvider } from "@/contexts/ShipmentContext";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fastlane Global",
  description: "An International Transport and Logistic company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
        <link rel="icon" href="/favicon.ico?v=4" />
      </Head>
      <body className={inter.className}>
        <ShipmentProvider>{children}</ShipmentProvider>
        <script
          src="//code.tidio.co/ynthoymd8s7umuyhxzuxavofc0qfu0su.js"
          async
        ></script>
      </body>
    </html>
  );
}
