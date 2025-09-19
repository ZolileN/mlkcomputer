import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Coffee, Code, FileCode, Infinity } from "lucide-react";

const funFacts = [
  {
    icon: Coffee,
    number: 18500,
    label: "Cups Of Coffee",
    color: "accent"
  },
  {
    icon: Code,
    number: 1853950,
    label: "Developers in the world",
    color: "accent"
  },
  {
    icon: FileCode,
    number: 339170,
    label: "Lines of code",
    color: "accent"
  },
  {
    icon: Infinity,
    number: 20000,
    label: "while (true) { learn; code; }",
    color: "accent"
  }
];

function Counter({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-6xl font-bold mb-4 text-white"
    >
      {count.toLocaleString()}
    </motion.div>
  );
}

export default function FunFacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Fun Facts About Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            It is important to us to be there for you when and where you need us. We pride ourselves on being able to offer a same day response.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
              data-testid={`fun-fact-${fact.label.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
            >
              <Counter target={fact.number} isVisible={isInView} />
              <div className="text-xl text-white/90 mb-2">{fact.label}</div>
              <div className="text-3xl text-accent">
                <fact.icon className="w-8 h-8 mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
