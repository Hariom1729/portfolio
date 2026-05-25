"use client";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h3 className="display-4 text-3xl md:text-5xl font-medium leading-tight text-white mb-16">
            Engineering elegant systems with a futuristic touch. When you work with me, you get a premium experience from concept to deployment.
          </h3>
        </motion.div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-80 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
          >
             {/* Image placeholder or cool abstract art */}
             <div className="text-muted/30 font-light tracking-widest uppercase">Creative Developer</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-muted leading-relaxed font-light mb-8">
              I am a Full Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, and TypeScript. I build scalable web applications, REST APIs, authentication systems, and modern responsive interfaces. I also work with AI/ML technologies and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-circle">
                <div>Contact Me</div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
