import React from 'react';

const Header = () => {
  return (
    <header className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <nav className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Utukuru Bharath Kumar</h1>
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-white hover:text-blue-300 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-blue-300 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-blue-300 transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-300 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 