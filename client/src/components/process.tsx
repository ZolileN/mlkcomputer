import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Award 
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "First we learn & research about client's requirements",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "Prototype",
    description: "We create an outline from our research result",
    color: "accent"
  },
  {
    icon: Palette,
    title: "Design",
    description: "We craft beautiful design for client's project",
    color: "secondary"
  },
  {
    icon: Code,
    title: "Front-end",
    description: "Purely hand coded front-end development with modern technologies",
    color: "accent"
  },
  {
    icon: Database,
    title: "Back-end",
    description: "Development for website's functionalities with Python & Django",
    color: "primary"
  },
  {
    icon: Cloud,
    title: "Server",
    description: "Highly reliable & fast cloud server",
    color: "secondary"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "We continuously work with our clients to help them maintain the website",
    color: "accent"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We assure the website's code quality, performance, style & spelling in every manner",
    color: "primary"
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="process" className="py-20 bg-muted relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use the following processes to make you a smart and stunning web or mobile app at an affordable rate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.slice(0, 4).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="text-center cursor-pointer"
              data-testid={`process-step-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`bg-${step.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-${step.color} text-2xl transition-all duration-300 hover:scale-110`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.slice(4).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="text-center cursor-pointer"
              data-testid={`process-step-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`bg-${step.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-${step.color} text-2xl transition-all duration-300 hover:scale-110`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
