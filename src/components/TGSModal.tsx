import React from 'react';
import { X, ArrowUpRight, Camera, Video, Layers, Compass, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TGSModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject: () => void;
}

export const TGSModal: React.FC<TGSModalProps> = ({ isOpen, onClose, onStartProject }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="tgs-network-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-[#1A1A1A] max-w-3xl w-full p-8 md:p-12 border border-ink shadow-2xl relative space-y-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-ink">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.25em] opacity-60">
              <Sparkles size={12} className="text-[#1A1A1A]" />
              <span>Creative Ecosystem Architecture</span>
            </div>
            <h2 className="serif text-3xl md:text-5xl text-[#1A1A1A]">
              TGS — The Creative Service Network
            </h2>
            <p className="serif italic text-base md:text-lg opacity-75">
              A multidisciplinary studio collective uniting visual arts, motion, digital experience and brand strategy.
            </p>
          </div>

          {/* Description */}
          <div className="text-xs md:text-sm opacity-80 leading-relaxed space-y-4">
            <p>
              <strong>A Yxung Shot</strong> functions as the dedicated photography and still-visual production arm of TGS. By integrating under a single creative roof, clients can commission standalone photographic series or scale seamlessly into holistic 360° creative campaigns without fragmented agencies.
            </p>
          </div>

          {/* Service Arms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F8F8F8] border border-ink space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Camera size={16} />
                <span className="serif text-base font-medium">A Yxung Shot</span>
              </div>
              <p className="text-[11px] opacity-70">
                Editorial photography, commercial campaigns, portraits, wedding archives, and curated exhibitions.
              </p>
            </div>

            <div className="p-4 bg-[#F8F8F8] border border-ink space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Video size={16} />
                <span className="serif text-base font-medium">TGS Motion &amp; Cinema</span>
              </div>
              <p className="text-[11px] opacity-70">
                Commercial cinematography, brand documentaries, social micro-films, and color grading.
              </p>
            </div>

            <div className="p-4 bg-[#F8F8F8] border border-ink space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Layers size={16} />
                <span className="serif text-base font-medium">TGS Identity &amp; Digital</span>
              </div>
              <p className="text-[11px] opacity-70">
                Bespoke digital experiences, web publishing, art direction, and packaging design.
              </p>
            </div>

            <div className="p-4 bg-[#F8F8F8] border border-ink space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Compass size={16} />
                <span className="serif text-base font-medium">Creative Direction</span>
              </div>
              <p className="text-[11px] opacity-70">
                Concept development, creative consulting, curation, and visual strategy for emerging brands.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-ink flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#1A1A1A] rounded-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#1A1A1A] transition-all"
            >
              Commission A Combined Project →
            </button>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
            >
              Back to Exhibition
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
