import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Lightbulb, Handshake, Lock } from 'lucide-react';

const values = [
  { icon: <Lightbulb size={36} />, title: 'Clarity', desc: 'We communicate complex financial matters in clear, actionable language.' },
  { icon: <CheckCircle size={36} />, title: 'Compliance', desc: 'We maintain rigorous regulatory standards across all engagements.' },
  { icon: <Handshake size={36} />, title: 'Client-First', desc: 'Every recommendation is shaped by your unique business context and goals.' },
  { icon: <Lock size={36} />, title: 'Confidentiality', desc: 'All client information is treated with the highest levels of discretion.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f0f5ff]">
      {/* ===== SECTION 1: PAGE HERO ===== */}
      <section
        className="relative py-28 bg-[#0e2a5e]"
        style={{
          backgroundImage: 'url(/hero-about.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0e2a5e]/80" />
        <div className="relative z-10 container-main">
          <span className="section-label">Who We Are</span>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl mb-4">About Us</h1>
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#f4761c] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </section>

   {/* ===== SECTION 2: ABOUT THE FIRM (Improved) ===== */}
<section className="py-24 bg-white overflow-hidden">
  <div className="container-main px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      {/* Content Side */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-[2px] bg-[#f4761c]"></span>
          <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Est. Since 2014</span>
        </div>
        
        <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">
          15+ Years of <br /> <span className="text-[#f4761c]">Financial Excellence.</span>
        </h2>

        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
          <p>
            CA Shobhit Jain & Associates is a premier chartered accountancy and advisory firm headquartered in Mumbai. We bridge the gap between complex financial regulations and strategic business growth.
          </p>
          <p>
            Our CFO advisory model integrates deep <span className="text-[#0e2a5e] font-bold">financial expertise with legal insight</span>, delivering holistic guidance that treats your business as our own. We act as a trusted partner, not just a vendor.
          </p>
          <p>
            For the global NRI community, we serve as the single point of contact for India-related financial matters—from capital gains planning to FEMA advisory.
          </p>
        </div>

        {/* Stats Grid: Modern 2x2 Layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '200+', label: 'Clients Served' },
            { num: 'Pan-India', label: 'Service Coverage' },
            { num: 'Global', label: 'NRI Support' },
          ].map((s, i) => (
            <div key={i} className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#f4761c]/30 hover:bg-white hover:shadow-xl transition-all duration-500">
              <p className="font-heading font-black text-3xl text-[#0e2a5e] group-hover:text-[#f4761c] transition-colors">{s.num}</p>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="reveal relative group">
        <div className="relative z-10">
          {/* Main Image with 2xl Rounding */}
          <img 
            src="/hero-about.png" 
            alt="About the firm" 
            className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
          />
          
          {/* Floating High-Contrast Badge */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#0e2a5e] p-10 rounded-[2rem] shadow-2xl border-b-8 border-[#f4761c]">
            <p className="font-heading font-black text-white text-5xl mb-1">15+</p>
            <p className="text-[#f4761c] text-xs font-bold uppercase tracking-widest leading-tight">
              Years of <br /> CFO Excellence
            </p>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#f4761c]/10 rounded-full blur-3xl group-hover:bg-[#f4761c]/20 transition-all duration-700" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-2 h-32 bg-[#f4761c] rounded-full opacity-20" />
      </div>

    </div>
  </div>
</section>

{/* ===== SECTION 3: TEAM ===== */}
<section className="py-24 bg-[#010409]/95 relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4761c]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
  
  <div className="container-main relative px-4">
    <div className="text-center mb-16 reveal">
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full">
        Our Experts
      </span>
      {/* Reference Color: Pure White for Heading */}
      <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-6">
        Meet Our Team
      </h2>
      {/* Reference Color: Slate-400 for subtext */}
      <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Experienced professionals committed to delivering excellence in every client engagement.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {[
        {
          initials: 'SJ',
          name: 'CA Shobhit Jain',
          title: 'Founder & Principal Advisor',
          quals: ['Chartered Accountant', 'Company Secretary', 'DISA', 'B.Com'],
          desc: 'Senior CA with deep expertise in Virtual CFO advisory, financial strategy and business structuring for growing companies with 15+ years of experience.',
          expertise: ['CFO Advisory', 'Tax Planning', 'Business Structuring', 'NRI Services'],
          bg: 'from-[#f4761c] to-[#ff9d5c]',
          iconColor: 'text-[#0e2a5e]',
        },
        {
          initials: 'VS',
          name: 'Adv. Vivek Srivastav',
          title: 'Legal Advisor',
          quals: ['Advocate, Supreme Court', 'Labour Laws Specialist', 'MSME Recovery Expert'],
          desc: 'Experienced advocate providing comprehensive legal advisory on labour matters, MSME debt recovery, and regulatory disputes with strategic business alignment.',
          expertise: ['Labour Laws', 'MSME Recovery', 'Debt Recovery', 'Regulatory Compliance'],
          bg: 'from-[#0e2a5e] to-[#1e4ba1]',
          iconColor: 'text-white',
        },
        {
          initials: 'SS',
          name: 'CA Swati Shah',
          title: 'International Tax & Compliance',
          quals: ['Chartered Accountant'],
          desc: ' Swati Shah is a Chartered Accountant handling US and UK accounting and tax compliance assignments for overseas clients. She partners with international clients and executes the work through her India-based team, delivering reliable, compliant, and cost-efficient outsourcing solutions',
          expertise: ['US Tax Compliance', 'UK Accounting', 'Outsourcing', 'International Tax'],
          bg: 'from-[#f4761c] to-[#ff9d5c]',
          iconColor: 'text-[#0e2a5e]',
        },
      ].map((p, i) => (
        <div 
          key={i} 
          className="group relative bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-2xl hover:bg-white/[0.07] hover:border-[#f4761c]/50 transition-all duration-500 reveal shadow-2xl"
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            {/* Initials Circle */}
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${p.bg} flex items-center justify-center text-3xl font-heading font-black flex-shrink-0 shadow-lg transform group-hover:scale-105 transition-transform duration-500 ${p.iconColor}`}
            >
              {p.initials}
            </div>
            
            <div className="flex-1">
              {/* Name: Bright White */}
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-1 group-hover:text-[#f4761c] transition-colors">
                {p.name}
              </h3>
              {/* Title: Brand Orange */}
              <p className="text-[#f4761c] text-sm font-semibold tracking-wide mb-4 uppercase">
                {p.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.quals.map((q, j) => (
                  <span key={j} className="text-[10px] md:text-xs font-medium bg-white/10 text-slate-200 px-2.5 py-1 rounded-md border border-white/5">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description: High Contrast Slate-200 */}
          <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-[#f4761c]/50 pl-4">
            {p.desc}
          </p>

          <div>
            {/* Header: Dimmed Slate-500 */}
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-4">
              Core Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {p.expertise.map((e, j) => (
                <span 
                  key={j} 
                  className="text-xs bg-white/5 text-white/90 px-4 py-2 rounded-lg border border-white/10 hover:bg-[#f4761c] hover:text-[#0e2a5e] hover:font-bold transition-all duration-300 cursor-default"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ===== SECTION 4: VALUES ===== */}
{/* ===== SECTION 4: VALUES ===== */}
<section className="py-24 bg-slate-50 relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f4761c]/5 blur-[100px] rounded-full" />

  <div className="container-main relative z-10 px-4">
    <div className="text-center mb-16 reveal">
      <div className="flex justify-center items-center gap-3 mb-4">
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
        <span className="text-xs font-black tracking-[0.3em] text-[#f4761c] uppercase">Our Principles</span>
        <span className="w-10 h-[2px] bg-[#f4761c]"></span>
      </div>
      <h2 className="font-heading font-black text-[#0e2a5e] text-4xl md:text-5xl mb-6">
        Our Core Values
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
        The four pillars that guide every client relationship and strategic decision we make.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((v, i) => (
        <div
          key={i}
          className="group relative bg-white p-10 rounded-2xl border border-slate-200 hover:border-[#f4761c]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 reveal overflow-hidden"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Faded Background Number */}
          <span className="absolute -top-2 -right-2 text-7xl font-black text-slate-100 group-hover:text-[#f4761c]/5 transition-colors duration-500 select-none">
            0{i + 1}
          </span>

          <div className="relative z-10">
            {/* Icon with Glow */}
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-[#f4761c] group-hover:text-white transition-all duration-500 shadow-inner">
              {v.icon}
            </div>

            <h4 className="font-heading font-black text-[#0e2a5e] text-xl mb-4 group-hover:text-[#f4761c] transition-colors">
              {v.title}
            </h4>
            
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {v.desc}
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f4761c] group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== SECTION 5: CTA ===== */}
      <section className="py-20 bg-[#0e2a5e] border-b border-white/10">
        <div className="container-main text-center reveal">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl mb-4">Let's Work Together</h2>
          <p className="text-[#cdd9f0] text-lg mb-8">Initial discussions are always confidential and obligation-free.</p>
          <Link to="/contact" className="btn-primary inline-flex rounded-full px-8 py-4 text-lg font-bold items-center gap-3 hover:bg-[#f4761c] hover:text-[#0e2a5e] transition-all duration-300">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
