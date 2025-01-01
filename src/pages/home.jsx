import React, { useEffect, useState, useRef } from "react";
import { useLanyard } from "react-use-lanyard";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import NavBar from "../components/navbar.jsx";
import Tooltip from "../components/tooltip.jsx";
import DiscordCard from "../components/discordcard.jsx";
import EducationQualification from "../components/educationqualification.jsx";
import CardLayout from "../components/cardlayout.jsx"; // Import the CardLayout component

import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import Footer from "../components/footer.jsx";
import avatar from "../assets/avatar.jpg";
import constants from "../utils/constants.jsx";
import { useThemeStore } from "../contexts/theme.jsx";

const Home = () => {
  const { mode } = useThemeStore();
  const { loading, status: discord_data } = useLanyard({
    userId: constants.discord_id,
    socket: true,
  });

  const cardsRef = useRef(null);

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.onmousemove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
  }, [cardsRef]);

  return (
    <div className={`bg-zinc-900 min-h-screen text-white font-rubik bg-grid `}>
      <NavBar />

      <div className="flex w-full items-center justify-center flex-col mt-10">
        <div className="flex w-full items-center justify-center flex-col h-screen">
          <div className="relative">
            <img
              src={avatar}
              alt=""
              className={`w-[16rem] rounded-full ${
                mode === "light" ? "invert hue-rotate-180" : ""
              }`}
            />
            <div
              style={{
                background:
                  discord_data?.discord_status === "online"
                    ? "#23a55a"
                    : discord_data?.discord_status === "dnd"
                    ? "#f23f43"
                    : discord_data?.discord_status === "idle"
                    ? "#efb132"
                    : "#7d818b",
              }}
              className="border-4 border-zinc-900 h-10 w-10 rounded-full bg-slate-500 absolute right-4 bottom-4"
            ></div>
          </div>
          <div className="flex items-center gap-4 text-4xl mt-5">
            {constants.top_page_socials.map((item, idx) => {
              return (
                <a
                  target="_blank"
                  href={item.link}
                  key={idx}
                  className="hover:text-primary hover:shadow-2xl transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <h1 className="text-3xl font-medium mt-2 font-rubik">
            Hi, I’m <span className="text-primary">Sakthivel</span>
          </h1>
          <h3
            className={`${
              mode === "light" && "invert text-black hue-rotate-180"
            }`}
          >
            <TypeAnimation
              sequence={constants.intro_text_animation}
              wrapper="span"
              speed={200}
              style={{
                fontSize: "1.4rem",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h3>
          <p className="text-center max-w-[17rem] md:max-w-[19rem]">
            I’m a {new Date().getFullYear() - constants.birth_year} year old
            Developer based in{" "}
            <a
              target="_blank"
              className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 px-3 py-1.5 mt-2 whitespace-nowrap rounded-full inline-flex items-center justify-center w-fit gap-2"
              href={constants.map_location_url}
            >
              <ImLocation className="text-primary" /> {constants.location}
            </a>
          </p>
          <Link
            to={
              "https://drive.google.com/file/d/1c0KJpOmy0lMjbZrb2hvnJvb5_LeRBpvN/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-3.5 px-4 border border-blue-500 hover:border-transparent rounded transition-all duration-300"
          >
            Resume
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 text-center flex flex-col items-center"
        >
          <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="text-start max-w-[20rem] mt-5 md:max-w-[25rem] lg:max-w-[380px] lg:text-lg">
              I’m a ML Developer and Full Stack Developer based in Chennai,
              India. I specialize in MERN stack development, creating robust web
              applications. I develop solutions with rich user experiences,
              leveraging my expertise in machine learning and various databases.
            </p>
            <div className="my-10 flex items-center justify-center">
              {!loading ? <DiscordCard info={discord_data} /> : ""}
            </div>
          </div>
          <div
            ref={cardsRef}
            className="flex text-2xl gap-16 mt-5 bg-boxes border-white/10 border-[1px] px-8 py-3 rounded-2xl relative"
          >
            <p className="font-hand text-xl absolute -top-4 -left-8 -rotate-[35deg]">
              My Socials
            </p>
            {constants.public_socials.map((item, idx) => {
              return (
                <a
                  target="_blank"
                  key={idx}
                  href={item.link}
                  className="hover:text-primary transition-all hover:-translate-y-2 hover:scale-125 duration-300"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <h1
            className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-1 my-7"
            id="Qualifications"
          >
            Qualifications
          </h1>
          <EducationQualification />{" "}
          {/* Display the EducationQualification component */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <h1
            className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24"
            id="Technologies"
          >
            Technologies
          </h1>
          <p className="text-start max-w-[20rem] mt-5 md:max-w-[30rem] lg:max-w-[750px] lg:text-lg">
            I use a wide range of tools to tackle each hurdle in the most
            efficient manner possible.
          </p>
          <div className="grid grid-cols-6 text-3xl gap-4 mt-5 bg-boxes border-white/10 border-[1px] px-8 py-3 rounded-2xl lg:text-4xl md:grid-cols-9">
            {constants.techs.map((item, idx) => {
              return (
                <Tooltip key={idx} message={item.name}>
                  <div className="hover:text-primary cursor-pointer transition-all">
                    {item.icon}
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>

        <div className="home-content mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-5 py-1"
          >
            <div id="AreasofInterest" className="mt-16">
              <CardLayout />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
