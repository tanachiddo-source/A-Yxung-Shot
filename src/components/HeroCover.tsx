import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface HeroCoverProps {
  featuredProject: Project;
  onExploreWork: () => void;
  onViewProject: (slug: string) => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({
  featuredProject,
  onExploreWork,
  onViewProject
}) => {
  return (
    <section
      id="homepage-hero-cover"
      className="relative min-h-[90vh] md:min-h-[92vh] flex flex-col justify-between pt-20 md:pt-24 border-b border-ink bg-white"
    >
      {/* Editorial Grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-12 relative min-h-[640px] md:min-h-[720px]">
        {/* Left Vertical Rail for Desktop */}
        <div className="hidden md:flex md:col-span-1 border-r border-ink flex-col items-center justify-between py-12 relative bg-white">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
            01/08
          </div>
          <div className="vertical-text text-[10px] uppercase tracking-[0.4em] opacity-40 font-medium">
            Cape Town / South Africa
          </div>
          <div className="w-2 h-2 bg-[#1A1A1A] rounded-full opacity-40"></div>
        </div>

        {/* Center Editorial Title & Text */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 relative bg-white">
          {/* Ghost Numerals */}
          <div className="absolute top-10 left-8 md:left-14 lg:left-20 pointer-events-none select-none">
            <span className="serif text-[120px] md:text-[180px] leading-none text-[#1A1A1A] opacity-5 font-black block">
              01
            </span>
          </div>

          <div className="z-10 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] opacity-50 font-mono mb-4"
            >
              Exhibition Cover Issue · Vol IV
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tighter-tight mb-8 text-[#1A1A1A]"
            >
              {featuredProject.title.includes(' ') ? (
                <>
                  {featuredProject.title.split(' ')[0]} <br />
                  {featuredProject.title.split(' ').slice(1).join(' ')}
                </>
              ) : (
                featuredProject.title
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
                Selected Project • {featuredProject.year}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base lg:text-lg leading-relaxed opacity-75 serif italic mb-10 max-w-md text-[#1A1A1A]"
            >
              {featuredProject.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button
                id="hero-view-exhibition-btn"
                onClick={() => onViewProject(featuredProject.slug)}
                className="text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 font-bold group text-[#1A1A1A] hover:opacity-75 transition-opacity"
              >
                <span>View Exhibition</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>

              <button
                onClick={onExploreWork}
                className="text-[11px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity font-medium"
              >
                All Curated Projects [08]
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Gallery Matte Framed Visual */}
        <div className="md:col-span-5 lg:col-span-4 bg-[#F8F8F8] relative flex flex-col justify-center items-center p-8 md:p-12 border-t md:border-t-0 md:border-l border-ink">
          {/* Framed Exhibition Canvas */}
          <div
            onClick={() => onViewProject(featuredProject.slug)}
            className="w-full max-w-md aspect-[4/5] bg-[#ECECEC] shadow-2xl relative overflow-hidden flex items-center justify-center cursor-pointer group"
          >
            {/* Gallery Matting Border */}
            <div className="absolute inset-0 border-[12px] md:border-[16px] border-[#F8F8F8] z-20 pointer-events-none transition-all"></div>

            <img
              src={featuredProject.coverImage}
              alt={featuredProject.title}
              className="w-full h-full object-cover gallery-image-hover filter brightness-[0.98] contrast-[1.03]"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Overlay Badge */}
            <div className="absolute top-6 left-6 z-30 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
              {featuredProject.category} Archive
            </div>
          </div>

          {/* Micro Metadata Block at Bottom */}
          <div className="w-full max-w-md mt-6 flex justify-between items-end">
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                Digital Format
              </span>
              <span className="block text-[10px] opacity-50 uppercase tracking-[0.1em] text-[#1A1A1A]">
                Exhibition Catalogue No. {featuredProject.catalogCode.replace('AYS-', '')}
              </span>
            </div>

            <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
              {featuredProject.number}
            </span>
          </div>
        </div>
      </div>

      {/* Sub-Footer Strip for Hero */}
      <div className="h-14 w-full flex justify-between items-center px-6 md:px-12 border-t border-ink text-[10px] uppercase tracking-[0.15em] font-medium bg-white">
        <button
          onClick={onExploreWork}
          className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
        >
          <span>Scroll to Explore</span>
          <ArrowDown size={12} />
        </button>

        <div className="flex items-center gap-6">
          <span className="hidden sm:inline opacity-50">Higgovale Studio &amp; Locations</span>
          <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full"></div>
          <span className="opacity-75">Curated By Tana (TGS)</span>
        </div>
      </div>
    </section>
  );
};
