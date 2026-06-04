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
        
        <div className="mt-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="relative lg:col-span-3 lg:col-start-3 md:col-span-5 md:col-start-2 group">
            {/* Animated glowing aura behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/40 via-purple-500/40 to-blue-500/40 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] relative z-10"
            >
               <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-black">
                 <Image 
                   src="/hariom.jpg"
                   alt="Hariom Yadav"
                   width={800}
                   height={1200}
                   className="w-full h-auto block transition-all duration-700 group-hover:scale-105 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                 />
                 {/* Inner shadow/vignette to blend the cream background */}
                 <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none" />
                 {/* Bottom gradient fade for cinematic integration */}
                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none opacity-80" />
               </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 md:col-span-6"
          >
            <h4 className="text-accent uppercase tracking-widest text-sm font-bold mb-6">About Me</h4>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
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
