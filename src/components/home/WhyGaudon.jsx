import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Clock, DollarSign, Award, Headphones, Truck, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const advantages = [
  {
    icon: Shield,
    title: '30-Year Warranty',
    description: 'Industry-leading warranty coverage on our premium structural products',
    highlight: '30 Years'
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Full quality management certification ensuring consistent product excellence',
    highlight: 'Certified'
  },
  {
    icon: DollarSign,
    title: 'Factory Direct',
    description: 'Competitive pricing without middleman markups - direct from manufacturer',
    highlight: 'Best Price'
  },
  {
    icon: Truck,
    title: 'Low MOQ',
    description: 'Accessible minimum orders starting at just 500 units for small businesses',
    highlight: '500 Units'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Direct access to our engineering team for specifications and guidance',
    highlight: '24/7 Support'
  },
  {
    icon: Clock,
    title: '25+ Years',
    description: 'Proven track record since 1999 with consistent quality and reliability',
    highlight: 'Experience'
  }
];

const comparisonPoints = [
  { feature: '30-Year Warranty', gaudon: true, others: false },
  { feature: 'Direct Factory Pricing', gaudon: true, others: false },
  { feature: 'ISO 9001:2015 Certified', gaudon: true, others: true },
  { feature: '500 Unit MOQ', gaudon: true, others: false },
  { feature: 'OEM/Private Label', gaudon: true, others: true },
  { feature: 'Free Samples', gaudon: true, others: false },
  { feature: 'Global Shipping', gaudon: true, others: true },
  { feature: 'Technical Documentation', gaudon: true, others: true }
];

export default function WhyGaudon() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 mb-4">
            <Zap className="w-4 h-4 text-amber-500" />
            The GAUDON Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 text-display">
            Why Choose GAUDON?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            See what sets us apart from other silicone sealant manufacturers
          </p>
        </motion.div>

        {/* Advantages Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {advantages.map((advantage, idx) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all h-full">
                {/* Icon & Highlight */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    {advantage.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{advantage.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Quick Comparison
            </h3>
            <p className="text-slate-500">
              See how GAUDON stacks up against typical competitors
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-900 text-white">
              <div className="p-5 font-medium">Feature</div>
              <div className="p-5 text-center border-l border-slate-700">
                <div className="font-bold text-lg">GAUDON</div>
                <div className="text-xs text-slate-400">Your Partner</div>
              </div>
              <div className="p-5 text-center border-l border-slate-700">
                <div className="font-medium text-slate-300">Others</div>
                <div className="text-xs text-slate-500">Competitors</div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonPoints.map((point, idx) => (
              <div
                key={point.feature}
                className={`grid grid-cols-3 ${idx !== comparisonPoints.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}
              >
                <div className="p-4 text-slate-700 font-medium text-sm">{point.feature}</div>
                <div className="p-4 text-center border-l border-slate-100">
                  {point.gaudon ? (
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <X className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center border-l border-slate-100">
                  {point.others ? (
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5 text-slate-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-slate-600 mb-5 text-lg">Ready to experience the GAUDON difference?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-full font-medium text-base">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('Products')}>
              <Button variant="outline" className="border-slate-300 hover:border-slate-400 px-8 py-6 rounded-full font-medium text-base">
                Browse Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
