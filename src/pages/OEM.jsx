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
  { title: 'Quality Assurance', desc: 'Rigorous quality control manufacturing processes', image: '/images/factory-new/processing-equipment.jpg' },
  { title: 'Global Shipping', desc: 'Fast delivery to 100+ countries worldwide', image: '/images/factory-new/warehouse.jpg' }
];

// Factory gallery images with proper labels - 20 images organized by category
const factoryImages = [
  // Facility (3 images)
  { src: '/images/factory-new/production-hall-01.png', title: 'Main Production Hall', desc: 'Spacious manufacturing floor with advanced equipment', category: 'Facility' },
  { src: '/images/factory-new/production-floor-01.png', title: 'Factory Floor', desc: 'State-of-the-art production facility', category: 'Facility' },
  { src: '/images/factory-new/production-floor-02.png', title: 'Manufacturing Space', desc: 'Large-scale production capabilities', category: 'Facility' },

  // Production (7 images)
  { src: '/images/factory-new/production-machinery-01.png', title: 'Production Machinery', desc: 'Advanced industrial equipment for silicone processing', category: 'Production' },
  { src: '/images/factory-new/production-machinery-02.png', title: 'Quality Lab Testing', desc: 'Laboratory analysis for quality assurance', category: 'Production' },
  { src: '/images/factory-new/production-line-01.png', title: 'Production Line', desc: 'Automated manufacturing systems', category: 'Production' },
  { src: '/images/factory-new/production-line-02.png', title: 'Assembly Line', desc: 'Efficient production workflow', category: 'Production' },
  { src: '/images/factory-new/production-line-03.png', title: 'Inventory Storage', desc: 'Organized product storage facility', category: 'Production' },
  { src: '/images/factory-new/mixing-equipment-01.png', title: 'Mixing Equipment', desc: 'Precision blending systems for formulations', category: 'Production' },
  { src: '/images/factory-new/mixing-equipment-02.png', title: 'Blending Systems', desc: 'Advanced mixing technology', category: 'Production' },

  // Packaging (7 images)
  { src: '/images/factory-new/filling-line-automated.png', title: 'Automated Filling', desc: 'High-speed automated filling systems', category: 'Packaging' },
  { src: '/images/factory-new/filling-equipment-01.png', title: 'Filling Equipment', desc: 'Precision dispensing technology', category: 'Packaging' },
  { src: '/images/factory-new/filling-line-02.png', title: 'Filling Line', desc: 'Efficient packaging operations', category: 'Packaging' },
  { src: '/images/factory-new/filling-precision-01.png', title: 'Precision Filling', desc: 'Accurate volume dispensing systems', category: 'Packaging' },
  { src: '/images/factory-new/packaging-machine-01.png', title: 'Packaging Machine', desc: 'Automated cartridge packaging', category: 'Packaging' },
  { src: '/images/factory-new/packaging-machine-02.png', title: 'Team Planning', desc: 'Group discussion and production coordination', category: 'Packaging' },
  { src: '/images/factory-new/packaging-line-full.png', title: 'Complete Packaging Line', desc: 'Full packaging production workflow', category: 'Packaging' },

  // Storage (3 images)
  { src: '/images/factory-new/raw-material-storage.png', title: 'Raw Material Storage', desc: 'Organized chemical storage with safety protocols', category: 'Storage' },
  { src: '/images/factory-new/chemical-storage-01.png', title: 'Chemical Warehouse', desc: 'Temperature-controlled material storage', category: 'Storage' },
  { src: '/images/factory-new/chemical-storage-02.png', title: 'Finished Goods Storage', desc: 'Ready-to-ship product warehouse', category: 'Storage' },
];

// Gallery categories for filtering
const galleryCategories = ['All', 'Facility', 'Production', 'Packaging', 'Storage'];

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
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="fixed top-8 right-8 z-[100] p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-xl"
      >
        <X className="w-8 h-8" strokeWidth={2.5} />
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

// Factory Gallery Section - Enhanced with 28 images, filters, and show more
function FactoryGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All'
    ? factoryImages
    : factoryImages.filter(img => img.category === selectedCategory);

  // Show 12 images initially, or all 20 if showAll is true
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 12);

  const openLightbox = (index) => {
    // Find the actual index in the full filtered array
    const actualIndex = filteredImages.findIndex(img => img.src === displayedImages[index].src);
    setCurrentImageIndex(actualIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#000000] text-sm font-medium uppercase tracking-wider mb-2 block">Manufacturing Excellence</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">
            Our Production Facility
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            State-of-the-art manufacturing base in Foshan, China with 20,000+ sqm of production space
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#000000] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
              <span className="ml-1.5 text-xs opacity-70">
                ({category === 'All' ? factoryImages.length : factoryImages.filter(img => img.category === category).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Grid of all images - 4 columns on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayedImages.map((image, idx) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                className="relative cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(idx)}
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 right-2">
                  <span className="inline-block px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded text-[10px] text-white mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-xs md:text-sm line-clamp-1">{image.title}</h3>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {filteredImages.length > 12 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronLeft className="w-4 h-4 rotate-90" />
                  </>
                ) : (
                  <>
                    Show All {filteredImages.length} Photos
                    <ChevronRight className="w-4 h-4 -rotate-90" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
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
              images={filteredImages}
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
      <section className="relative pt-36 md:pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/oem-hero-production.png"
            alt="Silicone sealant production line"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}>Premium Quality,</span><br />
                <span className="text-amber-400" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}>Your Label</span>
              </h1>
              <p className="text-lg text-white mb-8 max-w-lg leading-relaxed font-medium" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}>
                Premium silicone sealants manufactured under your brand.
                25+ years of expertise, professional grade quality, flexible MOQ.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-amber-500 text-white hover:bg-amber-600 px-8 py-6 rounded-full font-semibold shadow-lg">
                    Get OEM Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="mailto:gaudonusallc@gmail.com">
                  <Button className="bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20 px-8 py-6 rounded-full font-semibold">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: Award, text: 'Professional Grade' },
                  { icon: Globe, text: 'Export to 100+ Countries' },
                  { icon: Clock, text: '25+ Years Experience' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <item.icon className="w-4 h-4 text-amber-400" />
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
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
                    src="/images/products/gaudon-b1-acrylic-latex.jpg"
                    alt="GAUDON Silicone Sealant"
                    className="h-64 md:h-80 w-auto mx-auto"
                  />
                  <p className="text-slate-700 font-semibold mt-4">Our Quality</p>
                  <p className="text-slate-400 text-sm">25+ years expertise</p>
                  <p className="text-slate-400 text-sm">Professional grade</p>
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
                  colors, and packaging design.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { title: 'Custom Formula', desc: 'Your specifications', Icon: FlaskConical },
                { title: 'Your Branding', desc: 'Logo & packaging', Icon: Tag },
                { title: 'Low MOQ', desc: '500 units minimum', Icon: Package },
                { title: 'Fast Delivery', desc: '15+ working days', Icon: Truck },
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
                  title: 'Professional Grade Quality',
                  desc: 'Every batch tested. Every product inspected. No compromises on quality.',
                  highlight: 'PRO'
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
                {['30 Year Warranty', 'Quality Tested', '25+ Years Experience', 'USA Based'].map((cert, idx) => (
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
