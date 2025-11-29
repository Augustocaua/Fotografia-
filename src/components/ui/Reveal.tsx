import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  threshold?: number; // Intersection threshold
  once?: boolean; // reveal only once
  direction?: "up" | "down" | "left" | "right";
  durationMs?: number; // animation duration
  easing?: string; // CSS timing function
  staggerChildren?: boolean; // apply stagger to direct children
  staggerStepMs?: number; // per-child delay step
};

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

const getInitialTransform = (direction: RevealProps["direction"]) => {
  switch (direction) {
    case "down":
      return "translateY(-12px)";
    case "left":
      return "translateX(12px)";
    case "right":
      return "translateX(-12px)";
    case "up":
    default:
      return "translateY(12px)";
  }
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
  once = true,
  direction = "up",
  durationMs = 800,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)", // aproximação do power2.out
  staggerChildren = false,
  staggerStepMs = 40,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const initialTransform = getInitialTransform(direction);
  const dur = clamp(durationMs, 600, 1200);

  const containerStyle: React.CSSProperties = staggerChildren
    ? { willChange: "opacity, transform" }
    : {
        transition: `opacity ${dur}ms ${easing}, transform ${dur}ms ${easing}`,
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        willChange: "opacity, transform",
      };

  const renderChildren = () => {
    if (!staggerChildren) return children;
    return React.Children.map(children as React.ReactNode, (child, i) => {
      const childDelay = (delay || 0) + i * (staggerStepMs || 0);
      const childStyle: React.CSSProperties = {
        transition: `opacity ${dur}ms ${easing}, transform ${dur}ms ${easing}`,
        transitionDelay: `${childDelay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        display: "inline-block",
        willChange: "opacity, transform",
      };

      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          style: { ...(child.props?.style || {}), ...childStyle },
        });
      }
      return <span style={childStyle}>{String(child)}</span>;
    });
  };

  return (
    <div ref={ref} className={className} style={containerStyle}>
      {renderChildren()}
    </div>
  );
};

// RevealText: animação com stagger entre palavras ou letras
export type RevealTextProps = {
  children: string;
  className?: string;
  mode?: "words" | "letters";
  delay?: number;
  durationMs?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  staggerStepMs?: number;
};

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = "",
  mode = "words",
  delay = 0,
  durationMs = 800,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  threshold = 0.2,
  once = true,
  direction = "up",
  staggerStepMs = 35,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const tokens = mode === "letters" ? [...children] : children.split(/(\s+)/);
  const initialTransform = getInitialTransform(direction);
  const dur = clamp(durationMs, 600, 1200);

  return (
    <span ref={ref} className={className}>
      {tokens.map((tok, i) => {
        const d = (delay || 0) + i * (staggerStepMs || 0);
        const style: React.CSSProperties = {
          transition: `opacity ${dur}ms ${easing}, transform ${dur}ms ${easing}`,
          transitionDelay: `${d}ms`,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : initialTransform,
          display: "inline-block",
        };
        const isSpace = /^\s+$/.test(tok);
        const content = isSpace ? "\u00A0" : tok;
        return (
          <span key={i} style={style}>{content}</span>
        );
      })}
    </span>
  );
};

export default Reveal;