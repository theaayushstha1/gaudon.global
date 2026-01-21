import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const metrics = [
  { label: 'Tensile Strength', jyb: 95, standard: 70, icon: TrendingUp },
  { label: 'UV Stability', jyb: 92, standard: 68, icon: Shield },
  { label: 'Adhesion Power', jyb: 88, standard: 72, icon: Zap }
];

export default function PerformanceComparison() {
  const duplicatedMetrics = [...metrics, ...metrics, ...metrics, ...metrics];

  return (
    <div className="bg-black border-t border-neutral-800">
      <div className="py-4 relative flex items-center">
        {/* GAUDON label - fixed on left */}
        <div className="flex-shrink-0 px-8 z-20 flex items-center gap-2">
          <span className="text-white font-bold text-lg">GAUDON</span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-white to-transparent" />
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-24 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-24 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10" />

        {/* Floating ticker - center */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
              },
            }}
          >
            {duplicatedMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3"
              >
                <item.icon className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-400 text-sm">{item.label}</span>
                <span className="text-white font-semibold">{item.jyb}%</span>
                <span className="text-neutral-600 text-xs">vs</span>
                <span className="text-neutral-500 text-sm">{item.standard}%</span>
                <span className="text-green-500 text-xs font-medium">+{item.jyb - item.standard}%</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Industry label - fixed on right */}
        <div className="flex-shrink-0 px-8 z-20 flex items-center gap-2">
          <div className="w-8 h-[1px] bg-gradient-to-l from-slate-400 to-transparent" />
          <span className="text-neutral-400 font-medium text-lg">Industry</span>
        </div>
      </div>
    </div>
  );
}
