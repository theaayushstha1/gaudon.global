import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustIndicators from '../components/home/TrustIndicators';
import ProductShowcase from '../components/home/ProductShowcase';
import CustomerReviews from '../components/home/CustomerReviews';
import SmartProductFinder from '../components/home/SmartProductFinder';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero - First impression */}
      <HeroSection />

      {/* Trust stats + Industries marquee */}
      <TrustIndicators />

      {/* Featured best-selling products with slider */}
      <ProductShowcase />

      {/* Customer testimonials */}
      <CustomerReviews />

      {/* Interactive product finder tool */}
      <SmartProductFinder />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
