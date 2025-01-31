import React from 'react';

const Skills = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Development Skills</h2>

        {/* Development Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Development Column */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Solidity</li>
              <li>JavaScript</li>
              <li>Go Lang</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Ruby</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          {/* Front-End Column */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Front-End</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>React-JS</li>
              <li>Web3-React</li>
              <li>React-Native</li>
              <li>React-Redux</li>
              <li>Redux-Saga</li>
              <li>TypeScript</li>
              <li>Immutable-JS</li>
              <li>Reselect</li>
              <li>Bootstrap</li>
              <li>Reactstrap</li>
              <li>Material-Ui</li>
            </ul>
          </div>

          {/* Back-End Column */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Back-End</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Express.js (Senior)</li>
              <li>Web3</li>
              <li>Web3-eth</li>
              <li>Flask</li>
              <li>Ruby On Rails</li>
            </ul>
          </div>

          {/* Software Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Software</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Databases: MySQL, MongoDB</li>
              <li>OS: Windows, Mac OS</li>
              <li>Servers: Nginx</li>
            </ul>
          </div>

          {/* Version Control Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Version Control Systems</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>GIT</li>
            </ul>
          </div>

          {/* Environments Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Environments</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>WebStorm</li>
              <li>Intellij</li>
              <li>Command Line</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
