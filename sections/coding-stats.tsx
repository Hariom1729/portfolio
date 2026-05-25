"use client";
import { motion } from "framer-motion";

const profiles = [
  {
    platform: "LeetCode",
    username: "hariom_ydv",
    solved: "127",
    color: "text-[#FFA116]",
    borderColor: "border-[#FFA116]/20",
    bgColor: "bg-[#FFA116]/5",
    link: "https://leetcode.com/u/hariom_ydv/"
  },
  {
    platform: "GeeksforGeeks",
    username: "hariom_ydv",
    solved: "218",
    color: "text-[#2f8D46]",
    borderColor: "border-[#2f8D46]/20",
    bgColor: "bg-[#2f8D46]/5",
    link: "https://www.geeksforgeeks.org/profile/hariom_ydv"
  }
];

export function CodingStatsSection() {
  return (
    <section id="stats" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-2">Problem <span className="make-white">Solving.</span></h2>
          <p className="mt-6 text-xl text-muted font-light max-w-2xl">
            Consistent practice and algorithmic problem solving across major competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`rounded-3xl border ${profile.borderColor} bg-white/5 overflow-hidden flex flex-col md:flex-row`}
            >
              <div className={`p-8 md:w-2/5 flex flex-col justify-between border-b md:border-b-0 md:border-r ${profile.borderColor} ${profile.bgColor}`}>
                <div>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${profile.color}`}>Platform</p>
                  <h3 className="text-3xl font-display font-bold text-white">{profile.platform}</h3>
                  <p className="text-muted mt-2 text-sm">{profile.username}</p>
                </div>
                <div className="mt-8">
                  <a href={profile.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full rounded-full bg-white/10 hover:bg-white/20 transition-colors py-3 text-sm font-semibold uppercase tracking-widest text-white">
                    View Profile ↗
                  </a>
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-xs uppercase tracking-widest text-muted mb-2">Total Problems Solved</p>
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-display font-bold text-white leading-none">{profile.solved}</span>
                    <span className="text-accent mb-1">🔥</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
