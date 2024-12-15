
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">Sexuality</div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/About" className="text-white hover:text-gray-400">About</a>
          {/* <a href="#services" className="text-white hover:text-gray-400">Services</a> */}
          <a href="/Contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-white p-2 hover:bg-gray-700">Home</a>
          <a href="/About" className="block text-white p-2 hover:bg-gray-700">About</a>
          {/* <a href="#services" className="block text-white p-2 hover:bg-gray-700">Services</a> */}
          <a href="/Contact" className="block text-white p-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;