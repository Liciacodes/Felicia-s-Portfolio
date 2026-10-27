import React from "react";
import Reveal from "./Reveal";
import DecodeText from "./DecodeText";

function SectionTitle({ title, projectNumber }) {
  const heading =
    projectNumber !== undefined
      ? `${title.trim()} (${projectNumber})`
      : title.trim();

  return (
    <Reveal className="flex items-center mb-[26px]">
      <div className="border-l-4 border-accent pl-2 h-[26px] ">
        <h2 className="text-[18px] font-normal text-ink">
          <DecodeText text={heading} cursor />
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionTitle;
