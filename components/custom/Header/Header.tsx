import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/" },
    { name: "Features", href: "/about-us" },
    { name: "Customers", href: "/customers" },
    { name: "Career", href: "/career" },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full h-22.25">
      <div
        className="absolute inset-0 -z-10 pointer-events-none
                bg-[linear-gradient(0deg,rgba(42,69,38,0.7)_0%,rgba(64,92,59,0.3)_50%,rgba(64,92,59,0)_100%)] 
                mix-blend-multiply 
                blur-[102.5px]"
      ></div>

      <div className="mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 py-8 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo/th-logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="w-auto h-auto rounded-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative font-semibold transition-colors duration-300 py-1 
                        ${isActive ? "text-[#FFD846]" : "text-[#FFD846] hover:text-[#FFD846]"}
                        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:transition-transform after:duration-300 after:ease-in-out after:bg-[#FFD846] 
                        ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex space-x-4">
          <Button
            asChild
            className="flex items-center gap-2 px-5 h-12 text-md
            py-2.5 rounded-full border border-gray-200/80 bg-[#FFD846] hover:bg-[#e3c041] shadow-[0_0_30px_#FFD846] backdrop-blur-[6px] text-primary"
          >
            <Link href="/login">
              Login <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="text-[#94fe00] font-bold bg-transparent border-none"
              >
                <Menu className="h-15 w-15" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-[320px] bg-transparent backdrop-blur-3xl border-l border-[#F8E182]/20 px-6 py-15 flex flex-col shadow-[-20px_0_40px_-10px_rgba(251,228,150,0.1)] [&>button]:text-[#CABC95] hover:[&>button]:text-[#FFD846] [&>button]:transition-colors"
            >
              <nav className="flex flex-col gap-3 flex-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center text-base font-medium transition-all duration-300 rounded-lg
                        ${
                          isActive
                            ? "text-[#FFD846] border border-[#CBA153]/50 bg-[#CBA153]/10 px-4 py-3 shadow-[inset_0_0_20px_rgba(203,161,83,0.1)]"
                            : "text-[#CABC95] hover:text-[#FFD846] hover:translate-x-1 py-3 px-2"
                        }
                      `}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD846] mr-3 shadow-[0_0_8px_#FFD846]" />
                      )}
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-[#F8E182]/20">
                <Button
                  variant="ghost"
                  asChild
                  onClick={() => setIsOpen(false)}
                  className="w-full text-[#CABC95] hover:text-[#FFD846] hover:bg-black/5 dark:hover:bg-white/5 font-medium transition-colors duration-300 h-11 text-sm rounded-lg"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  onClick={() => setIsOpen(false)}
                  className="w-full text-white font-semibold tracking-wide bg-linear-to-b from-[#CBA153] to-[#836222] border border-[#F8E182]/80 hover:brightness-110 shadow-[0_0_20px_rgba(203,161,83,0.4)] transition-all duration-300 h-11 text-sm rounded-full"
                >
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
