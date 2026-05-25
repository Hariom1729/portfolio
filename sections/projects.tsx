"use client";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";

const projects = [
  { 
    name: "Axiora", 
    tech: "React.js, Node.js, Express.js, MongoDB", 
    desc: "A fully functional ed-tech platform that enables users to create, consume, and rate educational content. Features Razorpay and Cloudinary integration.",
    demoLink: "https://axiora-khaki.vercel.app/",
    githubLink: "https://github.com/Hariom1729/Axiora"
  },
  { name: "Customer Retention Dashboard", tech: "React.js, Node.js, Express.js, MongoDB", desc: "Built a full-stack dashboard for customer retention analysis with REST APIs, JWT auth, responsive analytics, and Excel to JSON conversion." },
  { name: "Customer Churn Prediction System", tech: "Python, Machine Learning", desc: "Built an ML model to predict churn with preprocessing, feature engineering, and actionable business insights." },
  { name: "Smart Tourism Platform", tech: "React.js, Node.js", desc: "Tourism platform with itinerary recommendations, multilingual support, geo-location integration, and interactive dashboards." },
  { name: "HaiiGPT Text Generation Web App", tech: "HTML5, CSS3, JavaScript", desc: "Responsive AI text generation web app with optimized frontend performance and efficient DOM manipulation." }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
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
              <div className="w-full aspect-[4/3] bg-white/5 rounded-3xl mb-8 overflow-hidden relative">
                 {/* Placeholder for project image */}
                 <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500" />
                 <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-4xl">{project.name.charAt(0)}</div>
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
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
