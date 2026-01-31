import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[550px] md:min-h-[600px] w-full overflow-hidden pt-20 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/modern-interior.jpg"
          alt="Modern interior with glass walls"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="container mx-auto px-6 lg:px-12 flex-1 flex items-start pt-8 md:items-center md:pt-0">
          {/* Left: GAUDON + Premium Silicone Sealants + Slogan + Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg"
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-1 text-white"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
            >
              GAUDON
            </h1>
            <p
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 tracking-wide mb-2"
              style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' }}
            >
              Professional Grade Sealants
            </p>
            <p
              className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
            >
              Construction • HVAC • Automotive • Industrial
            </p>
            <p
              className="text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight mb-4"
              style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' }}
            >
              We'll Get It Done. For Decades.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 text-white text-sm"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
              >
                <Award className="w-4 h-4 text-amber-400" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
                <span className="font-semibold">25+ Years Experience</span>
              </div>
              <div
                className="flex items-center gap-2 text-white text-sm"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
              >
                <Globe className="w-4 h-4 text-amber-400" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
                <span className="font-semibold">100+ Countries</span>
              </div>
              <div
                className="flex items-center gap-2 text-white text-sm"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
              >
                <Shield className="w-4 h-4 text-amber-400" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
                <span className="font-semibold">30 Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Right: Order Today + Description + Buttons */}
        <div className="container mx-auto px-6 lg:px-12 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex justify-end"
          >
            <div className="text-right max-w-sm">
              <p
                className="font-black text-xl lg:text-2xl mb-2 tracking-tight text-white"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)' }}
              >
                Order Today
              </p>
              <p
                className="text-sm text-white leading-relaxed mb-3"
                style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.8)' }}
              >
                Premium silicone sealants manufacturer. 25+ years of expertise, professional grade quality, flexible MOQ.
              </p>
              <div className="flex flex-wrap gap-3 justify-end">
                <Link to={createPageUrl('Products')}>
                  <Button
                    size="default"
                    className="bg-white text-black hover:bg-white/90 px-5 py-2 text-sm rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to={createPageUrl('OEM')}>
                  <Button
                    size="default"
                    className="bg-white text-black hover:bg-white/90 px-5 py-2 text-sm rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                  >
                    Explore Private Labeling
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
