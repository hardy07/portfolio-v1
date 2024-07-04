import React from "react";
import ProjectsCard from "./projectscard.jsx";

const projects = [
  {
    name: "Radio Javan Downloader",
    type: "Web Application",
    images: [
      "https://media.discordapp.net/attachments/1256687941711826985/1258516093601841205/screencapture-rj-hoseinwave-ir-2024-01-26-15-34-26.png?ex=668853f2&is=66870272&hm=ce26f3c3c3d79153a202abc7961d5d3c0351f3b755c7c61e023d2d9f5cd077fa&=&format=webp&quality=lossless&width=1250&height=592",
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
      "https://media.discordapp.net/attachments/1256687941711826985/1258516093983527062/screencapture-weather-projects-hoseinwave-ir-2024-01-29-22-35-11.png?ex=668853f2&is=66870272&hm=4bfc0b0345bcf120ad126245272883022eb7043fd41ca3bea3c799aa43a04331&=&format=webp&quality=lossless&width=1177&height=593",
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
      "https://media.discordapp.net/attachments/1256687941711826985/1258516094432579664/image.png?ex=668853f3&is=66870273&hm=5d15a6499d251d35cd01643238c09fc8d47c90dfad166caedfaac84326b70ce7&=&format=webp&quality=lossless&width=1175&height=593",
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
