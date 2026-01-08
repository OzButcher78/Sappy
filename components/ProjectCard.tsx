
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Project } from '../types';
import { useNavigation } from '../App';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { navigateTo } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(`/projects/${project.slug}`);
  };

  return (
    <a 
      href={`#/projects/${project.slug}`}
      onClick={handleClick}
      className="group block bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 backdrop-blur-sm"
    >
      <div className="relative aspect-[1.4/1] overflow-hidden bg-slate-800">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* HIGH CONTRAST BADGE */}
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-lg shadow-xl border border-blue-400/30">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-2 text-slate-400 text-xs font-black mb-4 uppercase tracking-tighter">
          <Calendar size={14} className="text-blue-500" />
          {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </div>
        <h3 className="text-2xl font-extrabold mb-3 text-white group-hover:text-blue-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-base line-clamp-2 mb-8 leading-relaxed font-medium">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-900 text-[10px] font-bold rounded-md text-blue-400 border border-slate-700">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-black text-blue-500 group-hover:gap-4 transition-all uppercase tracking-widest">
          View Case Study
          <ArrowRight size={18} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
