import React, { useRef, useEffect, useState, createContext, useContext } from 'react';
import { useScroll, useMotionValue } from 'framer-motion';

const TOTAL_FRAMES = 120;
const FRAME_PATH = '/images/hero/frames/ezgif-frame-';

// Context to share scroll progress with children
export const ScrollProgressContext = createContext(null);

export function useScrollProgress() {
  return useContext(ScrollProgressContext);
}

export default function ScrollSequence({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const progress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sync progress motion value
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      progress.set(v);
    });
    return unsubscribe;
  }, [scrollYProgress, progress]);

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

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      if (!img || !canvas) return;

      // Clear canvas with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate dimensions - fit image nicely
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      // Contain mode - fit entire image inside
      if (canvasAspect > imgAspect) {
        drawHeight = canvas.height * 0.95;
        drawWidth = drawHeight * imgAspect;
      } else {
        drawWidth = canvas.width * 0.95;
        drawHeight = drawWidth / imgAspect;
      }

      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // Draw full image
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        offsetX, offsetY, drawWidth, drawHeight
      );
    };

    const unsubscribe = scrollYProgress.on('change', (scrollProgress) => {
      const frameIndex = Math.min(
        Math.floor(scrollProgress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      drawFrame(frameIndex);
    });

    // Draw first frame immediately
    drawFrame(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, [isLoaded, images, scrollYProgress]);

  return (
    <ScrollProgressContext.Provider value={progress}>
      <div ref={containerRef} className="relative bg-black" style={{ height: '200vh' }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Split Layout Container */}
          <div className="h-full flex flex-col lg:flex-row">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-8 lg:p-16 relative z-20">
              {children}
            </div>

            {/* Right Side - Animation Canvas */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
              {/* Loading indicator */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                  <div className="text-white text-lg flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Loading...
                  </div>
                </div>
              )}

              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollProgressContext.Provider>
  );
}
