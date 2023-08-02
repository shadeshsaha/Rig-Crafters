import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>Unleash the Beast: Rig-Crafters Custom PCs</title>
      </Head>
      <main className={`${inter.className}`}>
        <HeroSection />
        <FeaturedProducts />
      </main>
    </>
  );
}
