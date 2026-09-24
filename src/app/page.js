import About from "@/components/about";
import Areas from "@/components/areas";
import Chatbot from "@/components/chatbot";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TeamCarousel from "@/components/teamcarousel";
import Timeline from "@/components/timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Contact />
        <Timeline />
        <About />
        <Areas />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
}
