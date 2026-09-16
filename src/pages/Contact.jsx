import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Navigation } from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = createWhatsAppLink(
    `Namaste! My name is ${formData.name || 'Visitor'}. ${formData.message || 'I would like to make an enquiry.'}`
  );

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10 text-center">
        <SectionTitle
          badge="Get in Touch"
          title="We'd Love to Hear From You"
          subtitle="Reach out directly via phone, WhatsApp, or drop by Dr. Kalam’s Dental And Implant Centre."
        />
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-medical-teal/10 space-y-6">
              <h3 className="text-xl font-extrabold text-deep-teal border-b border-gray-100 pb-3">
                Clinic Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-soft-coral shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-deep-teal block">Clinic Address:</span>
                    <span className="text-charcoal/80 leading-relaxed text-xs">
                      {clinicInfo.address.street}<br />
                      {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}, {clinicInfo.address.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-medical-teal shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-deep-teal block">Appointments Desk:</span>
                    <a href={`tel:${clinicInfo.phoneClean}`} className="text-xs text-medical-teal font-extrabold hover:underline">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-5 h-5 text-medical-teal shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-deep-teal block">Email Us:</span>
                    <a href={`mailto:${clinicInfo.email}`} className="text-xs text-medical-teal font-semibold hover:underline">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-medical-teal shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-deep-teal block mb-1">Working Hours:</span>
                    <div className="space-y-1 text-xs text-charcoal/80">
                      {clinicInfo.hours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <span className="font-medium">{h.days}:</span>
                          <span className="font-bold text-deep-teal">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <a
                  href={clinicInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-deep-teal hover:bg-medical-teal text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-soft-coral" />
                  Open Google Maps Location
                </a>
              </div>
            </div>

            {/* Embed Map */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-medical-teal/10 h-64 bg-mint-mist">
              <iframe
                title="Dr Kalam's Dental Map Location"
                src={clinicInfo.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right: Direct Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-medical-teal/10">
              <h3 className="text-2xl font-extrabold text-deep-teal mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mb-6">
                Fill out the form below or chat on WhatsApp. Our reception team responds promptly during clinic hours.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-deep-teal">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-charcoal/80 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry and will be in touch shortly.
                  </p>
                  <div className="pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-500 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" /> Continue on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-warm-ivory/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94910 51063"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-warm-ivory/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-warm-ivory/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                        Subject / Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-warm-ivory/50 font-medium"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Appointment Availability">Appointment Availability</option>
                        <option value="Virtual Consultation">Virtual Video Consultation</option>
                        <option value="Implants">Dental Implants</option>
                        <option value="Clear Aligners">Clear Aligners</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                      Message / Treatment Inquiry *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="How can we help your smile today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-warm-ivory/50"
                    ></textarea>
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button type="submit" variant="coral" size="lg" className="w-full font-bold">
                      Submit Message
                    </Button>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send via WhatsApp
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
