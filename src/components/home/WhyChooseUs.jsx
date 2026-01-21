import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Factory,
  Award,
  Globe2,
  Microscope,
  Shield,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';

// Animated counter for stats
function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericPart = value.replace(/[^0-9.]/g, '');
      const suffix = value.replace(/[0-9.]/g, '');
      const target = parseFloat(numericPart);

      if (!isNaN(target)) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start) + suffix);
          }
        }, 16);

        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6">
      <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
        {displayValue}
      </div>
      <div className="text-slate-400 mt-2">{label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Factory,
      title: t('stateOfArtManufacturing'),
      description: t('manufacturingDesc')
    },
    {
      icon: Award,
      title: t('isoCertified'),
      description: t('isoDesc')
    },
    {
      icon: Microscope,
      title: t('advancedRD'),
      description: t('rdDesc')
    },
    {
      icon: Globe2,
      title: t('globalDistribution'),
      description: t('distributionDesc')
    },
    {
      icon: Shield,
      title: t('yearDurability'),
      description: t('durabilityDesc')
    },
    {
      icon: Clock,
      title: t('yearsExperienceFull'),
      description: t('experienceDesc')
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-400/10 rounded-full blur-[128px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t('professionalsChoice')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('whyChooseDesc')}
          </p>
        </motion.div>

        {/* Technical Superiority Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">Technical Superiority</h3>
            <p className="text-slate-400">Performance comparison vs. industry standards</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium">Performance Metric</th>
                  <th className="text-center py-4 px-6 bg-gray-500/10 text-white font-semibold">GAUDON Professional</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Industry Standard</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Tensile Strength', gaudon: '40+ psi', standard: '25 psi' },
                  { metric: 'UV Resistance', gaudon: '100% Silicone - No Yellowing', standard: 'Limited Resistance' },
                  { metric: 'Movement Capability', gaudon: '±50%', standard: '±25%' },
                  { metric: 'Service Life', gaudon: '30+ Years', standard: '10-15 Years' }
                ].map((row, idx) => (
                  <motion.tr
                    key={row.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-white font-medium">{row.metric}</td>
                    <td className="py-4 px-6 text-center bg-gray-500/10">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                        <span className="text-white font-semibold">{row.gaudon}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">{row.standard}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Custom Solution CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 bg-gradient-to-r from-gray-500/10 to-gray-400/10 rounded-2xl p-6 border border-gray-500/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-white mb-2">Looking for a Specialized Solution?</h4>
                <p className="text-slate-400">Our engineers can formulate custom silicone grades for your specific project requirements.</p>
              </div>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:scale-[1.02] shadow-lg">
                  Consult Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gray-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid md:grid-cols-4 gap-8 text-center"
        >
          <AnimatedStat value="30,000+" label={t('cartonsMonthly')} />
          <AnimatedStat value="50+" label={t('productModels')} />
          <AnimatedStat value="24/7" label={t('technicalSupport')} />
          <AnimatedStat value="99.5%" label={t('qualityPassRate')} />
        </motion.div>
      </div>
    </section>
  );
}
