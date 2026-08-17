import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectImage } from '../types';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  const currentNumberStr = String(currentIndex + 1).padStart(2, '0');
  const totalNumberStr = String(images.length).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        id="image-lightbox-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#0D0D0E]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-10 text-[#F8F7F4]"
      >
        {/* Top Lightbox Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#8F8D88]">
              {currentNumberStr} / {totalNumberStr}
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-[#6B6A68]">
              A Yxung Shot Archive
            </span>
          </div>

          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors flex items-center space-x-2 text-xs uppercase tracking-[0.2em]"
            aria-label="Close Lightbox"
          >
            <span className="hidden sm:inline">Close</span>
            <X size={20} />
          </button>
        </div>

        {/* Center Image Stage */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-0 md:left-4 z-20 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          <motion.div
            key={currentImage.url}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-h-[75vh] max-w-[90vw] md:max-w-[80vw] flex items-center justify-center"
          >
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-h-[75vh] max-w-[85vw] object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-0 md:right-4 z-20 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>

        {/* Bottom Lightbox Caption & Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F8D88] gap-2 pt-4 border-t border-[#222226] z-10">
          <p className="font-serif italic text-sm md:text-base text-white/90 text-center sm:text-left">
            {currentImage.caption || currentImage.alt}
          </p>
          <div className="flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-[#8F8D88]">
            {currentImage.metadata?.lens && <span>Lens: {currentImage.metadata.lens}</span>}
            {currentImage.metadata?.camera && <span>Camera: {currentImage.metadata.camera}</span>}
            <span>Cape Town · 2026</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
