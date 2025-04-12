import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <a href="mailto:yourname@gmail.com" className="text-blue-600 hover:text-blue-800">
                   Bharathkumar010101@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                <a
                  href="https://github.com/bharathkumar39293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  github.com/bharathkumar39293
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 