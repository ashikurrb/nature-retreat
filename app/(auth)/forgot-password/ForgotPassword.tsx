import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="relative h-screen w-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
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

      <div className="hidden md:flex items-center justify-center bg-cover bg-center bg-[url('/herobg-lg.png')] relative">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-2xl text-center space-y-6 relative z-10 p-12">
          <h1
            className="text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
          >
            Find Your{" "}
            <span className="text-[#FFD846] italic font-serif">Way Back</span>
          </h1>
          <p
            className="text-lg lg:text-xl text-white/90 font-light tracking-wider leading-relaxed"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}
          >
            Take a deep breath. Let us help you restore your access so you can
            easily return to your peaceful escape.
          </p>
        </div>
      </div>

      <div className="h-full w-full bg-[#060e0d] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="min-h-full flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-md mx-auto space-y-6 sm:space-y-8 p-6 sm:p-10 bg-white/5 border border-white/10 rounded-2xl shadow-xl mt-16 md:mt-0 mb-6 md:mb-0">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Reset Password
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] mt-1.5 sm:mt-2">
                Enter your email to regain access to your account
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <Label
                  htmlFor="reset-email"
                  className="text-gray-300 font-medium"
                >
                  Email Address
                </Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-transparent border-white/20 focus-visible:ring-[#FFD846] text-white placeholder:text-gray-500 transition-all rounded-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-10 sm:h-12 mt-2 sm:mt-4 bg-[#FFD846] hover:bg-[#e5c23e] text-[#0A2422] font-semibold text-base sm:text-lg rounded-lg transition-all shadow-md active:scale-[0.98]"
              >
                Send Reset Link
              </Button>
            </form>

            <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-[#94a3b8]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-semibold text-white hover:text-[#FFD846] transition-colors"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
