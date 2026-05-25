import { skills } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24">
      <h2 className="mb-10 text-3xl font-bold md:text-5xl">Skills</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, index) => (
          <div
            key={group.title}
            className="glass rounded-[1.75rem] p-5"
          >
            <h3 className="mb-4 text-lg font-semibold text-cyan-100">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
