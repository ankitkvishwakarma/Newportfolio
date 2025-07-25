import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center 
                 px-6 py-16 sm:px-10 md:px-20 bg-teal-800 text-white 
                 min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ParticlesBackground />

      <p className="text-lg sm:text-xl font-semibold">Hello, I am</p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black my-3 text-yellow-400">
         Mern Stack Developer
      </h1>

      <p className="max-w-xl text-gray-300 text-base sm:text-lg">
        "Full Stack MERN Developer | Building Scalable Web Apps with MongoDB, Express, React & Node | Passionate About Clean Code & Seamless UX"
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-yellow-400 px-6 py-3 rounded text-black font-semibold 
                         hover:bg-yellow-300 hover:shadow-lg hover:scale-105 
                         active:scale-95 active:shadow-md 
                         transition-all duration-300 ease-in-out transform 
                         cursor-pointer">
          Hire Me
        </button>

        <button className="flex items-center justify-center gap-2 border border-yellow-400 px-6 py-3 rounded 
                         hover:bg-yellow-500 hover:text-black hover:scale-105 
                         transition-all duration-300 ease-in-out font-semibold 
                         cursor-pointer transform">
          <FaDownload />
          Download CV
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;
