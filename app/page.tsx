import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import MidCTA from "@/components/MidCTA";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <Projects />
      <MidCTA />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
