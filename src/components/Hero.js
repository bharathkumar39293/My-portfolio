import React from 'react';

const Hero = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Bharath Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-gray-600 mb-8">
            B.Tech CSE, 3rd Year at Hindusthan University, Chennai. Building innovative web solutions with modern technologies.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            View My Work
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
            <img
              src="https://via.placeholder.com/400"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 