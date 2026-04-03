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
                { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z', href: 'https://www.instagram.com/shobhit_jn' },
                { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: 'https://linkedin.com/in/shobhit-jain-ca' },
                // { label: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.876zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://twitter.com/cashobhitjain' },
                { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: 'https://facebook.com/cashobhitjain' }
              ]
.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                { label: 'Blog', path: '/blog' },
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
                  <a href="https://maps.app.goo.gl/CZh3jxAFfUDaTTjaA" target="_blank" rel="noopener noreferrer" className="text-slate-200 text-sm leading-relaxed hover:text-[#f4761c] transition-colors">
                       Star Plaza, 707, Mahatma Gandhi Rd, Chinchpada,<br />
                       Borivali East, Mumbai, Maharashtra 400066
                  </a>
        
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Office Email</p>
                  <a href="mailto:office@cashobhitjain.com" className="text-slate-200 text-sm hover:text-[#f4761c] transition-colors overflow-hidden text-ellipsis block max-w-[200px]">
                    office@cashobhitjain.com
                  </a>
                </div>
              </li>
              {/* <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Contact Email</p>
                  <a href="mailto:contact@cashobhitjain.com" className="text-slate-200 text-sm hover:text-[#f4761c] transition-colors overflow-hidden text-ellipsis block max-w-[200px]">
                    contact@cashobhitjain.com
                  </a>
                </div>
              </li> */}
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#f4761c]">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Global Reach</p>
                  <p className="text-slate-200 text-sm">UAE | USA | UK | Singapore | Canada</p>
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