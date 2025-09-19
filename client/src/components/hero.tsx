import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full floating-animation" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/10 rounded-full floating-animation" style={{ animationDelay: "-4s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AN <span className="gradient-text">INNOVATIVE</span><br />
              ICT SOLUTIONS<br />
              PROVIDER &<br />
              <span className="text-secondary">DESIGN AGENCY</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We love the Web and the work we do. We work closely with our clients to deliver the best possible solutions for their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-get-started"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("services")}
                className="border border-border hover:bg-muted text-foreground px-8 py-3 rounded-md font-semibold transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-view-work"
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="floating-animation"
          >
            <div className="relative">
              <img 
                src="/images/hero-image.jpg" 
                alt="Modern computer workspace with coding on screen" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg"
              >
                <Code className="text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
