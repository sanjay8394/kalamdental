export const clinicInfo = {
  name: "Dr. Kalam’s Dental And Implant Centre",
  shortName: "Kalam Dental",
  tagline: "Gentle Care, Radiant Smiles",
  subtitle: "Modern, painless dental treatments and virtual consultations tailored for your absolute comfort.",
  phone: "+91 94910 51063",
  phoneClean: "919491051063",
  whatsapp: "+91 94910 51063",
  whatsappClean: "919491051063",
  email: "care@kalamdental.in",
  emergencyPhone: "+91 94910 51063",
  address: {
    street: "Near RTC Bus Stand",
    city: "Singarayakonda, Prakasam District",
    state: "Andhra Pradesh",
    zip: "523101",
    country: "India",
    mapsUrl: "https://maps.app.goo.gl/kqwTo8Ckm5MPwkgr7",
    mapQuery: "Dr.Kalam's+Dental+And+Implant+Centre+Singarayakonda",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6658!2d80.0234565!3d15.2551565!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0b000cebb505%3A0xce68b4ddfa29065!2sDr.Kalam's%20Dental%20And%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  hours: [
    { days: "Monday - Saturday", time: "8:30 AM - 10:00 PM" },
    { days: "Sunday", time: "9:30 AM - 8:30 PM" }
  ],
  social: {
    instagram: "https://instagram.com/kalamdental.official",
    facebook: "https://facebook.com/kalamdental.official",
    youtube: "https://youtube.com/c/kalamdental",
    linkedin: "https://linkedin.com/company/kalamdental"
  },
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "4,500+", label: "Happy Patients" },
    { value: "5.0 ★", label: "Google Patient Rating" },
    { value: "Virtual", label: "Video Consultation" }
  ]
};

export const createWhatsAppLink = (messageText) => {
  const encoded = encodeURIComponent(messageText || "Namaste, I would like to enquire about dental treatments at Dr. Kalam’s Dental And Implant Centre.");
  return `https://wa.me/${clinicInfo.whatsappClean}?text=${encoded}`;
};
