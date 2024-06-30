import {
  BsGithub,
  BsTelegram,
  BsLinkedin,
  BsInstagram,
  BsDiscord,
  BsTwitter,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { IoLogoElectron, IoMail } from "react-icons/io5";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiMysql,
  DiLinux,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiVisualstudiocode,
  SiRaspberrypi,
  SiGithub,
  SiGnubash,
  SiExpress,
  SiDiscord,
  SiNextdotjs,
  SiTypescript,
  SiBun,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { DiJava } from "react-icons/di"; // Java icon
import { SiFirebase } from "react-icons/si"; // Google Firebase icon
import ReCAPTCHA from "react-google-recaptcha";
export default {
  top_page_socials: [
    {
      link: "https://github.com/hardy07",
      icon: <BsGithub />,
    },
    {
      link: "https://t.me/hardy0704",
      icon: <BsTelegram />,
    },
    {
      link: "https://www.linkedin.com/in/sakthiveloffcl/",
      icon: <BsLinkedin />,
    },
  ],
  public_socials: [
    {
      link: "https://instagram.com/moodman78_",
      icon: <BsInstagram />,
    },
    {
      link: "https://discord.com/users/732890729583476736",
      icon: <BsDiscord />,
    },
    {
      link: "https://x.com/Sakt2011",
      icon: <BsTwitter />,
    },
  ],
  techs: [
    {
      name: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "React.js",
      icon: <DiReact />,
    },
    {
      name: "NodeJs",
      icon: <DiNodejsSmall />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },

    /*     {
      name: "Bun",
      icon: <SiBun />,
    }, */

    {
      name: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      name: "MySQL",
      icon: <DiMysql />,
    },
    {
      name: "Google Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "Python",
      icon: <DiPython />,
    },
    {
      name: "Java",
      icon: <DiJava />,
    },
    {
      name: "Git",
      icon: <BsGit />,
    },
    {
      name: "Github",
      icon: <SiGithub />,
    },
    {
      name: "MarkDown",
      icon: <BsMarkdown />,
    },
    {
      name: "VsCode",
      icon: <SiVisualstudiocode />,
    },
    {
      name: "Linux",
      icon: <DiLinux />,
    },
    {
      name: "Bash",
      icon: <SiGnubash />,
    },
    /*     {
      name: "RaspberryPi",
      icon: <SiRaspberrypi />,
    }, */
    {
      name: "DiscordAPI",
      icon: <SiDiscord />,
    },
  ],
  contact_socials: [
    {
      title: "@newmorpheus",
      icon: <BsDiscord />,
      link: "https://discord.com/users/732890729583476736",
    },
    {
      title: "@hardy0704",
      icon: <BsTelegram />,
      link: "https://t.me/hardy0704",
    },
    {
      title: "sakthiveloffcl@gmail.com",
      icon: <IoMail />,
      link: "mailto:sakthiveloffcl@gmail.com",
    },
  ],
  api_endpoint: "https://api.lanyard.rest/v1/users/732890729583476736",
  github_url: "https://github.com/hardy07",
  github_username: "hardy07",
  /*   discord_id: "743786737901240362", */
  discord_id: "732890729583476736",
  birth_year: 2004,
  location: "Chennai, India",
  timeZone: "Asia/Kolkata",
  recaptcha_key: "6LeMmgQqAAAAAA8OgU1Zjt4-z2aLO6_4bp_QOHgJ",
  // hcaptcha_key: "ba445486-b7e0-47a3-be93-c7309e4614b3",
  map_location_url:
    "https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0478078,80.044198,11z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?entry=ttu",
  intro_text_animation: [
    "a full stack dev 🎉",
    1000,
    "a computer science engineer🌐",
    1000,
    "a machine learning developer🧑‍💻",
    1000,
  ],
};
