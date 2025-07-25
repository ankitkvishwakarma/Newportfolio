import React from "react";

const ProjectCard = ({ image, title, description, tags, demoUrl }) => {
  return (
    <div className="bg-[#0d1117]/80 backdrop-blur-lg text-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[300px] flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300 text-center"
          >
            🔗 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
