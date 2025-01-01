// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import CardLayout from "../components/cardlayout.jsx"; // Ensure you have a CardLayout component or create one
import { useThemeStore } from "../contexts/theme.jsx";

const Projects = () => {
  const { mode } = useThemeStore();

  return (
    <div className={`bg-zinc-900 min-h-screen text-white font-rubik bg-grid `}>
      <NavBar />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 text-center flex flex-col items-center"
      >
        <h1
          className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24"
          id="Projects"
        >
          Projects
        </h1>
        <p className="text-start max-w-[20rem] mt-5 md:max-w-[30rem] lg:max-w-[750px] lg:text-lg">
          
        </p>

      </motion.div>

      <Footer />
    </div>
  );
};

export default Projects;
