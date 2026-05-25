"use client";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = ["About", "Skills", "Stats", "Projects", "Contact"];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Add backdrop blur when scrolled past top
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 px-6 py-6 transition-colors duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl tracking-wide text-white">
          Hariom Yadav<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium uppercase tracking-widest text-muted hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
           <a href="#contact" className="button-circle px-8 py-3 text-sm">
             <div>Hire Me</div>
           </a>
        </div>
      </div>
    </motion.header>
  );
}
