import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="work" className="mt-20 flex-col flex md:w-[950px]">
      <div className="w-full max-w-4xl">
        <h2 className="border-l-[3px] p-2 border-[#F7861D] text-2xl font-normal mb-6 text-black leading-[22.79px]">
          Projects (3)
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-x-16 md:w-[950px] mb-16 w-full"
          >
            <div className="">
              <div className="w-[448px] h-[291px] border border-t-[#F7861D] border-r-[#F7861D] border-l-[#F7861D] ">
                <div className="h-48 "></div>
                <button className="mt-10 bg-black text-white text-sm py-[18px] px-[20px] w-full bg-gradient-to-r from-[#000000] to-[#613309]">
                  View Live Link*
                </button>
              </div>
              <p className="text-[#B9A390] font-normal text-sm">
                *You’ll be redirected to the live preview link
              </p>
            </div>

            <div className="flex flex-col w-[466px] h-[291px]">
              <h3 className="text-[28px]  w-[476px] text-black font-medium mb-3 leading-[32.92px]">
                {project.title}
              </h3>
              <p className="text-black mb-6">{project.description}</p>
              <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px]">
                Dev Stack
              </p>
              <p className=" text-black font-medium text-[18px]">
                {project.technologies.join(" | ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
