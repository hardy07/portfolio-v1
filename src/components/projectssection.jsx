import React from "react";
import ProjectsCard from "./projectscard.jsx";

const projects = [
  {
    name: "Radio Javan Downloader",
    type: "Web Application",
    images: [
      "https://media.discordapp.net/attachments/1256687941711826985/1256689099784589312/prj1.png?ex=6681ae6d&is=66805ced&hm=dd936083c19efb176326aef00db23f96a432230416991f72e93477a3fe7956cc&=&format=webp&quality=lossless&width=1250&height=592",
    ],
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
    images: [
      "https://media.discordapp.net/attachments/1256687941711826985/1256689486352486410/prj2.png?ex=6681aec9&is=66805d49&hm=ca00ed4e645445cbb0c85697fbab27b05e534cd77e81eea7a6f935aacfbaf7b5&=&format=webp&quality=lossless&width=1177&height=593",
    ],
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
    images: [
      "https://media.discordapp.net/attachments/1256687941711826985/1256689601829929020/prj3.png?ex=6681aee5&is=66805d65&hm=d5c9a66e70c526162255fe84b589105c608af8f3b593dd3e6277d6383e0b6414&=&format=webp&quality=lossless&width=1175&height=593",
    ],
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
