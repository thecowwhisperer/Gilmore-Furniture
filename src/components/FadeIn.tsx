"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type MotionProps,
  type Transition,
} from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: Transition;
  className?: string;
  style?: CSSProperties;
  viewportMargin?: string;
  id?: string;
}

export default function FadeIn({
  children,
  initial = { opacity: 0, y: 40 },
  animate = { opacity: 1, y: 0 },
  transition,
  className,
  style,
  viewportMargin = "0px",
  id,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: viewportMargin as `${number}px`,
  });

  const instant: Transition | undefined = reduceMotion
    ? { duration: 0 }
    : transition;

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={instant}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
