import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm"
        >
          <span className="text-gray-600">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    "Frontend": [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
    "Backend": [
      "Node.js",
      "MongoDB",
      "Express",
      "Firebase",
      "RESTful APIs"
    ],
    "Programming Languages": [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Technologies</h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 