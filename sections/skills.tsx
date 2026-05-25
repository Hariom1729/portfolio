"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "HTML5", "CSS3", "JavaScript", "Figma"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Python", "Java"],
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20"
  },
  {
    category: "Tools & Platforms",
    skills: ["Docker", "Git", "GitHub", "Linux", "VS Code", "Postman", "Vercel", "Render"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    category: "Focus & Interests",
    skills: ["SaaS Architecture", "AI Integrations", "Motion UI", "System Design", "Cloud & DevOps"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20"
  }
];

export function SkillsSection() {
  return (
    <motion.section 
      id="skills" 
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
          className="mb-16"
        >
          <h2 className="display-2">Tech <span className="make-white">Stack.</span></h2>
          <p className="mt-6 text-xl text-muted font-light max-w-2xl">
            A comprehensive toolkit for building scalable, high-performance, and futuristic web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-3xl border ${group.borderColor} bg-white/5 flex flex-col h-full`}
            >
              <h3 className={`text-sm font-bold tracking-widest uppercase mb-8 ${group.color}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border ${group.borderColor} ${group.bgColor} text-white`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
