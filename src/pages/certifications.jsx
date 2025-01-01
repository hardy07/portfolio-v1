// src/pages/certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "../contexts/theme.jsx";

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    description: "Completed with a perfect score of 1000/1000.",
    date: "August 2024",
  },
  {
    title: "GitHub Foundations",
    description: "Certification obtained with a score of 80%.",
    date: "July 2024",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const { mode } = useThemeStore();

  return (
    <div
      className={`bg-zinc-900 min-h-screen text-white font-rubik ${
        mode === "light" ? "bg-gray-100 text-black" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold mb-6 heading-effect lg:text-4xl mt-24">
            Certifications
          </h1>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-4 border rounded-lg ${
                  mode === "light"
                    ? "bg-gray-200 border-gray-300"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <h2 className="text-xl font-bold">{cert.title}</h2>
                <p className="text-gray-400">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
