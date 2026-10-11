import React from "react";
import { motion } from "framer-motion";
import { springSnappy } from "../lib/motion";

function NavLinks({ to, label, icon: Icon, onClick, active, underlineId }) {
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-current={active ? "true" : undefined}
      className="group relative flex items-center space-x-2 text-ink"
    >
      <span className="text-lg">{label}</span>
      {Icon && (
        <Icon
          size={22}
          weight="light"
          className={`${
            active ? "text-ink" : "text-accent"
          } group-hover:text-ink transition-colors duration-base ease-signature mt-[-7px]`}
        />
      )}
      {active && (
        <motion.span
          layoutId={underlineId}
          transition={springSnappy}
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
        />
      )}
    </a>
  );
}

export default NavLinks;
