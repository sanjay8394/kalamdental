import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Facebook, Youtube, Linkedin, ShieldCheck, Heart } from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';

export default function Footer() {
  return (
    <footer className="bg-deep-teal text-white pt-16 pb-24 lg:pb-12 border-t border-medical-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Clinic Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white shadow-md border border-white/20 p-0.5">
                <img 
                  src="/logo.jpg" 
                  alt="Kalam Dental Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight block leading-none">
                  Kalam<span className="text-soft-coral">Dental</span>
                </span>
                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold block mt-0.5">
                  Care & Implant Centre
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Providing compassionate, pain-free dental care using state-of-the-art 3D imaging, laser dentistry, and international sterilization protocols in Mumbai, India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={clinicInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-soft-coral hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={clinicInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-soft-coral hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={clinicInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-soft-coral hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={clinicInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-soft-coral hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-soft-coral">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Clinic</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Dental Treatments</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Meet Our Doctors</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Care Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Clinic Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Patient Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Dental Health Blog</Link></li>
            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-soft-coral flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Working Hours
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {clinicInfo.hours.map((h, i) => (
                <li key={i} className="border-b border-white/10 pb-2">
                  <span className="block font-semibold text-white text-xs">{h.days}</span>
                  <span className="text-xs text-medical-teal font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-soft-coral">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-soft-coral shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {clinicInfo.address.street}, {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}, {clinicInfo.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-medical-teal shrink-0" />
                <a href={`tel:${clinicInfo.phoneClean}`} className="text-xs hover:text-white">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-medical-teal shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-xs hover:text-white">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={createWhatsAppLink("Namaste, I would like to enquire about appointment availability at Kalam Dental.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved. Crafted with <Heart className="w-3.5 h-3.5 text-soft-coral fill-soft-coral" /> for healthy smiles.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> ISO & NABH Certified Standards
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
