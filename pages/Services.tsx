
import React from 'react';
import { Box, Cpu, ArrowRight, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pb-32 bg-slate-900">
      {/* Hero */}
      <section className="bg-slate-950 border-b border-slate-800 py-24">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter text-white">Studio Services</h1>
            <p className="text-2xl text-slate-400 leading-relaxed font-bold tracking-tight">
              Specialized design and engineering services for businesses seeking Swiss-quality precision and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="container mx-auto px-6 py-24 space-y-40">
        
        {/* Website Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-600/20">
              <Globe size={32} />
            </div>
            <h2 className="text-5xl font-black mb-6 text-white tracking-tight">Website Design</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-bold tracking-tight">
              Premium websites built for speed, clarity, and a frictionless user journey — with a clean, modern aesthetic.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Custom UI/UX design tailored to your brand',
                'Multilingual and e-commerce solutions',
                'Experience with WordPress, Joomla, Drupal, and custom HTML builds',
                'SEO-friendly structure, performance optimisation, and best-practice on-page setup'
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300 font-bold">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#/contact" className="inline-flex items-center gap-2 font-black text-blue-500 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              Start Web Project <ArrowRight size={20} />
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-10"></div>
            <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Website Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CAD & 3D Printing Service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-600/20">
              <Box size={32} />
            </div>
            <h2 className="text-5xl font-black mb-6 text-white tracking-tight text-balance">CAD & 3D Printing Service</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-bold tracking-tight">
              Mechanical design meets modern additive manufacturing — from functional prototypes to end-use parts.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Autodesk Fusion 360 (licensed) CAD workflow',
                'Functional prototypes and durable end-use components',
                'Material guidance: PLA, PETG, TPU, ASA, ABS',
                'Manufactured on high-quality FDM 3D printing machines with repeatable results'
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300 font-bold">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-8">
              <a href="#/contact" className="inline-flex items-center gap-2 font-black text-blue-500 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                Request CAD Quote <ArrowRight size={20} />
              </a>
              <div className="pt-8 border-t border-slate-800">
                 <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">Community Downloads</p>
                 <a 
                   href="https://makerworld.com/en/@3DPrintCraft3D" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-2xl text-sm font-black hover:bg-slate-700 transition-all border border-slate-700 shadow-xl group"
                 >
                   MakerWorld Gallery <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
            </div>
          </div>
          <div className="relative group lg:order-1">
            <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
               <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800" alt="CAD Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Vibe App Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-600/20">
              <Cpu size={32} />
            </div>
            <h2 className="text-5xl font-black mb-6 text-white tracking-tight">Vibe App Design</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-bold tracking-tight">
              Design-forward, “high-vibe” applications with polished UI, reactive interfaces, and practical AI integration.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Custom AI-enabled features and lightweight application development',
                'Reactive dashboards and data-driven interfaces',
                'Internal tools, automations, and system bridges',
                'Modern UI/UX design for Vibe apps with a premium product feel'
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300 font-bold">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#/contact" className="inline-flex items-center gap-2 font-black text-blue-500 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              Build Vibe App <ArrowRight size={20} />
            </a>
          </div>
          <div className="relative group">
             <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-12 flex flex-col justify-center items-center gap-8 min-h-[350px]">
                <div className="w-24 h-24 border-4 border-blue-500 border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="text-center">
                   <p className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Vibe Core Active</p>
                   <p className="text-white text-3xl font-black tracking-tight">AI Integrated Engine</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
