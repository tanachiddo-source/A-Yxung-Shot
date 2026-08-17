import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialCTAProps {
  onStartProject: () => void;
}

export const EditorialCTA: React.FC<EditorialCTAProps> = ({ onStartProject }) => {
  return (
    <section id="editorial-bottom-cta" className="py-24 md:py-36 px-6 md:px-12 border-t border-ink bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50">
            Commission &amp; Dialogue
          </span>
          <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
        </div>

        <h2 className="serif text-4xl md:text-7xl lg:text-8xl tracking-tighter-tight leading-[0.95] text-[#1A1A1A] max-w-5xl">
          LET'S MAKE SOMETHING WORTH KEEPING.
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-8 pt-8 border-t border-ink">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs uppercase tracking-[0.2em] opacity-60">
            <span>Photography</span>
            <span>·</span>
            <span>Visual Production</span>
            <span>·</span>
            <span>Creative Projects</span>
          </div>

          <button
            id="cta-start-project-btn"
            onClick={onStartProject}
            className="px-8 py-4 border border-[#1A1A1A] rounded-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-transparent hover:text-[#1A1A1A] transition-all flex items-center space-x-3 group shadow-xs"
          >
            <span>Start A Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
