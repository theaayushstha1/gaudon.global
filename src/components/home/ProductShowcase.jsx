import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

// Top 6 products for the slider
const featuredProducts = [
  {
    id: 'gaudon-999',
    model: 'GAUDON 999',
    name: 'High-Performance Structural Sealant',
    warranty: '20 Years',
    category: 'Structural',
    description: 'Our best-selling neutral cure structural sealant with exceptional UV resistance and high bonding strength. Perfect for glass curtain walls, metal panels, and skylights.',
    features: ['Neutral Cure', 'UV Resistant', 'High Strength', '-50°C to +100°C'],
    image: '/images/products/placeholder-999.png'
  },
  {
    id: 'gaudon-9009',
    model: 'GAUDON 9009',
    name: 'Two-Component Structural Silicone',
    warranty: '30 Years',
    category: 'Structural',
    description: 'Premium two-component structural sealant for demanding curtain wall applications. Load-bearing capability with ISO certification.',
    features: ['Two-Component', 'Load Bearing', 'ISO Certified', '30+ Year Lifespan'],
    image: '/images/products/placeholder-9009.png'
  },
  {
    id: 'gaudon-20000',
    model: 'GAUDON 20000',
    name: 'High-Strength Curtain Wall Sealant',
    warranty: '30 Years',
    category: 'Structural',
    description: 'Our flagship curtain wall sealant engineered for maximum strength and durability. Trusted on landmark buildings worldwide.',
    features: ['Curtain Wall', 'Premium Grade', 'Single Component', 'Fast Cure'],
    image: '/images/products/placeholder-20000.png'
  },
  {
    id: 'gaudon-7800',
    model: 'GAUDON 7800',
    name: 'Weatherproofing Silicone Sealant',
    warranty: '20 Years',
    category: 'Weatherproof',
    description: 'Versatile weatherproofing solution for all climate conditions. Excellent flexibility and adhesion on multiple substrates.',
    features: ['All Weather', 'Flexible', 'Fast Cure', 'Multi-Surface'],
    image: '/images/products/placeholder-7800.png'
  },
  {
    id: 'gaudon-9900',
    model: 'GAUDON 9900',
    name: 'High-Strength Acidic Glass Sealant',
    warranty: '12 Years',
    category: 'Glass',
    description: 'Crystal clear glass sealant that never yellows. Ideal for aquariums, display cases, and large glass installations.',
    features: ['Non-Yellowing', 'Aquarium Safe', 'High Elasticity', 'Transparent'],
    image: '/images/products/placeholder-9900.png'
  },
  {
    id: 'gaudon-7900',
    model: 'GAUDON 7900',
    name: 'Electronics & Industrial RTV Silicone',
    warranty: '10 Years',
    category: 'Specialty',
    description: 'Specialized RTV silicone for electronics and high-temperature applications. Excellent electrical insulation properties.',
    features: ['Heat Resistant', 'Up to 180°C', 'Electronic Safe', 'Industrial Grade'],
    image: '/images/products/placeholder-7900.png'
  }
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = featuredProducts[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

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
        <div className="max-w-6xl mx-auto">
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
                  className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center overflow-hidden"
                >
                  {/* Product Visual Placeholder */}
                  <div className="text-center p-8">
                    {/* Cartridge shape placeholder */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-32 h-52 mx-auto bg-gradient-to-b from-slate-700 to-slate-900 rounded-t-2xl rounded-b-lg shadow-2xl">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-600 rounded" />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                          <div className="text-xs font-bold text-white/80 tracking-wider">GAUDON</div>
                          <div className="text-[10px] text-white/60 mt-1">{currentProduct.model.split(' ')[1]}</div>
                        </div>
                      </div>
                      <div className="w-10 h-12 mx-auto bg-gradient-to-b from-slate-600 to-slate-800 -mt-1 rounded-b-lg" />
                    </div>
                  </div>

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
                  <Link to={createPageUrl('Products')}>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-full font-medium text-base">
                      Learn More
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
                        ? 'w-10 h-3 bg-slate-900 rounded-full'
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
