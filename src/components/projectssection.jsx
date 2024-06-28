import React from "react";
import ProjectsCard from "./ProjectsCard";


const projects = [
  {
    name: "Radio Javan Downloader",
    type: "Web Application",
    images: ["src/assets/projects_imgs/prj1.png"],
    description:
      "Web Application for downloading any kind of media from radiojavan.com website",
    link: "http://example.com",
    active: true,
    opensource: false,
    github_link: "http://github.com",
    tags: ["Private API R.E.", "Front-End", "Back-End"],
    technologies: [
      "React",
      "Typescript",
      "Tanstack Query",
      "Zustand",
      "TailwindCSS",
      "NextUI",
      "Express",
      "NodeJS",
    ],
  },
  {
    name: "Weather App",
    type: "Web Application",
    images: ["src/assets/projects_imgs/prj2.png"],
    description:
      "A Web Application that shows current and forecast weather information based on I",
    link: "http://example.com",
    active: true,
    opensource: true,
    github_link: "http://github.com",
    tags: ["Front-End"],
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "Tanstack Query",
      "Zustand",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    name: "Persian TTS",
    type: "Web Application",
    images: ["src/assets/projects_imgs/prj3.png"],
    description:
      "A web app that converts Farsi text to speech with igap messenger api.",
    link: "http://example.com",
    active: true,
    opensource: false,
    github_link: "http://github.com",
    tags: ["Front-End", "Back-End", "Private API R.E."],
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "wavesurfer.js",
      "Zustand",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          name={project.name}
          type={project.type}
          images={project.images}
          description={project.description}
          link={project.link}
          active={project.active}
          opensource={project.opensource}
          github_link={project.github_link}
          tags={project.tags}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;