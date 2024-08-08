import React from "react";
import SectionTitle from "./SectionTitle";

function Skills() {
  const Separator = () => (
    <span className="text-[#B9A390]  py-1 h-[22px] text-sm align-middle">
      |
    </span>
  );

  return (
    <section
      id="skills"
      className="mt-0 md:mt-[68px] px-6 md:px-0 flex flex-col w-full md:w-[950px]"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <SectionTitle title={"Skills"} />
        <div className="text-black">
          <div className="mb-5">
            <h3 className="font-normal text-[12px] text-[#B9A390]">
              Frontend Tools
            </h3>
            <p className="font-medium text-[18px] ">
              HTML <Separator /> CSS <Separator /> JavaScript <Separator />
              React <Separator /> Vue
            </p>
          </div>
          <div className="mb-5">
            <h3 className="font-normal text-[12px] text-[#B9A390] ">
              Backend Tools
            </h3>
            <p className="font-medium text-[18px] ">
              Node.js <Separator /> Express.js <Separator /> MongoDB
            </p>
          </div>
          <div className="mb-1">
            <h3 className="font-normal text-[12px] text-[#B9A390] ">
              Other Tools
            </h3>
            <p className="font-medium text-[18px] ">
              Git <Separator /> Agile <Separator /> Teamwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
