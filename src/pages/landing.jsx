// src/pages/HomePage.jsx
import { getEmployees } from '../services/employeeservice';
import { FloatingActionButton } from '../components/fab';
import { useState, useEffect } from 'react';
import landingimage from '../assets/landingbg1.jpg';

const Landing = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-transparent flex relative items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${landingimage})` }}></div>
      <div className="mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mx-auto text-center">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Dynamic
            <span className="text-5xl sm:text-7xl"> Hedge</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Bringing the brightest minds together to navigate complex financial markets. Collaboration and innovation drive our success.
          </p>
          <div className="flex mt-8 justify-center">
            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400">
              Get started
            </a>
            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;