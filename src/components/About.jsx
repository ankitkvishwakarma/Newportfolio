import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white px-6 py-12 sm:px-12 md:px-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        I am a passionate UI/UX designer with experience in various domains, dedicated to creating delightful digital experiences.
      </p>

      <div className="space-y-6 max-w-2xl mx-auto w-full">
        <p>Hi, I'm Ankit Kumar Vishwakarma, a Full Stack Developer with a passion for creating dynamic and responsive web applications. I specialize in MERN stack development, leveraging MongoDB, Express.js, React.js, and Node.js to build robust and scalable solutions. My expertise extends to front-end and back-end development, ensuring seamless user experiences and efficient server-side functionality. I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality software solutions.</p>
      </div>
    </motion.section>
  );
};

const SkillBar = ({ label, percent }) => (
  <div className="text-left w-full">
    <p className="text-sm text-gray-300 mb-1">{label}</p>
    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        className="bg-yellow-400 h-full rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export default About;
