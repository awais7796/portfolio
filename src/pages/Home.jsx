import React from 'react';

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm a passionate developer creating amazing digital experiences. 
            Explore my projects and get in touch to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View My Projects
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Creating cutting-edge solutions with modern technologies</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Creativity</h3>
            <p className="text-gray-600">Bringing unique ideas to life through code and design</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering high-quality solutions that exceed expectations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
