export function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-24">
      <h2 className="mb-10 text-3xl font-bold md:text-5xl">Achievements</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {["Solved 300+ coding problems", "92-day LeetCode streak", "Top coding performer in institute"].map((item) => (
          <div key={item} className="glass rounded-[1.75rem] p-6 text-center text-lg text-slate-100">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
