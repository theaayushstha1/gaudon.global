import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Droplets, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';

const featuredProducts = [
  {
    model: "9009",
    name: "Two-Component Structural Sealant",
    category: "Structural",
    icon: Building2,
    features: ["30 Year Warranty", "High Strength", "Curtain Wall"],
    badge: "PREMIUM"
  },
  {
    model: "999",
    name: "High-Performance Weatherproofing",
    category: "Weatherproof",
    icon: Shield,
    features: ["20 Year Warranty", "UV Resistant", "All Weather"],
    badge: "BESTSELLER"
  },
  {
    model: "9900",
    name: "High-Strength Glass Sealant",
    category: "Glass",
    icon: Droplets,
    features: ["Crystal Clear", "Non-Yellowing", "Aquarium Safe"],
    badge: "POPULAR"
  },
  {
    model: "7900",
    name: "Electronics RTV Silicone",
    category: "Specialty",
    icon: Zap,
    features: ["Heat Resistant", "Electrical Safe", "Industrial"],
    badge: "INDUSTRIAL"
  }
];

export default function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#000000] mb-4 text-display">
            {t('featuredProductLines')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.model}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                {/* Icon container */}
                <div className="relative h-44 flex items-center justify-center bg-slate-50">
                  <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 bg-[#000000] text-white rounded-full">
                    {product.badge}
                  </span>

                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-[#000000]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </span>

                  <h3 className="text-lg font-semibold text-[#000000] mb-1">
                    GAUDON {product.model}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {product.name}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link to={createPageUrl('Products')}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-slate-700 hover:text-[#000000] hover:bg-slate-100 group/btn"
                      >
                        {t('viewDetails')}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Products')}>
            <Button
              size="lg"
              className="bg-[#000000] hover:bg-[#111111] text-white px-8 py-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('viewAllProducts')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
