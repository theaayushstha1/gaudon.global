import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const TOTAL_FRAMES = 99;
const FRAME_PATH = '/images/hero/frames2/ezgif-frame-';

export default function HeroSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `${FRAME_PATH}${frameNum}.jpg`;

        const promise = new Promise((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
        });

        imagePromises.push(promise);
      }

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Draw frame on canvas based on scroll
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      if (!img || !canvas) return;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      // Cover the canvas while maintaining aspect ratio
      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
      } else {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
      }

      // Center the image
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const unsubscribe = scrollYProgress.on('change', (scrollProgress) => {
      const frameIndex = Math.min(
        Math.floor(scrollProgress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      drawFrame(frameIndex);
    });

    drawFrame(0);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      unsubscribe();
    };
  }, [isLoaded, images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for frame animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-sm flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Loading...
            </div>
          </div>
        )}

        {/* Gradient overlay for text readability - Left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[65%] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 80%, transparent 100%)'
          }}
        />

        {/* Gradient overlay for text readability - Right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none hidden md:block"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              {/* Brand + Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3">
                  GAUDON
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/80 tracking-tight">
                  We'll Get It Done. For Decades.
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
              >
                Professional silicone sealants trusted on landmark buildings across 100+ countries. Backed by a 30-year warranty.
              </motion.p>


              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {['25+ Years Experience', '100+ Countries', '30 Year Warranty'].map((label, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-xs text-gray-400 px-3 py-1.5 rounded-full border border-white/15 bg-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section - Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-16 right-6 lg:right-12 hidden md:block text-right max-w-md"
        >
          <p className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            Order Today
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
            25+ years of excellence. Trusted by professionals in 100+ countries with our premium silicone sealants.
          </p>
          <div className="flex flex-col gap-3">
            <Link to={createPageUrl('Products')}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-6 py-5 text-sm rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 w-full justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-5 text-sm rounded-full font-medium bg-transparent transition-all duration-200 w-full justify-center"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
