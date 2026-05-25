"use client";
import { motion } from "framer-motion";
import { Marquee } from "@/components/marquee";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="display-1">
            Premium Full Stack <span className="make-white">Developer.</span>
          </h1>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full h-[2px] bg-white/10 hidden md:block mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
              I build cinematic, scalable, and performance-first web experiences with React, Node.js, TypeScript, AI/ML, and cloud-native deployment.
            </p>
            
            <div className="mt-10 flex gap-6 items-center">
              <a href="/Hariom_Resume.pdf" className="button-circle">
                <div>Resume</div>
              </a>
              <a href="#projects" className="text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
                View Projects →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden pb-10 border-b border-white/5">
        <Marquee speed={30}>
          <h3 className="display-3 make-white opacity-40">HARIOM YADAV</h3>
          <h3 className="display-3 make-white opacity-40">FULL STACK</h3>
          <h3 className="display-3 make-white opacity-40">AI / ML</h3>
          <h3 className="display-3 make-white opacity-40">NEXT.JS</h3>
        </Marquee>
      </div>
    </section>
  );
}
