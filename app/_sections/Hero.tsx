"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { playfairDisplay } from "@/lib/font";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  containerVariants, 
  itemVariants, 
  textItemVariants, 
  floatVariants 
} from "@/lib/framer-animation";

export default function Hero() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="max-w-360 mx-auto flex flex-col justify-center items-center mt-10 md:mt-3 px-6 md:px-12 lg:px-20 2xl:px-24"
    >
      <motion.div variants={itemVariants}>
        <motion.div variants={floatVariants} animate="show">
          <Badge className="inline-flex items-center gap-3 rounded-full border border-[#FFE479] bg-[rgba(92,78,22,0.5)] shadow-[0_0_30px_#FBE496] backdrop-blur-md hover:shadow-[0_0_40px_#FBE496] transition-all duration-300 p-5">
            <div className="md:flex items-center hidden">
              <Image
                src="https://placehold.co/28x28"
                alt="user"
                width={28}
                height={28}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://placehold.co/28x28"
                alt="user"
                width={28}
                height={28}
                className="-ml-2 rounded-full border-2 border-white"
              />
              <Image
                src="https://placehold.co/28x28"
                alt="user"
                width={28}
                height={28}
                className="-ml-2 rounded-full border-2 border-white"
              />
            </div>

            <span className="text-[#FFE169] text-bold md:text-[16px] text-xs leading-6">
              Voted #1 Luxury Eco-Resort by Elite Travelers
            </span>
          </Badge>
        </motion.div>
      </motion.div>

      <div className="mt-[25.5px]">
        <motion.h1 
          variants={textItemVariants}
          className="text-center font-medium text-[#FFD846] leading-snug md:leading-[1.1]"
        >
          <span className="block md:inline text-[2.5rem] md:text-[4.5rem]">
            Escape to your{" "}
            <span
              className={`${playfairDisplay.className} font-bold italic text-[#95FF00] text-[3rem] md:text-[4.5rem]`}
            >
              Paradise
            </span>
          </span>
          <span className="block text-[1.875rem] md:text-[4.5rem]">
            From Arrival to Departure
          </span>
        </motion.h1>
        
        <motion.p 
          variants={textItemVariants}
          className="text-[#CABC95] text-[15px] md:text-[24px] md:leading-7 max-w-144.5 mx-auto mt-2 text-center"
        >
          Experience unparalleled tranquility, personalized service, and
          unforgettable memories at Serenia.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="mt-7.75">
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
          Reserve Your Escape
        </Button>
      </motion.div>
    </motion.div>
  );
}