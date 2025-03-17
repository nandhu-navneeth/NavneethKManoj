import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="space-y-1">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}