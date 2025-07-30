// Central SEO Configuration for Dubai Hikvision
export const seoConfig = {
  // Basic Site Information
  siteName: "Dubai Hikvision",
  siteUrl: "https://dubai-hikvision.com",
  defaultTitle: "Dubai Hikvision - #1 Hikvision Distributor in Dubai & UAE | Premium CCTV Systems",
  defaultDescription: "Leading authorized Hikvision distributor in Dubai, UAE. Premium CCTV cameras, NVR systems, surveillance solutions serving Dubai, Abu Dhabi, Sharjah & all UAE emirates. Professional installation & support.",
  
  // Local Business Information
  business: {
    name: "Dubai Hikvision",
    type: "Electronics Store, Security System Installer",
    foundedYear: "2010",
    email: "info@dubai-hikvision.com",
    phone: "+971-4-123-4567",
    fax: "+971-4-123-4568",
    address: {
      street: "25th St, Naif",
      city: "Dubai", 
      region: "Dubai Emirate",
      country: "United Arab Emirates",
      countryCode: "AE",
      postalCode: "00000",
      coordinates: {
        latitude: 25.2048,
        longitude: 55.2708
      }
    },
    serviceAreas: [
      "Dubai", "Abu Dhabi", "Sharjah", "Ajman", 
      "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"
    ],
    openingHours: {
      monday: "08:00-18:00",
      tuesday: "08:00-18:00", 
      wednesday: "08:00-18:00",
      thursday: "08:00-18:00",
      friday: "08:00-17:00",
      saturday: "09:00-16:00",
      sunday: "Closed"
    }
  },

  // SEO Keywords for Dubai/UAE
  keywords: {
    primary: [
      "Hikvision Dubai",
      "Hikvision UAE", 
      "CCTV Dubai",
      "Security cameras UAE",
      "Hikvision distributor Dubai"
    ],
    secondary: [
      "surveillance systems UAE",
      "IP cameras Dubai",
      "NVR Dubai",
      "DVR UAE", 
      "access control Dubai",
      "video surveillance UAE",
      "security solutions Dubai",
      "CCTV installation Dubai",
      "security camera installation UAE"
    ],
    local: [
      "Dubai security systems",
      "UAE CCTV distributor",
      "Dubai surveillance", 
      "Abu Dhabi security cameras",
      "Sharjah CCTV installation",
      "Ajman security solutions",
      "Fujairah surveillance systems",
      "Ras Al Khaimah CCTV",
      "Umm Al Quwain security"
    ],
    longTail: [
      "best Hikvision distributor in Dubai",
      "professional CCTV installation Dubai UAE",
      "authorized Hikvision dealer UAE",
      "commercial security systems Dubai",
      "residential CCTV Dubai",
      "IP camera installation Dubai",
      "NVR system Dubai",
      "access control system Dubai",
      "video surveillance Dubai",
      "security camera repair Dubai"
    ]
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://www.facebook.com/dubaihikvision",
    instagram: "https://www.instagram.com/dubaihikvision",
    linkedin: "https://www.linkedin.com/company/dubai-hikvision", 
    youtube: "https://www.youtube.com/c/dubaihikvision",
    twitter: "@DubaiHikvision"
  },

  // Local SEO Tags
  geoTags: {
    region: "AE-DU",
    placename: "Dubai",
    position: "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
    language: "en-AE",
    currency: "AED"
  },

  // Services Offered
  services: [
    "CCTV Camera Installation",
    "NVR System Setup", 
    "DVR Installation",
    "Access Control Systems",
    "Video Surveillance Solutions",
    "IP Camera Installation",
    "Security System Maintenance",
    "Commercial Security Solutions",
    "Residential Security Systems",
    "Remote Monitoring Setup"
  ],

  // Product Categories
  productCategories: [
    "Network Cameras",
    "NVR Systems", 
    "DVR Systems",
    "PTZ Cameras",
    "TurboHD Cameras",
    "Access Control",
    "Video Intercoms",
    "Explosion Proof Cameras",
    "Thermal Cameras",
    "Analytics Solutions"
  ]
};

// Helper function to generate keywords string
export function generateKeywords(additional: string[] = []): string {
  const allKeywords = [
    ...seoConfig.keywords.primary,
    ...seoConfig.keywords.secondary,
    ...seoConfig.keywords.local,
    ...additional
  ];
  return allKeywords.join(", ");
}

// Helper function to generate local business description
export function generateLocalDescription(productType?: string): string {
  const baseDesc = `Leading authorized Hikvision distributor in Dubai, UAE.`;
  const productDesc = productType ? ` Specializing in ${productType}` : ` Premium CCTV cameras, NVR systems, surveillance solutions`;
  const locationDesc = ` serving Dubai, Abu Dhabi, Sharjah & all UAE emirates. Professional installation & support.`;
  
  return baseDesc + productDesc + locationDesc;
} 