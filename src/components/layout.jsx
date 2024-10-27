// src/components/Layout.jsx
import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../auth/authconfig';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Layout = ({ children }) => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleRedirect = () => {
        console.log("login initiated");
        instance
             .loginPopup({
                ...loginRequest,
            })
            .catch((error) => console.log(error));
    };

    const handleLogout = () => {
        instance
            .logoutRedirect({
                ...loginRequest,
            })
            .catch((error) => console.log(error));
    }

    return (
      <div className="relative min-h-screen min-w-full ">
        

        <nav className="min-w-full h-15 fixed z-20 top-0 bg-opacity-40 bg-blue-500 backdrop-filter backdrop-blur-lg">
      <div className="md:h-16 w-100 h-15 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        
        <div className="text-white text-sm md:order-2 items-start flex md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
        <div className="text-indigo-500 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className={`text-white text-sm order-3 w-full md:w-auto md:order-2 items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row font-thin justify-between">
            <li className="md:px-4 md:py-2 scroll-smooth"><HashLink to={"/#home"}>Home</HashLink></li>
            <AuthenticatedTemplate>
              <li className="md:px-4 md:py-2 hover:text-indigo-400"><HashLink to={"/employees"}>Database</HashLink></li>
            </AuthenticatedTemplate>
            <li className="md:px-4 md:py-2 scroll-smooth hover:text-indigo-400"><HashLink to={"/#explore"}>Explore</HashLink></li>
            <li className="md:px-4 md:py-2 scroll-smooth hover:text-indigo-400"><HashLink to={"/#about"}>About</HashLink></li>
            <li className="md:px-4 md:py-2 scroll-smooth hover:text-indigo-400"><HashLink to={"/#contact"}>Contact</HashLink></li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <AuthenticatedTemplate>
            <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Logout</span>
            </button>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <button onClick={handleRedirect} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Login</span>
            </button>
          </UnauthenticatedTemplate>
        </div>
      </div>
    </nav>
        
        <main className="absolute z-10 top-0 w-full">
          {children}
        </main>
      </div>
    );
  };
  

export default Layout;