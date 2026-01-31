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
    <section className="py-16 md:py-24 relative overflow-hidden min-h-[400px] md:min-h-[450px] lg:min-h-[480px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-factory-worker.jpg"
          alt="Factory worker showing okay sign"
          className="w-full h-full object-cover object-[30%_25%]"
        />
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-4 md:pt-6">
        <div className="max-w-2xl ml-auto text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
              {t('readyToSeal')}
            </h2>
            <p className="text-lg text-white/80 mb-8 ml-auto max-w-xl leading-relaxed drop-shadow-md">
              {t('ctaDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-5 text-base rounded-full font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  {t('requestQuote')}
                </Button>
              </Link>
              <a href="mailto:gaudonusallc@gmail.com">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-5 text-base rounded-full font-semibold transition-all duration-200"
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
