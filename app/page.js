import Hero from "@/components/Hero/page";
import Services from "@/components/Services/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-24">
      <Hero />
      <Services />
    </main>
  );
}
