"use client";

import { motion } from "framer-motion";
import Header from "@/components/custom/Header/Header";
import Hero from "./_sections/Hero";
import { revealVariants } from "@/lib/framer-animation";

export default function Home() {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      animate="show"
      className="bg-[url('/herobg-sm.png')] md:bg-[url('/herobg3.png')] bg-center md:bg-top bg-cover min-h-screen"
    >
      <Header />
      <Hero />
    </motion.div>
  );
}
