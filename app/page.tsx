import Header from "@/components/custom/Header/Header";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <div className="bg-[url('/herobg3.png')] bg-cover min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}
