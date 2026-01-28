import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Product categories with lifestyle images
const productCategories = [
  {
    id: 'silicone',
    image: '/images/categories/silicone-sealants.png',
    link: '/products?category=silicone',
    alt: '100% Silicone Sealants'
  },
  {
    id: 'insulating_foam',
    image: '/images/categories/insulating-foams.png',
    link: '/products?category=insulating_foam',
    alt: 'Insulating Foams'
  },
  {
    id: 'acrylic_latex',
    image: '/images/categories/acrylic-latex.png',
    link: '/products?category=acrylic_latex',
    alt: 'Acrylic Latex'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Explore by Product Type
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Trusted solutions for sealing, bonding, and insulating
          </p>
        </motion.div>

        {/* Product Category Cards - Clean clickable images */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={category.link} className="group block">
                <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm mb-3">Looking for something specific?</p>
          <Link to="/products">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 rounded-full font-medium text-sm">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
