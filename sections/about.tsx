"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
          <div className="relative">
            {/* Glowing backdrop effect */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 via-purple-500/20 to-blue-500/20 blur-3xl opacity-50 rounded-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-[500px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative z-10"
            >
               <Image 
                 src="/hariom.jpg"
                 alt="Hariom Yadav"
                 fill
                 className="object-cover object-top transition-transform duration-700 hover:scale-105 contrast-125 saturate-50"
               />
               
               {/* Gradients to blend the bright background into the dark theme */}
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 transition-opacity duration-500 hover:opacity-70" />
               <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </motion.div>
          </div>
          
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
    </motion.section>
  );
}
