import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-6xl text-secondary">
            <Quote className="w-16 h-16 mx-auto" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-foreground">
            "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."
          </blockquote>
          <div className="flex items-center justify-center" data-testid="testimonial-author">
            <img 
              src="/images/iteam-img1.jpg" 
              alt="Professional headshot of company CEO" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-lg">Zolile Nonzapa</div>
              <div className="text-muted-foreground">CEO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
