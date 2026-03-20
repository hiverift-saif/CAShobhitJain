import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import VirtualCFOPage from './pages/VirtualCFOPage';
import NRIServicesPage from './pages/NRIServicesPage';
import LoansPage from './pages/LoansPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function Preloader({ visible }) {
  return (
    <div className={`preloader ${!visible ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="preloader-ring"></div>
        <div className="text-center">
          <p className="font-heading font-bold text-2xl text-[#f4761c] tracking-wider">CA Shobhit Jain</p>
          <p className="text-gray-400 text-sm mt-1 tracking-widest uppercase">Loading...</p>
        </div>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919220955615"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30">
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.843L.057 23.571a.5.5 0 0 0 .604.683l5.9-1.543A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818A9.818 9.818 0 0 1 6.2 20.14l-.353-.21-3.655.957.974-3.567-.23-.366A9.818 9.818 0 1 1 12 21.818z"/>
        </svg>
        <span className="absolute right-16 bg-[#0e2a5e] text-white text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none font-medium shadow-lg">
          Chat with us
        </span>
      </div>
    </a>
  );
}

/* ─── ScrollToTop + RevealObserver — runs on every route change ─── */
function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll to top on every page change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Re-run IntersectionObserver after React renders the new page
    //    We use a short timeout to let React finish painting the DOM
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // once visible, stop watching
            }
          });
        },
        { threshold: 0.08 }
      );

      // Reset all reveal elements to hidden, then observe them
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('visible');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader visible={loading} />
      <RouteHandler />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/virtual-cfo" element={<VirtualCFOPage />} />
          <Route path="/services/nri" element={<NRIServicesPage />} />
          <Route path="/services/loans" element={<LoansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
