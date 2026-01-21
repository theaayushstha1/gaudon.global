import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguage } from '../components/shared/LanguageContext';

function LayoutContent({ children, currentPageName }) {
  const { t } = useLanguage();

  // Pages with light backgrounds (need dark nav text when not scrolled)
  const lightBackgroundPages = ['Certifications', 'About'];
  const hasLightBackground = lightBackgroundPages.includes(currentPageName);

  const navLinks = [
    { name: t('home'), page: 'Home' },
    { name: t('products'), page: 'Products' },
    { name: 'OEM Services', page: 'OEM' },
    { name: t('achievements'), page: 'Achievements' },
    { name: 'Calculator', page: 'Calculator' },
    { name: t('contact'), page: 'Contact' }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is 200vh, change navbar after scrolling past
      const heroScrollEnd = window.innerHeight * 1.8;
      setIsScrolled(window.scrollY > heroScrollEnd);
      setShowScrollTop(window.scrollY > 500);
    };

    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Main Navigation - Clean, professional */}
      <header
        className={`fixed z-50 left-0 right-0 transition-all duration-300 ease-out ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : hasLightBackground
              ? 'top-0 bg-white/95 backdrop-blur-md border-b border-slate-200'
              : 'top-0 lg:top-10 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/gaudon-logo.png"
                  alt="GAUDON Logo"
                  className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'} w-auto object-contain ${
                    !isScrolled && !hasLightBackground ? 'brightness-0 invert' : ''
                  }`}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentPageName === link.page
                      ? (isScrolled || hasLightBackground
                          ? 'text-[#000000] bg-slate-100'
                          : 'text-white bg-white/10')
                      : (isScrolled || hasLightBackground
                          ? 'text-slate-600 hover:text-[#000000] hover:bg-slate-50'
                          : 'text-slate-300 hover:text-white hover:bg-white/5')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button
                  className={`rounded-full px-6 font-medium text-sm transition-all duration-200 ${
                    isScrolled || hasLightBackground
                      ? 'bg-[#000000] hover:bg-[#111111] text-white'
                      : 'bg-white hover:bg-slate-100 text-[#000000]'
                  }`}
                >
                  {t('getQuote')}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled || hasLightBackground ? 'text-[#000000] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-slate-200"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      currentPageName === link.page
                        ? 'bg-slate-100 text-[#000000]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#000000]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full mt-4 bg-[#000000] hover:bg-[#111111] text-white rounded-xl font-medium">
                    {t('getQuote')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer - Clean, professional dark */}
      <footer className="bg-[#000000] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
                <img
                  src="/gaudon-logo.png"
                  alt="GAUDON Logo"
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Professional silicone sealant manufacturer since 1999.
                ISO 9001:2015 certified, serving 100+ countries worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t('quickLinks')}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Structural Sealants</li>
                <li className="hover:text-white transition-colors cursor-pointer">Weatherproofing Sealants</li>
                <li className="hover:text-white transition-colors cursor-pointer">Glass Sealants</li>
                <li className="hover:text-white transition-colors cursor-pointer">Specialty Silicones</li>
                <li className="hover:text-white transition-colors cursor-pointer">Construction Adhesives</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t('contactUs')}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <span className="text-slate-500 block mb-1">{t('address')}</span>
                  <span>Foshan City, Guangdong Province, China</span>
                </li>
                <li>
                  <span className="text-slate-500 block mb-1">Email</span>
                  <a href="mailto:info@gaudon.com" className="hover:text-white transition-colors">
                    info@gaudon.com
                  </a>
                </li>
                <li>
                  <span className="text-slate-500 block mb-1">Website</span>
                  <a href="https://gaudon.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    gaudon.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} GAUDON. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {['ISO 9001:2015', 'CNAS', 'IAF'].map((cert, index) => (
                <span
                  key={index}
                  className="text-xs text-slate-500 px-3 py-1.5 rounded-full border border-white/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#000000] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#111111] transition-colors z-40"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function Layout(props) {
  return (
    <LanguageProvider>
      <LayoutContent {...props} />
    </LanguageProvider>
  );
}
