/**
 * Alpha Auto Garage - Master Business & Contact Information
 * 
 * NOTE TO CLIENT:
 * Search for "TODO:" to update any contact details, phone numbers,
 * addresses, business hours, or social media handles for your actual shop.
 */

export const GARAGE_INFO = {
  name: "Alpha Auto Garage",
  tagline: "Back on the road, faster and safer.",
  description:
    "Full-service auto repair, computerized diagnostics, and preventive maintenance for European, Japanese, and American vehicles.",

  // Contact Details
  // TODO: Replace with your official customer service phone number
  phone: "+1 (555) 019-2834",
  phoneRaw: "+15550192834",

  // TODO: Replace with your active WhatsApp Business number (international format with country code, no + or symbols)
  whatsappNumber: "15550192834",
  whatsappDisplay: "+1 (555) 019-2834",

  // TODO: Replace with your primary support email
  email: "service@alphaautogarage.com",

  // Physical Location
  // TODO: Replace with your garage's physical street address
  address: {
    street: "742 Industrial Parkway, Suite 100",
    city: "Motor City",
    state: "CA",
    zip: "90210",
    country: "United States",
    formatted: "742 Industrial Parkway, Suite 100, Motor City, CA 90210",
    googleMapsUrl: "https://maps.google.com/?q=Alpha+Auto+Garage",
    // TODO: Update embed URL with your exact Google Maps iframe src
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120905!2d-118.41145!3d34.07362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzI1LjAiTiAxMTjCsDI0JzQxLjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },

  // Operating Hours
  // TODO: Update your garage working days and hours
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:30 PM", isOpen: true },
    { days: "Saturday", time: "8:30 AM – 4:00 PM", isOpen: true },
    { days: "Sunday", time: "Closed (Emergency Towing Available)", isOpen: false }
  ],
  workingHoursSummary: "Mon - Fri: 8:00 AM - 6:30 PM | Sat: 8:30 AM - 4:00 PM",

  // Social Links
  // TODO: Add your official social profile URLs
  social: {
    instagram: "https://instagram.com/alphaautogarage",
    facebook: "https://facebook.com/alphaautogarage",
    youtube: "https://youtube.com/@alphaautogarage",
    linkedin: "https://linkedin.com/company/alphaautogarage"
  },

  // Trust Statistics & Badges
  stats: [
    { value: "15+", label: "Years of Experience", description: "Master technician certified" },
    { value: "12,500+", label: "Vehicles Repaired", description: "Across 10+ premium brands" },
    { value: "99.4%", label: "Satisfaction Rate", description: "Verified customer satisfaction" },
    { value: "12 Mo / 12k Mi", label: "Service Warranty", description: "Parts & labor guarantee" }
  ],

  // Emergency & Towing
  emergencySupport: {
    available: true,
    phone: "+1 (555) 019-2834",
    label: "24/7 Breakdown & Towing Dispatch"
  }
};

/**
 * Helper to build pre-formatted WhatsApp redirect links
 */
export const buildWhatsAppUrl = (customMessage) => {
  const base = `https://wa.me/${GARAGE_INFO.whatsappNumber}`;
  if (!customMessage) return base;
  return `${base}?text=${encodeURIComponent(customMessage.trim())}`;
};
