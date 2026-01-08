
import React from 'react';
import { Mail, Calendar, MessageSquare, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-32">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info Side */}
          <div>
            <h1 className="text-6xl font-bold mb-8 tracking-tight">Let's build <span className="text-blue-600">together.</span></h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Reach out using the form or through our direct channels.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:hello@sappy.com" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">hello@sappy.com</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 flex-shrink-0">
                   <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Book a Call</h4>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">Schedule a 15-minute intro session.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    View Calendar <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 flex-shrink-0">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Studio</h4>
                  <p className="text-slate-500 dark:text-slate-400">Remote-first | HQ: Switzerland & Sweden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Interest</label>
                <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                  <option>Web Portfolio Project</option>
                  <option>Custom WordPress Plugin</option>
                  <option>CAD / 3D Design Service</option>
                  <option>Automation & AI Integration</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                Send Message <MessageSquare size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
