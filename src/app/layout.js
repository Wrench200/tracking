import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ShipmentProvider } from "@/contexts/ShipmentContext";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wavecrest Logistics",
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
        <link rel="icon" href="/favicon.ico?v=5" />
      </Head>
      <body className={inter.className}>
        <ShipmentProvider>{children}</ShipmentProvider>
        <script
          src="//code.tidio.co/7x0q8bou4nyocowe6e2gzlqzv9kbg0mo.js"
          async
        ></script>
      </body>
    </html>
  );
}
