import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolution } from "@/components/problem-solution";
import LoopverseModules from "@/components/loopverse-modules";
import { RecruiterFlow } from "@/components/recruiter-flow";
import { Manifesto } from "@/components/manifesto";
import StoryScroll from "@/components/story-scroll-demo";
import { FooterCTA } from "@/components/footer-cta";

const Index = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <LoopverseModules />
      <RecruiterFlow />
      <StoryScroll />
      <Manifesto />
      <FooterCTA />
    </div>
  );
};

export default Index;