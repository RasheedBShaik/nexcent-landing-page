import Navbar from "@/components/layout/Navbar";
import ArticleCard from "@/components/sections/articleSection/ArticleCard";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import CommunityUpdates from "@/components/sections/CommunityUpdates";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients/>
        <Community/>
        <ArticleCard/>
        <Testimonials/>
        <CommunityUpdates/>
      </main>
    </>
  );
}
