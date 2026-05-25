"use client";
import { motion } from "framer-motion";

const profiles = [
  {
    platform: "LeetCode",
    username: "hariom_ydv",
    solved: "127",
    rating: "1,595",
    ratingLabel: "Contest Rating",
    ranking: "210,183",
    breakdown: {
      easy: 76,
      medium: 40,
      hard: 11
    },
    color: "text-[#FFA116]",
    borderColor: "border-[#FFA116]/20",
    bgColor: "bg-[#FFA116]/5",
    link: "https://leetcode.com/u/hariom_ydv/"
  },
  {
    platform: "GeeksforGeeks",
    username: "hariom_ydv",
    solved: "218",
    rating: "601",
    ratingLabel: "Coding Score",
    ranking: "4",
    rankingLabel: "Institute Rank",
    breakdown: {
      easy: 135,
      medium: 75,
      hard: 8
    },
    color: "text-[#2f8D46]",
    borderColor: "border-[#2f8D46]/20",
    bgColor: "bg-[#2f8D46]/5",
    link: "https://www.geeksforgeeks.org/profile/hariom_ydv"
  }
];

import { GitHubCalendar } from 'react-github-calendar';

export function CodingStatsSection() {
  return (
    <motion.section 
      id="stats" 
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
          <h2 className="display-2">Problem <span className="make-white">Solving.</span></h2>
          <p className="mt-6 text-xl text-muted font-light max-w-2xl">
            Consistent practice and algorithmic problem solving across major competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
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
                  <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${profile.color}`}>{profile.platform}</p>
                  <h3 className="text-4xl font-display font-bold text-white mb-2">{profile.solved}</h3>
                  <p className="text-muted text-sm uppercase tracking-widest">Solved</p>
                </div>
                <div className="mt-12 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{profile.ratingLabel}</p>
                    <p className="text-xl font-medium text-white">{profile.rating}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{profile.rankingLabel || 'Global Ranking'}</p>
                    <p className="text-xl font-medium text-white">{profile.ranking}</p>
                  </div>
                  <a href={profile.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-white/10 hover:bg-white/20 transition-colors py-3 text-xs font-semibold uppercase tracking-widest text-white">
                    View Profile ↗
                  </a>
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-center gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex justify-between items-center">
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#00b8a3]">Easy</span>
                  <span className="text-2xl font-display font-bold text-white">{profile.breakdown.easy}</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex justify-between items-center">
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#ffc01e]">Medium</span>
                  <span className="text-2xl font-display font-bold text-white">{profile.breakdown.medium}</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex justify-between items-center">
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#ff375f]">Hard</span>
                  <span className="text-2xl font-display font-bold text-white">{profile.breakdown.hard}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col items-center"
        >
          <h3 className="text-2xl font-display font-medium text-white mb-10 w-full text-center">GitHub Contributions</h3>
          <div className="w-full overflow-x-auto pb-4 flex justify-center scrollbar-hide" style={{ color: '#fff' }}>
            <GitHubCalendar 
              username="Hariom1729" 
              colorScheme="dark"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
