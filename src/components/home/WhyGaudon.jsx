import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Sun, Wind, ThermometerSun, Sparkles, Clock, BadgeCheck } from 'lucide-react';

const features = [
  { icon: Sun, title: 'UV Resistant' },
  { icon: Droplets, title: 'Waterproof' },
  { icon: Wind, title: 'Weather Tough' },
  { icon: ThermometerSun, title: 'Heat Stable' },
  { icon: Sparkles, title: 'Premium Formula' },
  { icon: Shield, title: 'Long Lasting' },
  { icon: Clock, title: 'Easy Application' },
  { icon: BadgeCheck, title: 'Pro Grade' },
];

export default function WhyGaudon() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Why Choose GAUDON?
          </h2>
          <p className="text-slate-500">
            Professional-grade sealants built for performance
          </p>
        </motion.div>

        {/* Features Grid - Icons + Titles Only */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
