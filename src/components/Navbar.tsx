import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, slug?: string) => void;
  inquiryCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  inquiryCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', view: 'work', count: '08' },
    { label: 'Services', view: 'services' },
    { label: 'About', view: 'about' }
  ];

  const handleLinkClick = (view: string) => {
    setMobileMenuOpen(false);
    onNavigate(view);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'h-20 bg-white/95 backdrop-blur-md border-b border-ink shadow-sm'
            : 'h-20 md:h-24 bg-white border-b border-ink'
        }`}
      >
        <div className="max-w-7xl h-full mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="group text-left flex flex-col focus:outline-none"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
              A YXUNG SHOT
            </span>
            <span className="text-[10px] uppercase opacity-50 tracking-[0.1em] text-[#1A1A1A] mt-0.5">
              Photography / Visual Production
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navItems.map((item) => (
              <button
                key={item.view}
                id={`nav-link-${item.view}`}
                onClick={() => handleLinkClick(item.view)}
                className={`relative py-1 transition-opacity ${
                  currentView === item.view
                    ? 'text-[#1A1A1A] font-bold opacity-100'
                    : 'text-[#1A1A1A] opacity-70 hover:opacity-100'
                }`}
              >
                <span>{item.label}</span>
                {item.count && (
                  <span className="ml-1 text-[9px] font-mono opacity-50">
                    [{item.count}]
                  </span>
                )}
                {currentView === item.view && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}

            {/* Book CTA Pill */}
            <button
              id="nav-book-cta"
              onClick={() => handleLinkClick('book')}
              className={`ml-4 px-6 py-2 border border-[#1A1A1A] rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                currentView === 'book'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <span>Book</span>
              {inquiryCount > 0 && <span className="ml-1 opacity-70 font-mono">({inquiryCount})</span>}
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-8 pb-12 flex flex-col justify-between md:hidden border-b border-ink"
          >
            <div className="space-y-8">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] opacity-50 block">
                Navigation
              </span>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.view}
                    onClick={() => handleLinkClick(item.view)}
                    className="flex items-baseline justify-between text-left group"
                  >
                    <span className="serif text-3xl tracking-tight text-[#1A1A1A] group-hover:translate-x-2 transition-transform">
                      {item.label}
                    </span>
                    {item.count && (
                      <span className="text-xs font-mono opacity-50">
                        [{item.count}]
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-6 border-t border-ink">
                <button
                  onClick={() => handleLinkClick('book')}
                  className="w-full py-3.5 border border-[#1A1A1A] rounded-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.2em] font-medium text-center"
                >
                  Book / Start A Project
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-ink text-[10px] uppercase tracking-[0.15em] opacity-60 flex justify-between">
              <span>Cape Town / South Africa</span>
              <span>© 2026 Archive</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
