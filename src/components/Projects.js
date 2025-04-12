import React from 'react';

const ProjectCard = ({ title, description, image, technologies, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        View Project →
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "NxtWatch (YouTube Clone)",
      description: "A feature-rich YouTube clone with video streaming, user authentication, and playlist management.",
      image: "https://i.imgur.com/Qh8XKXO.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      link: "#"
    },
    {
      title: "Jobby App",
      description: "A job search and application platform with advanced filtering and application tracking.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "NXT Assess",
      description: "An online assessment platform for conducting tests and quizzes with real-time monitoring.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "Firebase", "Python", "C++", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 