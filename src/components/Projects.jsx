import React, { useState } from "react";
import { projects } from "../data";

function Projects() {
  const Separator = () => (
    <span className="text-[#B9A390] mx-2  h-[22px] text-sm align-middle">
      |
    </span>
  );
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <section className="mt-10 flex flex-col items-center px-6 md:px-0 w-full">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="border-l-4 border-[#F7861D] pl-2 text-2xl font-normal mb-4 text-black leading-[22.79px]">
          Projects ({projects.length})
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-stretch gap-x-0 md:gap-x-16 mb-16 w-full"
          >
            <div className="w-full md:w-[448px] flex flex-col">
              <div className="w-full border-t border-r border-l border-[#F7861D] flex flex-col">
                <div className="h-48 md:h-[220px]">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-[18px] px-[20px] text-sm text-white bg-gradient-to-r from-[#000000] to-[#613309]">
                    View Live Link*
                  </button>
                </a>
              </div>
              <p className="text-[#B9A390] font-normal text-sm mt-2">
                *You'll be redirected to the live preview link
              </p>
            </div>

            <div className="flex flex-col w-full md:w-[450px] h-auto md:h-[291px] mt-4 md:mt-0">
              <h3 className="text-[28px] text-black font-medium mb-1 leading-[32.92px]">
                {project.title}
              </h3>
              <div className="text-black mb-2">
                <p className="md:hidden">
                  {expandedDescriptions[index]
                    ? project.description
                    : truncateDescription(project.description, 100)}
                  {project.description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-[#F7861D] ml-1"
                    >
                      {expandedDescriptions[index] ? "See less" : "See more"}
                    </button>
                  )}
                </p>
                <p className="hidden md:block">{project.description}</p>
              </div>
              <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px] mt-4 hidden md:block">
                Dev Stack
              </p>
              <p className="text-black font-medium text-[18px] hidden md:block">
                {project.technologies.map((tech, techIndex) => (
                  <React.Fragment key={techIndex}>
                    {techIndex > 0 && <Separator />}
                    <span>{tech}</span>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
