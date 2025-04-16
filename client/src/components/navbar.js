
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Nepal Astrology</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Horoscope</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Birth Chart</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Panchang</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">About us</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
