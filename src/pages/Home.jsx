import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Sparkles, Calendar, Phone, ArrowRight, CheckCircle2, 
  Award, Clock, MapPin, MessageSquare, Video 
} from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import { testimonials } from '../data/testimonials';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TreatmentCard from '../components/TreatmentCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home({ onOpenAppointment, onSelectTreatment, onSelectDoctor }) {
  const featuredTreatments = treatments.slice(0, 4);
  const featuredDoctors = doctors.slice(0, 3);
  const featuredReviews = testimonials.slice(0, 2);

  return (
    <div className="space-y-16 pb-12 overflow-hidden">
      
      {/* 1. HERO SECTION WITH FADE-IN-UP ANIMATIONS */}
      <section className="relative pt-6 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-warm-ivory via-mint-mist/30 to-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left animate-fade-in-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-mist border border-medical-teal/30 text-medical-teal text-xs font-bold shadow-sm animate-float">
                <Sparkles className="w-3.5 h-3.5 text-soft-coral" />
                <span>Dr. Kalam’s Dental • 3+ Years Experience</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-deep-teal tracking-tight leading-tight">
                Gentle Care & <span className="text-medical-teal">Virtual Consultations</span>
              </h1>

              <p className="text-sm sm:text-lg text-charcoal/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Painless dental implants, clear aligners, and laser dentistry. Visit our clinic or consult our specialists virtually from home.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <Button 
                  variant="coral" 
                  size="lg" 
                  icon={Calendar} 
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto shadow-md text-xs font-extrabold"
                >
                  Book Visit / Virtual Consult
                </Button>

                <a
                  href={createWhatsAppLink("Namaste! I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

            </div>

            {/* Hero Right Image Visual with Floating Badge */}
            <div className="lg:col-span-5 relative animate-fade-in">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                    alt="Dr Kalam's Dental Suite"
                    className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Virtual Consultation Overlay Badge */}
                  <div className="absolute top-3 left-3 right-3 bg-deep-teal/95 text-white p-2.5 rounded-2xl backdrop-blur-md shadow-md flex items-center justify-between border border-white/20 animate-float">
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <Video className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>Virtual Video Consultations Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-card border border-medical-teal/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-mint-mist text-medical-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-medical-teal group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-deep-teal">3+ Years Trust</h4>
              <p className="text-[11px] text-charcoal/70 mt-0.5">Clinical excellence in Singarayakonda.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-mint-mist text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-deep-teal">Virtual Consult</h4>
              <p className="text-[11px] text-charcoal/70 mt-0.5">Live video consultations from home.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-mint-mist text-soft-coral flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-soft-coral group-hover:text-white transition-all duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-deep-teal">3D Dental Tech</h4>
              <p className="text-[11px] text-charcoal/70 mt-0.5">3D X-Rays & digital intraoral scans.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-mint-mist text-medical-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-medical-teal group-hover:text-white transition-all duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-deep-teal">On-Time Visits</h4>
              <p className="text-[11px] text-charcoal/70 mt-0.5">Zero wait time scheduling.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE TREATMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Dental Services"
          title="Key Treatments"
          subtitle="Explore our most popular general and cosmetic dental procedures."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onSelectTreatment={onSelectTreatment}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="sm" href="/treatments" icon={ArrowRight} className="text-xs">
            View All Treatments
          </Button>
        </div>
      </section>

      {/* 4. DOCTORS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Team"
          title="Dental Specialists"
          subtitle="Qualified practitioners with 3+ years of clinical experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {featuredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookDoctor={onSelectDoctor}
            />
          ))}
        </div>
      </section>

      {/* 5. PATIENT REVIEWS */}
      <section className="bg-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10">
        <SectionTitle
          badge="Feedback"
          title="Patient Experiences"
          subtitle="Rated 5.0 ★ on Google by over 4,500 happy patients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {featuredReviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* 6. CONTACT & LOCATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep-teal text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <span className="bg-soft-coral text-white text-[11px] font-extrabold uppercase px-3 py-0.5 rounded-full inline-block animate-pulse">
                Visit or Consult Virtually
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Schedule Your Appointment Today
              </h2>
              <p className="text-xs sm:text-sm text-gray-200">
                {clinicInfo.address.street}, {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={`tel:${clinicInfo.phoneClean}`}
                  className="px-5 py-2.5 rounded-xl bg-white text-deep-teal font-extrabold text-xs hover:bg-mint-mist transition-all hover:scale-105 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-medical-teal inline mr-1.5" />
                  Call {clinicInfo.phone}
                </a>

                <a
                  href={clinicInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all hover:scale-105 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1.5" />
                  Open Maps Location
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 p-5 rounded-2xl border border-white/10 text-xs space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-soft-coral" /> Working Hours:
              </h3>
              {clinicInfo.hours.map((h, i) => (
                <div key={i} className="flex justify-between text-gray-200 pt-1 border-t border-white/10">
                  <span>{h.days}:</span>
                  <span className="font-bold text-white">{h.time}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
