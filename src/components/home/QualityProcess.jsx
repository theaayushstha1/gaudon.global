import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Raw Material Testing',
    description: 'Quality verification of all incoming materials',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/961605ea1_test.jpg'
  },
  {
    number: '02',
    title: 'Automated Mixing',
    description: 'Precision-controlled mixing systems',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/308704039_Screenshot2026-01-10152347.png'
  },
  {
    number: '03',
    title: 'Lab Sampling',
    description: 'Regular batch testing and analysis',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/dcc43a660_lab.jpg'
  },
  {
    number: '04',
    title: 'Final Inspection',
    description: 'Comprehensive quality assurance checks',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/94040bfce_final.jpg'
  }
];

export default function QualityProcess() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Quality Process
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every batch undergoes rigorous testing at multiple checkpoints
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 relative">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-lg overflow-hidden border-2 border-slate-100 hover:border-gray-400 hover:shadow-lg transition-all group h-full">
                    <div className="h-36 bg-slate-100 relative overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg z-10">
                        <span className="text-xl font-black text-gray-600">{step.number}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center absolute top-1/3 transform -translate-y-1/2 pointer-events-none" style={{ left: `${(idx + 1) * 25 - 2.5}%` }}>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}