import React from "react";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Campus Event",
      description: "An all-in-one college event system for hackathons and seminars.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://campus-event-demo.vercel.app",
    },
    {
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      title: "BookStore",
      description: "A platform for buying/selling second-hand books. Admin panel included.",
      tags: ["React", "Redux", "Tailwind", "Express", "MongoDB"],
      demoUrl: "https://my-bookstore-demo.vercel.app",
    },
    {
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8d5",
      title: "VideoTube Backend",
      description: "Media-sharing backend with comments, uploads, playlists & likes.",
      tags: ["Node.js", "MongoDB", "Cloudinary", "Multer"],
      demoUrl: "https://github.com/yourusername/videotube-backend",
    },
  ];

  return (
    <section className="bg-[#050b16] py-20 px-5 sm:px-10">
      <h2 className="text-white text-3xl font-bold text-center mb-6">My Featured Projects</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Real-world applications built with full-stack technology and responsive design.
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
