import React from "react";
import SectionTitle from "./SectionTitle";

function Skills() {
  const Separator = () => (
    <span className="text-[#B9A390] mx-4 h-[22px] text-sm align-middle inline-flex items-center font-normal leading-[1]">
      |
    </span>
  );

  return (
    <section
      id="skills"
      className="mt-0 md:mt-[68px] px-4 md:px-0 flex flex-col w-full md:w-[950px]"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <SectionTitle title={"Skills"} />
        <div className="text-[#592C03]">
          <div className="mb-5">
            <h3 className="font-normal text-[12px] text-[#B9A390]">
              Frontend Tools
            </h3>
            <div className="text-[18px]">
              HTML
              <Separator />
              CSS
              <Separator />
              JavaScript
              <Separator />
              React
            </div>
          </div>
          <div className="mb-1">
            <h3 className="font-normal text-[12px] text-[#B9A390] ">
              Other Skills
            </h3>
            <p className="text-[18px]">
              Agile
              <Separator />
              Teamwork
              <Separator />
              Problem-solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
