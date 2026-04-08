"use client";

import { Button } from "@/components/ui/button";
import { playfairDisplay } from "@/lib/font";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  containerVariants,
  itemVariants,
  textItemVariants,
} from "@/lib/framer-animation";

export default function NotFound() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center min-h-screen bg-[url('/herobg-sm.png')] md:bg-[url('/herobg-xl.png')] bg-center md:bg-top bg-cover px-6 md:px-12 lg:px-20 2xl:px-24"
    >
      <div className="mt-50 md:mt-80 lg:mt-90 xl:mt-30 flex flex-col items-center">
        <motion.h1
          variants={textItemVariants}
          className="text-center font-medium text-[#FFD846] leading-snug md:leading-[1.1]"
        >
          <span className="block text-[4rem] md:text-[6rem] font-bold drop-shadow-md">
            404
          </span>
          <span className="block md:inline text-[2rem] md:text-[3.5rem]">
            Lost in{" "}
            <span
              className={`${playfairDisplay.className} font-bold italic text-[#95FF00] text-[2.5rem] md:text-[4rem]`}
            >
              Paradise?
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={textItemVariants}
          className="text-[#CABC95] text-[15px] md:text-[22px] md:leading-7 max-w-144.5 mx-auto mt-4 text-center"
        >
          It seems you've wandered off the trail. The serene escape you're
          looking for doesn't exist on this path.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="mt-10">
        <Link href="/">
          <Button
            className="
              w-[292.31px] h-14 rounded-full 
              shadow-[inset_0_0_0_0_#fff,inset_0_0_0_1px_rgba(255,255,255,0.1),0_0_20px_#FBE496]
              text-white font-semibold text-base tracking-wide    
              bg-linear-to-b from-[#CBA153] to-[#836222] 
              border border-[#F8E182]/80
              inset-ring inset-ring-white/10        
              hover:brightness-110 
              hover:shadow-[0_0_40px_rgba(203,161,83,0.6)] 
              transition-all duration-300 ease-in-out
            "
          >
            Return to Paradise
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
