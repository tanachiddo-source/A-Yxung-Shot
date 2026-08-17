import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface SelectedWorkProps {
  projects: Project[];
  onViewProject: (slug: string) => void;
  onViewAllWork: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onViewProject,
  onViewAllWork
}) => {
  const selectedProjects = projects.slice(0, 4);

  return (
    <section id="selected-work-section" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-ink bg-white">
      {/* Editorial Section Header */}
      <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-ink">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-mono">
              Curated Index • 01 — 04
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
          </div>
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl tracking-tighter-tight text-[#1A1A1A]">
            SELECTED WORK
          </h2>
        </div>
        <p className="serif italic text-base md:text-xl opacity-75 max-w-md text-[#1A1A1A]">
          A collection of photographs, projects and visual stories captured across Cape Town.
        </p>
      </div>

      {/* Editorial Sequence of Projects */}
      <div className="space-y-32 md:space-y-44">
        {/* PROJECT 01 — Large Full-Width Composition with Ghost Numeral */}
        {selectedProjects[0] && (
          <article
            id={`selected-project-${selectedProjects[0].slug}`}
            className="group cursor-pointer relative"
            onClick={() => onViewProject(selectedProjects[0].slug)}
          >
            {/* Ghost Background Numeral */}
            <span className="absolute -top-14 right-4 pointer-events-none select-none serif text-[100px] md:text-[140px] leading-none text-[#1A1A1A] opacity-5 font-black">
              {selectedProjects[0].number}
            </span>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-ink mb-8 relative z-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs md:text-sm opacity-50">
                  {selectedProjects[0].number}
                </span>
                <h3 className="serif text-3xl md:text-5xl text-[#1A1A1A] group-hover:opacity-75 transition-opacity">
                  {selectedProjects[0].title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs opacity-70 uppercase tracking-[0.18em]">
                <span>{selectedProjects[0].category} / {selectedProjects[0].subcategory}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{selectedProjects[0].location} · {selectedProjects[0].year}</span>
                <ArrowUpRight size={16} className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Framed Image Display */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#F8F8F8] p-2 md:p-3 shadow-sm border border-ink">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={selectedProjects[0].coverImage}
                  alt={selectedProjects[0].title}
                  className="w-full h-full object-cover gallery-image-hover filter brightness-[0.98]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                  Plate 01 · {selectedProjects[0].catalogCode}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs opacity-75 gap-2">
              <p className="serif italic text-sm md:text-base text-[#1A1A1A]">
                "{selectedProjects[0].description}"
              </p>
              <span className="uppercase text-[10px] tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                View Exhibition Archive →
              </span>
            </div>
          </article>
        )}

        {/* PROJECT 02 — Asymmetrical Layout */}
        {selectedProjects[1] && (
          <article
            id={`selected-project-${selectedProjects[1].slug}`}
            className="group cursor-pointer relative"
            onClick={() => onViewProject(selectedProjects[1].slug)}
          >
            <span className="absolute -top-14 right-4 pointer-events-none select-none serif text-[100px] md:text-[140px] leading-none text-[#1A1A1A] opacity-5 font-black">
              {selectedProjects[1].number}
            </span>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-ink mb-8 relative z-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs md:text-sm opacity-50">
                  {selectedProjects[1].number}
                </span>
                <h3 className="serif text-3xl md:text-5xl text-[#1A1A1A] group-hover:opacity-75 transition-opacity">
                  {selectedProjects[1].title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs opacity-70 uppercase tracking-[0.18em]">
                <span>{selectedProjects[1].category} / {selectedProjects[1].subcategory}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{selectedProjects[1].location} · {selectedProjects[1].year}</span>
                <ArrowUpRight size={16} className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Asymmetrical Grid: Large Left + Offset Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#F8F8F8] p-2 md:p-3 border border-ink shadow-sm">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={selectedProjects[1].coverImage}
                    alt={selectedProjects[1].title}
                    className="w-full h-full object-cover gallery-image-hover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                    Catalogue Plate · {selectedProjects[1].catalogCode}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-between space-y-6 md:pl-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F8F8] p-2 border border-ink hidden md:block">
                  <img
                    src={selectedProjects[1].allImages[1]?.url || selectedProjects[1].coverImage}
                    alt={`${selectedProjects[1].title} secondary study`}
                    className="w-full h-full object-cover gallery-image-hover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                    Detail Study
                  </div>
                </div>

                <div>
                  <p className="serif italic text-base opacity-75 mb-3 text-[#1A1A1A]">
                    "{selectedProjects[1].description}"
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                    View Exhibition Archive →
                  </p>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* PROJECT 03 — Two-Column Gallery Layout */}
        {selectedProjects[2] && (
          <article
            id={`selected-project-${selectedProjects[2].slug}`}
            className="group cursor-pointer relative"
            onClick={() => onViewProject(selectedProjects[2].slug)}
          >
            <span className="absolute -top-14 right-4 pointer-events-none select-none serif text-[100px] md:text-[140px] leading-none text-[#1A1A1A] opacity-5 font-black">
              {selectedProjects[2].number}
            </span>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-ink mb-8 relative z-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs md:text-sm opacity-50">
                  {selectedProjects[2].number}
                </span>
                <h3 className="serif text-3xl md:text-5xl text-[#1A1A1A] group-hover:opacity-75 transition-opacity">
                  {selectedProjects[2].title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs opacity-70 uppercase tracking-[0.18em]">
                <span>{selectedProjects[2].category} / {selectedProjects[2].subcategory}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{selectedProjects[2].location} · {selectedProjects[2].year}</span>
                <ArrowUpRight size={16} className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F8] p-2 md:p-3 border border-ink shadow-sm">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={selectedProjects[2].coverImage}
                    alt={selectedProjects[2].title}
                    className="w-full h-full object-cover gallery-image-hover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                    Portrait I
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F8] p-2 md:p-3 border border-ink shadow-sm hidden md:block">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={selectedProjects[2].allImages[1]?.url || selectedProjects[2].coverImage}
                    alt={`${selectedProjects[2].title} companion frame`}
                    className="w-full h-full object-cover gallery-image-hover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                    Portrait II · Legacy Study
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs opacity-75 gap-2">
              <p className="serif italic text-sm md:text-base text-[#1A1A1A]">
                "{selectedProjects[2].description}"
              </p>
              <span className="uppercase text-[10px] tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                View Exhibition Archive →
              </span>
            </div>
          </article>
        )}

        {/* PROJECT 04 — Editorial Fashion & Space */}
        {selectedProjects[3] && (
          <article
            id={`selected-project-${selectedProjects[3].slug}`}
            className="group cursor-pointer relative"
            onClick={() => onViewProject(selectedProjects[3].slug)}
          >
            <span className="absolute -top-14 right-4 pointer-events-none select-none serif text-[100px] md:text-[140px] leading-none text-[#1A1A1A] opacity-5 font-black">
              {selectedProjects[3].number}
            </span>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-ink mb-8 relative z-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs md:text-sm opacity-50">
                  {selectedProjects[3].number}
                </span>
                <h3 className="serif text-3xl md:text-5xl text-[#1A1A1A] group-hover:opacity-75 transition-opacity">
                  {selectedProjects[3].title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs opacity-70 uppercase tracking-[0.18em]">
                <span>{selectedProjects[3].category} / {selectedProjects[3].subcategory}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{selectedProjects[3].location} · {selectedProjects[3].year}</span>
                <ArrowUpRight size={16} className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8F8F8] p-2 md:p-3 border border-ink shadow-sm">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={selectedProjects[3].coverImage}
                  alt={selectedProjects[3].title}
                  className="w-full h-full object-cover gallery-image-hover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                  Plate 04 · {selectedProjects[3].catalogCode}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs opacity-75 gap-2">
              <p className="serif italic text-sm md:text-base text-[#1A1A1A]">
                "{selectedProjects[3].description}"
              </p>
              <span className="uppercase text-[10px] tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                View Exhibition Archive →
              </span>
            </div>
          </article>
        )}
      </div>

      {/* View All Collection CTA */}
      <div className="mt-24 md:mt-32 pt-8 border-t border-ink flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-[0.25em] opacity-60">
          Complete Archive · 08 Curated Projects
        </p>
        <button
          id="explore-full-archive-btn"
          onClick={onViewAllWork}
          className="px-8 py-3.5 border border-[#1A1A1A] rounded-full text-[11px] uppercase tracking-[0.22em] font-medium bg-[#1A1A1A] text-white hover:bg-transparent hover:text-[#1A1A1A] transition-all"
        >
          View The Full Collection [08] →
        </button>
      </div>
    </section>
  );
};
