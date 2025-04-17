import React from 'react';
import Logo from './logo'; 

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4 py-4  flex justify-center items-center gap-[0.2em] flex-col">
     
        <ul className="flex space-x-6  h-full p-6 gap-1">
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
