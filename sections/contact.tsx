"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    window.alert("Message queued successfully");
    form.reset();
  }

  return (
    <motion.section 
      id="contact" 
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
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="display-2 mb-6">Let's work <span className="make-white">together.</span></h2>
          <p className="text-xl text-muted font-light">We worry about the details so you don't have to. Drop a message and let's build something cinematic.</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit} 
            className="flex flex-col gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input required name="name" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" />
              <input required type="email" name="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <textarea required name="message" placeholder="Message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none" />
            <div className="mt-4">
              <button disabled={loading} className="button-circle px-10">
                <div>{loading ? "Sending..." : "Send message"}</div>
              </button>
            </div>
          </motion.form>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-10 border border-white/10 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-medium mb-8">Contact Info</h3>
            <div className="space-y-6 text-muted font-light">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/40 mb-1">Email</p>
                <p className="text-lg">{siteConfig.social.email}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/40 mb-1">Phone</p>
                <p className="text-lg">{siteConfig.social.phone}</p>
              </div>
              <div className="pt-6 border-t border-white/10 flex gap-6">
                <a className="hover:text-accent transition-colors uppercase tracking-widest text-sm" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-accent transition-colors uppercase tracking-widest text-sm" href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
