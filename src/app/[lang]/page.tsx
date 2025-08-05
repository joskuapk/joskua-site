import MotionSection from "@/components/common/MotionSection";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ProjectsExperience from "@/components/sections/ProjectsExperience";
import Results from "@/components/sections/Results";
import TechStack from "@/components/sections/TechStack";
import WhatIDo from "@/components/sections/WhatIDo";
import JLogoCanvas from "@/components/visuals/JLogoCanvas";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <JLogoCanvas />
      <MotionSection>
        <About />
      </MotionSection>
      <MotionSection>
        <WhatIDo />
      </MotionSection>
      <MotionSection>
        <TechStack />
      </MotionSection>
      <MotionSection>
        <ProjectsExperience />
      </MotionSection>
      <MotionSection>
        <Results />
      </MotionSection>
      <MotionSection>
        <Contact />
      </MotionSection>
    </div>
  );
}
