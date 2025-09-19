import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Tablet, 
  Pen, 
  Brush, 
  Settings, 
  Server 
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "We work closely with you to plan, prototype, build and finally launch your product to your target audience."
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "We analyze your industry and competitors to deliver compelling digital experiences that establish your brand ahead of the curve."
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "We have embraced simplicity and minimalism to produce work that gives users peace-of-mind."
  },
  {
    icon: Tablet,
    title: "Mobile Development",
    description: "We craft experiences across smartphones and tablets, with expertise in native iOS, Android and cross-platform frameworks."
  },
  {
    icon: Pen,
    title: "Logo Design",
    description: "We believe an effective logo should be timeless – that is, it will endure the ages and still be effective in years to come."
  },
  {
    icon: Brush,
    title: "Branding",
    description: "We are all emotional beings and we have emotional relationships with brands we trust."
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "We truly provide a premium service due to our culture of not resting on our laurels."
  },
  {
    icon: Server,
    title: "Hosting",
    description: "At MLK Computer, we are constantly looking for better solutions and more efficient ways to maintain systems."
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are designed to meet our clients' strategic and operational needs, which we develop and maintain.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 group cursor-pointer transition-all duration-300 hover:shadow-xl"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-6 text-4xl text-secondary group-hover:text-accent transition-colors">
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
