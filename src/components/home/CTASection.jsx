import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}
    >
      <div className="absolute inset-0 pattern-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 text-display">
              {t('readyToSeal')}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              {t('ctaDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-5 text-base rounded-full font-medium transition-all duration-200"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  {t('requestQuote')}
                </Button>
              </Link>
              <a href="mailto:gaudonusallc@gmail.com">
                <Button
                  size="lg"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-5 text-base rounded-full font-medium transition-all duration-200"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  {t('talkToSales')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
