import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks({ to, icon, label, ...props }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-4 gap-x-2 text-[#5C5F6A] font-medium ${
          isActive
            ? " rounded-lg font-medium text-[#0E1422]"
            : "hover:bg-gray-200"
        }`
      }
      {...props}
    >
      <span className="">{label}</span>
      <span>{icon}</span>
    </NavLink>
  );
}
