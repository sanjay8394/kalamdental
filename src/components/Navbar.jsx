import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, MessageSquare, ChevronRight } from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';
import Button from './Button';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'glass-header shadow-soft border-b border-medical-teal/10 py-2' 
        : 'bg-warm-ivory py-3 border-b border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Kalam Dental Image Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-medical-teal/20 bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/logo.jpg" 
                alt="Kalam Dental Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg font-extrabold text-deep-teal tracking-tight block leading-none">
                Kalam<span className="text-medical-teal">Dental</span>
              </span>
              <span className="text-[9px] text-charcoal/70 uppercase tracking-widest font-semibold block mt-0.5">
                Care & Implant Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-deep-teal bg-mint-mist font-bold'
                    : 'text-charcoal/80 hover:text-deep-teal hover:bg-mint-mist/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={createWhatsAppLink("Namaste, I would like to enquire about dental treatments at Kalam Dental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1 text-xs font-semibold"
              title="Quick WhatsApp Enquiry"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Button 
              variant="coral" 
              size="sm" 
              icon={Calendar}
              onClick={onOpenAppointment}
              className="text-xs px-3.5 py-1.5"
            >
              Book Visit
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="coral"
              size="sm"
              onClick={onOpenAppointment}
              className="text-xs px-2.5 py-1.5"
            >
              Book Visit
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-deep-teal hover:bg-mint-mist focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-warm-ivory border-b border-gray-200 shadow-xl z-50 max-h-[85vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-deep-teal text-white'
                    : 'text-charcoal hover:bg-mint-mist'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href={`tel:${clinicInfo.phoneClean}`}
                className="w-full py-2.5 px-4 rounded-xl bg-mint-mist text-deep-teal font-semibold text-center flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4 text-medical-teal" />
                Call Clinic: {clinicInfo.phone}
              </a>

              <a
                href={createWhatsAppLink("Namaste, I would like to make a dental enquiry at Kalam Dental.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-center flex items-center justify-center gap-2 text-xs shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
