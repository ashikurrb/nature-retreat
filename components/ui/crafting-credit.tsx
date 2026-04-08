"use client";
import Image from "next/image";
import { useState } from "react";

export default function CraftingCredit() {
  const [logoSrc, setLogoSrc] = useState(
    "https://cdn.thoughthubhq.com/th-logo.png",
  );

  return (
    <div>
      <a
        href="https://thoughthubhq.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group relative flex items-center gap-4 text-xs tracking-tight sm:text-sm cursor-pointer hover:scale-110 transition-transform duration-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:bg-[#e7eacd]">
          <div className="shrink-0 pr-4 border-r border-neutral-200 transition-colors duration-300">
            <Image
              src={logoSrc}
              alt="ThoughtHub HQ Logo"
              width={36}
              height={36}
              priority
              onError={() => setLogoSrc("/logo/th-logo.png")}
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium leading-none mb-1">
              Crafted by
            </span>
            <span className="flex flex-col text-lg font-bold text-[#e7eacd]">
              <span>ThoughtHub</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}