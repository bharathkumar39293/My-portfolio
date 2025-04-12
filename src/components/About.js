import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg mb-6">
            I'm a passionate MERN Stack Developer currently pursuing my B.Tech in Computer Science and Engineering
            at Hindusthan University, Chennai. With a strong foundation in both frontend and backend technologies,
            I specialize in building robust and scalable web applications.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            My technical expertise spans across React, Node.js, MongoDB, Firebase, Python, and C++. I've built
            multiple full-stack projects including an e-learning platform, social media clones, and a face
            recognition attendance system, showcasing my ability to work with diverse technologies and solve
            complex problems.
          </p>
          <p className="text-gray-600 text-lg">
            I'm constantly exploring new technologies and frameworks to enhance my skills and stay at the
            forefront of web development. When I'm not coding, you can find me contributing to open-source
            projects or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 