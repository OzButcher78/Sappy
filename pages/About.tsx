
import React from 'react';
import { Target, Shield, Zap, Clock, Layers, Settings, CheckCircle2, Cpu, Monitor, Hammer, Globe, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-32 bg-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-white leading-none">
            Built with care. <br />
            <span className="text-blue-600">Refined through use.</span>
          </h1>
          
          <div className="space-y-8 text-xl text-slate-400 leading-relaxed font-bold tracking-tight">
            <p>
              Sappy is a personal body of work developed through decades of hands-on practice across IT, software, manufacturing, design, and automotive-related projects.
            </p>
            <p>
              Most things shown here started as ideas, experiments, or side projects — and stayed because they proved useful in the real world.
            </p>
            <p>
              Whether it’s a small educational app, a WordPress plugin, a high-performance website, or a functional CAD-designed part, the approach remains the same: reduce complexity, focus on function, and iterate until it works reliably.
            </p>
            <p className="text-slate-300">
              This site exists to document and organise that work — not to sell concepts, but to show what has been built, tested, and used.
            </p>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-slate-950 py-32 border-y border-slate-800/60">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 text-white tracking-tight">By the numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
              <div>
                <Clock className="text-blue-500 mb-6" size={28} />
                <h4 className="font-black text-2xl text-white mb-2 leading-tight">Since 1997</h4>
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Business owner and entrepreneur</p>
            </div>
            
            <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
              <div>
                <Layers className="text-blue-500 mb-6" size={28} />
                <h4 className="font-black text-xl text-white mb-2 leading-tight text-balance">Multiple disciplines</h4>
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-tight">Software, web platforms, CAD design, and manufacturing</p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
              <div>
                <Target className="text-blue-500 mb-6" size={28} />
                <h4 className="font-black text-xl text-white mb-2 leading-tight text-balance">Dozens of live projects</h4>
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-tight">Across education, WordPress, websites, and engineered parts</p>
            </div>

            <div className="p-8 bg-blue-600 rounded-3xl flex flex-col justify-between min-h-[220px] shadow-2xl shadow-blue-600/20">
              <div>
                <Shield className="text-white mb-6" size={28} />
                <h4 className="font-black text-xl text-white mb-2 leading-tight">Quality-first mindset</h4>
              </div>
              <p className="text-sm text-blue-100 font-bold uppercase tracking-widest">Built to work, not to impress</p>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-black mb-16 text-white tracking-tight">How I work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                icon: <Settings size={24} />, 
                title: 'Practical first', 
                desc: 'Every project starts with a real need or problem — not a trend.' 
              },
              { 
                icon: <Zap size={24} />, 
                title: 'Iteration over polish', 
                desc: 'Things improve through use, feedback, and repetition.' 
              },
              { 
                icon: <Shield size={24} />, 
                title: 'Simplicity by reduction', 
                desc: 'If something can be removed without loss of function, it should be.' 
              },
              { 
                icon: <CheckCircle2 size={24} />, 
                title: 'Consistency over novelty', 
                desc: 'Stable tools, predictable systems, and maintainable solutions.' 
              }
            ].map(item => (
              <div key={item.title} className="flex gap-6 group">
                <div className="w-14 h-14 bg-slate-800 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="container mx-auto px-6 py-32 border-t border-slate-800">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-black mb-6 text-white tracking-tight">Tools & technologies</h2>
          <p className="text-xl text-slate-400 mb-16 font-bold tracking-tight">
            The exact tools vary by project. The focus is always on reliability, clarity, and long-term usability rather than novelty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Software & Web */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="text-blue-500" size={20} />
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Software & Web</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'WooCommerce', 'Astro', 'Next.js', 'WordPress', 'PHP', 'Node.js', 'HTML'].map(tool => (
                  <span key={tool} className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg font-black text-xs text-slate-300 hover:border-blue-500 transition-all cursor-default shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering & Manufacturing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="text-blue-500" size={20} />
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Engineering & Manufacturing</h4>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['Fusion 360', 'Blender', 'Slicing software'].map(tool => (
                    <span key={tool} className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg font-black text-xs text-slate-300 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  CAD-based design and FDM manufacturing workflows for functional parts
                </p>
              </div>
            </div>

            {/* Platforms & Workflow */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-blue-500" size={20} />
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Platforms & Workflow</h4>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['GitHub', 'Cloud hosting', 'Deployment', 'Docker'].map(tool => (
                    <span key={tool} className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg font-black text-xs text-slate-300 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Modern build and CI workflows
                </p>
              </div>
            </div>

            {/* AI & Automation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-blue-500" size={20} />
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">AI & Automation</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Practical use of modern AI services for prototyping, automation, and content workflows — applied where they add real value, not complexity.
              </p>
            </div>

            {/* Productivity & Media */}
            <div className="md:col-span-2 pt-8 border-t border-slate-800/50">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-500" size={20} />
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Productivity & Media</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                <span className="text-white font-bold">Microsoft product suite</span> · Graphic and video editing tools for documentation, presentation, and product media
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
