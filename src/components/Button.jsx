import React from "react";

export default function Button({
  label,
  Icon,
  bgColor,
  textColor,
  width,
  height,
  ...props
}) {
  return (
    <button
      className={`group ${bgColor} ${textColor}  hover:bg-gradient-to-r from-[#000000]  to-[#613309] flex items-center justify-between  px-[22px] py-[18px] font-normal text-[18px]`}
      {...props}
    >
      <span className="transition-colors duration-300 md:w-[200px]">
        {label}
      </span>
      <span className="transition-colors duration-300">
        {React.cloneElement(Icon, {
          className:
            "text-[#F7861D] group-hover:text-white transition-colors duration-300",
        })}
      </span>
    </button>
  );
}
