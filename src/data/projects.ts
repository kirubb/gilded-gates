export interface UnitType {
  category: string;
  min_sft: number;
  max_sft: number;
  note?: string;
  pricing_text?: string;
  pricing_range?: string;
}

export interface Project {
  name: string;
  tagline: string;
  type: string;
  location: string;
  status: string;
  handover_date?: string;
  area_acres?: number;
  floors: string;
  unit_types: UnitType[];
  pricing_text?: string;
  amenities: string[];
  key_features: string[];
  rera_number: string;
  building_permit?: string;
  website: string;
  contact_phone?: string | null;
  contact_email?: string | null;
}

export const projects: Project[] = [
  {
    name: "ASBL BROADWAY",
    tagline: "The Pulse of Life",
    type: "Exclusive 3-BHK",
    location: "Financial District, Gachibowli / Puppalaguda, Hyderabad",
    status: "Under construction",
    handover_date: "December 2029",
    floors: "G+50",
    unit_types: [
      { category: "3 BHK (Luxury)", min_sft: 2650, max_sft: 2650 },
      { category: "3 BHK (Premium)", min_sft: 2340, max_sft: 2390, note: "West/North facing variants" },
      { category: "3 BHK (Comfort)", min_sft: 2035, max_sft: 2090, note: "West/East facing variants" }
    ],
    pricing_text: "From ~₹2.5 Cr onwards",
    amenities: [
      "Cascading Water Feature", "Open Lawn", "Activity Lawn", "Social Gathering Plaza",
      "Seating Gallery", "Outdoor Activity Area", "Lounge Deck", "Pickleball Courts",
      "Kids Play Area", "Basketball Court", "Walking Track", "Senior Gathering Space",
      "Outdoor Fitness Station", "Cricket Net", "Multi-purpose Lawn", "Garden Lounge Swings",
      "Pet Zone", "Clubhouse amenities (F&B, Banquet, Indoor Games, Pool, Courts, etc.)",
      "Tower-wise amenities (lobby, guest rooms, gym, creche, spa/salon in certain towers, etc.)"
    ],
    key_features: [
      "Private walk-in dress area in MBR", "Private foyer entry", "DualSync spaces",
      "Curtain walls in KBR", "Expansive balconies", "100% power backup"
    ],
    rera_number: "P02400009684",
    building_permit: "002916/BP/HMDA/0847/SKP/2025",
    website: "https://asbl.in/broadway",
    contact_phone: "092 895 89630",
    contact_email: "sales@asbl.in"
  },
  {
    name: "ASBL LANDMARK",
    tagline: "The Great Upgrade",
    type: "Luxurious 3, 3.5 & 4 BHK",
    location: "Y Junction, Kukatpally, Hyderabad",
    status: "Under construction",
    handover_date: "March 2028",
    area_acres: 6.0,
    floors: "G+19 & G+20",
    unit_types: [
      { category: "3 BHK", min_sft: 1645, max_sft: 2065 },
      { category: "3.5 BHK", min_sft: 1955, max_sft: 2560 },
      { category: "4 BHK", min_sft: 2860, max_sft: 2860, note: "As per listing for 4-BHK units" }
    ],
    pricing_text: "Approx ₹2.24 Cr – ₹2.61 Cr",
    amenities: [
      "Clubhouse", "Swimming Pool", "Gymnasium", "Indoor Squash & Badminton Courts",
      "Banquet Hall", "Park / Green Space", "Lift, Security, Sewage Treatment, Parking etc."
    ],
    key_features: [
      "Spacious layouts", "Large matte-finish tiles", "Premium specifications"
    ],
    rera_number: "P02200008770",
    building_permit: "2527/GHMC/KPL/2024-BP",
    website: "https://asbl.in/landmark",
    contact_phone: "092 895 96855",
    contact_email: "sales@asbl.in"
  },
  {
    name: "ASBL LOFT",
    tagline: "The Key to Envy",
    type: "Exclusive 3-BHK",
    location: "Financial District, Gachibowli / Puppalaguda, Hyderabad",
    status: "Under construction",
    handover_date: "December 2026",
    area_acres: 4.92,
    floors: "G+45",
    unit_types: [
      { category: "3 BHK", min_sft: 1695, max_sft: 1870, pricing_text: "₹1.64 – ₹1.81 Cr" }
    ],
    amenities: [
      "Childcare", "Social spaces", "Convenience stores", "Fitness facilities", "Rooftop / common amenities"
    ],
    key_features: [
      "Thoughtfully designed apartments", "More life per sq.ft", "Outdoor living spaces"
    ],
    rera_number: "P02400006761",
    building_permit: "057423/ZOA/R1/U6/HMDA/21102022",
    website: "https://asbl.in/loft",
    contact_phone: "080 471 09111",
    contact_email: "sales@asbl.in"
  },
  {
    name: "ASBL SPECTRA",
    tagline: "The Pride of Gachibowli",
    type: "Exclusive 3-BHK",
    location: "Financial District, Gachibowli, Hyderabad",
    status: "Near completion",
    handover_date: "December 2025",
    area_acres: 7.9,
    floors: "G+39",
    unit_types: [
      { category: "3 BHK", min_sft: 1980, max_sft: 2220, pricing_text: "₹2.25 – ₹2.50 Cr" }
    ],
    amenities: [],
    key_features: [
      "Room-sized outdoor living balconies", "More life per sq.ft concept", "Premium specifications"
    ],
    rera_number: "P02400003071",
    building_permit: "042365/SKP/R1/U6/HMDA/28012021",
    website: "https://asbl.in/spectra/",
    contact_phone: "080 471 09777",
    contact_email: "sales@asbl.in"
  },
  {
    name: "ASBL SPRINGS",
    tagline: "Pocharam's New Landmark",
    type: "2 & 3 BHK",
    location: "Pocharam, Uppal, Hyderabad",
    status: "Near completion / Ready-to-move",
    handover_date: "February 2025",
    area_acres: 4.11,
    floors: "G+14 (2 towers)",
    unit_types: [
      { category: "2 BHK", min_sft: 1210, max_sft: 1210, pricing_text: "Starting ~₹68-69 Lakhs" },
      { category: "3 BHK", min_sft: 1475, max_sft: 1475 }
    ],
    amenities: [],
    key_features: [
      "Ready-to-move units (2 BHK)", "Proximity to IT-hub (Pocharam / Uppal SEZ area)",
      "Nature-connected yet well-connected location"
    ],
    rera_number: "P02200002897",
    building_permit: "039451/GHT/R1/U6/HMDA/26092020",
    website: "https://asbl.in/springs/",
    contact_phone: "080 471 16444",
    contact_email: "sales@asbl.in"
  },
  {
    name: "ASBL SPIRE",
    tagline: "Luxurious with Outdoor Living Balconies",
    type: "Exclusive 3-BHK",
    location: "Kokapet / Gandipet, Hyderabad",
    status: "Completed / Ready-to-move",
    handover_date: "2023",
    area_acres: 2.85,
    floors: "G+35",
    unit_types: [
      { category: "3 BHK", min_sft: 1905, max_sft: 2120, pricing_text: "Premium lake-facing apartments" }
    ],
    amenities: [
      "24,000 sqft clubhouse", "Outdoor-living balconies with each flat",
      "Premium community amenities per project brochure"
    ],
    key_features: [
      "Lake-facing location", "Outdoor living balconies",
      "Single-tower development with high open-space ratio"
    ],
    rera_number: "P02400002261",
    building_permit: "032228/bp/r1/u6/HMDA/28122019",
    website: "https://asbl.in/spire/",
    contact_phone: null,
    contact_email: null
  },
  {
    name: "ASBL LAKESIDE",
    tagline: "Luxury Lake-Facing Community",
    type: "2 & 3 BHK",
    location: "Khajaguda / South-West Hyderabad area",
    status: "Completed / Ready-to-move",
    floors: "Multiple towers",
    unit_types: [
      { category: "2 BHK", pricing_range: "Approx ₹86.6 Lakh – ₹1.45 Cr", min_sft: 1200, max_sft: 1400 },
      { category: "3 BHK", pricing_text: "As per resale / public listings", min_sft: 1500, max_sft: 1800 }
    ],
    amenities: [],
    key_features: [
      "Lake-facing community", "Urban luxury apartments in a calm locality"
    ],
    rera_number: "PO400000812",
    website: "https://asbl.in/lakeside/"
  }
];

export const companyInfo = {
  name: "ASBL",
  fullName: "Ashoka Builders India Pvt Ltd",
  headquarters: "Hyderabad, India",
  phone: "092 895 89630",
  email: "sales@asbl.in",
  totalProjects: 7,
  ongoingProjects: 5,
  completedProjects: 2,
  priceRange: "₹68 Lakhs – ₹3.26 Crores"
};
