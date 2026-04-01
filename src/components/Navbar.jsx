import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Virtual CFO', path: '/services/virtual-cfo' },
      { label: 'NRI Financial & Tax Services', path: '/services/nri' },
      { label: 'Loans', path: '/services/loans' },
    ],
  },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Separate state for mobile
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything when the route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        scrolled 
          ? 'bg-white backdrop-blur-lg py-3 shadow-lg border-b border-slate-200' 
          : 'bg-[#f0f5ff] py-5 border-b border-transparent'
      }`}
    >
      <div className="container-main px-4">
        <div className="flex items-center justify-between h-[60px]">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logoImg} alt="Logo" className="h-[78px] rounded-xl object-cover mix-blend-multiply" />
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl text-[#0e2a5e] leading-none">
                CA Shobhit Jain
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#f4761c] font-black mt-1">
                Chartered Accountant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 font-bold text-[18px] transition-all ${
                      isActive(link.path) || dropdownOpen ? 'text-[#f4761c]' : 'text-[#0e2a5e]/90'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute top-full -left-4 pt-6 transition-all ${
                    dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}>
                    <div className="w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-6 py-4 text-[15px] font-bold text-[#0e2a5e]/80 hover:bg-slate-50 hover:text-[#f4761c] border-b border-slate-50 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-bold text-[18px] transition-all pb-1 group ${
                    isActive(link.path) ? 'text-[#f4761c]' : 'text-[#0e2a5e]/90 hover:text-[#0e2a5e]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#f4761c] transition-all ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            )}
            <Link to="/contact" className="bg-[#f4761c] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#0e2a5e] transition-all shadow-md">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#0e2a5e]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[100vh] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col gap-2 border-t border-slate-100 mt-4 pt-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-slate-50 last:border-0">
                {link.dropdown ? (
                  <>
                    <div className="flex items-center justify-between py-4">
                      <Link 
                        to={link.path} 
                        className={`text-lg font-black ${isActive(link.path) ? 'text-[#f4761c]' : 'text-[#0e2a5e]'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <button 
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="p-2 bg-slate-100 rounded-lg"
                      >
                        <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 bg-slate-50 rounded-xl ${mobileDropdownOpen ? 'max-h-64 mb-4' : 'max-h-0'}`}>
                      {link.dropdown.map(item => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="block py-4 px-6 text-slate-600 font-bold border-b border-white last:border-0"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`block py-4 text-lg font-black ${isActive(link.path) ? 'text-[#f4761c]' : 'text-[#0e2a5e]'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="mt-6 bg-[#f4761c] text-[#0e2a5e] py-4 rounded-2xl font-black text-center text-lg shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}