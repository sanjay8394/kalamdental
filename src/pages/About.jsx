import React from 'react';
import { ShieldCheck, Sparkles, Award, HeartPulse, CheckCircle2, Cpu, Video } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function About({ onOpenAppointment }) {
  const technologies = [
    { title: "Virtual Tele-Dentistry", desc: "Live HD video consultations via WhatsApp / Zoom for remote smile triage & second opinions." },
    { title: "3D CBCT Digital Imaging", desc: "Provides 3D micro-resolution bone scans for flawless computer-guided implant placement." },
    { title: "iTero® 5D Intraoral Scanner", desc: "Eliminates messy impression putty with 100% digital 3D teeth rendering in seconds." },
    { title: "Philips Zoom! Laser Whitening", desc: "Medical-grade laser activation for instant, enamel-safe 8-shade teeth brightening." }
  ];

  return (
    <div className="space-y-16 py-8">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10">
        <SectionTitle
          badge="About Kalam Dental"
          title="Compassionate Dentistry Driven by Innovation"
          subtitle="Discover our story, 3+ years of clinical excellence, and patient-first philosophy."
        />
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-mint-mist text-medical-teal text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border border-medical-teal/20 inline-block">
              Our Founding Story
            </span>
            <h2 className="text-3xl font-extrabold text-deep-teal">
              Changing How You Feel About Visiting the Dentist
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Founded with a commitment to clinical precision and gentle care, Kalam Dental Care was established to create a warm, stress-free sanctuary where patients receive cutting-edge treatment without anxiety or pain.
            </p>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              With 3+ years of clinical excellence, our multidisciplinary practice has served over 4,500 patients with an outstanding 99.4% satisfaction rating.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-medical-teal/10 shadow-sm">
                <div className="text-2xl font-black text-deep-teal">4,500+</div>
                <div className="text-xs text-charcoal/70 mt-1">Smiling Patients Served</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-medical-teal/10 shadow-sm">
                <div className="text-2xl font-black text-medical-teal">3+ Years</div>
                <div className="text-xs text-charcoal/70 mt-1">Clinical Excellence</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                alt="Kalam Dental Reception Lounge"
                className="w-full h-80 sm:h-[420px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Technology & Virtual Consultation */}
      <section className="bg-deep-teal text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12">
        <SectionTitle
          badge="High-Tech & Tele-Dentistry"
          title="State-of-the-Art Technology & Virtual Care"
          subtitle="We invest in digital diagnostic tools and live video consultation technology to make quality dental care accessible anywhere."
          className="[&_h2]:text-white [&_p]:text-gray-200"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <Cpu className="w-8 h-8 text-soft-coral mb-3" />
                <h3 className="text-lg font-bold text-white">{tech.title}</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">{tech.desc}</p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400">✓ In-house & Virtual</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-medical-teal/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <span className="bg-soft-coral text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
              Sanitation & Safety
            </span>
            <h2 className="text-3xl font-extrabold text-deep-teal">
              Strict Hospital-Grade Sterilization Protocols
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Your safety is our absolute priority. We strictly enforce multi-stage biological indicator testing and disposable single-use instruments wherever possible.
            </p>

            <ul className="space-y-2 text-sm text-charcoal font-medium pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Class-B Pressure Vacuum Autoclave Disinfection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> HEPA Air Filtration in every treatment bay</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Option for Virtual Video Consultations</li>
            </ul>

            <div className="pt-4">
              <Button variant="coral" size="md" onClick={onOpenAppointment}>
                Book In-Clinic or Virtual Visit
              </Button>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
              alt="Sterilization Lab"
              className="rounded-2xl shadow-md border border-gray-200 h-72 w-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
