import HeroSection from "@/components/HeroSection";
import Navbar from "@/shared/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const [openMenu, setOpenMenu] = useState(false);

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
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <HeroSection openMenu={openMenu} />
      </main>
    </>
  );
}
