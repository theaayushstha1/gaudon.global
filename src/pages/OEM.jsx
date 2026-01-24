import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  Factory,
  Award,
  Globe,
  Clock,
  ChevronRight,
  X,
  ChevronLeft,
  ZoomIn,
  FlaskConical,
  Tag,
  Package,
  Truck
} from 'lucide-react';

const customizationSteps = [
  { num: '01', title: 'Contact Us', desc: 'Share your product requirements and specifications' },
  { num: '02', title: 'Formulation', desc: 'We develop custom formulas to meet your needs' },
  { num: '03', title: 'Sampling', desc: 'Receive samples for testing and approval' },
  { num: '04', title: 'Production', desc: 'Full-scale manufacturing begins (5-7 days)' },
  { num: '05', title: 'Quality Check', desc: 'Rigorous testing before shipment' },
  { num: '06', title: 'Delivery', desc: 'Fast global shipping to your location' }
];

const products = [
  { name: 'GAUDON G1', type: 'Kitchen & Bath', image: '/images/products/gaudon-g1-kitchen-bath.png' },
  { name: 'GAUDON G2', type: 'Window & Door', image: '/images/products/gaudon-g2-window-door.png' },
  { name: 'GAUDON D1', type: 'All-Purpose', image: '/images/products/gaudon-d1-silicone.png' },
  { name: 'GAUDON D2', type: 'Heavy Duty', image: '/images/products/gaudon-d2-heavy-duty.png' }
];

const oemBenefits = [
  { title: 'OEM Processing', desc: 'Product customization with your brand identity', image: '/images/factory-new/filling-line.jpg' },
  { title: 'Raw Material Quality', desc: 'Premium grade silicone from certified suppliers', image: '/images/factory-new/raw-material-silos.jpg' },
  { title: 'Quality Assurance', desc: 'ISO 9001 certified manufacturing processes', image: '/images/factory-new/processing-equipment.jpg' },
  { title: 'Global Shipping', desc: 'Fast delivery to 100+ countries worldwide', image: '/images/factory-new/warehouse.jpg' }
];

// Factory gallery images with proper labels
const factoryImages = [
  { src: '/images/factory-new/headquarters.jpg', title: 'GAUDON Headquarters', desc: 'Foshan City, Guangdong Province, China', category: 'Facility' },
  { src: '/images/factory-new/raw-material-silos.jpg', title: 'Raw Material Storage', desc: 'Industrial-grade storage silos for premium silicone materials', category: 'Storage' },
  { src: '/images/factory-new/chemical-storage.jpg', title: 'Chemical Processing Area', desc: 'Quality controlled material handling and storage', category: 'Processing' },
  { src: '/images/factory-new/processing-equipment.jpg', title: 'Mixing & Blending Equipment', desc: 'Precision industrial machinery for consistent formulations', category: 'Production' },
  { src: '/images/factory-new/production-hall.jpg', title: 'Main Production Hall', desc: 'Large-scale manufacturing operations', category: 'Production' },
  { src: '/images/factory-new/filling-line.jpg', title: 'Automated Filling Lines', desc: 'High-precision filling and packaging systems', category: 'Packaging' },
  { src: '/images/factory-new/warehouse.jpg', title: 'Distribution Warehouse', desc: 'Ready for worldwide shipping to 100+ countries', category: 'Logistics' },
];

// Animated Counter Component - All counters finish at the same time
function AnimatedCounter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);

        // Ease out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * value);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// Lightbox component for viewing full images
function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const current = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image container */}
      <div className="max-w-6xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={current.src}
          alt={current.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="text-center mt-4">
          <h3 className="text-white text-xl font-semibold">{current.title}</h3>
          <p className="text-white/60 mt-1">{current.desc}</p>
          <p className="text-white/40 text-sm mt-2">{currentIndex + 1} / {images.length}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Factory Gallery Section - 3 Rows: 1 + 3 + 3
function FactoryGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + factoryImages.length) % factoryImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#000000] text-sm font-medium uppercase tracking-wider mb-2 block">Manufacturing Excellence</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">
            Our Production Facility
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            State-of-the-art manufacturing base in Foshan, China
          </p>
        </motion.div>

        {/* 3 Row Gallery with gaps - Compact */}
        <div className="max-w-4xl mx-auto space-y-2">

          {/* Row 1: Full Width Hero - Full image visible */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
            onClick={() => openLightbox(0)}
          >
            <div className="bg-slate-100">
              <img
                src={factoryImages[0].src}
                alt={factoryImages[0].title}
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            {/* Always visible title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <h3 className="text-white font-bold text-lg md:text-2xl">{factoryImages[0].title}</h3>
              <p className="text-white/80 text-sm mt-1">{factoryImages[0].desc}</p>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Row 2: 3 Equal Columns */}
          <div className="grid grid-cols-3 gap-2">
            {factoryImages.slice(1, 4).map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(idx + 1)}
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Always visible title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 right-2">
                  <h3 className="text-white font-semibold text-xs md:text-sm">{image.title}</h3>
                </div>
                {/* Zoom icon on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: 3 Equal Columns */}
          <div className="grid grid-cols-3 gap-2">
            {factoryImages.slice(4, 7).map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(idx + 4)}
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Always visible title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 right-2">
                  <h3 className="text-white font-semibold text-xs md:text-sm">{image.title}</h3>
                </div>
                {/* Zoom icon on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: 20000, suffix: '+', label: 'sqm Factory' },
            { value: 50, suffix: '+', label: 'Production Lines' },
            { value: 200, suffix: '+', label: 'Workers' },
            { value: 10, suffix: 'M+', label: 'Units/Year' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#000000]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <ImageLightbox
              images={factoryImages}
              currentIndex={currentImageIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CustomizationProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#000000] relative">
      <div className="absolute inset-0 pattern-grid" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            OEM Process
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From inquiry to delivery in 6 simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
            <div
              className="hidden md:block absolute top-8 left-0 h-0.5 bg-white transition-all duration-500"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            />

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
              {customizationSteps.map((step, idx) => {
                const isActive = activeStep >= idx;
                const isCurrent = activeStep === idx;
                const isLast = idx === 5;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    {/* Circle */}
                    <div className="relative inline-flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                          isCurrent
                            ? isLast
                              ? 'bg-emerald-500 text-white scale-110 shadow-lg shadow-emerald-500/30'
                              : 'bg-white text-black scale-110 shadow-lg shadow-white/20'
                            : isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-white/5 text-white/40 border border-white/10'
                        }`}
                      >
                        {isLast && isActive ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          step.num
                        )}
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className={`font-semibold text-sm mb-1 transition-colors ${
                      isCurrent
                        ? isLast ? 'text-emerald-400' : 'text-white'
                        : isActive ? 'text-white/80' : 'text-white/40'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs transition-colors ${
                      isActive ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-[#000000] hover:bg-slate-100 px-8 py-6 rounded-full font-medium">
                Start Your OEM Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function OEM() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-36 md:pt-40 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}
      >
        <div className="absolute inset-0 pattern-grid" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight text-display-lg">
                Premium Quality,<br />
                <span className="gradient-text">Your Label</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-lg">
                Premium silicone sealants manufactured under your brand.
                25+ years of expertise, ISO certified quality, flexible MOQ.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-white text-[#000000] hover:bg-slate-100 px-8 py-6 rounded-full font-medium">
                    Get OEM Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="mailto:info@gaudon.com">
                  <Button className="bg-transparent border border-white/30 text-white hover:bg-white/5 px-8 py-6 rounded-full font-medium">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                {[
                  { icon: Award, text: 'ISO 9001 Certified' },
                  { icon: Globe, text: 'Export to 100+ Countries' },
                  { icon: Clock, text: '25+ Years Experience' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-white" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Main product - center with float animation */}
              <motion.img
                src="/images/products/gaudon-g1-kitchen-bath.png"
                alt="GAUDON Silicone Products"
                className="h-80 w-auto drop-shadow-2xl z-10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Left product - with delayed float */}
              <motion.img
                src="/images/products/gaudon-d1-silicone.png"
                alt="GAUDON Product"
                className="absolute left-0 top-1/2 h-56 w-auto drop-shadow-xl opacity-90"
                animate={{
                  y: ["-50%", "calc(-50% - 10px)", "-50%"],
                  x: [-16, -20, -16],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              {/* Right product - with different timing */}
              <motion.img
                src="/images/products/gaudon-g2-window-door.png"
                alt="GAUDON Product"
                className="absolute right-0 top-1/2 h-56 w-auto drop-shadow-xl opacity-90"
                animate={{
                  y: ["-50%", "calc(-50% - 12px)", "-50%"],
                  x: [16, 20, 16],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Facility - Professional Gallery with Lightbox */}
      <FactoryGallerySection />

      {/* Customization Process */}
      <CustomizationProcessSection />

      {/* Private Label Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">
                Your Brand. Our Factory.
              </h2>
              <p className="text-lg text-slate-500">
                Premium silicone sealants manufactured under your name
              </p>
            </motion.div>

            {/* Product Visual - GAUDON → Your Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 mb-10"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Left - GAUDON Product */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <img
                    src="/images/products/gaudon-b1-acrylic-latex.png"
                    alt="GAUDON Silicone Sealant"
                    className="h-64 md:h-80 w-auto mx-auto"
                  />
                  <p className="text-slate-700 font-semibold mt-4">Our Quality</p>
                  <p className="text-slate-400 text-sm">25+ years expertise</p>
                  <p className="text-slate-400 text-sm">ISO 9001 certified</p>
                </motion.div>

                {/* Middle - Arrow + Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <ArrowRight className="w-8 h-8 text-emerald-600 rotate-90 md:rotate-0" />
                  </div>
                  <p className="text-slate-700 font-semibold">Same Formula</p>
                  <p className="text-slate-400 text-sm">Different Label</p>
                  <div className="mt-4 space-y-1 text-xs text-slate-400">
                    <p>Custom colors</p>
                    <p>Your packaging</p>
                    <p>Your brand story</p>
                  </div>
                </motion.div>

                {/* Right - Your Brand Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-center"
                >
                  <div className="relative h-56 md:h-72 w-28 mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 60 180" className="h-full w-auto drop-shadow-lg">
                      <path d="M25 0 L35 0 L38 30 L22 30 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                      <rect x="18" y="30" width="24" height="12" rx="2" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                      <rect x="12" y="42" width="36" height="130" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5"/>
                      <rect x="16" y="60" width="28" height="90" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2"/>
                      <text x="30" y="95" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="600">YOUR</text>
                      <text x="30" y="108" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="600">BRAND</text>
                      <text x="30" y="121" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="600">HERE</text>
                    </svg>
                  </div>
                  <p className="text-slate-700 font-semibold mt-4">Your Identity</p>
                  <p className="text-slate-400 text-sm">Your market</p>
                  <p className="text-slate-400 text-sm">Your profits</p>
                </motion.div>
              </div>

              {/* Process Details */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
                  We handle the entire manufacturing process — from raw material sourcing to quality testing.
                  You provide your branding specifications, and we deliver ready-to-sell products with your logo,
                  colors, and packaging design. No factory needed, no equipment costs.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { title: 'Custom Formula', desc: 'Your specifications', Icon: FlaskConical },
                { title: 'Your Branding', desc: 'Logo & packaging', Icon: Tag },
                { title: 'Low MOQ', desc: '500 units minimum', Icon: Package },
                { title: 'Fast Delivery', desc: '5-7 working days', Icon: Truck },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <item.Icon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-[#000000]">{item.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-[#000000] hover:bg-[#111111] text-white px-8 py-6 rounded-full font-medium">
                  Start Your Private Label
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose GAUDON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">
                Why Partner With Us?
              </h2>
              <p className="text-slate-500 text-lg">
                What sets GAUDON apart from other manufacturers
              </p>
            </motion.div>

            {/* Key Differentiators */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              {[
                {
                  title: '25+ Years Manufacturing Experience',
                  desc: 'Established in 1999, we have the expertise to handle any formulation challenge.',
                  highlight: '25+'
                },
                {
                  title: 'ISO 9001:2015 Certified Quality',
                  desc: 'Every batch tested. Every product certified. No compromises on quality.',
                  highlight: 'ISO'
                },
                {
                  title: 'Exported to 100+ Countries',
                  desc: 'We understand international standards, regulations, and shipping requirements.',
                  highlight: '100+'
                },
                {
                  title: 'Flexible MOQ Starting at 500 Units',
                  desc: 'Start small, scale fast. Perfect for testing new markets or products.',
                  highlight: '500'
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#000000]">{item.highlight}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <p className="text-center text-slate-600 mb-6 font-medium">Trusted By Businesses Worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                {['ISO 9001:2015', 'CNAS Accredited', 'CBDA Member', 'National Certified'].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}
      >
        <div className="absolute inset-0 pattern-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="text-slate-400 mb-8">
              Contact us today to discuss your OEM requirements.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-[#000000] hover:bg-slate-100 px-10 py-6 rounded-full font-medium">
                <Mail className="w-5 h-5 mr-2" />
                Request OEM Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
