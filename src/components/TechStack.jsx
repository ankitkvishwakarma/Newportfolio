import React, { useEffect } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGithub, FaGitAlt
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" dark:bg-black text-black dark:text-white py-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tools & Technologies</h2>
        <p className="text-black dark:text-gray-400 mb-10">
          I use to build performance modern web apps
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center 
                bg-white/10 dark:bg-white/5
                backdrop-blur-md rounded-xl p-6 shadow-lg 
                border border-white/10 dark:border-white/10 
                hover:scale-105 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                transition-all duration-300 ease-in-out"
            >
              {tech.icon}
              <span className="mt-4 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
