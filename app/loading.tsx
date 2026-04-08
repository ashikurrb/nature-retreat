"use client";

import { playfairDisplay } from "@/lib/font";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="bg-[url('/herobg-sm.png')] md:bg-[url('/herobg-xl.png')] bg-center md:bg-top bg-cover flex flex-col justify-center items-center min-h-screen px-6">
      <motion.div
        className="w-16 h-16 rounded-full border-t-2 border-r-2 border-[#FFE479] shadow-[0_0_30px_#FBE496]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing text */}
      <motion.p
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="mt-8 text-[#CABC95] text-[16px] md:text-[32px] tracking-wide text-center"
      >
        Preparing your{" "}
        <span
          className={`${playfairDisplay.className} italic text-[#95FF00] font-bold`}
        >
          Escape
        </span>
        ...
      </motion.p>
    </div>
  );
}
