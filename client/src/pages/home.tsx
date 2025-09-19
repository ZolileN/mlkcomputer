import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import About from "@/components/about";
import FunFacts from "@/components/fun-facts";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <About />
      <FunFacts />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
