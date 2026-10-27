import React from "react";

export default function TechPill({ children }) {
  return (
    <span className="text-[12px] lg:text-[13px] font-medium text-ink border border-sand/50 bg-sand/10 rounded-full px-3 py-1 whitespace-nowrap transition-colors duration-fast ease-signature group-hover/card:border-accent/50 group-hover/card:bg-accent/10">
      {children}
    </span>
  );
}
