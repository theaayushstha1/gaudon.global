import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Construction',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/fc804ec42_construction1.jpg'
  },
  {
    name: 'Glass & Glazing',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/16cb8a3f0_glasses1.jpg'
  },
  {
    name: 'Manufacturing',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/960ce5067_manufacturing2.jpg'
  },
  {
    name: 'Energy & Solar',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/e4654ed4d_energy2.jpg'
  },
  {
    name: 'Marine',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/fe5f76e2a_marine1.jpg'
  },
  {
    name: 'Windows & Doors',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/d196ac8c1_carpenter-holds-glue-attaches-window.jpg'
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-0">
      {/* Industries Section - White Background */}
      <div className="bg-white pt-12 pb-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Industries Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              Industries We Serve
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Professional silicone solutions for diverse sectors worldwide
            </p>
          </motion.div>

          {/* Floating Images Marquee - Smaller */}
          <div className="relative overflow-hidden -mx-4 md:-mx-8">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee">
              {/* First set */}
              {industries.map((industry, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-56 mx-2"
                >
                  <motion.div
                    className="relative h-36 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-sm">{industry.name}</h4>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {industries.map((industry, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-56 mx-2"
                >
                  <motion.div
                    className="relative h-36 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-sm">{industry.name}</h4>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
