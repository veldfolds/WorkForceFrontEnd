import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bottom-0 relative w-full bg-opacity-40 from-blue-500 to-blue-900 bg-gradient-to-l backdrop-filter backdrop-blur-lg text-white py-4">
      <div className="container z-10 mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-lg text-center font-bold mb-2">Contact Us</h2>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-sm" />
            <a href="tel:+1234567890" className="text-gray-300 text-sm hover:text-white">+123 456 7890</a>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope className="text-sm" />
            <a href="mailto:info@hedgefund.com" className="text-gray-300 text-sm hover:text-white">info@hedgefund.com</a>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FaMapMarkerAlt className="text-sm" />
            <p className="text-gray-300 text-sm">123 Hedge St, Finance City</p>
          </div>
        </div>
        <div className="flex space-x-6 text-3xl">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaTwitter className='text-sm' />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin className='text-sm' />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook className='text-sm' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
