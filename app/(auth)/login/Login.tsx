"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  revealVariants,
  textContainerVariants,
  textItemVariants,
} from "@/lib/framer-animation";

export default function Login() {
  return (
    <div className="relative h-screen w-full grid grid-cols-1 xl:grid-cols-2 bg-cover bg-center bg-[url('/authbg.png')] overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 flex items-center gap-3 text-white/80 hover:text-white transition-colors group z-50"
      >
        <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/20 border border-white/10 group-hover:bg-black/40 transition-all backdrop-blur-md shadow-lg">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span
          className="text-sm font-medium hidden sm:block tracking-wide"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
        >
          Back to Home
        </span>
      </Link>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hidden xl:flex items-center justify-center h-full w-full bg-black/20 p-12 relative"
      >
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center space-y-6 relative z-10"
        >
          <motion.h1
            variants={textItemVariants}
            className="text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
          >
            Find Your{" "}
            <span className="text-[#FFD846] italic font-serif">Sanctuary</span>
          </motion.h1>
          <motion.p
            variants={textItemVariants}
            className="text-lg lg:text-xl text-white/90 font-light tracking-wider leading-relaxed"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}
          >
            Leave the noise of the world behind. Step into a realm of
            unparalleled tranquility and let nature restore your spirit.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="show"
        className="h-full w-full bg-[#060e0d]/70 backdrop-blur-md xl:backdrop-blur-none xl:bg-[#060e0d]/80 overflow-y-auto 
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="min-h-full flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-md mx-auto space-y-6 sm:space-y-8 p-6 sm:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl mt-16 xl:mt-0 mb-6 xl:mb-0"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome Back
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] mt-1.5 sm:mt-2">
                Sign in to resume your peaceful escape
              </p>
            </motion.div>

            <form className="space-y-4 sm:space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-1.5 sm:space-y-2"
              >
                <Label htmlFor="email" className="text-gray-300 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  // Mobile h-10, restores your exact h-12 on sm+
                  className="h-10 sm:h-12 text-sm sm:text-base bg-black/20 border-white/20 focus-visible:ring-[#FFD846] text-white placeholder:text-gray-500 transition-all rounded-lg"
                  required
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-1.5 sm:space-y-2"
              >
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-gray-300 font-medium"
                  >
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs sm:text-sm font-medium text-[#FFD846] hover:text-[#e5c23e] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-black/20 border-white/20 focus-visible:ring-[#FFD846] text-white placeholder:text-gray-500 transition-all rounded-lg"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-12 mt-2 sm:mt-4 bg-[#FFD846] hover:bg-[#e5c23e] text-[#0A2422] font-semibold text-base sm:text-lg rounded-lg transition-all shadow-md active:scale-[0.98]"
                >
                  Sign In
                </Button>
              </motion.div>
            </form>

            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-[#94a3b8]"
            >
              Don&apos;t have an account yet?{" "}
              <Link
                href="/register"
                className="font-semibold text-white hover:text-[#FFD846] transition-colors"
              >
                Register for tranquility
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
