import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  {
    title: "Data Science",
    icon: "📈",
    content: (
      <ul className="list-disc ml-5 space-y-3">
        <li>
          I perform extensive data analysis and interpretation to understand
          patterns and trends.
        </li>
        <li>
          I manage and optimize data systems, and design algorithms for data
          mining and research purposes.
        </li>
        <li>I provide actionable insights based on data analysis.</li>
        <li>Machine learning</li>
      </ul>
    ),
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    content: (
      <ul className="list-disc ml-5 space-y-3">
        <li>
          I develop and implement advanced AI models, including deep learning
          and neural networks.
        </li>
        <li>
          I specialize in creating intelligent chatbots for a variety of
          applications, enhancing customer service and engagement.
        </li>
        <li>I build and maintain scalable AI solutions in production.</li>
        <li>
          I collaborate with cross-functional teams to understand business
          requirements and design effective AI systems.
        </li>
      </ul>
    ),
  },
  {
    title: "Python & Automation",
    icon: "⚙️",
    content: (
      <ul className="list-disc ml-5 space-y-3">
        <li>
          I develop efficient and robust Python applications, optimized for
          performance and scalability.
        </li>
        <li>
          I design and implement automated processes, including the creation of
          bots, to streamline operations of all types, including business
          processes, thereby improving productivity and accuracy.
        </li>
        <li>Web scraping</li>
        <li>Task scheduling</li>
      </ul>
    ),
  },
  {
    title: "Web Development",
    icon: "💻",
    content: (
      <ul className="list-disc ml-5 space-y-3">
        <li>
          I create responsive and user-friendly websites using HTML, CSS,
          Bootstrap and JavaScript.
        </li>
        <li>
          I ensure optimal website performance and design aesthetics across
          various devices and browsers.
        </li>
        <li>API integration</li>
        <li>UI/UX design</li>
      </ul>
    ),
  },
  {
    title: "Bioinformatics",
    icon: "🧬",
    content: (
      <ul className="list-disc ml-5 space-y-3">
        <li>
          I leverage bioinformatics tools and techniques for comprehensive
          analysis of biological data.
        </li>
        <li>
          Integration of computational and biological sciences to extract
          meaningful insights from complex biological systems.
        </li>
        <li>Biological databases</li>
        <li>Data mining</li>
      </ul>
    ),
  },
];

const Card = ({ title, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card shadow-md rounded-md overflow-hidden transition-all duration-300"
    >
      <div className="card-content p-6 flex flex-col items-center justify-center text-center">
        <div className="text-2xl">{icon}</div>
        <h2 className="text-xl font-semibold mt-3">{title}</h2>
        <button
          onClick={onClick}
          className="text-blue-500 mt-4 inline-block bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all duration-300"
        >
          Learn more
        </button>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CardLayout = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleLearnMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectedCard &&
        event.target.classList.contains("bg-opacity-50") &&
        event.target.classList.contains("fixed")
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [selectedCard]);

  return (
    <div className="mt-16 text-center flex flex-col items-center">
      <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24 mb-8">
        Areas of Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            onClick={() => handleLearnMore(card)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 py-5"
          >
            <div
              style={{ backgroundColor: "rgb(30, 30, 30)" }}
              className="px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 rounded-lg relative w-full md:w-11/12 lg:w-3/4 xl:w-1/2"
            >
              <button
                className="absolute top-5 right-6 text-2xl"
                onClick={handleCloseModal}
              >
                <AiOutlineClose />
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedCard.title}
                <span className="ml-2">{selectedCard.icon}</span>
              </h2>

              <div className="text-left text-white">{selectedCard.content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardLayout;
