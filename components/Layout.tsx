
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, ExternalLink } from 'lucide-react';
import { useNavigation } from '../App.tsx';

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage = 'home' }) => {
  const { navigateTo } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Websites', id: 'websites' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' }
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigateTo(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-blue-600/30">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="text-2xl font-bold tracking-tight flex items-center gap-1 group"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-lg shadow-blue-500/20">s</div>
            <span className="text-white">appy</span><span className="text-blue-500">.ch</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#/${item.id}`}
                onClick={(e) => handleNavClick(e, `/${item.id}`)}
                className={`text-sm font-bold tracking-wide transition-all hover:text-blue-400 ${activePage === item.id ? 'text-blue-400' : 'text-slate-300'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#/contact" 
              onClick={(e) => handleNavClick(e, '/contact')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30 active:scale-95"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300 hover:text-white transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[70px] bg-slate-900/98 backdrop-blur-xl z-40 p-6 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#/${item.id}`}
                onClick={(e) => handleNavClick(e, `/${item.id}`)}
                className="text-2xl font-bold text-white hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#/contact" 
              onClick={(e) => handleNavClick(e, '/contact')}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl text-center font-bold text-xl shadow-xl shadow-blue-600/20"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold tracking-tight flex items-center gap-1 mb-8">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">s</div>
                <span className="text-white">appy</span><span className="text-blue-500">.ch</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-lg font-medium">
                High-end software studio specializing in precise digital engineering, Swiss-quality web solutions, and innovative 3D products.
              </p>
              <div className="flex gap-4">
                <a href="javascript:void(0)" className="p-3 bg-slate-900 rounded-xl hover:bg-slate-800 transition-all text-slate-300 hover:text-blue-400 border border-slate-800 shadow-sm">
                  <Github size={22} />
                </a>
                <a href="mailto:info@sappy.ch" className="p-3 bg-slate-900 rounded-xl hover:bg-slate-800 transition-all text-slate-300 hover:text-blue-400 border border-slate-800 shadow-sm">
                  <Mail size={22} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#/projects" onClick={(e) => handleNavClick(e, '/projects')} className="hover:text-blue-400 transition-colors">Project Showcase</a></li>
                <li><a href="#/websites" onClick={(e) => handleNavClick(e, '/websites')} className="hover:text-blue-400 transition-colors">Web Portfolio</a></li>
                <li><a href="#/services" onClick={(e) => handleNavClick(e, '/services')} className="hover:text-blue-400 transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Direct</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#/about" onClick={(e) => handleNavClick(e, '/about')} className="hover:text-blue-400 transition-colors">About Sappy</a></li>
                <li><a href="#/contact" onClick={(e) => handleNavClick(e, '/contact')} className="hover:text-blue-600 transition-colors">Start Project</a></li>
                <li><a href="mailto:info@sappy.ch" className="flex items-center gap-2 hover:text-white transition-colors">
                  info@sappy.ch <ExternalLink size={14} />
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-bold">
            <p>© 2026 Sappy. Built, tested, refined.</p>
            <div className="flex gap-10">
              <a href="#/legal" onClick={(e) => handleNavClick(e, '/legal')} className="hover:text-blue-400">Legal Notice</a>
              <a href="#/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="hover:text-blue-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
