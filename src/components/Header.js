import React from 'react';

const Header = () => {
  return (
    <header className="bg-[url('https://collection.cloudinary.com/dnritps8l/4ebfb106622c53fd1850a8dcf46a4e12')] bg-cover bg-center shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Bharath Kumar</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 