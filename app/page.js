import MainPageHeader from "@/components/mainPageHeader";
import HomeFooter from "@/components/homeFooter";
import HomeHero from "@/components/homeHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fbf9f8]">
      <MainPageHeader />
      <HomeHero />
      <HomeFooter />
    </main>
  );
}
