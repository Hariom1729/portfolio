"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

export function Marquee({ children, speed = 40, direction = "left" }: MarqueeProps) {
  const content = (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {children}
    </div>
  );

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap opacity-20">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex shrink-0"
      >
        {content}
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
}
