import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const applications = [
  {
    id: 1,
    title: 'Glass & Glazing Systems',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/e30d26afd_glasses2.jpg',
    industry: 'Glass & Glazing',
    benefits: ['Structural Bonding', 'UV Resistance', 'Weatherproof Seal'],
    description: 'High-strength structural adhesion for glass facades with 50-year durability guarantee.'
  },
  {
    id: 2,
    title: 'Construction & Building',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/a375d7151_architect-man-showing-something-project-his-colleague-foreman.jpg',
    industry: 'Construction',
    benefits: ['Professional Grade', 'Weather Resistant', 'Long-Lasting'],
    description: 'Expert-approved solutions for commercial and residential construction projects worldwide.'
  },
  {
    id: 3,
    title: 'Window & Door Sealing',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/d196ac8c1_carpenter-holds-glue-attaches-window.jpg',
    industry: 'Installation',
    benefits: ['Airtight Seal', 'Easy Application', 'Energy Efficiency'],
    description: 'Perfect for window and door installations with superior adhesion and weather protection.'
  },
  {
    id: 4,
    title: 'Industrial Manufacturing',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/ade72e0db_manufacturing1.png',
    industry: 'Manufacturing',
    benefits: ['High Performance', 'Chemical Resistant', 'Precision Molding'],
    description: 'Advanced solutions for industrial machinery, oil refineries, and chemical processing plants.'
  },
  {
    id: 5,
    title: 'Energy & Solar',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/e4654ed4d_energy2.jpg',
    industry: 'Energy',
    benefits: ['UV Stable', '25+ Year Life', 'Thermal Protection'],
    description: 'Prevents moisture ingress and maintains adhesion through extreme temperature cycles.'
  },
  {
    id: 6,
    title: 'Marine & Offshore',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/fe5f76e2a_marine1.jpg',
    industry: 'Marine',
    benefits: ['Saltwater Proof', 'Flexible Joint', 'Anti-Corrosion'],
    description: 'Resists saltwater corrosion and maintains flexibility in harsh marine environments.'
  }
];

export default function SiliconeInAction() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3 block">Applications</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 text-display">
            Industrial Solutions
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Professional solutions for high-performance industries worldwide
          </p>
        </motion.div>

        {/* Applications Grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              onHoverStart={() => setHoveredId(app.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-[380px] shadow-lg"
            >
              {/* Image with zoom effect */}
              <motion.img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                animate={{ scale: hoveredId === app.id ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Hover State Overlay */}
              <AnimatePresence>
                {hoveredId === app.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-gray-900/70 p-6 flex flex-col justify-end"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="inline-block px-4 py-1.5 bg-white text-slate-900 text-sm font-medium rounded-full mb-4">
                        {app.industry}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                        {app.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        {app.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-white/80">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-gray-400" />
                            <span className="text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/20">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default State */}
              {hoveredId !== app.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-block px-4 py-1.5 bg-white/95 text-slate-900 text-xs font-medium rounded-full mb-3 w-fit">
                    {app.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {app.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
