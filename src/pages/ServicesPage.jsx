import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Globe, Award, Zap, Target, ShieldCheck, Handshake } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Virtual CFO Services',
    desc: 'Senior-level CFO advisory for businesses that need structured financial leadership without the cost of a full-time CFO. We integrate seamlessly into your management team.',
    bullets: [
      'Financial strategy & annual budgeting',
      'MIS dashboards & performance analysis',
      'GST, Income Tax & compliance oversight',
      'Cash flow planning & working capital management',
    ],
    link: '/services/virtual-cfo',
    cta: 'Explore CFO Services',
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: 'NRI Financial & Tax Services',
    desc: 'End-to-end India-focused tax and financial compliance support for Non-Resident Indians across UAE, USA, UK, Canada, Singapore and other jurisdictions.',
    bullets: [
      'ITR filing for NRIs in India',
      'Capital gains computation & tax planning',
      'Repatriation support (Form 15CA / 15CB)',
      'FEMA advisory & residential status analysis',
    ],
    link: '/services/nri',
    cta: 'Explore NRI Services',
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Loans & Debt Solutions',
    desc: 'Lender-agnostic financial advisory connecting individuals and businesses with the right debt structure through our network of banks, NBFCs and HFCs.',
    bullets: [
      'Home loans & commercial property finance',
      'Working capital — CC, OD, invoice financing',
      'Term loans & project finance',
      'Debt restructuring & credit advisory',
    ],
    link: '/services/loans',
    cta: 'Explore Loan Services',
  },
];

const whyUs = [
  { icon: <Zap size={32} />, title: 'CFO-Level Thinking', desc: 'Senior-level financial guidance at a fraction of the cost of a full-time hire.' },
  { icon: <Target size={32} />, title: 'Practical Approach', desc: 'Solutions aligned to your actual business context — not generic textbook answers.' },
  { icon: <ShieldCheck size={32} />, title: 'Compliance Discipline', desc: 'Strong regulatory focus across GST, Income Tax, FEMA and more.' },
  { icon: <Handshake size={32} />, title: 'Integrated Advisory', desc: 'Financial and legal expertise working together for holistic business support.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f0f5ff]">
      {/* HERO */}
      <section
        className="relative py-28 bg-[#0e2a5e]"
        style={{ backgroundImage: 'url(/hero-cfo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0e2a5e]/80" />
        <div className="relative z-10 container-main">
          <span className="section-label">What We Offer</span>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl mb-4">Our Services</h1>
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#f4761c] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20">
        <div className="container-main">
          <div className="text-center mb-14 reveal">
            <span className="section-label">Comprehensive Advisory</span>
            <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-4">All Service Offerings</h2>
            <p className="text-[#3d5080] max-w-2xl mx-auto">Three specialised verticals — CFO advisory, NRI compliance, and debt solutions — designed to work independently or as an integrated package.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="service-card p-8 flex flex-col reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-[#f4761c]/20 rounded-full flex items-center justify-center text-[#0e2a5e] mb-6">
                  {svc.icon}
                </div>
                <h3 className="font-heading font-bold text-[#0e2a5e] text-2xl mb-3">{svc.title}</h3>
                <p className="text-[#3d5080] text-sm leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {svc.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#3d5080]">
                      <span className="text-[#f4761c] mt-0.5 font-bold">✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={svc.link} className="btn-primary text-sm justify-center rounded-full px-6 py-2 hover:bg-[#f4761c] hover:text-[#0e2a5e] transition-all duration-300 inline-flex items-center gap-2">
                  {svc.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[#0e2a5e]">
        <div className="container-main">
          <div className="text-center mb-14 reveal">
            <span className="section-label">Our Strengths</span>
            <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 border border-gray-800 hover:border-[#f4761c]/40 hover:bg-[#f4761c]/5 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0e2a5e] border-b border-white/10">
        <div className="container-main text-center reveal">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-4">Ready to Get Started?</h2>
          <p className="text-[#cdd9f0] text-lg mb-8">Schedule your free, confidential consultation today.</p>
          <Link to="/contact" className="btn-primary inline-flex rounded-full px-8 py-4 text-lg font-bold items-center gap-3 hover:bg-[#f4761c] hover:text-[#0e2a5e] transition-all duration-300">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
