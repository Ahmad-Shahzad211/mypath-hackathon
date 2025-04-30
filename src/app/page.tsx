import HomeHero from "@/components/ui/HomeHero";
// import Affilation from "../components/Affilation";
import About from "../components/About";
import Features from "@/components/ui/Features";
import FounderMessage from "@/components/FounderMessage";
import TestimonialCarousel from "@/components/testimonials";
import PromptComparisonCarousel from "@/components/prompts";
// import TeamPage from "@/components/pages/team";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* <Affilation /> */}
      <Features />
      <About />
      <TestimonialCarousel/>
      <PromptComparisonCarousel/>
      <FounderMessage />
      {/* <TeamPage /> */}
    </>
  );
}
