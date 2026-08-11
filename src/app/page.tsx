import Navbar from "@/components/layout/Navbar";
import ArticleCard from "@/components/sections/articleSection/ArticleCard";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients/>
        <Community/>
        <ArticleCard/>
      </main>
    </>
  );
}
