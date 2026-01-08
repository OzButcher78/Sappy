
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 pb-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-12 tracking-tighter text-white">Legal Notice</h1>
        
        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Operator</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              Sappy<br />
              Operated by Balmer Storm Solutions<br />
              Sole proprietorship (registered in the Swiss Commercial Register)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Owner</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">Dieter Balmer</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Location</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">Schaffhausen, Switzerland</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Contact</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              Email: <a href="mailto:info@sappy.ch" className="text-blue-400 hover:underline">info@sappy.ch</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">VAT (MWST)</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">CHE-375.250.746</p>
          </section>

          <section className="pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Liability for content</h3>
            <p className="text-slate-400 leading-relaxed">
              The content of this website has been created with care. However, no guarantee is given for the accuracy, completeness, or timeliness of the information provided.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-white mb-4">Liability for links</h3>
            <p className="text-slate-400 leading-relaxed">
              This website may contain links to external third-party websites. The operator has no influence on their content and therefore assumes no liability for external content. Responsibility lies with the respective operators of those websites.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-white mb-4">Copyright</h3>
            <p className="text-slate-400 leading-relaxed">
              All content on this website, including text, images, and designs, is subject to copyright law. Any reproduction or use beyond private viewing requires prior written permission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
