
import React from 'react';
import { ArrowRight, Code, Zap, GraduationCap, Box } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { SAMPLE_PROJECTS } from '../constants';
import { Category } from '../types';
import { useNavigation } from '../App';

const Home: React.FC = () => {
  const { navigateTo } = useNavigation();
  const featuredProjects = SAMPLE_PROJECTS.filter(p => p.featured);
  
  const categories = [
    { 
      name: Category.EDUCATION, 
      icon: <GraduationCap size={28} />, 
      desc: 'Math learning apps and practical tools for teachers, parents, and schools.', 
      path: '/projects?category=Education' 
    },
    { 
      name: Category.WP_PLUGINS, 
      icon: <Code size={28} />, 
      desc: 'Swiss e-commerce enhancements, professional billing solutions, and AI-powered website helpers.', 
      path: '/projects?category=WordPress%20Plugins' 
    },
    { 
      name: Category.WEB_PORTFOLIO, 
      icon: <Zap size={28} />, 
      desc: 'A curated directory of fast, professional websites across 13+ domains.', 
      path: '/websites' 
    },
    { 
      name: Category.CAD_3D, 
      icon: <Box size={28} />, 
      desc: 'Precision CAD engineering for functional prototypes and durable end-use parts.', 
      path: '/projects?category=CAD%20%26%203D%20Printing' 
    }
  ];

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <div className="space-y-40 pb-40">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-16 md:pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-600/10 text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] rounded-full mb-10 border border-blue-500/20 shadow-lg shadow-blue-500/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            DIETER BALMER · PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter text-white">
            Built in a small workshop. <br />
            <span className="text-blue-600">Refined through real use.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight text-slate-300">
            Projects that started as ideas — and became practical solutions.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-14 leading-relaxed max-w-3xl font-medium tracking-tight">
            Sappy is a personal portfolio of software, websites, plugins, and functional CAD designs, developed through hands-on making, testing, and real-world application over decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#/projects" 
              onClick={(e) => handleNav(e, '/projects')}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 active:scale-95 tracking-wide"
            >
              Explore the work <ArrowRight size={22} />
            </a>
            <a 
              href="#/contact" 
              onClick={(e) => handleNav(e, '/contact')}
              className="px-10 py-5 bg-slate-800 text-white border border-slate-700 rounded-2xl font-black text-lg text-center hover:bg-slate-700 transition-all active:scale-95 shadow-lg tracking-wide"
            >
              Services & collaboration
            </a>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-slate-950 py-40 border-y border-slate-800/60">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black mb-6 text-white tracking-tight">Project collections.</h2>
            <p className="text-slate-400 text-xl font-bold tracking-tight max-w-3xl">
              Explore selected work across software, web, plugins, and CAD-driven manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <a 
                key={cat.name} 
                href={`#${cat.path}`}
                onClick={(e) => handleNav(e, cat.path)}
                className="p-10 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-blue-600 transition-all group shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-slate-800 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black mb-5 text-white">{cat.name}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium flex-grow">
                  {cat.desc}
                </p>
                <div className="text-sm font-black text-blue-500 flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest mt-auto">
                  View collection <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24">
          <div>
            <h2 className="text-4xl font-black mb-6 text-white tracking-tight">Latest Showcase</h2>
            <p className="text-slate-400 text-xl font-bold tracking-tight">Recent highlights from the Sappy production floor.</p>
          </div>
          <a 
            href="#/projects" 
            onClick={(e) => handleNav(e, '/projects')}
            className="group flex items-center gap-3 font-black text-blue-500 hover:text-blue-400 transition-all uppercase tracking-widest text-sm"
          >
            Full Project Hub <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[150px] rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter">Accelerate your product development.</h2>
            <p className="text-blue-50 text-xl md:text-2xl mb-14 font-bold tracking-tight leading-relaxed">
              From professional invoicing tools to custom Education apps and CAD parts. Let's discuss your engineering requirements.
            </p>
            <a 
              href="#/contact" 
              onClick={(e) => handleNav(e, '/contact')}
              className="px-14 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Start Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
