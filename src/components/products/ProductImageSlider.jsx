import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const navigate = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === 1) {
          return (prev + 1) % images.length;
        }
        return prev === 0 ? images.length - 1 : prev - 1;
      });
      setIsTransitioning(false);
    }, 300);
  };

  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-slate-50" />;
  }

  return (
    <div className="relative w-full h-full group bg-white">
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ 
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800 hover:text-white z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800 hover:text-white z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsTransitioning(false);
                    }, 300);
                  }
                }}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-gray-800 w-6' 
                    : 'bg-slate-300/70 w-1.5 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}