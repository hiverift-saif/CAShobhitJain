import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Globe, Mail, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Virtual CFO Services',
  'NRI Financial Services',
  'Home Loan',
  'Commercial Loan',
  'Working Capital',
  'Term Loan',
  'Debt Advisory',
  'Real Estate Advisory',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="py-28 bg-[#0e2a5e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(#f4761c 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        
        <div className="relative z-10 container-main px-4">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#f4761c] uppercase bg-[#f4761c]/10 rounded-full border border-[#f4761c]/20">
            Reach Out
          </span>
          <h1 className="font-heading font-black text-white text-5xl md:text-7xl mb-4 tracking-tight">
            Get in <span className="text-[#f4761c]">Touch.</span>
          </h1>
          <nav className="flex items-center gap-3 text-sm font-medium">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">›</span>
            <span className="text-white font-bold tracking-wide">Contact</span>
          </nav>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-24 relative -mt-12 z-20">
        <div className="container-main px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT — Info Column */}
            <div className="lg:col-span-5 space-y-8 reveal">
              <div>
                <h2 className="font-heading font-black text-[#0e2a5e] text-4xl mb-4">Let's Talk Business</h2>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  Have a specific requirement? Drop us a message or reach out directly. 
                  All discussions are strictly confidential.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {[
                  { icon: <Phone size={24} />, label: 'Call Us', value: '+91 92209 55615', sub: 'Mon – Sat, 10am – 7pm IST', link: 'tel:+919220955615' },
                  { icon: <Mail size={24} />, label: 'Email', value: 'Support Coming Soon', sub: 'WhatsApp for faster response' },
                  { icon: <MapPin size={24} />, label: 'Our Office', value: '707, Star Plaza, M.G. Road', sub: 'Borivali East, Mumbai - 400066' },
                  { icon: <Globe size={24} />, label: 'Global Service', value: 'Serving Clients Worldwide', sub: 'India • UAE • USA • UK • Singapore' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 border border-slate-200 rounded-2xl group hover:bg-white hover:shadow-xl hover:border-[#f4761c]/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-white text-[#f4761c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#f4761c] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-[#0e2a5e] font-black text-xl hover:text-[#f4761c] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[#0e2a5e] font-black text-xl">{item.value}</p>
                      )}
                      <p className="text-slate-600 font-medium text-sm mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
                <div className="absolute top-0 right-10 w-20 h-1.5 bg-[#f4761c] rounded-b-full" />
                
                <h3 className="font-heading font-black text-[#0e2a5e] text-3xl mb-10">Send Enquiry</h3>

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                    <h4 className="font-heading font-black text-[#0e2a5e] text-3xl mb-4">Message Received!</h4>
                    <p className="text-slate-700 font-medium mb-8 max-w-sm mx-auto">We'll get back to you within 24 business hours.</p>
                    <button onClick={() => setSubmitted(false)} className="bg-[#0e2a5e] text-white px-10 py-4 rounded-full font-black hover:bg-[#f4761c] transition-all shadow-lg">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-[#0e2a5e] tracking-wide ml-1">Full Name *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold placeholder:text-slate-400 focus:bg-white focus:border-[#f4761c] focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-[#0e2a5e] tracking-wide ml-1">Email Address *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold placeholder:text-slate-400 focus:bg-white focus:border-[#f4761c] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-[#0e2a5e] tracking-wide ml-1">Phone Number *</label>
                        <input
                          name="phone" type="tel" required value={form.phone} onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold placeholder:text-slate-400 focus:bg-white focus:border-[#f4761c] focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase text-[#0e2a5e] tracking-wide ml-1">Service Required *</label>
                        <select
                          name="service" required value={form.service} onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold focus:bg-white focus:border-[#f4761c] focus:outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option value="">Choose a Service</option>
                          {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase text-[#0e2a5e] tracking-wide ml-1">Brief Requirement</label>
                      <textarea
                        name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold placeholder:text-slate-400 focus:bg-white focus:border-[#f4761c] focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit" disabled={loading}
                      className="w-full bg-[#f4761c] text-[#0e2a5e] font-black text-xl py-5 rounded-xl shadow-xl shadow-[#f4761c]/20 hover:bg-[#0e2a5e] hover:text-white hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {loading ? 'Sending...' : <>Send Message <ArrowRight size={24} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAPS SECTION (Fixed & Verified) ===== */}
      <section className="pb-24 px-4">
        <div className="container-main">
          <div className="rounded-[2.5rem] overflow-hidden border-[12px] border-slate-100 shadow-2xl h-[500px]">
            <iframe
              title="CA Shobhit Jain Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1234!2d72.8596!3d19.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzQ2LjkiTiA3MsKwNTEnMzQuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}