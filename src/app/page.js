import About from "@/components/about";
import Areas from "@/components/areas";
import WorkAreas from "@/components/WorkAreas";
import StrategicDefense from "@/components/StrategicDefense";
import LazyChatbot from "@/components/LazyChatbot";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StrategicDefense />
        <About />
        <Areas />
        <WorkAreas />
        <Timeline />
        <Contact />
        <LazyChatbot />
      </main>
      <Footer />
    </>
  );
}
