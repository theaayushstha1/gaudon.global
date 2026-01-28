import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguage } from '../components/shared/LanguageContext';

function LayoutContent({ children, currentPageName }) {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('home'), page: 'Home' },
    { name: t('products'), page: 'Products' },
    { name: 'OEM Services', page: 'OEM' },
    { name: 'About Us', page: 'About' },
    { name: 'Calculator', page: 'Calculator' },
    { name: t('contact'), page: 'Contact' }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Pages with light backgrounds that need dark navbar text from the start
  const lightBackgroundPages = ['ProductDetail'];
  const hasLightBackground = lightBackgroundPages.includes(currentPageName);

  useEffect(() => {
    const handleScroll = () => {
      // Show solid navbar after scrolling 100px
      setIsScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 500);
    };

    document.documentElement.style.scrollBehavior = 'smooth';
    handleScroll(); // Check initial state

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
        className={`fixed left-0 right-0 z-[100] top-0 ${
          isScrolled || hasLightBackground
            ? 'bg-white border-b border-slate-200 shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ transition: 'background-color 0.3s ease-out, box-shadow 0.3s ease-out' }}
      >
        <div className="container mx-auto px-4">
          <nav className={`flex items-center justify-between transition-all duration-300 ${isScrolled || hasLightBackground ? 'h-20' : 'h-32'}`}>
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/gaudon-mascot-logo.png"
                  alt="GAUDON Logo"
                  className={`transition-all duration-300 ${isScrolled || hasLightBackground ? 'h-16' : 'h-28'} w-auto object-contain`}
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
                          ? 'text-slate-900 bg-slate-100'
                          : 'text-white bg-white/10')
                      : (isScrolled || hasLightBackground
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-900'
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
                isScrolled || hasLightBackground
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[99] bg-slate-950"
          >
            {/* Header with logo and close button */}
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-32">
                <Link to={createPageUrl('Home')} onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/gaudon-mascot-logo.png"
                    alt="GAUDON Logo"
                    className="h-28 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Links */}
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    currentPageName === link.page
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 rounded-xl font-medium bg-white hover:bg-slate-100 text-slate-900">
                  {t('getQuote')}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  src="/gaudon-mascot-logo.png"
                  alt="GAUDON Logo"
                  className="h-36 w-auto object-contain"
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Professional silicone sealant manufacturer since 1999.
                Serving 100+ countries worldwide.
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
                <li>
                  <Link to="/products?category=silicone" className="hover:text-white transition-colors">
                    100% Silicone Sealants
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=insulating_foam" className="hover:text-white transition-colors">
                    Insulating Foams
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=acrylic_latex" className="hover:text-white transition-colors">
                    Acrylic Latex Sealants
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t('contactUs')}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <span className="text-slate-500 block mb-1">Contact / WhatsApp</span>
                  <a href="tel:+16267789568" className="hover:text-white transition-colors">
                    +1 626-778-9568
                  </a>
                </li>
                <li>
                  <span className="text-slate-500 block mb-1">Email</span>
                  <a href="mailto:gaudonusallc@gmail.com" className="hover:text-white transition-colors">
                    gaudonusallc@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-slate-500 block mb-1">Location</span>
                  <span>USA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} GAUDON USA LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 px-3 py-1.5 rounded-full border border-white/20">
                Professional Grade
              </span>
              <span className="text-xs text-slate-500 px-3 py-1.5 rounded-full border border-white/20">
                30 Year Warranty
              </span>
            </div>
          </div>

          {/* Credit */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-600 text-[11px] tracking-wide">
              Designed & Developed by{' '}
              <a
                href="https://github.com/theaayushstha1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                @theaayushstha1
              </a>
            </p>
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
