import React from "react";

export default function Button({
  label,
  icon,
  bgColor,
  textColor,
  width,
  height,
  ...props
}) {
  return (
    <button
      className={`${bgColor} ${textColor} ${width} ${height} flex items-center gap-x-4 px-[22px] py-[18px] font-normal text-[18px]`}
      {...props}
    >
      <span>{label}</span>
      <span>{icon}</span>
    </button>
  );
}
