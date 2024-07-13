import React from "react";
import { NavLink } from "react-router-dom";
export default function NavLinks({ to, icon: Icon, label, ...props }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center px-4 py-4 gap-x-2 text-[#5C5F6A] font-medium  ${
          isActive ? " rounded-lg font-medium text-[#0E1422]" : ""
        }`
      }
      {...props}
    >
      <span className="group-hover:text-black transition-colors duration-300 ">
        {label}
      </span>
      <span className="group-hover:text-black transition-colors duration-300">
        <Icon className="text-[#F7861D] group-hover:text-black transition-colors duration-300" />
      </span>
    </NavLink>
  );
}
