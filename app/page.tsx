"use client";

import Header from "@/components/custom/Header/Header";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <div className="bg-[url('/herobg-sm.png')] md:bg-[url('/herobg-xl.png')] bg-center md:bg-top bg-cover min-h-screen ">
      <Header />
      <Hero />
    </div>
  );
}
