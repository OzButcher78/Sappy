
import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Category } from '../types';
import { SAMPLE_PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { useNavigation } from '../App';

const Projects: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sort, setSort] = useState<'Newest' | 'Oldest' | 'A-Z'>('Newest');

  const categories = ['All', ...Object.values(Category)];

  // Synchronize category with URL parameters on load and hash change
  useEffect(() => {
    const syncCategory = () => {
      const hash = window.location.hash;
      const queryString = hash.split('?')[1];
      if (queryString) {
        const params = new URLSearchParams(queryString);
        const catParam = params.get('category');
        if (catParam && categories.includes(catParam)) {
          // If category is Web Portfolio, redirect to dedicated page
          if (catParam === Category.WEB_PORTFOLIO) {
            navigateTo('/websites');
            return;
          }
          setActiveCategory(catParam);
        } else {
          setActiveCategory('All');
        }
      }
    };

    syncCategory();
    window.addEventListener('hashchange', syncCategory);
    return () => window.removeEventListener('hashchange', syncCategory);
  }, [navigateTo]);

  const filteredProjects = useMemo(() => {
    let result = [...SAMPLE_PROJECTS];

    // Filter by Search
    if (search) {
      const term = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.summary.toLowerCase().includes(term) ||
        p.tags.some(t => t.toLowerCase().includes(term))
      );
    }

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sort
    if (sort === 'Newest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === 'Oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sort === 'A-Z') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [search, activeCategory, sort]);

  const handleCategoryChange = (cat: string) => {
    if (cat === Category.WEB_PORTFOLIO) {
      navigateTo('/websites');
      return;
    }
    setActiveCategory(cat);
  };

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <div className="max-w-3xl mb-16">
        <h1 className="text-6xl font-black mb-6 tracking-tighter text-white">Project Directory</h1>
        <p className="text-xl text-slate-400 font-bold tracking-tight">
          Browse through our complete collection of digital and physical products.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12 sticky top-24 z-30 bg-slate-900/80 backdrop-blur-md p-4 rounded-3xl border border-slate-800 shadow-xl">
        {/* Search */}
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search projects, tech, tags..."
            className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories (Tabs Desktop / Select Mobile) */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-3 text-xs font-black rounded-xl transition-all whitespace-nowrap uppercase tracking-widest border ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="lg:hidden relative">
           <select 
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full pl-6 pr-10 py-4 bg-slate-950 border border-slate-800 rounded-2xl appearance-none font-black text-xs uppercase tracking-widest outline-none text-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
        </div>

        {/* Sort Select */}
        <div className="relative min-w-[160px]">
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="w-full pl-6 pr-10 py-4 bg-slate-950 border border-slate-800 rounded-2xl appearance-none font-black text-xs uppercase tracking-widest outline-none text-white"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A – Z</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-40 bg-slate-950 rounded-[3rem] border border-dashed border-slate-800">
          <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-10 border border-slate-800">
            <Search size={40} className="text-slate-600" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-white">No items found</h3>
          <p className="text-slate-500 text-lg font-bold mb-10">Try broad search terms or clear filters.</p>
          <button 
            onClick={() => { setSearch(''); handleCategoryChange('All'); }}
            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all active:scale-95"
          >
            Reset Catalog
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
