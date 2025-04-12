import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Bharath Kumar</h1>
            <div className="flex items-center mb-4">
              <span className="text-xl md:text-2xl text-blue-400 mr-2">Python & MERN stack Developer</span>
              <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#3776AB"/>
                <path d="M12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4Z" fill="#FFD43B"/>
              </svg>
            </div>
            <p className="text-lg md:text-xl mb-6">
              A passionate developer specializing in <span className="text-blue-400 font-semibold">Python</span> development, 
              with expertise in building robust and scalable applications. Currently pursuing my B.Tech in Computer Science 
              at VIT University, Vellore.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src="https://i.postimg.cc/Pr8V4WZ6/Whats-App-Image-2025-04-12-at-16-33-53-8f43e386.jpg"
                  alt="Bharath Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Python Expert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 