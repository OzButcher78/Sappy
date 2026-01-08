
import React from 'react';
import { ExternalLink, CheckCircle2, Globe } from 'lucide-react';
import { WEBSITES } from '../constants';

const Websites: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 pb-40">
      <div className="max-w-4xl mb-24">
        <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter text-white">Web Portfolio</h1>
        <p className="text-2xl text-slate-400 font-bold tracking-tight leading-relaxed">
          Building websites since 1997 — from early HTML to modern CMS platforms, with a strong focus on compliance, performance, and conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {WEBSITES.map((site) => (
          <div key={site.domain} className="bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-slate-800 hover:border-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-600/10 group flex flex-col">
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-800 border-b border-slate-800">
              <img 
                src={site.image} 
                alt={site.domain} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                 <span className="px-4 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl border border-blue-400/30">
                  Live Production
                </span>
              </div>
            </div>
            
            <div className="p-10 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-blue-500" size={24} />
                    <h3 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tighter">{site.domain}</h3>
                  </div>
                  <p className="text-blue-500 font-black text-xs uppercase tracking-widest">{site.industry}</p>
                </div>
                <a 
                  href={`https://${site.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 rounded-2xl text-slate-100 hover:bg-blue-600 hover:text-white transition-all shadow-lg border border-slate-700 active:scale-90"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              
              <div className="space-y-10 mt-auto">
                <div className="flex flex-wrap gap-3">
                  {site.stack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-slate-950 text-[11px] font-black rounded-lg text-slate-300 border border-slate-800 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-slate-800">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80 mb-5">Highlights</h4>
                  <p className="text-slate-200 text-lg leading-relaxed font-bold tracking-tight">
                    {site.highlights}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Placeholder */}
        <div className="bg-slate-950 rounded-[2.5rem] p-12 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center group min-h-[400px]">
          <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-800 group-hover:border-blue-500 transition-all group-hover:scale-110">
             <CheckCircle2 size={40} className="text-blue-600" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-white tracking-tight">Upcoming Launches</h3>
          <p className="text-slate-500 text-xl font-bold tracking-tight max-w-xs leading-relaxed">
            New PDR networks and Swiss educational platforms currently in QA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Websites;
