import React from "react";

function Skills() {
  return (
    <section id="skills" className="mt-40 px-72 gap-x-4 w-full">
      <h2 className="text-xl border-l border-3 border-[#F7861D] pl-2 text-[18px] font-normal mb-6 text-black leading-[22.79px]">
        Skills
      </h2>
      <div className="text-black">
        <div className="mb-5">
          <h3 className="font-normal text-[12px] text-[#B9A390]">
            Frontend Tools
          </h3>
          <p className="font-medium text-[18px]">
            HTML | CSS | JavaScript | React | Vue
          </p>
        </div>
        <div className="mb-5">
          <h3 className="font-normal text-[12px] text-[#B9A390] ">
            Backend Tools
          </h3>
          <p className="font-medium text-[18px]">
            Node.js | Express.js | MongoDB
          </p>
        </div>

        <div className="mb-5">
          <h3 className="font-normal text-[12px] text-[#B9A390] ">
            Other Tools
          </h3>
          <p className="font-medium text-[18px]">Git | Agile | Teamwork</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
