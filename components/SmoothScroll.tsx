"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    let animationFrame = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);
    const handleScroll = ({ scroll }: { scroll: number }) => {
      document.documentElement.style.setProperty("--scroll", `${scroll}px`);
    };
    lenis.on("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}