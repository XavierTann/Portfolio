import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease;
  will-change: transform;

  &.is-active {
    opacity: 1;
  }
`;

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin: -16px 0 0 -16px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  will-change: transform;
  transition: width 0.2s ease, height 0.2s ease, margin 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  &.is-active {
    opacity: 1;
  }

  &.is-hovering {
    width: 52px;
    height: 52px;
    margin: -26px 0 0 -26px;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

/**
 * A restrained custom cursor: a small dot tracks the pointer exactly, a ring
 * trails behind it with easing, and both grow slightly over interactive
 * elements. Desktop (fine pointer) only, and disabled entirely for
 * prefers-reduced-motion so it never fights with assistive tech.
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        dotRef.current.classList.add("is-active");
      }
      ringRef.current?.classList.add("is-active");
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest("a, button, [data-cursor-hover]");
      ringRef.current?.classList.toggle("is-hovering", isInteractive);
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleOver);
    frame = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Dot ref={dotRef} />
      <Ring ref={ringRef} />
    </>
  );
};

export default CustomCursor;
