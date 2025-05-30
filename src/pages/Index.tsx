
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TeslaModels from '@/components/TeslaModels';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="models">
          <TeslaModels />
        </div>
        <div id="solutions">
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
