import React from "react";
import Reveal from "./Reveal";

function SectionTitle({ title, projectNumber }) {
  return (
    <Reveal className="flex items-center mb-[26px]">
      <div className="border-l-4 border-accent pl-2 h-[26px] ">
        <h2 className="text-[18px] font-normal text-ink">
          {title} {projectNumber !== undefined && `(${projectNumber})`}
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionTitle;
