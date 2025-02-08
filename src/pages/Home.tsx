import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="home-page min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Quantum Leaps - Intelligent Healthcare Solutions</title>
        <meta
          name="description"
          content="Transforming healthcare through innovative technology solutions that enhance patient care and streamline medical operations."
        />
      </Helmet>

      <Navbar />

      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
