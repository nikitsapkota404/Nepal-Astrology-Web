import React from 'react';
import Logo from './logo.js';
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Logo/>
      <h1 className="text-2xl font-bold text-indigo-600 justify-center w-full  flex">NepalAstro</h1>
    </header>
  );
};

export default Header;
