import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ArtSpaceSection from '@/components/ArtSpaceSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <MenuSection />
      <ArtSpaceSection />
      <DeliverySection />
      <Footer />
      <CartModal />
    </main>
  );
};

export default Index;
