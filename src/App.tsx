import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroCover } from './components/HeroCover';
import { SelectedWork } from './components/SelectedWork';
import { WorkArchive } from './components/WorkArchive';
import { ProjectDetail } from './components/ProjectDetail';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { BookingPage } from './components/BookingPage';
import { EditorialCTA } from './components/EditorialCTA';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { TGSModal } from './components/TGSModal';
import { PROJECTS } from './data/projects';
import { BookingInquiry, ProjectImage } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'work' | 'services' | 'about' | 'book' | 'project'>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>(PROJECTS[0].slug);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [tgsModalOpen, setTgsModalOpen] = useState(false);

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: ProjectImage[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Client inquiries persistence
  const [inquiries, setInquiries] = useState<BookingInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('ayxung_inquiries');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return [];
  });

  // Save inquiries when updated
  useEffect(() => {
    try {
      localStorage.setItem('ayxung_inquiries', JSON.stringify(inquiries));
    } catch {
      // ignore
    }
  }, [inquiries]);

  // URL Hash Sync for clean routing
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'work') {
        setCurrentView('work');
      } else if (hash === 'services') {
        setCurrentView('services');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'book') {
        setCurrentView('book');
      } else if (hash.startsWith('project/')) {
        const slug = hash.replace('project/', '');
        const found = PROJECTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedProjectSlug(slug);
          setCurrentView('project');
        }
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (view: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view === 'project' && slug) {
      setSelectedProjectSlug(slug);
      setCurrentView('project');
      window.location.hash = `project/${slug}`;
      return;
    }

    setCurrentView(view as any);
    window.location.hash = view === 'home' ? '' : view;
  };

  const handleViewProject = (slug: string) => {
    navigateTo('project', slug);
  };

  const handleBackToWork = () => {
    navigateTo('work');
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    navigateTo('book');
  };

  const handleInquirySubmitted = (inquiry: BookingInquiry) => {
    setInquiries((prev) => [inquiry, ...prev]);
  };

  const handleOpenLightbox = (images: ProjectImage[], initialIndex: number) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: initialIndex
    });
  };

  const currentProject =
    PROJECTS.find((p) => p.slug === selectedProjectSlug) || PROJECTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      {/* Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        inquiryCount={inquiries.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroCover
                featuredProject={PROJECTS[0]}
                onExploreWork={() => {
                  const el = document.getElementById('selected-work-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigateTo('work');
                  }
                }}
                onViewProject={handleViewProject}
              />

              <SelectedWork
                projects={PROJECTS}
                onViewProject={handleViewProject}
                onViewAllWork={() => navigateTo('work')}
              />

              <EditorialCTA onStartProject={() => navigateTo('book')} />
            </motion.div>
          )}

          {currentView === 'work' && (
            <motion.div
              key="work-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WorkArchive
                projects={PROJECTS}
                onViewProject={handleViewProject}
              />
              <EditorialCTA onStartProject={() => navigateTo('book')} />
            </motion.div>
          )}

          {currentView === 'project' && (
            <motion.div
              key={`project-${currentProject.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDetail
                project={currentProject}
                allProjects={PROJECTS}
                onBackToWork={handleBackToWork}
                onNavigateToProject={handleViewProject}
                onOpenLightbox={handleOpenLightbox}
              />
              <EditorialCTA onStartProject={() => navigateTo('book')} />
            </motion.div>
          )}

          {currentView === 'services' && (
            <motion.div
              key="services-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServicesPage onSelectService={handleSelectService} />
              <EditorialCTA onStartProject={() => navigateTo('book')} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage
                onStartProject={() => navigateTo('book')}
                onOpenTGS={() => setTgsModalOpen(true)}
              />
              <EditorialCTA onStartProject={() => navigateTo('book')} />
            </motion.div>
          )}

          {currentView === 'book' && (
            <motion.div
              key="book-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookingPage
                preselectedService={preselectedService}
                onInquirySubmitted={handleInquirySubmitted}
                inquiries={inquiries}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenTGS={() => setTgsModalOpen(true)}
      />

      {/* Image Lightbox Modal */}
      <Lightbox
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }))
        }
      />

      {/* TGS Ecosystem Modal */}
      <TGSModal
        isOpen={tgsModalOpen}
        onClose={() => setTgsModalOpen(false)}
        onStartProject={() => {
          setTgsModalOpen(false);
          setPreselectedService('Creative Direction & Concept');
          navigateTo('book');
        }}
      />
    </div>
  );
}
