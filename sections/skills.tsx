"use client";
import { motion } from "framer-motion";
import { Server, Bot, Zap, Network, Cloud } from "lucide-react";

type SkillItem = {
  name: string;
  icon?: string;
  lucide?: React.ElementType;
};

type SkillCategory = {
  category: string;
  skills: SkillItem[];
  color: string;
  bgColor: string;
  borderColor: string;
};

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "ts" },
      { name: "Redux", icon: "redux" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "Figma", icon: "figma" }
    ],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" }
    ],
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20"
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" }
    ],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    category: "Focus & Interests",
    skills: [
      { name: "SaaS Architecture", lucide: Server },
      { name: "AI Integrations", lucide: Bot },
      { name: "Motion UI", lucide: Zap },
      { name: "System Design", lucide: Network },
      { name: "Cloud & DevOps", lucide: Cloud }
    ],
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
              className={`p-8 rounded-3xl border ${group.borderColor} bg-white/5 flex flex-col`}
            >
              <h3 className={`text-sm font-bold tracking-widest uppercase mb-8 ${group.color}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {group.skills.map(skill => (
                  <span 
                    key={skill.name} 
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border ${group.borderColor} ${group.bgColor} text-white flex items-center gap-2 transition-all hover:bg-white/10`}
                  >
                    {skill.icon ? (
                      <img 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name} 
                        className="w-4 h-4 object-contain"
                      />
                    ) : skill.lucide ? (
                      <skill.lucide className="w-4 h-4 text-white/70" />
                    ) : null}
                    {skill.name}
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
