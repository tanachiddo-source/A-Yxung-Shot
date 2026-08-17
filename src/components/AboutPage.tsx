import React from 'react';
import { ArrowRight, Compass, Eye, Film, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onStartProject: () => void;
  onOpenTGS: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject, onOpenTGS }) => {
  return (
    <div id="about-page" className="pt-28 md:pt-36 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="pb-10 border-b border-ink flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-mono">
              Profile &amp; Philosophy
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
          </div>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tighter-tight text-[#1A1A1A]">
            BEHIND THE SHOT
          </h1>
        </div>
        <p className="serif italic text-base md:text-xl opacity-75 max-w-md text-[#1A1A1A]">
          A visual practice rooted in quiet observation, tactile texture, and cinematic presence.
        </p>
      </div>

      {/* Main Profile & Visual Grid */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Tana's Portrait with Gallery Matting */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F8F8F8] p-3 border border-ink shadow-md">
            <div className="w-full h-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1400&auto=format&fit=crop"
                alt="Tana — Photographer and Creative Director behind A Yxung Shot"
                className="w-full h-full object-cover filter contrast-[1.05] grayscale-[20%]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                Tana · Cape Town, 2026
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-mono opacity-50">
            <span>Founder &amp; Principal Photographer</span>
            <span>Higgovale Studio</span>
          </div>
        </div>

        {/* Biography & Editorial Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="serif text-3xl md:text-5xl text-[#1A1A1A] mb-2">
              Tana — Photographer &amp; Creative
            </h2>
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-60 font-mono">
              Visual Direction / Editorial Production
            </p>
          </div>

          <div className="space-y-6 text-base md:text-lg opacity-85 serif leading-relaxed text-[#1A1A1A]">
            <p>
              Operating at the intersection of portraiture, editorial storytelling and documentary archiving, <strong>A Yxung Shot</strong> is the photographic practice of Cape Town creative <strong>Tana</strong>.
            </p>
            <p className="serif italic">
              "We believe photographs should feel like physical artefacts rather than ephemeral pixels. Every commission is approached with an obsession for light, intentional composition, and genuine human warmth."
            </p>
            <p className="font-sans text-sm leading-relaxed opacity-75">
              Tana's work spans high-fashion editorial editorials, private wedding archives, commercial brand identity campaigns, and intimate portrait series. By balancing cinematic lighting with unstaged authenticity, the studio creates images that feel simultaneously timeless and modern.
            </p>
          </div>

          {/* Pillars of Practice */}
          <div className="pt-6 border-t border-ink grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Eye size={15} />
                <span className="font-mono uppercase tracking-wider font-bold">Observation</span>
              </div>
              <p className="opacity-60 text-[11px] leading-relaxed">
                Prioritizing natural presence, subtle gestures, and unforced authenticity over stiff posing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Film size={15} />
                <span className="font-mono uppercase tracking-wider font-bold">Tonality</span>
              </div>
              <p className="opacity-60 text-[11px] leading-relaxed">
                Signature analog color grading, warm shadows, natural highlights, and tangible film textures.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#1A1A1A]">
                <Compass size={15} />
                <span className="font-mono uppercase tracking-wider font-bold">Direction</span>
              </div>
              <p className="opacity-60 text-[11px] leading-relaxed">
                Collaborative art direction, moodboard development, location scouting, and wardrobe styling.
              </p>
            </div>
          </div>

          {/* The TGS Connection Box */}
          <div className="p-6 md:p-8 bg-[#F8F8F8] border border-ink space-y-4">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.25em] opacity-60">
              <Sparkles size={13} className="text-[#1A1A1A]" />
              <span>Network Collaboration</span>
            </div>

            <h3 className="serif text-2xl text-[#1A1A1A]">
              Part of the TGS Creative Network
            </h3>

            <p className="text-xs md:text-sm opacity-70 leading-relaxed text-[#1A1A1A]">
              A Yxung Shot is part of the <strong>TGS</strong> creative studio network. When clients require comprehensive multidisciplinary productions—including motion film, digital branding, strategy, or event design—the studio collaborates seamlessly across the collective.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTGS}
                className="text-xs uppercase tracking-[0.2em] font-bold underline underline-offset-4 text-[#1A1A1A] hover:opacity-60"
              >
                Learn More About TGS →
              </button>

              <button
                onClick={onStartProject}
                className="px-6 py-2 border border-[#1A1A1A] rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-[#1A1A1A] text-white hover:bg-transparent hover:text-[#1A1A1A] transition-all"
              >
                Book A Project With Tana
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
