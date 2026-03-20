import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Users, Globe, Award, CheckCircle, Zap, Handshake, ShieldCheck, Scale } from 'lucide-react';

/* Hero Carousel Slides */
const heroSlides = [
  {
    id: 1,
    label: 'Virtual CFO Advisory',
    heading: 'Strategic CFO Advisory for Growing Businesses.',
    subheading: 'Expert Financial Leadership Without Full-Time Cost',
    body: 'We provide structured financial leadership and India-focused compliance support to growing businesses. CFO-level thinking, practical execution.',
    cta1: { label: 'Explore CFO Services', link: '/services/virtual-cfo' },
    cta2: { label: 'Book Consultation', link: '/contact' },
    image: '/hero-cfo.png',
    stat: { label1: '10+ Years', label2: 'Experience' },
  },
  {
    id: 2,
    label: 'NRI Financial Services',
    heading: 'Trusted Financial & Compliance Support for NRIs.',
    subheading: 'India-Focused Advisory for Non-Resident Indians',
    body: 'End-to-end India-focused tax and compliance support for NRIs across UAE, USA, UK, Canada and Singapore. One point of contact for all your Indian financial needs.',
    cta1: { label: 'NRI Services', link: '/services/nri' },
    cta2: { label: 'Talk to Expert', link: '/contact' },
    image: '/hero-nri.png',
    stat: { label1: '200+ NRI', label2: 'Clients Served' },
  },
  {
    id: 3,
    label: 'Loans & Debt Solutions',
    heading: 'Smart Loan Advisory for Individuals & Businesses.',
    subheading: 'Home Loans · Working Capital · Debt Structuring',
    body: 'Lender-agnostic financial advisory with access to leading banks, NBFCs and HFCs. Get the best structure with full transparency and no hidden charges.',
    cta1: { label: 'Explore Loan Services', link: '/services/loans' },
    cta2: { label: 'Get Free Consultation', link: '/contact' },
    image: '/hero-loans.png',
    stat: { label1: '₹500Cr+', label2: 'Loans Facilitated' },
  },
];

const serviceCards = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Virtual CFO Services',
    desc: 'Senior-level CFO advisory for businesses ₹3Cr – ₹100Cr turnover. Financial strategy, MIS, cash flow planning and compliance oversight.',
    link: '/services/virtual-cfo',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'NRI Financial & Tax Services',
    desc: 'ITR filing, capital gains, repatriation, FEMA advisory for NRIs in UAE, USA, UK, Canada, Singapore and other jurisdictions.',
    link: '/services/nri',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Loans & Debt Solutions',
    desc: 'Home loans, working capital, term loans, and debt restructuring with lender-agnostic advice and access to top banks and NBFCs.',
    link: '/services/loans',
  },
];

const whyUs = [
  { icon: <Zap />, title: 'CFO-level thinking', desc: 'Without full-time cost — senior financial guidance at a fraction of the expense.' },
  { icon: <Handshake />, title: 'Promoter-centric approach', desc: 'Practical solutions aligned to your business goals, not just compliance checkboxes.' },
  { icon: <ShieldCheck />, title: 'Compliance discipline', desc: 'Strong regulatory focus — GST, Income Tax, FEMA — all under one roof.' },
  { icon: <Scale />, title: 'Integrated legal perspective', desc: 'Financial and legal expertise combined for holistic business advisory.' },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  };

  const next = () => goTo((current + 1) % heroSlides.length);
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <div className="bg-[#f0f5ff]">
      {/* ===== SECTION 1: HERO CAROUSEL ===== */}
      <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a5e]/90 via-[#0e2a5e]/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full container-main flex flex-col justify-center">
          <div className="max-w-3xl">
            <span
              key={`label-${current}`}
              className="section-label animate-fade-in"
            >
              {slide.label}
            </span>
            <h1
              key={`h1-${current}`}
              className="font-heading font-black text-white text-4xl md:text-5xl lg:text-[62px] leading-tight mb-4 animate-slide-up"
            >
              {slide.heading}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-[#f4761c] text-lg md:text-xl font-semibold mb-4 animate-fade-in"
            >
              {slide.subheading}
            </p>
            <p
              key={`body-${current}`}
              className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed animate-fade-in"
            >
              {slide.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={slide.cta1.link} className="btn-primary rounded-full px-6 py-3 font-bold hover:bg-[#f4761c] hover:text-[#0e2a5e] transition-all duration-300 flex items-center gap-2">
                {slide.cta1.label} <ArrowRight size={16} />
              </Link>
              <Link
                to={slide.cta2.link}
                className="border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0e2a5e] transition-all duration-300 flex items-center gap-2 rounded-full"
              >
                {slide.cta2.label}
              </Link>
            </div>

            {/* Stats box */}
            <div className="mt-12 inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-5 rounded-full animate-fade-in">
              <div className="text-center">
                <p className="text-[#f4761c] font-heading font-black text-2xl">10+</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-[#f4761c] font-heading font-black text-2xl">200+</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Clients Served</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-[#f4761c] font-heading font-black text-2xl">3</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Service Verticals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-20 container-main flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2 ">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-[#f4761c]' : 'w-4 bg-white/40'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex gap-2">




            
            <button
              onClick={prev}
              className="w-11 h-11 border rounded-full border-white/30 text-white flex items-center justify-center hover:bg-[#f4761c] hover:text-[#0e2a5e] hover:border-[#f4761c] transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border rounded-full border-white/30 text-white flex items-center justify-center hover:bg-[#f4761c] hover:text-[#0e2a5e] hover:border-[#f4761c] transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute top-10 right-10 z-20 text-white/50 text-sm font-medium hidden md:block">
          <span className="text-[#f4761c] font-bold text-lg">{String(current + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          {String(heroSlides.length).padStart(2, '0')}
        </div>
      </section>

{/* ===== SECTION 2: SERVICES OVERVIEW (Improved) ===== */}
<section className="py-24 bg-slate-50 relative overflow-hidden">
  {/* Subtle background glow */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4761c]/5 blur-[100px] rounded-full -mr-48 -mt-48" />
  
  <div className="container-main relative z-10 px-4">
    <div className="text-center mb-16 reveal">
      <div className="flex justify-center items-center gap-3 mb-4">
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
        <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Expertise</span>
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
      </div>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6 tracking-tight">
        Our Core Services
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
        Comprehensive financial advisory spanning CFO services, NRI compliance, and structured debt solutions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {serviceCards.map((card, i) => (
        <div 
          key={i} 
          className="group relative bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal overflow-hidden" 
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Icon Container with Squircle Shape */}
          <div className="w-16 h-16 bg-slate-50 text-[#f4761c] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-500 shadow-inner">
            {card.icon}
          </div>

          <h3 className="font-heading font-bold text-2xl text-[#0e2a5e] mb-4 group-hover:text-[#f4761c] transition-colors">
            {card.title}
          </h3>
          
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {card.desc}
          </p>

          <Link 
            to={card.link} 
            className="inline-flex items-center gap-2 font-bold text-[#0e2a5e] hover:text-[#f4761c] transition-colors group/link"
          >
            Explore Service 
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {/* Bottom Accent Line - animates on hover */}
          <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#f4761c] group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>


  {/* ===== SECTION: WHY US ===== */}
<section className="py-24 bg-[#0e2a5e] relative overflow-hidden">
  {/* Subtle decorative glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,118,28,0.05)_0%,transparent_70%)] pointer-events-none" />

  <div className="container-main relative z-10 px-4">
    <div className="text-center mb-16 reveal">
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#f4761c] uppercase bg-white/10 rounded-full">
        Our Strengths
      </span>
      <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-6">
        Why Clients Trust Us
      </h2>
      <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
        A unique combination of financial expertise, legal understanding, and a client-first mindset.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {whyUs.map((item, i) => (
        <div
          key={i}
          className="group flex items-start gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#f4761c]/50 hover:bg-white/[0.08] transition-all duration-500 reveal shadow-xl"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Icon Container */}
          <div className="w-14 h-14 rounded-2xl bg-[#f4761c] flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-[#f4761c]/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-[#0e2a5e]">
            {item.icon}
          </div>

          <div className="flex-1">
            {/* Title: Pure White */}
            <h4 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-[#f4761c] transition-colors">
              {item.title}
            </h4>
            {/* Description: High Contrast Slate-200 */}
            <p className="text-slate-200 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ===== SECTION 4: TEAM PREVIEW (Enhanced) ===== */}
<section className="py-24 bg-white relative">
  <div className="container-main px-4">
    <div className="text-center mb-16 reveal">
      <span className="inline-block px-5 py-2 mb-4 text-xs font-black tracking-[0.2em] text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full">
        Our Leadership
      </span>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6 tracking-tight">
        Led by Experienced Professionals
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {[
        {
          initials: 'SJ',
          name: 'CA Shobhit Jain',
          designations: ['Chartered Accountant', 'CS', 'DISA', 'B.Com'],
          desc: 'Senior CA with 10+ years of expertise in CFO advisory, financial strategy, tax planning, and compliance for growing businesses and NRIs.',
          accent: '#f4761c',
          iconBg: 'bg-[#f4761c]',
        },
        {
          initials: 'VS',
          name: 'Adv. Vivek Srivastav',
          designations: ['Advocate, Supreme Court', 'Labour Laws', 'MSME Recovery'],
          desc: 'Experienced advocate providing legal advisory on labour matters, MSME debt recovery, and regulatory disputes across Indian courts.',
          accent: '#0e2a5e',
          iconBg: 'bg-[#0e2a5e]',
        },
      ].map((person, i) => (
        <div 
          key={i} 
          className="group relative bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(14,42,94,0.1)] hover:-translate-y-2 hover:border-[#f4761c]/30 transition-all duration-500 reveal flex flex-col sm:flex-row items-center sm:items-start gap-8"
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          {/* Decorative Border Accent on Hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#f4761c] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Initials Circle */}
          <div
            className={`w-24 h-24 rounded-2xl ${person.iconBg} flex items-center justify-center text-3xl font-heading font-black flex-shrink-0 text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}
          >
            {person.initials}
          </div>

          <div className="text-center sm:text-left flex-1">
            <h3 className="font-heading font-black text-[#0e2a5e] text-2xl md:text-3xl mb-3 group-hover:text-[#f4761c] transition-colors">
              {person.name}
            </h3>
            
            {/* Designations badges - Bigger & Clearer */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-5">
              {person.designations.map((d, j) => (
                <span key={j} className="text-[11px] uppercase font-bold tracking-wider bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 group-hover:bg-[#f4761c]/10 group-hover:text-[#f4761c] group-hover:border-[#f4761c]/20 transition-all">
                  {d}
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              {person.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== SECTION 5: CTA BANNER ===== */}
      <section className="py-20 bg-[#0e2a5e] border-b border-white/10">
        <div className="container-main text-center reveal">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-[#cdd9f0] text-lg mb-8">Schedule a free consultation today. No obligations.</p>
          <Link to="/contact" className="btn-primary inline-flex rounded-full px-8 py-4 text-lg font-bold items-center gap-3 hover:bg-[#f4761c] hover:text-[#0e2a5e] transition-all duration-300">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
