
import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import { SAMPLE_PROJECTS } from '../constants';

interface ProjectDetailProps {
  slug: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const project = SAMPLE_PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Project not found</h1>
        <a href="#/projects" className="text-blue-600 flex items-center justify-center gap-2 font-bold hover:gap-3 transition-all">
          <ArrowLeft size={18} /> Back to Projects
        </a>
      </div>
    );
  }

  const relatedProjects = SAMPLE_PROJECTS
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="pb-32">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b dark:border-slate-800 py-16">
        <div className="container mx-auto px-6">
          <a href="#/projects" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors mb-12 text-sm font-bold">
            <ArrowLeft size={16} /> Back to Showcase
          </a>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                 <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-200 dark:border-blue-800">
                  {project.category}
                </span>
                <span className="text-slate-600 dark:text-slate-400 text-sm font-medium flex items-center gap-1">
                  <Calendar size={14} /> {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">{project.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {project.summary}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Live Demo <ExternalLink size={18} />
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white active:scale-95">
                   Github <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                {project.content}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-blue-600 mb-4 uppercase text-xs tracking-widest">The Problem</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Detailed description of challenges faced during the development cycle and market requirements.</p>
                </div>
                <div className="p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4 uppercase text-xs tracking-widest">The Solution</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">How our technical approach and creative strategy delivered measurable results.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm">
                    <img src={`https://picsum.photos/seed/${project.slug}-${i}/600`} className="w-full h-full object-cover" alt="Gallery item" />
                 </div>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Share</h4>
              <div className="flex gap-4">
                 <button onClick={() => alert('Shared to Twitter')} className="flex-grow py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white rounded-xl font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 active:scale-95">Twitter</button>
                 <button onClick={() => alert('Shared to LinkedIn')} className="flex-grow py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white rounded-xl font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 active:scale-95">LinkedIn</button>
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="pt-12 border-t dark:border-slate-800">
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Related Projects</h4>
                <div className="space-y-6">
                  {relatedProjects.map(p => (
                    <a key={p.id} href={`#/projects/${p.slug}`} className="group flex gap-4 items-center">
                       <div className="w-20 h-20 flex-shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                          <img src={p.images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt={p.title} />
                       </div>
                       <div>
                         <h5 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{p.title}</h5>
                         <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{p.category}</span>
                       </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
