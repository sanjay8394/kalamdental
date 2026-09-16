import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, User, Phone, MessageSquare, CheckCircle2, ShieldCheck, Video, Building2 } from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import Button from './Button';

export default function AppointmentModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'In-Clinic Visit', // 'In-Clinic Visit' or 'Virtual Video Consultation'
    treatment: initialData.treatment || 'General Dental Checkup',
    doctor: initialData.doctor || 'Any Available Specialist',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData.treatment) {
      setFormData(prev => ({ ...prev, treatment: initialData.treatment }));
    }
    if (initialData.doctor) {
      setFormData(prev => ({ ...prev, doctor: initialData.doctor }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Namaste AuraDental Clinic!

I would like to request an appointment:
📋 Appointment Type: ${formData.type}
👤 Patient Name: ${formData.name || 'Not specified'}
📞 Phone: ${formData.phone || 'Not specified'}
🦷 Treatment / Query: ${formData.treatment}
👨‍⚕️ Preferred Specialist: ${formData.doctor}
📅 Preferred Date: ${formData.preferredDate || 'Earliest available'}
⏰ Preferred Time: ${formData.preferredTime}
📝 Notes: ${formData.notes || 'None'}

Please confirm my ${formData.type} slot.`;
    return createWhatsAppLink(text);
  };

  return (
    <div className="fixed inset-0 z-50 bg-deep-teal/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-medical-teal/20 my-8">
        
        {/* Modal Header */}
        <div className="bg-deep-teal text-white p-5 sm:p-6 relative flex items-center justify-between">
          <button
            onClick={submitted ? () => setSubmitted(false) : onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4 text-soft-coral" />
            <span>{submitted ? 'Back to Form' : 'Back'}</span>
          </button>

          <span className="text-sm font-extrabold tracking-tight">
            Book Appointment
          </span>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-soft-coral text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-warm-ivory">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-deep-teal">
                {formData.type === 'Virtual Video Consultation' ? 'Virtual Consultation Requested!' : 'Appointment Request Received!'}
              </h3>
              <p className="text-sm text-charcoal/80 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our receptionist will contact you via WhatsApp / call to confirm your {formData.type.toLowerCase()} timing and video link.
              </p>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Speed Up: Confirm on WhatsApp Now
                </a>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  icon={ArrowLeft}
                  onClick={() => setSubmitted(false)}
                  className="w-full text-xs mt-2"
                >
                  Back to Appointment Form
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Type Selector (In-Clinic vs Virtual) */}
              <div>
                <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1.5">
                  Select Consultation Type *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'In-Clinic Visit' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                      formData.type === 'In-Clinic Visit'
                        ? 'bg-deep-teal text-white border-deep-teal shadow-sm'
                        : 'bg-white text-charcoal border-gray-300 hover:bg-mint-mist'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-soft-coral" />
                    <span>In-Clinic Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'Virtual Video Consultation' })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                      formData.type === 'Virtual Video Consultation'
                        ? 'bg-medical-teal text-white border-medical-teal shadow-sm'
                        : 'bg-white text-charcoal border-gray-300 hover:bg-mint-mist'
                    }`}
                  >
                    <Video className="w-4 h-4 text-emerald-400" />
                    <span>Virtual Video Call</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white"
                  />
                </div>
              </div>

              {/* Treatment & Doctor Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                    Treatment Required
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white font-medium"
                  >
                    <option value="General Dental Checkup">General Dental Checkup</option>
                    {treatments.map((t) => (
                      <option key={t.id} value={t.title}>{t.title}</option>
                    ))}
                    <option value="Virtual Smile Assessment">Virtual Smile Assessment</option>
                    <option value="Emergency Toothache">Emergency Toothache Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                    Preferred Specialist
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white font-medium"
                  >
                    <option value="Any Available Specialist">Any Available Specialist</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white font-medium"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8:30 PM)">Evening (4 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-deep-teal uppercase tracking-wider mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Mild tooth sensitivity..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl border border-gray-300 focus:border-medical-teal text-xs outline-none bg-white"
                ></textarea>
              </div>

              {/* Submit & Action Buttons */}
              <div className="pt-2 space-y-2">
                <Button type="submit" variant="coral" size="md" className="w-full font-bold text-xs py-2.5">
                  Request {formData.type === 'Virtual Video Consultation' ? 'Virtual Consultation' : 'In-Clinic Appointment'}
                </Button>

                <div className="flex items-center gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    icon={ArrowLeft}
                    onClick={onClose} 
                    className="flex-1 text-xs py-2"
                  >
                    Back to Page
                  </Button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition-colors text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your details are kept strictly private and confidential.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
