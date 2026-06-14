import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Technologies } from "@/sections/Technologies";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { HireMe } from "@/sections/HireMe";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
