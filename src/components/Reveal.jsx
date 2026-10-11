import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../lib/motion";

export default function Reveal({ as = "div", className, children, ...props }) {
  const MotionTag = motion[as];

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
