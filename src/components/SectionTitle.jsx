import React from "react";

function SectionTitle({ title, projectNumber }) {
  return (
    <div className="flex items-center ">
      <div className="border-l-4 border-[#F7861D] pl-2  mb-4 h-[26px] ">
        <h2 className="text-2xl font-normal text-black">
          {title} {projectNumber !== undefined && `(${projectNumber})`}
        </h2>
      </div>
    </div>
  );
}

export default SectionTitle;
