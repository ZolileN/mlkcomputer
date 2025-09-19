import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Star, MessageCircle } from "lucide-react";

const coreValues = [
  {
    icon: Users,
    title: "Customers First",
    description: "Everything we do at MLK Computer is based on the success of the technology experiences we provide our customers. Our goal is to make the customer experience as enjoyable as possible."
  },
  {
    icon: Star,
    title: "Commit to Quality",
    description: "\"Epic polish\" doesn't just refer to our customer experiences, but to every aspect of our jobs. We approach each task carefully and seriously, seeking honest feedback to improve."
  },
  {
    icon: MessageCircle,
    title: "Every Voice Matters",
    description: "Great ideas can come from anywhere. MLK Computer is what it is today because of the voices of our customers and each member of the company. Every employee is encouraged to speak up."
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/wrapper.gif"
              alt="Team collaboration in modern office environment" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are an innovative ICT solutions provider. We offer a comprehensive range of products and services that best enable an organization and individuals to achieve their goals through optimal utilization of technology.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We help our clients use innovative information and communication technology to solve business challenges, combining world-class software with acumen, insight and experience to give you the competitive edge.
            </p>
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-xl border border-border">
              <p className="text-lg font-semibold text-center italic">
                "We believe a world would be a better place if we accelerate people's ambitions."
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">WE BELIEVE IN GREAT IDEAS</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              data-testid={`core-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`mb-6 text-4xl ${index === 0 ? 'text-secondary' : index === 1 ? 'text-accent' : 'text-primary'}`}>
                <value.icon className="w-10 h-10 mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
