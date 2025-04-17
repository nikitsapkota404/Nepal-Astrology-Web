import React from 'react';
import Header from './components/header.js';

import Footer from './components/footer.js';
import Hero from './components/hero.js';


const App = () => {
  return (
    <div className="font-sans">
      <Header />
     
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to Nepal Astrology 🔭</h2>
        <p className="text-gray-700">
          Get personalized horoscopes, birth charts, and astrological insights based on Nepali Vedic astrology.
        </p>
        <Hero/>
      </main>
    
      <Footer/>
    </div>
  
  );
};

export default App;
