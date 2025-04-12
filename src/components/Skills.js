import React from 'react';

const SkillCategory = ({ title, skills, highlight }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex items-center px-4 py-2 rounded-lg shadow-sm ${
            highlight && highlight.includes(skill)
              ? 'bg-blue-100 text-blue-800 border-2 border-blue-400'
              : 'bg-white text-gray-600'
          }`}
        >
          {skill === 'Python' && (
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#3776AB"/>
              <path d="M12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4Z" fill="#FFD43B"/>
            </svg>
          )}
          <span className="font-medium">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    "Programming Languages": {
      skills: ["Python", "JavaScript", "C++", "TypeScript"],
      highlight: ["Python"]
    },
    "Frontend Development": {
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
      highlight: []
    },
    "Backend Development": {
      skills: ["Node.js", "MongoDB", "Express", "Firebase", "RESTful APIs"],
      highlight: []
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Technologies</h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillsData).map(([category, { skills, highlight }]) => (
            <SkillCategory
              key={category}
              title={category}
              skills={skills}
              highlight={highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 