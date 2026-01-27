import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

// Top 6 products for the slider
const featuredProducts = [
  {
    id: 'gaudon-g1',
    model: 'GAUDON G1',
    name: 'Kitchen & Bath Silicone Sealant',
    warranty: '10 Years',
    category: 'Kitchen & Bath',
    description: 'Premium mold-free silicone sealant designed for kitchen and bathroom applications. Features advanced 3X mold protection and 100% waterproof seal.',
    features: ['Mold Free', '3X Protection', 'Waterproof', 'Low Odor'],
    image: '/images/products/gaudon-g1-kitchen-bath.png'
  },
  {
    id: 'gaudon-g2',
    model: 'GAUDON G2',
    name: 'Window & Door Silicone Sealant',
    warranty: '30 Years',
    category: 'Weatherproof',
    description: 'Weather Tough silicone sealant engineered for extreme weather defense. Up to 30-year durability for windows and doors.',
    features: ['30-Year', 'Weather Tough', 'Flexible', 'Neutral Cure'],
    image: '/images/products/gaudon-g2-window-door.png'
  },
  {
    id: 'gaudon-d1',
    model: 'GAUDON D1',
    name: 'All-Purpose Silicone Sealant',
    warranty: '10 Years',
    category: 'Glass & Aquarium',
    description: 'Professional grade all-purpose silicone with aquarium safe formula. Ultra clear finish and 100% waterproof bond.',
    features: ['Aquarium Safe', 'Ultra Clear', 'Professional', '100% Silicone'],
    image: '/images/products/gaudon-d1-silicone.png'
  },
  {
    id: 'gaudon-d2',
    model: 'GAUDON D2',
    name: 'Heavy Duty Silicone Sealant',
    warranty: '15 Years',
    category: 'Construction',
    description: 'Heavy duty all-purpose silicone with 3X enhanced adhesion. Fast cure performance for the toughest jobs.',
    features: ['Heavy Duty', '3X Adhesion', 'Fast Cure', 'Waterproof'],
    image: '/images/products/gaudon-d2-heavy-duty.png'
  },
  {
    id: 'gaudon-b1',
    model: 'GAUDON B1',
    name: 'Acrylic Latex Sealant',
    warranty: '10 Years',
    category: 'Acrylic',
    description: 'Water-based acrylic latex sealant for everyday interior use. Easy one-step application with paintable finish.',
    features: ['Paintable', 'Water-Based', 'Easy Apply', 'Interior'],
    image: '/images/products/gaudon-b1-acrylic-latex.jpg'
  },
  {
    id: 'gaudon-b2',
    model: 'GAUDON B2',
    name: 'Acrylic Latex Sealant',
    warranty: '5 Years',
    category: 'Acrylic',
    description: 'Water-based acrylic latex sealant for everyday interior sealing and finishing tasks. Easy apply with paintable finish.',
    features: ['Paintable', 'Easy Apply', 'Water Resistant', 'Interior'],
    image: '/images/products/gaudon-b2-acrylic-latex.jpg'
  }
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentProduct = featuredProducts[currentIndex];

  const nextProduct = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  }, []);

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextProduct();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, nextProduct]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3 block">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 text-display">
            Our Best Sellers
          </h2>
        </motion.div>

        {/* Product Slider */}
        <div
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl flex items-center justify-center overflow-hidden"
                >
                  {/* Product Image */}
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="h-[85%] w-auto object-contain drop-shadow-xl"
                  />

                  {/* Warranty Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {currentProduct.warranty}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                      {currentProduct.category}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevProduct}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                    {currentProduct.model}
                  </h3>
                  <p className="text-xl text-slate-600 mb-6">
                    {currentProduct.name}
                  </p>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {currentProduct.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={createPageUrl(`ProductDetail?id=${currentProduct.id}`)}>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-full font-medium text-base">
                      View Product Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Product Dots */}
              <div className="flex items-center gap-3 mt-10">
                {featuredProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all ${
                      idx === currentIndex
                        ? 'w-10 h-3 bg-emerald-600 rounded-full'
                        : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link to={createPageUrl('Products')}>
            <Button variant="outline" className="border-slate-300 hover:border-slate-400 px-8 py-6 rounded-full font-medium text-base">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
