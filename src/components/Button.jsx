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
      className={`group ${bgColor} ${textColor} ${width} ${height} hover:bg-gradient-to-r from-[#000000] w-full md:w-[241px] md:h-[54px] to-[#613309] flex items-center justify-between md:justify-start md:gap-x-4 px-[22px] py-[18px] font-normal text-[18px]`}
      {...props}
    >
      <span className="transition-colors duration-300 flex-grow">{label}</span>
      <span className="transition-colors duration-300">
        {React.cloneElement(Icon, {
          className:
            "text-[#F7861D] group-hover:text-white transition-colors duration-300",
        })}
      </span>
    </button>
  );
}
