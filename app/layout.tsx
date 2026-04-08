import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/font";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/custom/Header/Header";
import Footer from "@/components/custom/Footer/Footer";

// export const metadata: Metadata = {
//   title: "5points Academy - Your Education Partner in Bangladesh",
//   description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
//   openGraph: {
//     title: "5points Academy - Your Education Partner in Bangladesh",
//     description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
//     type: "website",
//     url: "https://5points-academy.com",
//     siteName: "5points Academy",
//     images: [
//       {
//         url: "/logo/logo/png",
//         width: 1200,
//         height: 630,
//         alt: "5points Academy – The Best Coaching Center in Bangladesh",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "5points Academy - Your Education Partner in Bangladesh",
//     description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
//     images: ["/logo/logo.png"],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="font-sans antialiased">
    
          <Toaster position="bottom-right" swipeDirections={["right"]} />
          <main className="grow xl:max-w-360 xl:mx-auto">
            {children}
          </main>
      </body>
    </html>
  );
}
