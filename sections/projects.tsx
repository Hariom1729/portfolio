"use client";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    name: "Axiora", 
    tech: "React.js, Node.js, Express.js, MongoDB", 
    desc: "A fully functional ed-tech platform that enables users to create, consume, and rate educational content. Features Razorpay and Cloudinary integration.",
    demoLink: "https://axiora-khaki.vercel.app/",
    githubLink: "https://github.com/Hariom1729/Axiora",
    image: "/projects/axiora.png"
  },
  { 
    name: "Customer Retention Dashboard", 
    tech: "React.js, Node.js, Express.js, MongoDB", 
    desc: "Built a full-stack dashboard for customer retention analysis with REST APIs, JWT auth, responsive analytics, and Excel to JSON conversion.", 
    githubLink: "https://github.com/Hariom1729/retentionX",
    image: "/projects/customer_dashboard.png"
  },
  { 
    name: "Customer Churn Prediction System", 
    tech: "Python, Machine Learning", 
    desc: "Built an ML model to predict churn with preprocessing, feature engineering, and actionable business insights.", 
    githubLink: "https://github.com/Hariom1729",
    image: "/projects/churn_prediction.png"
  },
  { 
    name: "Smart Tourism Platform", 
    tech: "React.js, Node.js", 
    desc: "Tourism platform with itinerary recommendations, multilingual support, geo-location integration, and interactive dashboards.", 
    demoLink:"https://jharkhand-tourism-iota.vercel.app/",
    githubLink: "https://github.com/Hariom1729/Jharkhand-tourism",
    image: "/projects/smart_tourism.png"
  },
  { 
    name: "HaiiGPT Text Generation Web App", 
    tech: "HTML5, CSS3, JavaScript", 
    desc: "Responsive AI text generation web app with optimized frontend performance and efficient DOM manipulation.", 
    githubLink: "https://github.com/Hariom1729/ai_studio",
    image: "/projects/haiigpt.png"
  }
];

export function ProjectsSection() {
  return (
    <motion.section 
      id="projects" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="display-2"
          >
            Our Work
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href={siteConfig.social.github}
            target="_blank" rel="noreferrer"
            className="button-circle"
          >
            <div>View all work</div>
          </motion.a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article 
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block"
            >
              <div className="w-full aspect-video bg-white/5 rounded-3xl mb-8 overflow-hidden relative border border-white/10">
                 <Image 
                   src={project.image} 
                   alt={project.name}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-3xl font-display font-semibold">{project.name}</h3>
                </div>
                <p className="text-muted/80 text-sm uppercase tracking-widest mb-4">{project.tech}</p>
                <p className="text-muted leading-relaxed font-light mb-8 max-w-lg">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.demoLink || "#contact"} target={project.demoLink ? "_blank" : undefined} rel={project.demoLink ? "noopener noreferrer" : undefined} className="text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
                    Visit Now →
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
