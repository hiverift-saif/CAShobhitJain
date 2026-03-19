import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe, FileText, CheckCircle, Link2,ShieldCheck ,CheckCircle2 } from 'lucide-react';

const scope = [
  'Income-tax return filing in India',
  'Capital gains computation & tax planning',
  'Property sale / purchase tax advisory',
  'TDS on rent and property transactions',
  'Repatriation support (Form 15CA / 15CB, Bank coordination)',
  'Advisory on residential status & FEMA implications',
  'Coordination with banks and authorised dealers',
];

const locations = [
  { icon: <MapPin size={32} />, name: 'UAE', desc: 'Dubai, Abu Dhabi, Sharjah' },
  { icon: <MapPin size={32} />, name: 'USA', desc: 'New York, New Jersey, California' },
  { icon: <MapPin size={32} />, name: 'UK', desc: 'London, Birmingham, Manchester' },
  { icon: <MapPin size={32} />, name: 'Canada', desc: 'Toronto, Vancouver, Calgary' },
  { icon: <MapPin size={32} />, name: 'Singapore', desc: 'Central Business District & beyond' },
  { icon: <Globe size={32} />, name: 'Other Countries', desc: 'All major NRI jurisdictions covered' },
];

const whoFor = [
  { title: 'NRIs with Indian Income/Assets', desc: 'Rental income, dividends, FD interest, property — all need proper tax reporting.' },
  { title: 'OCI Holders & PIOs', desc: 'Overseas Citizen of India holders with Indian financial connections.' },
  { title: 'Returning NRIs', desc: 'Planning to return to India? Manage RNOR status and tax impact proactively.' },
  { title: 'NRIs Selling Property', desc: 'Navigate TDS deductions, capital gains, and repatriation through proper channels.' },
];

const whyUs = [
  { icon: <FileText size={40} />, title: 'Clear Communication', desc: 'We explain India\'s complex tax rules in simple, actionable terms.' },
  { icon: <CheckCircle size={40} />, title: 'Strong Compliance', desc: 'Every filing is accurate, timely, and fully compliant with Indian tax law.' },
  { icon: <Link2 size={40} />, title: 'One-Point Coordination', desc: 'Single contact for tax, FEMA, repatriation, and banking — no juggling multiple advisors.' },
  { icon: <Globe size={40} />, title: 'Long-Term Advisory', desc: 'We build multi-year tax strategies, not just file returns.' },
];

export default function NRIServicesPage() {
  return (
    <div className="bg-[#f0f5ff]">
      {/* HERO */}
      <section
        className="relative py-28 bg-[#0e2a5e]"
        style={{ backgroundImage: 'url(/hero-nri.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0e2a5e]/80" />
        <div className="relative z-10 container-main">
          <span className="section-label">NRI Advisory</span>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl mb-4">NRI Financial & Tax Services</h1>
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#f4761c]">Home</Link>
            <span>›</span>
            <Link to="/services" className="hover:text-[#f4761c]">Services</Link>
            <span>›</span>
            <span className="text-white">NRI Services</span>
          </nav>
        </div>
      </section>


{/* ===== SECTION: WHAT WE DO (Improved) ===== */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Subtle decorative background element */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

  <div className="container-main relative z-10 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      {/* Content Side */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-[#f4761c]" />
          <span className="text-sm font-black tracking-[0.2em] text-[#f4761c] uppercase">Our Approach</span>
        </div>
        
        <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">
          Your India <span className="text-[#f4761c]">Financial Partner</span> Abroad.
        </h2>

        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
          <p>
            We provide end-to-end India-focused tax and compliance support for Non-Resident Indians across <span className="font-bold text-[#0e2a5e]">UAE, USA, UK, Canada, and Singapore</span>.
          </p>
          <p>
            From annual ITR filing to complex property transactions involving TDS deductions and repatriation, we manage your Indian financial obligations with precision and full regulatory compliance.
          </p>
          
          {/* Highlighted USP Box */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#f4761c] flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#f4761c] shadow-sm">
              <CheckCircle2 size={24} />
            </div>
            <p className="font-heading font-bold text-[#0e2a5e] text-xl">
              One trusted advisor. All India financial matters — sorted.
            </p>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="reveal relative group">
        <div className="relative z-10">
          <img 
            src="/hero-nri.png" 
            alt="NRI Services" 
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
          />
          
          {/* Floating Info Badge */}
          <div className="absolute -bottom-8 -left-8 bg-[#0e2a5e] p-8 rounded-3xl shadow-2xl border-b-4 border-[#f4761c] hidden md:block animate-float">
            <p className="text-[#f4761c] font-black text-4xl mb-1">100%</p>
            <p className="text-white text-xs font-bold uppercase tracking-widest leading-tight">
              Regulatory <br /> Compliance
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f4761c]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#0e2a5e]/5 rounded-full blur-[80px]" />
      </div>

    </div>
  </div>
</section>




<section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
  {/* Subtlest background texture */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230e2a5e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
  />

  <div className="container-main relative z-10 px-4">
    <div className="text-center mb-16 reveal">
      <div className="flex justify-center items-center gap-3 mb-4">
        <span className="w-12 h-[1px] bg-[#f4761c]"></span>
        <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Deliverables</span>
        <span className="w-12 h-[1px] bg-[#f4761c]"></span>
      </div>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6">
        Scope of <span className="text-[#f4761c]">Expertise</span>
      </h2>
      <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
        Comprehensive end-to-end management of your Indian tax landscape and regulatory compliance.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
      {scope.map((item, i) => (
        <div
          key={i}
          className="group flex items-center gap-6 p-6 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#f4761c]/30 hover:shadow-2xl hover:shadow-[#0e2a5e]/5 hover:-translate-y-1 transition-all duration-300 reveal overflow-hidden relative"
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          {/* Decorative Left Accent */}
          <div className="absolute left-0 top-0 w-1.5 h-full bg-[#f4761c] opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Icon Container */}
          <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#f4761c] group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-300">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col flex-1">
             <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f4761c] animate-pulse" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Service Item</span>
             </div>
             <span className="text-[#0e2a5e] font-black text-lg md:text-xl tracking-tight leading-tight">
                {item}
             </span>
          </div>

          {/* Corner Arrow - only visible on hover */}
          <div className="opacity-0 group-hover:opacity-10 transition-opacity absolute right-4 bottom-4">
             <ShieldCheck size={60} />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center reveal">
        <p className="text-slate-400 text-sm font-medium">
            * All advisory services are aligned with the latest FEMA and Income Tax Department guidelines.
        </p>
    </div>
  </div>
</section>

{/* ===== SECTION: WHO WE SERVE & GLOBAL REACH ===== */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Soft background decoration */}
  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(244,118,28,0.03),transparent_50%)] pointer-events-none" />

  <div className="container-main relative z-10 px-4">
    
    {/* Part 1: Who We Serve */}
    <div className="text-center mb-16 reveal">
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-[0.2em] text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full">
        Target Clients
      </span>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6">
        Who We Serve
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
        Tailored Indian tax and financial solutions for the global NRI community.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
      {whoFor.map((w, i) => (
        <div
          key={i}
          className="group relative p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-[#f4761c]/30 transition-all duration-500 reveal"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Accent Border on Hover */}
          <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#f4761c] group-hover:h-full transition-all duration-500 rounded-l-2xl" />

          <h3 className="font-heading font-black text-[#0e2a5e] text-2xl mb-4 flex items-center gap-3 group-hover:text-[#f4761c] transition-colors">
            <span className="text-lg opacity-40 group-hover:opacity-100 tracking-tighter">0{i + 1}</span>
            {w.title}
          </h3>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {w.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Part 2: Global Reach */}
    <div className="text-center mb-12 reveal">
      <div className="w-20 h-1 bg-[#f4761c] mx-auto mb-8 rounded-full opacity-30" />
      <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Global Presence</span>
      <h3 className="font-heading font-black text-[#0e2a5e] text-3xl md:text-4xl mt-4 mb-10">NRIs Across the Globe</h3>
    </div>

    {/* Grid: 2 columns on mobile, 3 on tablet, 6 on desktop */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {locations.map((loc, i) => (
        <div
          key={i}
          className="group p-6 text-center bg-white border border-slate-600 rounded-2xl hover:border-[#f4761c]/50 hover:shadow-xl transition-all duration-500 reveal"
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-slate-50 text-[#f4761c] group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-300">
            {loc.icon}
          </div>
          <h4 className="font-heading font-black text-[#0e2a5e] text-base mb-1">{loc.name}</h4>
          <p className="text-slate-500 text-[13px] uppercase font-bold tracking-widest">{loc.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ===== SECTION: WHY NRIs TRUST US (Improved) ===== */}
<section className="py-24 bg-slate-50 relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4761c]/5 blur-[100px] rounded-full -mr-48 -mt-48" />

  <div className="container-main relative z-10 px-4">
    <div className="text-center mb-16 reveal">
      <div className="flex justify-center items-center gap-3 mb-4">
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
        <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Our Promise</span>
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
      </div>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6 tracking-tight">
        Why NRIs Trust Us
      </h2>
      <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
        Expert-led India-focused advisory with complete transparency and global reach.
      </p>
    </div>

    {/* Grid: 1 col mobile, 2 sm, 4 lg */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {whyUs.map((item, i) => (
        <div
          key={i}
          className="group relative bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 reveal overflow-hidden"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Faded Background Number for Premium Look */}
          <span className="absolute -top-4 -right-2 text-7xl font-black text-slate-50 group-hover:text-[#f4761c]/5 transition-colors duration-500 select-none">
            0{i + 1}
          </span>

          <div className="relative z-10">
            {/* Icon Box */}
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-500 shadow-inner transform group-hover:rotate-6">
              {item.icon}
            </div>

            <h4 className="font-heading font-black text-[#0e2a5e] text-xl mb-4 group-hover:text-[#f4761c] transition-colors leading-tight">
              {item.title}
            </h4>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#f4761c] group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>

{/* ===== SECTION: CTA (Stays Dark for Impact) ===== */}
<section className="py-24 bg-[#0e2a5e] relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,118,28,0.1),transparent_50%)]" />
  
  <div className="container-main relative z-10 text-center reveal px-4">
    <h2 className="font-heading font-black text-white text-4xl md:text-6xl mb-6 tracking-tight">
      Talk to Our <span className="text-[#f4761c]">NRI Expert</span>
    </h2>
    <p className="text-[#cdd9f0] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
      Confidential, obligation-free first call. <br className="hidden md:block" />
      We're here to simplify your Indian finances.
    </p>
    
    <Link 
      to="/contact" 
      className="inline-flex items-center gap-3 bg-[#f4761c] text-[#0e2a5e] px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-2xl"
    >
      Contact Us <ArrowRight size={20} />
    </Link>
    
    <div className="mt-8 flex items-center justify-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
        <span>Confidential</span>
        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
        <span>Expert Led</span>
        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
        <span>Global Support</span>
    </div>
  </div>
</section>
    </div>
  );
}
