import React from 'react';
import Logo from './logo.js';
import Navbar from './navbar.js';
const Header = () => {
  return (
    <header className="bg-yellow-100 shadow-md p-4 flex justify-between items-center">
      <Logo/>
      <Navbar/>
      <button className='p-2 rounded-md border border-black-1'>Contact us</button>
    </header>
  );
};

export default Header;
