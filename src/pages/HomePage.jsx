import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Users, Globe, Award, CheckCircle, Zap, Handshake, ShieldCheck, Scale } from 'lucide-react';

/* Hero Carousel Slides */
const heroSlides = [
  {
    id: 1,
    label: 'VIRTUAL CFO ADVISORY',
    
    heading: <>STRATEGIC CFO ADVISORY <br className="hidden md:block" /> FOR BUSINESSES.</>,
    subheading: 'Structured Financial Leadership Without Full-Time Cost',
    body: 'Structured financial leadership and India-focused compliance support to growing businesses. Our advisory approach integrates financial clarity, regulatory discipline, and practical decision support—without unnecessary complexity.',
    cta1: { label: 'Explore CFO Services', link: '/services/virtual-cfo' },
    cta2: { label: 'Book Consultation', link: '/contact' },
    image: '/hero-cfo.png',
    stat: { label1: '15+', label2: 'Years Experience' },
  },
  {
    id: 2,
    label: 'NRI FINANCIAL SERVICES',
    heading: <>TRUSTED FINANCIAL AND <br className="hidden md:block" /> COMPLIANCE SUPPORT FOR NRIS.</>,
    subheading: 'India-Focused Advisory for Non-Resident Indians',
    body: 'Reliable compliance support to Non-Resident Indians across UAE, USA, UK, Canada and Singapore. Our advisory approach integrates financial clarity and practical decision support.',
    cta1: { label: 'NRI Services', link: '/services/nri' },
    cta2: { label: 'Talk to Expert', link: '/contact' },
    image: '/hero-nri.png',
    stat: { label1: '200+', label2: 'Clients Served' },
  },
  {
    id: 3,
    label: 'LOANS & DEBT SOLUTIONS',
    heading: <>Smart Loan Advisory for <br className="hidden md:block" /> Individuals & Businesses.</>,
    subheading: 'Home Loans · Working Capital · Debt Structuring',
    body: 'Lender-agnostic financial advisory with access to leading banks, NBFCs and HFCs. Get the best structure with full transparency and no hidden charges.',
    cta1: { label: 'Explore Loan Services', link: '/services/loans' },
    cta2: { label: 'Get Free Consultation', link: '/contact' },
    image: 'https://i.pinimg.com/736x/a3/e7/2f/a3e72f7d9f7a938b33386403282b96ab.jpg',
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

  const next = () => {
    goTo((current + 1) % heroSlides.length);
  };

  const prev = () => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = heroSlides[current];

  return (
    <div className="bg-[#f0f5ff]">
{/* ===== HERO SECTION ===== */}
<section className="relative w-full min-h-[600px] md:min-h-screen overflow-hidden flex items-center">

  {/* ===== Background Slides ===== */}
  <div className="absolute inset-0 overflow-hidden">

    {heroSlides.map((s, i) => (
      <div
        key={i}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          i === current ? "opacity-100 z-10" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${s.image})` }}
      />
    ))}

  </div>

  {/* ===== Overlay ===== */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a5e]/95 via-[#0e2a5e]/85 to-[#0e2a5e]/40 z-10"/>

  {/* ===== Decorative Glow ===== */}
  <div className="absolute -top-40 -left-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f4761c]/10 blur-[100px] md:blur-[120px] rounded-full z-10"/>
  <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#1e4a9e]/20 blur-[100px] md:blur-[120px] rounded-full z-10"/>

  {/* ===== Content ===== */}
  <div className="relative z-20 w-full pt-32 pb-16 md:py-28">
    <div className="container-main px-4">

      <div className="max-w-[1500px]">

        {/* Label */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs tracking-widest text-[#f4761c] font-bold uppercase mb-4 md:mb-6">
          {heroSlides[current].label}
        </span>

        {/* Heading */}
        <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.15] md:leading-[1.1] tracking-tight mb-4 md:mb-6">
          {heroSlides[current].heading}
        </h1>

        {/* Subheading */}
        <div className="mb-4 md:mb-6">
          <p className="inline-block bg-[#f4761c]/10 border border-[#f4761c]/30 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[#f4761c] text-xs sm:text-sm md:text-base font-semibold">
            {heroSlides[current].subheading}
          </p>
        </div>

        {/* Body */}
        <p className="text-gray-200 text-sm md:text-lg max-w-xl leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
          {heroSlides[current].body}
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-2 sm:gap-4 mb-8 md:mb-10">

          <Link
            to={heroSlides[current].cta1.link}
            className="flex-1 sm:flex-none bg-[#f4761c] text-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-[#f4761c]/30 hover:scale-[1.04] transition text-[11px] sm:text-base whitespace-nowrap"
          >
            {heroSlides[current].cta1.label}
            <ArrowRight size={14} className="sm:w-5 sm:h-5"/>
          </Link>

          <Link
            to={heroSlides[current].cta2.link}
            className="flex-1 sm:flex-none border border-white/40 text-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full backdrop-blur-md hover:bg-white hover:text-[#0e2a5e] transition font-bold text-center text-[11px] sm:text-base whitespace-nowrap"
          >
            {heroSlides[current].cta2.label}
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:flex items-center gap-2 sm:gap-8 bg-white/5 md:bg-white/10 backdrop-blur-xl border border-white/10 md:border-white/20 rounded-2xl p-4 md:px-8 md:py-5 w-full md:w-fit shadow-2xl">

          <div className="text-center md:text-left">
            <p className="text-[#f4761c] text-lg md:text-2xl font-black">15+</p>
            <p className="text-gray-300 text-[9px] md:text-xs uppercase tracking-wider">
              Years Exp.
            </p>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/20"></div>

          <div className="text-center md:text-left border-l border-white/10 md:border-none pl-2 md:pl-0">
            <p className="text-[#f4761c] text-lg md:text-2xl font-black">200+</p>
            <p className="text-gray-300 text-[9px] md:text-xs uppercase tracking-wider">
              Clients
            </p>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/20"></div>

          <div className="text-center md:text-left border-l border-white/10 md:border-none pl-2 md:pl-0">
            <p className="text-[#f4761c] text-lg md:text-2xl font-black">3</p>
            <p className="text-gray-300 text-[9px] md:text-xs uppercase tracking-wider">
              Services
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>

  {/* ===== Arrow Navigation ===== */}
  {/* On mobile, hidden or positioned at bottom corners */}
  <div className="absolute bottom-6 md:inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 z-30">

    <button
      onClick={prev}
      className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center rounded-full hover:bg-[#f4761c] hover:border-[#f4761c] transition"
    >
      <ChevronLeft size={20} className="md:w-6 md:h-6"/>
    </button>

    <button
      onClick={next}
      className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center rounded-full hover:bg-[#f4761c] hover:border-[#f4761c] transition"
    >
      <ChevronRight size={20} className="md:w-6 md:h-6"/>
    </button>

  </div>

  {/* ===== Dots ===== */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 md:bottom-8">

    {heroSlides.map((_, i) => (

      <button
        key={i}
        onClick={() => goTo(i)}
        className={`h-2 rounded-full transition-all duration-300 ${
          i === current ? "w-8 bg-[#f4761c]" : "w-2 bg-white/40"
        }`}
      />

    ))}

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                initials: 'SJ',
                name: 'CA Shobhit Jain',
                designations: ['Chartered Accountant', 'CS', 'DISA', 'B.Com'],
                desc: 'Senior CA with 15+ years of expertise in CFO advisory, financial strategy, and tax compliance for businesses & NRIs.',
                iconBg: 'from-[#f4761c] to-[#ffa842]',
              },
              {
                initials: 'VS',
                name: 'Adv. Vivek Srivastav',
                designations: ['Advocate, Supreme Court', 'Labour Laws', 'MSME Recovery'],
                desc: 'Experienced advocate providing expert legal advisory on labour matters, MSME debt recovery, and regulatory disputes.',
                iconBg: 'from-[#0e2a5e] to-[#1e4a9e]',
              },
              {
                initials: 'SS',
                name: 'CA Swati Shah',
                designations: ['Chartered Accountant', 'International Tax'],
                desc: 'Chartered Accountant handling US and UK accounting and tax compliance assignments for overseas clients. She partners with international clients and executes the work through her India-based team, delivering reliable, compliant, and cost-efficient outsourcing solutions',
                iconBg: 'from-[#0e2a5e] to-[#1e4a9e]',
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(14,42,94,0.12)] hover:-translate-y-3 transition-all duration-500 reveal flex flex-col items-center text-center px-8"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Top Corner Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4761c]/5 rounded-bl-full opacity-50 pointer-events-none transition-all duration-500 group-hover:scale-150" />

                {/* Initials Avatar */}
                <div
                  className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${person.iconBg} flex items-center justify-center text-4xl font-heading font-black text-white shadow-2xl mb-8 transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-500`}
                >
                  {person.initials}
                </div>

                <div className="flex-1">
                  <h3 className="font-heading font-black text-[#0e2a5e] text-2xl mb-4 group-hover:text-[#f4761c] transition-colors leading-tight">
                    {person.name}
                  </h3>

                  {/* Glassmorphism Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {person.designations.map((d, j) => (
                      <span key={j} className="text-[10px] uppercase font-black tracking-[0.15em] bg-[#f0f5ff] text-[#0e2a5e] px-4 py-2 rounded-xl border border-white group-hover:bg-[#f4761c] group-hover:text-white group-hover:border-[#f4761c]/30 transition-all duration-300">
                        {d}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium text-left">
                    "{person.desc}"
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-100 rounded-full group-hover:w-32 group-hover:bg-[#f4761c] transition-all duration-500" />
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
