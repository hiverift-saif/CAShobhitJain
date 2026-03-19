import { Link } from 'react-router-dom';
import { Phone, MapPin, Globe, Mail } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white border-t border-white/5">
      <div className="container-main py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1.5 rounded-lg shadow-lg">
                <img 
                  src={logoImg} 
                  alt="CA Shobhit Jain Logo" 
                  className="h-10 w-auto object-contain mix-blend-multiply" 
                />
              </div>
              <h3 className="font-heading font-black text-2xl tracking-tight leading-none text-white">
                CA Shobhit Jain
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-[#f4761c] font-medium text-sm tracking-wide">
                Strategic CFO Advisory • Trusted NRI Support
              </p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Providing CFO-level financial leadership, India-focused compliance, 
                and tailored debt solutions to businesses and Non-Resident Indians worldwide.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.876zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
              ].map((soc, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#f4761c] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={soc.label}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={soc.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:pl-12">
            <h4 className="font-heading font-bold text-lg text-white mb-2">Quick Links</h4>
            <div className="w-10 h-1 bg-[#f4761c] mb-6 rounded-full" />
            <ul className="grid grid-cols-1 gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Virtual CFO', path: '/services/virtual-cfo' },
                { label: 'NRI Services', path: '/services/nri' },
                { label: 'Debt Solutions', path: '/services/loans' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 text-sm hover:text-[#f4761c] transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#f4761c] transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Contact Details</h4>
            <div className="w-10 h-1 bg-[#f4761c] mb-6 rounded-full" />
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+919220955615" className="text-slate-200 text-sm hover:text-[#f4761c] transition-colors">
                    +91 92209 55615
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Office</p>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    707, Star Plaza, M.G. Road,<br />
                    Borivali East, Mumbai - 400066
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Global Reach</p>
                  <p className="text-slate-200 text-sm">UAE | USA | UK | Canada | Singapore</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <p className="text-slate-500 text-xs">
            © 2026 <span className="text-slate-300">CA Shobhit Jain</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}