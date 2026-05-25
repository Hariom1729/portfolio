"use client";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(id);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950">
      <div className="text-center">
        <div className="mb-4 h-20 w-20 animate-spin rounded-full border border-cyan-400/20 border-t-cyan-300" />
        <p className="text-sm uppercase tracking-[0.5em] text-slate-400">Initializing cinematic experience</p>
      </div>
    </div>
  );
}
