import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../lib/motion";

export default function Reveal({ as = "div", className, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
