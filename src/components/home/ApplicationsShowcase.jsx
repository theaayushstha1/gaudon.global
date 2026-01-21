import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Waves, Sun, ChevronRight } from 'lucide-react';
import { useLanguage } from '../shared/LanguageContext';

const applications = [
  {
    id: 'curtain-wall',
    icon: Building2,
    title: 'Curtain Wall Systems',
    description: 'High-performance structural sealants for glass curtain walls, aluminum facades, and modern architectural projects.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    products: ['20000', '10000', '999']
  },
  {
    id: 'doors-windows',
    icon: Home,
    title: 'Doors & Windows',
    description: 'Weather-resistant sealants ensuring airtight and watertight seals for residential and commercial installations.',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&auto=format&fit=crop&q=80',
    products: ['7800', '7300', '7200']
  },
  {
    id: 'bathroom-kitchen',
    icon: Waves,
    title: 'Bathroom & Kitchen',
    description: 'Anti-mildew, waterproof sealants designed for wet environments with long-lasting performance.',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&auto=format&fit=crop&q=80',
    products: ['9600', '8800', '8000']
  },
  {
    id: 'solar-roof',
    icon: Sun,
    title: 'Solar & Roofing',
    description: 'UV-stable, weatherproof sealants for solar panel installations and roofing applications.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80',
    products: ['9700', '777', '793-A']
  }
];

export default function ApplicationsShowcase() {
  const { t } = useLanguage();
  const [activeApp, setActiveApp] = useState(applications[0]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-black font-semibold tracking-wider uppercase text-sm">{t('applications')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 mb-4">
            {t('solutionsForEveryProject')}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            {t('applicationsDesc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Application selector */}
          <div className="space-y-4">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveApp(app)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                    activeApp.id === app.id
                      ? 'bg-gradient-to-r from-black to-neutral-700 text-white shadow-lg shadow-gray-500/25'
                      : 'bg-slate-50 hover:bg-slate-100 text-neutral-900'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeApp.id === app.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <app.icon className={`w-6 h-6 ${
                        activeApp.id === app.id ? 'text-white' : 'text-black'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">
                        {app.id === 'curtain-wall' && t('curtainWall')}
                        {app.id === 'doors-windows' && t('doorsWindows')}
                        {app.id === 'bathroom-kitchen' && t('bathroomKitchen')}
                        {app.id === 'solar-roof' && t('solarRoof')}
                      </h3>
                      <p className={`text-sm mt-1 ${
                        activeApp.id === app.id ? 'text-white/80' : 'text-neutral-500'
                      }`}>
                        {app.id === 'curtain-wall' && t('curtainWallDesc')}
                        {app.id === 'doors-windows' && t('doorsWindowsDesc')}
                        {app.id === 'bathroom-kitchen' && t('bathroomKitchenDesc')}
                        {app.id === 'solar-roof' && t('solarRoofDesc')}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeApp.id === app.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  
                  {activeApp.id === app.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-white/20"
                    >
                      <p className="text-sm text-white/70 mb-2">{t('recommendedProducts')}</p>
                      <div className="flex flex-wrap gap-2">
                        {app.products.map((product) => (
                          <span key={product} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                            GAUDON {product}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Image showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeApp.id}
                  src={activeApp.image}
                  alt={activeApp.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-neutral-700 flex items-center justify-center">
                  <activeApp.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-neutral-900">
                  {activeApp.id === 'curtain-wall' && t('curtainWall')}
                  {activeApp.id === 'doors-windows' && t('doorsWindows')}
                  {activeApp.id === 'bathroom-kitchen' && t('bathroomKitchen')}
                  {activeApp.id === 'solar-roof' && t('solarRoof')}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {t('trustedWorldwide')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}