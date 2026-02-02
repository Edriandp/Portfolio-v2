"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      dot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      outline.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
    };

    const handleMouseEnter = () => {
      outline.classList.add("hover");
    };

    const handleMouseLeave = () => {
      outline.classList.remove("hover");
    };

    window.addEventListener("mousemove", moveCursor);

    // Add hover effect for links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
