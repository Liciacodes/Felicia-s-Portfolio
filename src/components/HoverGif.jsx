import React, { useState } from "react";

export default function HoverGif({ staticImage, gifImage, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <img
      src={isHovered ? gifImage : staticImage}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-full object-cover cursor-pointer"
    />
  );
}
