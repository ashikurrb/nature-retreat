import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/font";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/custom/Header/Header";
import Footer from "@/components/custom/Footer/Footer";

export const metadata: Metadata = {
  title: "Nature Retreat - Your Eco-Friendly Escape",
  description: "Discover the ultimate eco-friendly escape at Nature Retreat, where luxury meets sustainability. Experience serene surroundings, personalized service, and unforgettable memories in harmony with nature.",
  openGraph: {
    title: "Nature Retreat - Your Eco-Friendly Escape",
    description: "Discover the ultimate eco-friendly escape at Nature Retreat, where luxury meets sustainability. Experience serene surroundings, personalized service, and unforgettable memories in harmony with nature.",
    type: "website",
    url: "https://thoughthubhq.com",
    siteName: "Nature Retreat",
    images: [
      {
        url: "/herobg3.png",
        width: 1200,
        height: 630,
        alt: "Nature Retreat - Your Eco-Friendly Escape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Retreat - Your Eco-Friendly Escape",
    description: "Discover the ultimate eco-friendly escape at Nature Retreat, where luxury meets sustainability. Experience serene surroundings, personalized service, and unforgettable memories in harmony with nature.",
    images: ["/herobg3.png"],
  },
};

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
