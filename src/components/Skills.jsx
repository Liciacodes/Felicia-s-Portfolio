import React from "react";

function Skills() {
  const Separator = () => (
    <span className="text-[#B9A390] mx-1  h-[22px] text-sm align-middle">
      |
    </span>
  );

  return (
    <section
      id="skills"
      className="md:mt-10 mt-0 px-6 md:px-0 flex flex-col w-full md:w-[950px]"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <h2 className="text-xl border-l-4 border-[#F7861D] pl-2 text-[18px] font-normal mb-6 text-black leading-[22.79px]">
          Skills
        </h2>
        <div className="text-black">
          <div className="mb-5">
            <h3 className="font-normal text-[12px] text-[#B9A390]">
              Frontend Tools
            </h3>
            <p className="font-medium text-[18px]">
              HTML <Separator /> CSS <Separator /> JavaScript <Separator />{" "}
              React <Separator /> Vue
            </p>
          </div>
          <div className="mb-5">
            <h3 className="font-normal text-[12px] text-[#B9A390] ">
              Backend Tools
            </h3>
            <p className="font-medium text-[18px]">
              Node.js <Separator /> Express.js <Separator /> MongoDB
            </p>
          </div>

          <div className="mb-1">
            <h3 className="font-normal text-[12px] text-[#B9A390] ">
              Other Tools
            </h3>
            <p className="font-medium text-[18px]">
              Git <Separator /> Agile <Separator /> Teamwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
