import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, CheckCircle2, Zap } from 'lucide-react';

const comparisonData = [
  { label: 'Tensile Strength', jyb: 95, standard: 70 },
  { label: 'Heat Resistance', jyb: 90, standard: 65 },
  { label: 'Cure Speed', jyb: 85, standard: 60 },
  { label: 'UV Stability', jyb: 92, standard: 68 },
  { label: 'Adhesion Power', jyb: 88, standard: 72 }
];

const qualitySteps = [
  { 
    step: '01', 
    title: 'Raw Material Testing',
    icon: CheckCircle2,
    desc: 'Quality verification of all incoming materials'
  },
  { 
    step: '02', 
    title: 'Automated Mixing',
    icon: Zap,
    desc: 'Precision-controlled mixing systems'
  },
  { 
    step: '03', 
    title: 'Lab Sampling',
    icon: BarChart3,
    desc: 'Regular batch testing and analysis'
  },
  { 
    step: '04', 
    title: 'Final Inspection',
    icon: TrendingUp,
    desc: 'Comprehensive quality assurance checks'
  }
];

export default function TechnicalSuperiority() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
              <BarChart3 className="w-5 h-5 text-black" />
              <span className="text-black font-semibold text-sm">Technical Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Performance Beyond Standards
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              GAUDON silicone consistently outperforms industry benchmarks across all key metrics
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 border-2 border-neutral-100">
            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="mb-3">
                    <span className="font-bold text-neutral-900 text-lg">{item.label}</span>
                  </div>
                  <div className="flex gap-4">
                    {/* Standard Column */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-neutral-600">Industry Standard</span>
                        <span className="text-lg font-bold text-neutral-700">{item.standard}%</span>
                      </div>
                      <div className="bg-slate-100 rounded-xl overflow-hidden h-12 flex items-center">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.standard}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                          className="bg-gradient-to-r from-slate-300 to-slate-400 h-full rounded-xl shadow-sm"
                        />
                      </div>
                    </div>
                    
                    {/* GAUDON Column */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-black">GAUDON Silicone</span>
                        <span className="text-lg font-bold text-black">{item.jyb}%</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl overflow-hidden h-12 flex items-center">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.jyb}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                          className="bg-gradient-to-r from-black to-neutral-700 h-full rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quality Assurance Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Quality Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              4-Step Quality Assurance
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Every batch undergoes rigorous testing at multiple checkpoints
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {qualitySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-neutral-100 hover:border-gray-400 transition-all hover:shadow-xl group h-full">
                    <div className="text-6xl font-black text-neutral-100 mb-3 group-hover:text-gray-200 transition-colors">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-black to-neutral-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.desc}</p>
                  </div>
                  
                  {/* Connector Arrow */}
                  {idx < qualitySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}