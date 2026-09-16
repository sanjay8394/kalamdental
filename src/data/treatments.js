export const categories = [
  "All",
  "Cosmetic Dentistry",
  "Implantology",
  "Orthodontics",
  "General Dentistry",
  "Pediatric Dentistry"
];

export const treatments = [
  {
    id: "dental-implants",
    title: "Precision Dental Implants",
    category: "Implantology",
    shortDesc: "Permanent, natural-looking replacement for missing teeth with titanium posts and bio-compatible crowns.",
    fullDesc: "Dental implants are the gold standard for missing tooth replacement. Our clinic utilizes 3D CBCT guided surgery for 99.8% placement accuracy with minimal discomfort and lifetime longevity.",
    duration: "45 - 60 mins per session",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    popular: true,
    benefits: [
      "Looks and functions exactly like natural teeth",
      "Prevents facial bone loss and jaw recession",
      "Lifetime durability with proper care",
      "No damage to adjacent healthy teeth"
    ],
    process: [
      "Comprehensive 3D Imaging & Consultation",
      "Gentle Computer-Guided Implant Placement",
      "Osseointegration Healing Phase (2-3 months)",
      "Custom Porcelain Crown Placement"
    ],
    faqs: [
      { q: "Is the implant placement painful?", a: "Not at all. Local anesthesia and optional sedation ensure complete numbness. Most patients report less discomfort than a tooth extraction." },
      { q: "How long do dental implants last?", a: "With routine oral hygiene and annual checkups, implants are designed to last a lifetime." }
    ]
  },
  {
    id: "invisible-aligners",
    title: "Invisalign® & Clear Aligners",
    category: "Orthodontics",
    shortDesc: "Straighten your teeth discreetly without metal wires or brackets using custom clear aligners.",
    fullDesc: "Achieve a perfectly aligned smile with virtually invisible 3D-printed aligners. Suitable for adults and teens looking for comfortable, removable tooth alignment.",
    duration: "6 - 18 months total treatment",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    popular: true,
    benefits: [
      "100% removable for easy eating and brushing",
      "Virtually invisible on video calls and photos",
      "No painful metal wires or emergency bracket breaks",
      "Preview your final smile in 3D before starting"
    ],
    process: [
      "iTero 3D Digital Mouth Scan",
      "Custom Treatment Plan Simulation",
      "Receive Aligner Sets every 2 weeks",
      "Final Retainer & Smile Lock"
    ],
    faqs: [
      { q: "How many hours a day should I wear aligners?", a: "We recommend wearing them 20 to 22 hours per day, removing them only for meals and cleaning." }
    ]
  },
  {
    id: "laser-whitening",
    title: "Laser Smile Whitening",
    category: "Cosmetic Dentistry",
    shortDesc: "Brighten your teeth up to 8 shades in a single 45-minute painless session with Philips Zoom Laser.",
    fullDesc: "Our medical-grade Philips Zoom! laser whitening breaks down deep set stains from tea, coffee, and spices without causing enamel sensitivity.",
    duration: "45 mins",
    icon: "Sun",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    benefits: [
      "Instant 6 to 8 shades lighter result",
      "Enamel-safe formula with anti-sensitivity post-care",
      "Removes years of stubborn discoloration",
      "Includes a complimentary home touch-up kit"
    ],
    process: [
      "Shade Assessment & Polish",
      "Gingival Barrier Protection",
      "3x 15-Minute Zoom LED Light Cycles",
      "Fluoride Desensitizing Sealant"
    ],
    faqs: [
      { q: "Will laser whitening make my teeth sensitive?", a: "We use a patented formula with amorphous calcium phosphate (ACP) that minimizes sensitivity. Any minor sensation vanishes within 24 hours." }
    ]
  },
  {
    id: "porcelain-veneers",
    title: "Ultra-Thin Porcelain Veneers",
    category: "Cosmetic Dentistry",
    shortDesc: "Transform chipped, discolored, or unevenly spaced teeth into a flawless, natural-looking smile.",
    fullDesc: "Handcrafted porcelain veneers fitted over the front surface of your teeth to correct shape, color, gap, and alignment issues permanently.",
    duration: "2 visits over 10 days",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    popular: false,
    benefits: [
      "Stain-resistant high-lustre ceramic finish",
      "Custom shaded to match your complexion",
      "Minimal micro-prep tooth enamel modification",
      "Sturdy durability lasting 15+ years"
    ],
    process: [
      "Smile Design Consultation & Digital Mockup",
      "Minimal Prep & Temporary Veneers",
      "Master Ceramist Handcrafting",
      "Permanent Bonding & Adjustment"
    ],
    faqs: [
      { q: "Are porcelain veneers permanent?", a: "Yes, because a microscopic layer of enamel is prepared for bonding, veneers are a long-term cosmetic commitment." }
    ]
  },
  {
    id: "root-canal-treatment",
    title: "Painless Root Canal Therapy",
    category: "General Dentistry",
    shortDesc: "Single-sitting microscopic root canal treatment to save infected teeth and instantly relieve pain.",
    fullDesc: "Modern rotary endodontics and microscopic magnification allow us to clean and seal infected root canals effortlessly in just one comfortable session.",
    duration: "60 mins (Single Session)",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    popular: false,
    benefits: [
      "Instant relief from severe toothache and pressure",
      "Saves your natural tooth structure",
      "Completed in a single stress-free visit",
      "High success rate backed by digital imaging"
    ],
    process: [
      "3D Digital Radiograph Scan",
      "Computerized Painless Anesthesia",
      "Microscopic Rotary Cleaning & Disinfection",
      "Biocompatible Gutta-Percha Sealing & Crown Prep"
    ],
    faqs: [
      { q: "Is a root canal painful?", a: "Contrary to old myths, modern root canal therapy feels no different than getting a standard filling!" }
    ]
  },
  {
    id: "pediatric-dental-care",
    title: "Gentle Kids & Pediatric Care",
    category: "Pediatric Dentistry",
    shortDesc: "Fear-free dental visits, cavity prevention, fluoride treatments, and dental sealants for children.",
    fullDesc: "We create fun, welcoming environments so children grow up with positive dental experiences. Our pediatric specialists focus on prevention, growth monitoring, and gentle care.",
    duration: "30 - 45 mins",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    popular: false,
    benefits: [
      "Friendly specialists trained in child behavior management",
      "Painless fluoride application and cavity sealants",
      "Early jaw alignment monitoring",
      "Fun rewards and positive reinforcement"
    ],
    process: [
      "Fun Clinic Orientation",
      "Gentle Cleaning & Plaque Check",
      "Protective Sealant / Fluoride Coating",
      "Parent Oral Care Guidance"
    ],
    faqs: [
      { q: "At what age should my child first visit the dentist?", a: "We recommend bringing your child by their first birthday or when their first tooth emerges." }
    ]
  }
];
