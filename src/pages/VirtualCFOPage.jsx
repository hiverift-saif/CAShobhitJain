import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, ShieldCheck, Scale, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';

const scope = [
  'Virtual CFO support & financial co-pilot',
  'Financial strategy & annual budgeting',
  'Cash flow planning & capital management',
  'MIS, dashboards & performance analysis',
  'GST, income tax & compliance oversight',
  'Business structuring & process advisory',
  'Audit, due diligence & fundraising support',
];

const whoFor = [
  { title: 'Startups & Scale-ups', desc: 'Founders who need financial discipline to scale confidently without burning cash.' },
  { title: 'SMEs & Family Businesses', desc: 'Established businesses seeking professional governance and structured financial processes.' },
  { title: '₹3Cr – ₹100Cr Turnover', desc: 'Companies needing senior financial leadership without the prohibitive full-time CFO cost.' },
];

const whyUs = [
  { icon: <Zap size={32} />, title: 'CFO-level Thinking', desc: 'Senior guidance and flexible engagement for real-world impact.' },
  { icon: <Target size={32} />, title: 'Promoter-Centric', desc: 'We align to your vision and business context, not textbook advice.' },
  { icon: <Users size={32} />, title: 'Experienced Team', desc: 'Qualified CAs with cross-sectoral exposure and audit backgrounds.' },
  { icon: <ShieldCheck size={32} />, title: 'Complete Control', desc: 'Clean books, strong processes, and full regulatory discipline.' },
  { icon: <Scale size={32} />, title: 'Integrated Support', desc: 'Finance + Law under one roof for holistic decision support.' },
  { icon: <BarChart3 size={32} />, title: 'Data-Driven', desc: 'Modern dashboards and MIS for real-time business clarity.' },
];

export default function VirtualCFOPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-32 md:py-44 bg-[#0e2a5e] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{ backgroundImage: 'url(/hero-cfo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a5e] via-[#0e2a5e]/90 to-transparent z-1" />
        
        <div className="relative z-10 container-main px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full border border-[#f4761c]/20">
              Strategic Financial Leadership
            </span>
            <h1 className="font-heading font-black text-white text-5xl md:text-7xl mb-6 leading-[1.1] tracking-tight">
              Your Strategic <br />
              <span className="text-[#f4761c]">Financial Co-Pilot.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Professional CFO expertise for growing businesses. We manage the complexity so you can focus on the growth.
            </p>

            <nav className="flex items-center gap-3 text-sm font-medium mt-8">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <span className="text-white">Virtual CFO</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO SECTION ===== */}
      <section className="py-24 bg-white relative">
        <div className="container-main px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-8 leading-tight">
                Senior Financial Leadership <br /> 
                <span className="text-[#f4761c]">Without the Full-time Cost.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Our CFO Advisory services are designed for founders who need high-level discipline but aren't ready for a full-time executive hire. 
                </p>
                <p>
                  We become embedded in your team—driving strategy, monthly MIS, and GST oversight, ensuring you are <span className="text-[#0e2a5e] font-bold">audit-ready and investor-ready at all times.</span>
                </p>
              </div>
            </div>

            <div className="reveal relative">
              <div className="bg-[#0e2a5e] p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#f4761c]" />
                <p className="font-heading font-black text-[#f4761c] text-8xl opacity-10 absolute -bottom-4 -right-4 select-none">CFO</p>
                
                <div className="relative z-10 space-y-8">
                  {[
                    { num: '10+', label: 'Years of CFO Advisory' },
                    { num: '200+', label: 'Clients Successfully Served' },
                    { num: '₹3Cr–₹100Cr', label: 'Ideal Turnover Range' },
                    { num: 'Pan-India', label: 'Service Coverage' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0 group">
                      <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{s.label}</span>
                      <span className="font-heading font-black text-[#f4761c] text-2xl group-hover:scale-110 transition-transform">{s.num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCOPE OF WORK SECTION (Same style as your reference) ===== */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-main px-4">
          <div className="text-center mb-16 reveal">
            <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase mb-4 block">Scope of Work</span>
            <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6">
              Comprehensive Services <span className="text-[#f4761c]">Included</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {scope.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-5 p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#f4761c]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#f4761c] group-hover:bg-[#f4761c] group-hover:text-white transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-[#0e2a5e] font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TARGET CLIENTS SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container-main px-4 text-center">
          <span className="section-label">Target Clients</span>
          <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-16">Who It's For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoFor.map((w, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-[#f4761c]/50 transition-all duration-500 reveal">
                <div className="w-16 h-16 bg-[#f4761c] text-white rounded-2xl flex items-center justify-center font-heading font-black text-2xl mx-auto mb-8 shadow-lg shadow-[#f4761c]/20 group-hover:rotate-6 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-[#0e2a5e] text-2xl mb-4">{w.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-24 bg-[#0e2a5e] relative">
        <div className="container-main px-4">
          <div className="text-center mb-16 reveal">
            <span className="section-label text-white/60">Our Advantage</span>
            <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-4 mt-2">Why Choose Our CFO Services</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f4761c]/50 hover:bg-white/[0.08] transition-all duration-500 reveal shadow-xl"
              >
                <div className="text-[#f4761c] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-heading font-bold text-white text-xl mb-3 tracking-tight">{item.title}</h4>
                <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container-main px-4">
           <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0e2a5e] to-[#1e4ba1] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <h2 className="font-heading font-black text-white text-4xl md:text-6xl mb-8 leading-tight">
                    Transform Your <br /> Business <span className="text-[#f4761c]">Finances.</span>
                </h2>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-[#f4761c] text-[#0e2a5e] px-10 py-5 rounded-full font-black text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1">
                    Book Free Consultation <ArrowRight size={20} />
                </Link>
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-10">Confidential & No Obligations</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}