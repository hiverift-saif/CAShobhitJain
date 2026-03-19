import { Link } from 'react-router-dom';
import { 
  ArrowRight, Landmark, Home, Building2, Settings, 
  FileText, Briefcase, Building, Target, RefreshCw, 
  BadgeCheck, Handshake, ChevronRight, CircleDollarSign 
} from 'lucide-react';

const loanServices = [
  {
    icon: <Landmark className="text-[#f4761c]" size={32} />,
    title: 'Debt Syndication',
    desc: 'Arrange structured debt from multiple lenders — banks, NBFCs, bonds — tailored for corporates and real estate developers.',
    for: 'Corporates & Large Projects',
  },
  {
    icon: <Home className="text-[#f4761c]" size={32} />,
    title: 'Home Loan Assistance',
    desc: 'Best rates, maximum eligibility, and full process support from application to disbursement with zero hidden charges.',
    for: 'Salaried, Self-Employed, NRIs',
  },
  {
    icon: <Building2 className="text-[#f4761c]" size={32} />,
    title: 'Commercial Property',
    desc: 'LRD (Lease Rental Discounting), commercial purchase finance, and office space loans with optimal structuring.',
    for: 'Businesses & Investors',
  },
  {
    icon: <Settings className="text-[#f4761c]" size={32} />,
    title: 'Working Capital',
    desc: 'CC, OD, invoice financing, and bill discounting to keep your business operations smooth and liquid.',
    for: 'SMEs & Manufacturers',
  },
  {
    icon: <FileText className="text-[#f4761c]" size={32} />,
    title: 'Term Loans',
    desc: 'Project finance and machinery loans structured for repayment aligned specifically to your cash flows.',
    for: 'SMEs & Developers',
  },
  {
    icon: <Briefcase className="text-[#f4761c]" size={32} />,
    title: 'Debt Advisory',
    desc: 'Restructuring, refinancing, and balance sheet optimisation for businesses seeking growth or stability.',
    for: 'Scaling Businesses',
  },
];

const whyUs = [
  { icon: <Target size={32} />, title: 'Unbiased Advice', desc: 'We work for you, not the lender—ensuring independent recommendations.' },
  { icon: <Landmark size={32} />, title: 'Wide Network', desc: 'Access to leading banks, NBFCs, and alternative lenders across India.' },
  { icon: <RefreshCw size={32} />, title: 'End-to-End', desc: 'From documentation to disbursement—we manage the entire cycle.' },
  { icon: <BadgeCheck size={32} />, title: 'Transparent', desc: 'No hidden charges. Clear fee structure. What you see is what you get.' },
  { icon: <Handshake size={32} />, title: 'Tailored', desc: 'Every client gets a structure based on their unique financial profile.' },
];

export default function LoansPage() {
  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-32 md:py-44 bg-[#0e2a5e] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30 scale-105"
          style={{ backgroundImage: 'url(/hero-loans.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a5e]/90 via-[#0e2a5e]/80 to-[#0e2a5e] z-1" />
        
        <div className="relative z-10 container-main px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full border border-[#f4761c]/20">
              Debt & Capital Advisory
            </span>
            <h1 className="font-heading font-black text-white text-5xl md:text-7xl mb-6 leading-[1.1] tracking-tight">
              Fueling Growth Through <br />
              <span className="text-[#f4761c]">Smarter Debt.</span>
            </h1>
            
            <nav className="flex items-center gap-3 text-sm font-medium mt-8">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <span className="text-white">Loans</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-24 bg-white relative">
        <div className="container-main px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-8 leading-tight">
                Smart Financial <br /> Decisions Start Here.
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  We bring together deep financial expertise and a client-first approach to help individuals, businesses, and investors make sound capital decisions.
                </p>
                <p>
                  Whether you need a simple home loan or complex debt syndication—we operate as your representative. <span className="text-[#0e2a5e] font-bold">We work for you, not the lender.</span>
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-6">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                    ))}
                 </div>
                 <p className="text-sm font-bold text-[#0e2a5e]">Trusted by 200+ Businesses</p>
              </div>
            </div>

            <div className="reveal relative">
               <div className="bg-[#f4761c]/5 rounded-2xl p-4 md:p-8">
                  <img 
                    src="/hero-loans.png" 
                    alt="Financial Advisory" 
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <CircleDollarSign size={40} className="text-[#f4761c] mb-2" />
                  <p className="text-[#0e2a5e] font-black text-xl">Lender Agnostic</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOAN SOLUTIONS GRID ===== */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-main px-4">
          <div className="text-center mb-16 reveal">
            <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase mb-4 block">Portfolio</span>
            <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl">Our Loan Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanServices.map((loan, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#f4761c]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col h-full"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-500 shadow-inner">
                  {loan.icon}
                </div>
                <h3 className="font-heading font-bold text-[#0e2a5e] text-2xl mb-4">{loan.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">{loan.desc}</p>
                
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">Ideal For</p>
                  <p className="text-[#0e2a5e] font-bold text-sm">{loan.for}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section className="py-24 bg-[#0e2a5e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4761c]/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="container-main px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Our Advantage</span>
            <h2 className="font-heading font-black text-white text-4xl md:text-5xl">Why Clients Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f4761c]/50 hover:bg-white/[0.08] transition-all duration-500 text-center reveal shadow-lg"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[#f4761c] flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-white text-lg mb-3 tracking-tight">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-white">
        <div className="container-main px-4">
           <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0e2a5e] to-[#1e4ba1] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <h2 className="font-heading font-black text-white text-4xl md:text-6xl mb-8 leading-tight">
                    Secure Your Financial <br /> Future <span className="text-[#f4761c]">Today.</span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                   Let us find the right loan structure for your specific needs—fully transparent and lender-independent.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-[#f4761c] text-[#0e2a5e] px-10 py-5 rounded-full font-black text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1">
                        Book Free Consultation <ArrowRight size={20} />
                    </Link>
                    <p className="text-white/50 text-sm font-bold tracking-widest uppercase">No Obligations</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}