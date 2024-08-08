import React from "react";

function SectionTitle({ title, projectNumber }) {
  return (
    <div className="flex items-center mb-[26px]">
      <div className="border-l-4 border-[#F7861D] pl-2 h-[26px] ">
        <h2 className="text-[18px] font-normal text-black">
          {title} {projectNumber !== undefined && `(${projectNumber})`}
        </h2>
      </div>
    </div>
  );
}

export default SectionTitle;
