import React from "react";

function Projects() {
  const projects = [
    {
      title: "SaveBrandic",
      description:
        "This case study examines the creation of an eco-friendly water bottle, covering the design process from research to launch and focusing on material selection, user-centered design, and environmental impact.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Classi Classroom Dashboard",
      description:
        "This case study examines the creation of an eco-friendly water bottle, covering the design process from research.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Finance Tracker",
      description:
        "This case study examines the creation of an eco-friendly water bottle, covering the design procesuser-centered design, and environmental impact.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="work" className="mt-80 px-72 gap-x-4 w-full">
      <h2 className="border-l border-3 border-[#F7861D] pl-2 text-[18px] font-normal mb-6 text-black leading-[22.79px]">
        Projects (8)
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-x-16 w-[950px] mb-10"
        >
          <div className="w-[448px] h-[291px]">
            <div className="h-48 bg-[#F7861D]"></div>
            <button className=" bg-black text-white py-2 px-4 w-full">
              View Live Link
            </button>
            <p className="text-[#B9A390] mt-2 font-normal text-sm">
              *You’ll be redirected to the live preview link
            </p>
          </div>

          <div className="flex flex-col w-[466px] h-[291px]">
            <h3 className="text-[28px] text-black font-medium mb-3 leading-[32.92px]">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px]">
              Dev Stack
            </p>
            <p className=" text-black font-medium text-[18px]">
              {project.technologies.join("| ")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
