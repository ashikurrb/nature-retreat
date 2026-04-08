"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedNumber({ value }: { value: string }) {
  const match = value.match(/(\d+)(.*)/);
  const endValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (match) {
      const controls = animate(count, endValue, {
        duration: 2,
        ease: "easeOut",
        delay: 0.6,
      });
      return controls.stop;
    }
  }, [count, endValue, match]);

  return <motion.span>{match ? rounded : value}</motion.span>;
}