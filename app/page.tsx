import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-blue-500">
      <Navbar />
      <Hero />
      <Skills/>
      <Experience />
      <Projects/>
      <Contact/>
      <Footer/>
      
   
    </main>
  );
}