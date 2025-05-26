import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ProjectsExperience from "@/components/sections/ProjectsExperience";
import Results from "@/components/sections/Results";
import TechStack from "@/components/sections/TechStack";
import WhatIDo from "@/components/sections/WhatIDo";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <About />
      <WhatIDo />
      <TechStack />
      <ProjectsExperience />
      <Results />
      <Contact />
    </div>
  );
}
