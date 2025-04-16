import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard title="Birth Chart" description="Generate your Janmakundali using Vedic methods." />
          <FeatureCard title="Daily Horoscope" description="Get daily predictions." />
          <FeatureCard title="Panchanga" description="Know today’s tithi, nakchetra" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
