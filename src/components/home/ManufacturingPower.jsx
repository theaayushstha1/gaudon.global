import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  { 
    value: '15+', 
    label: 'Production Lines',
    description: 'Automated facilities'
  },
  { 
    value: '100+', 
    label: 'Countries', 
    description: 'Global reach'
  },
  { 
    value: '50+', 
    label: 'Products', 
    description: 'Diverse portfolio'
  },
  { 
    value: '25+', 
    label: 'Years', 
    description: 'Industry experience'
  }
];

export default function ManufacturingPower() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            World-class production facilities delivering consistent quality
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-white font-semibold text-lg mb-1">
                {item.label}
              </div>
              <div className="text-slate-500 text-sm">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}