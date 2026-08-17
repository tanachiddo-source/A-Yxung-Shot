import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Project, ProjectImage } from '../types';

interface ProjectDetailProps {
  project: Project;
  allProjects: Project[];
  onBackToWork: () => void;
  onNavigateToProject: (slug: string) => void;
  onOpenLightbox: (images: ProjectImage[], initialIndex: number) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  allProjects,
  onBackToWork,
  onNavigateToProject,
  onOpenLightbox
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleImageClick = (img: ProjectImage) => {
    const idx = project.allImages.findIndex((i) => i.url === img.url);
    onOpenLightbox(project.allImages, idx >= 0 ? idx : 0);
  };

  return (
    <article id={`project-page-${project.slug}`} className="pt-24 md:pt-32 pb-32 bg-white">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-12">
        <button
          id="back-to-work-btn"
          onClick={onBackToWork}
          className="group inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] opacity-60 hover:opacity-100 transition-opacity py-2"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Work Archive</span>
        </button>
      </div>

      {/* Project Exhibition Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pb-14 border-b border-ink relative">
        {/* Ghost Background Numeral */}
        <span className="absolute top-0 right-12 pointer-events-none select-none serif text-[120px] md:text-[180px] leading-none text-[#1A1A1A] opacity-5 font-black hidden md:block">
          {project.number}
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 relative z-10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono opacity-50 uppercase tracking-[0.25em] mb-3">
              <span>{project.number}</span>
              <span>/</span>
              <span>{project.catalogCode}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tighter-tight text-[#1A1A1A]">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-col lg:items-end text-left lg:text-right space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#1A1A1A]">
              {project.category} / {project.subcategory}
            </span>
            <span className="text-xs opacity-60 font-mono">
              {project.location}
            </span>
          </div>
        </div>

        {/* Curatorial Statement and Production Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-ink">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] opacity-60">
                Curatorial Statement
              </span>
            </div>
            <p className="serif italic text-xl md:text-2xl opacity-90 leading-relaxed text-[#1A1A1A]">
              "{project.description}"
            </p>
          </div>

          {/* Metadata Specs Grid */}
          <div className="lg:col-span-4 bg-[#F8F8F8] p-6 border border-ink text-xs space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-widest opacity-50 block">
                Client / Commission
              </span>
              <p className="font-medium text-[#1A1A1A]">{project.client}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-widest opacity-50 block">
                Art Direction &amp; Photography
              </span>
              <p className="text-[#1A1A1A]">{project.artDirection || 'Tana (A Yxung Shot)'}</p>
            </div>

            {project.styling && (
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest opacity-50 block">
                  Styling / Set
                </span>
                <p className="text-[#1A1A1A]">{project.styling}</p>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-widest opacity-50 block">
                Plates in Exhibition
              </span>
              <p className="font-mono text-[#1A1A1A]">{project.allImages.length} Curated Frames</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Cover Visual Hero Plate with Gallery Matting */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-12 md:my-16">
        <div
          onClick={() => handleImageClick(project.allImages[0] || { url: project.coverImage, alt: project.title, caption: project.title, aspectRatio: 'landscape' })}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#F8F8F8] p-3 md:p-4 border border-ink shadow-md cursor-pointer group"
        >
          <div className="w-full h-full overflow-hidden relative">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover gallery-image-hover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm p-2 text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity border border-ink">
              <Maximize2 size={16} />
            </div>
            <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
              Plate 01 · Primary Cover Focus
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Image Sequence */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-14 md:space-y-20">
        <div className="flex items-center justify-between pb-4 border-b border-ink">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] opacity-50">
            Exhibition Sequence Plates
          </span>
          <span className="text-[10px] uppercase font-mono opacity-50">
            Click frame for Fullscreen Inspection
          </span>
        </div>

        {/* Gallery Image Grid with Dynamic Aspect Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {project.allImages.map((image, index) => {
            const isWide = image.aspectRatio === 'ultrawide' || (index % 3 === 0 && index !== 0);

            return (
              <motion.div
                key={image.url || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`group cursor-pointer ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
                onClick={() => handleImageClick(image)}
              >
                <div
                  className={`relative overflow-hidden bg-[#F8F8F8] p-2 md:p-3 border border-ink shadow-sm ${
                    isWide
                      ? 'aspect-[16/9] md:aspect-[21/9]'
                      : 'aspect-[4/5] md:aspect-[3/4]'
                  }`}
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={image.url}
                      alt={image.caption || `${project.title} study ${index + 1}`}
                      className="w-full h-full object-cover gallery-image-hover filter brightness-[0.98]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-ink">
                      <Maximize2 size={14} className="text-[#1A1A1A]" />
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                      Plate 0{index + 2}
                    </div>
                  </div>
                </div>

                {image.caption && (
                  <div className="mt-3 flex justify-between items-center text-xs opacity-60">
                    <p className="serif italic">{image.caption}</p>
                    <span className="text-[10px] font-mono">AYS·FRAME {index + 1}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Project Navigation Footer (Prev / Next Traversal) */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 mt-28 md:mt-40 pt-10 border-t border-ink">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Prev Project */}
          <button
            onClick={() => onNavigateToProject(prevProject.slug)}
            className="group flex flex-col items-start text-left w-full sm:w-auto"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 flex items-center gap-1 group-hover:opacity-100 transition-opacity">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous Exhibition</span>
            </span>
            <span className="serif text-2xl md:text-3xl text-[#1A1A1A] group-hover:opacity-60 transition-opacity mt-1">
              {prevProject.title}
            </span>
          </button>

          {/* Back to Work Archive Pill */}
          <button
            onClick={onBackToWork}
            className="px-6 py-2 border border-[#1A1A1A] rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            Catalogue Index [08]
          </button>

          {/* Next Project */}
          <button
            onClick={() => onNavigateToProject(nextProject.slug)}
            className="group flex flex-col items-end text-right w-full sm:w-auto"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 flex items-center gap-1 group-hover:opacity-100 transition-opacity">
              <span>Next Exhibition</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="serif text-2xl md:text-3xl text-[#1A1A1A] group-hover:opacity-60 transition-opacity mt-1">
              {nextProject.title}
            </span>
          </button>
        </div>
      </nav>
    </article>
  );
};
