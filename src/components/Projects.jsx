import React from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="work"
      className="mt-20 flex-col px-6 md:px-0 w-full flex items-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="border-l-4 p-0 md:p-2 pl-2 border-[#F7861D] text-2xl font-normal mb-4 text-black leading-[22.79px]">
          Projects ({projects.length})
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-x-0 md:gap-x-16 mb-16 w-full"
          >
            <div className="w-full md:w-auto">
              <div className="w-full h-auto md:w-[448px] md:h-[291px] border border-t-[#F7861D] border-r-[#F7861D] border-l-[#F7861D]">
                <div className="h-48 ">
                  <img
                    src={project.image}
                    alt="onbaording"
                    className="w-full object-cover"
                  />
                </div>
                <Link to={project.link} target="_blank">
                  <button className="mt-10 bg-black text-white text-sm py-[18px] px-[20px] w-full bg-gradient-to-r from-[#000000] to-[#613309]">
                    View Live Link*
                  </button>
                </Link>
              </div>
              <p className="text-[#B9A390] font-normal text-sm mt-2">
                *You’ll be redirected to the live preview link
              </p>
            </div>

            <div className="flex flex-col w-full md:w-[450px] h-auto md:h-[291px]  md:mt-0">
              <h3 className="text-[28px] text-black font-medium mb-1 leading-[32.92px]">
                {project.title}
              </h3>
              <p className="text-black mb-2">{project.description}</p>
              <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px] hidden md:block">
                Dev Stack
              </p>
              <p className="text-black font-medium text-[18px] hidden md:block">
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
