
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 pb-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-12 tracking-tighter text-white">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <p className="text-xl text-slate-400 font-bold tracking-tight leading-relaxed">
            The protection of your personal data is important. This website is primarily an informational and portfolio-based site.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Data Controller</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              Balmer Storm Solutions<br />
              Dieter Balmer<br />
              Schaffhausen, Switzerland<br />
              Email: <a href="mailto:info@sappy.ch" className="text-blue-400 hover:underline">info@sappy.ch</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Personal Data</h2>
            <p className="text-slate-400 leading-relaxed">
              No personal data is actively collected when visiting this website, unless you voluntarily provide information (for example, by contacting via email or a contact form).
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              If you contact us by email or contact form, your details will be used solely to process your inquiry and will not be shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Hosting and Infrastructure</h2>
            <p className="text-slate-400 leading-relaxed">
              This website may be hosted on platforms such as GitHub Pages or Vercel. These providers may process technical data (such as IP addresses, browser type, or access time) as part of standard server logs for security and operational purposes.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              Sappy does not control or access these analytics systems directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Cookies</h2>
            <p className="text-slate-400 leading-relaxed">
              This website does not intentionally set or use its own cookies.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              Cookies may be used by third-party platforms involved in hosting or embedded services (such as GitHub, Vercel, or Google services). These cookies are governed by the respective providers’ privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Analytics</h2>
            <p className="text-slate-400 leading-relaxed">
              No custom analytics, tracking tools, or profiling systems are intentionally implemented by the website operator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-tight">Data Sharing</h2>
            <p className="text-slate-400 leading-relaxed">
              Personal data is not sold, traded, or transferred to third parties, except where required by law or for technical operation by hosting providers.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Your Rights</h2>
            <p className="text-slate-400 leading-relaxed">
              Under Swiss data protection law and, where applicable, the GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
              <li>Request information about stored personal data</li>
              <li>Request correction or deletion of personal data</li>
              <li>Object to data processing where applicable</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              Requests can be made via email to <a href="mailto:info@sappy.ch" className="text-blue-400 hover:underline">info@sappy.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Changes</h2>
            <p className="text-slate-400 leading-relaxed">
              This privacy policy may be updated if technical or legal requirements change.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
