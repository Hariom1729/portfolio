"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = ["About", "Stats", "Projects", "Contact"];

export function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 px-6 py-6"
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
