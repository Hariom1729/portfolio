import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Three.js, Framer Motion, and Tailwind CSS.</p>
    </footer>
  );
}
