import React from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenTGS: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTGS }) => {
  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-white pt-20 pb-12 px-6 md:px-12 border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#2B2B2B]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group focus:outline-none"
            >
              <span className="serif text-3xl md:text-4xl tracking-tight block group-hover:opacity-80 transition-opacity">
                A YXUNG SHOT
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-60 mt-1 block">
                Photography / Visual Production
              </span>
            </button>

            <p className="serif italic text-sm opacity-70 max-w-sm pt-1 leading-relaxed">
              An independent photographic practice and exhibition archive operating in Cape Town and internationally.
            </p>

            <div className="flex items-center space-x-2 text-xs opacity-60 pt-2">
              <MapPin size={13} />
              <span>Higgovale &amp; Atlantic Seaboard, Cape Town</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] opacity-50 block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em] opacity-80">
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors"
                >
                  Work [08]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Tana
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book')}
                  className="hover:text-white transition-colors font-medium text-white underline underline-offset-4"
                >
                  Book / Start Project
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] opacity-50 block">
              Connect
            </span>
            <div className="space-y-3 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity uppercase tracking-wider"
              >
                <Instagram size={14} />
                <span>Instagram @ayxungshot</span>
                <ArrowUpRight size={12} />
              </a>

              <button
                onClick={() => onNavigate('book')}
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity uppercase tracking-wider"
              >
                <Mail size={14} />
                <span>tanachiddo@gmail.com</span>
              </button>
            </div>

            {/* TGS Section */}
            <div className="pt-6 border-t border-[#2B2B2B] space-y-2">
              <div className="flex items-center justify-between">
                <span className="serif text-base text-white tracking-wide">
                  A TGS Creative Service
                </span>
                <button
                  onClick={onOpenTGS}
                  className="text-[10px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 inline-flex items-center space-x-1"
                >
                  <span>Explore TGS</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>
              <p className="text-[11px] opacity-50">
                Need more than photography? Explore the wider creative services offered by TGS.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Date Tier from Design HTML */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.15em] font-medium opacity-60 gap-4">
          <div className="flex items-center gap-6">
            <span>© 2026 Archive</span>
            <span>Cape Town / South Africa</span>
          </div>

          <div className="flex items-center gap-3">
            <span>A TGS Creative Service</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <button onClick={onOpenTGS} className="hover:text-white underline underline-offset-2">
              Explore TGS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
