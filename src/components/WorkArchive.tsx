import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Grid, List, Search } from 'lucide-react';
import { Category, Project } from '../types';

interface WorkArchiveProps {
  projects: Project[];
  onViewProject: (slug: string) => void;
  initialCategory?: Category;
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({
  projects,
  onViewProject,
  initialCategory = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [viewMode, setViewMode] = useState<'editorial' | 'index'>('editorial');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = [
    'All',
    'Portraits',
    'Events',
    'Weddings',
    'Commercial',
    'Lifestyle',
    'Creative'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div id="work-collection-page" className="pt-28 md:pt-36 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="pb-10 border-b border-ink flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-mono">
              Exhibition Catalogue 2026
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] opacity-40"></div>
          </div>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl tracking-tighter-tight text-[#1A1A1A]">
            THE COLLECTION
          </h1>
        </div>
        <p className="serif italic text-base md:text-xl opacity-75 max-w-md text-[#1A1A1A]">
          Complete digital catalogue of photographic series, commissions and editorial stories.
        </p>
      </div>

      {/* Filter & View Controls */}
      <div className="py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-ink">
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                id={`category-filter-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white font-medium border border-[#1A1A1A]'
                    : 'bg-transparent border border-ink text-[#1A1A1A] opacity-70 hover:opacity-100 hover:border-[#1A1A1A]'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[9px] font-mono ${isSelected ? 'opacity-70' : 'opacity-50'}`}>
                  [{count}]
                </span>
              </button>
            );
          })}
        </div>

        {/* View Switcher & Search Bar */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          {/* Search Box */}
          <div className="relative flex-1 lg:w-60">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalogue..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F8F8F8] border border-ink rounded-full text-xs text-[#1A1A1A] placeholder:opacity-40 focus:outline-none focus:border-[#1A1A1A] focus:bg-white transition-all"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-ink rounded-full p-0.5 bg-[#F8F8F8]">
            <button
              onClick={() => setViewMode('editorial')}
              className={`px-3 py-1 text-[10px] uppercase tracking-[0.15em] rounded-full flex items-center gap-1.5 transition-all ${
                viewMode === 'editorial'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-[#1A1A1A] opacity-60 hover:opacity-100'
              }`}
              title="Exhibition View"
            >
              <Grid size={12} />
              <span className="hidden sm:inline">Plates</span>
            </button>
            <button
              onClick={() => setViewMode('index')}
              className={`px-3 py-1 text-[10px] uppercase tracking-[0.15em] rounded-full flex items-center gap-1.5 transition-all ${
                viewMode === 'index'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-[#1A1A1A] opacity-60 hover:opacity-100'
              }`}
              title="Catalogue Index View"
            >
              <List size={12} />
              <span className="hidden sm:inline">Index</span>
            </button>
          </div>
        </div>
      </div>

      {/* Count & Status Indicator */}
      <div className="pt-6 pb-8 flex items-center justify-between text-xs opacity-60 font-mono">
        <span>Showing {filteredProjects.length} of {projects.length} Works</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="hover:opacity-100 underline underline-offset-2"
          >
            Clear Search Filter
          </button>
        )}
      </div>

      {/* VIEW MODE: EDITORIAL EXHIBITION GRID */}
      {viewMode === 'editorial' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer flex flex-col justify-between relative"
                onClick={() => onViewProject(project.slug)}
              >
                {/* Project Media Card with Matting Frame */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F8F8] p-2 border border-ink shadow-sm mb-4">
                    <div className="w-full h-full overflow-hidden relative">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover gallery-image-hover filter brightness-[0.98]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Number Overlay */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                        {project.number}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A] border border-ink shadow-xs">
                        {project.year}
                      </div>
                    </div>
                  </div>

                  {/* Project Info Strip */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="serif text-2xl md:text-3xl text-[#1A1A1A] group-hover:opacity-70 transition-opacity">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={16} className="text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>

                    <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-widest opacity-60">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.subcategory}</span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>

                    <p className="serif italic text-sm opacity-75 line-clamp-2 pt-1 text-[#1A1A1A]">
                      "{project.description}"
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-ink flex justify-between items-center text-[10px] font-mono opacity-50">
                  <span>REF: {project.catalogCode}</span>
                  <span>{project.allImages.length} Plates</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* VIEW MODE: CATALOGUE INDEX TABLE */}
      {viewMode === 'index' && (
        <div className="overflow-x-auto border-t border-ink">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-ink text-[10px] uppercase font-mono opacity-50 tracking-[0.2em]">
                <th className="py-4 font-normal">No.</th>
                <th className="py-4 font-normal">Project Title</th>
                <th className="py-4 font-normal">Category</th>
                <th className="py-4 font-normal">Location</th>
                <th className="py-4 font-normal">Year</th>
                <th className="py-4 font-normal text-right">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  onClick={() => onViewProject(project.slug)}
                  className="group hover:bg-[#F8F8F8] cursor-pointer transition-colors"
                >
                  <td className="py-4 font-mono opacity-50 text-[11px]">
                    {project.number}
                  </td>
                  <td className="py-4">
                    <span className="serif text-lg md:text-xl text-[#1A1A1A] group-hover:opacity-70 transition-opacity font-medium block">
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono opacity-40">
                      {project.catalogCode}
                    </span>
                  </td>
                  <td className="py-4 uppercase tracking-wider text-[11px] opacity-75">
                    {project.category}
                  </td>
                  <td className="py-4 opacity-60">
                    {project.location}
                  </td>
                  <td className="py-4 font-mono opacity-60">
                    {project.year}
                  </td>
                  <td className="py-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider opacity-60 group-hover:opacity-100 group-hover:underline">
                      <span>Inspect</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-24 text-center space-y-4">
          <p className="serif text-2xl opacity-60">No projects found matching your selection.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2 border border-[#1A1A1A] rounded-full text-xs uppercase tracking-[0.2em]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
