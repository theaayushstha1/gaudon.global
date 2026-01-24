// GAUDON Silicone Products Data
// Last Updated: January 22, 2026

export const products = [
  // ============================================
  // GAUDON G1 - Kitchen & Bath (Blue)
  // ============================================
  {
    id: "gaudon-g1",
    model: "G1",
    name: "Kitchen & Bath Silicone Sealant",
    category: "kitchen_bath",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 10,
    warrantyBadge: "Mold Free",
    temperatureRange: "-40°C to +120°C",
    description: "Premium mold-free silicone sealant designed for kitchen and bathroom applications. Features advanced 3X mold protection, 100% waterproof seal, and low odor formula.",
    features: [
      "Advanced 3X Mold Protection",
      "100% Waterproof Seal",
      "Low Odor Formula",
      "Neutral Cure",
      "100% Silicone"
    ],
    applications: [
      "Kitchen sink and countertop sealing",
      "Bathroom fixtures and tubs",
      "Shower enclosures",
      "Tile and grout sealing",
      "Plumbing fixtures"
    ],
    limitations: [
      "Not for structural applications",
      "Allow 24 hours before water exposure",
      "Apply between 5°C and 40°C"
    ],
    colors: ["Clear", "White", "Almond"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "18 months",
    image: "/images/products/gaudon-g1-kitchen-bath.png",
    images: ["/images/products/gaudon-g1-kitchen-bath.png"],
    featured: true,
    popular: true,
    badge: "Mold Free"
  },

  // ============================================
  // GAUDON G2 - Window & Door (Green)
  // ============================================
  {
    id: "gaudon-g2",
    model: "G2",
    name: "Window & Door Silicone Sealant",
    category: "weatherproof",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 30,
    warrantyBadge: "30 Year",
    temperatureRange: "-50°C to +150°C",
    description: "Weather Tough silicone sealant engineered for extreme weather defense. Features enhanced long-term flexibility and up to 30-year durability for windows and doors.",
    features: [
      "Extreme Weather Defense",
      "Enhanced Long-Term Flexibility",
      "Up to 30-Year Durability",
      "Neutral Cure",
      "100% Silicone"
    ],
    applications: [
      "Window frame sealing",
      "Door frame installation",
      "Exterior trim and siding",
      "Expansion joints",
      "General weatherproofing"
    ],
    limitations: [
      "Not for structural glazing",
      "Surface must be clean and dry",
      "Apply between 5°C and 40°C"
    ],
    colors: ["Clear", "White", "Bronze", "Gray"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "18 months",
    image: "/images/products/gaudon-g2-window-door.png",
    images: ["/images/products/gaudon-g2-window-door.png"],
    featured: true,
    popular: true,
    badge: "30 Year"
  },

  // ============================================
  // GAUDON D1 - All-Purpose Silicone (Red)
  // ============================================
  {
    id: "gaudon-d1",
    model: "D1",
    name: "All-Purpose Silicone Sealant",
    category: "glass",
    type: "single-component",
    cureType: "Acetic Cure",
    warranty: 10,
    warrantyBadge: "Professional Grade",
    temperatureRange: "-40°C to +120°C",
    description: "Professional grade all-purpose silicone sealant with aquarium safe formula. Features ultra clear finish and 100% waterproof bond for demanding applications.",
    features: [
      "Aquarium Safe Formula",
      "Ultra Clear Finish",
      "100% Waterproof Bond",
      "Acetic Cure",
      "100% Silicone"
    ],
    applications: [
      "Aquarium and fish tank assembly",
      "Glass-to-glass bonding",
      "Display cases",
      "Terrariums",
      "General glass sealing"
    ],
    limitations: [
      "Not for use on mirrors (may damage backing)",
      "Not for porous surfaces",
      "Requires ventilation during cure"
    ],
    colors: ["Clear"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "18 months",
    image: "/images/products/gaudon-d1-silicone.png",
    images: ["/images/products/gaudon-d1-silicone.png"],
    featured: true,
    popular: true,
    badge: "Aquarium Safe"
  },

  // ============================================
  // GAUDON D2 - Heavy Duty Silicone (Yellow)
  // ============================================
  {
    id: "gaudon-d2",
    model: "D2",
    name: "Heavy Duty All-Purpose Silicone Sealant",
    category: "construction",
    type: "single-component",
    cureType: "Acetic Cure",
    warranty: 15,
    warrantyBadge: "Heavy Duty",
    temperatureRange: "-50°C to +150°C",
    description: "Heavy duty all-purpose silicone with 3X enhanced adhesion. Features fast cure performance and durable waterproof seal for the toughest jobs.",
    features: [
      "3X Enhanced Adhesion",
      "Fast Cure Performance",
      "Durable Waterproof Seal",
      "Acetic Cure",
      "100% Silicone"
    ],
    applications: [
      "Industrial sealing",
      "HVAC and ductwork",
      "Automotive applications",
      "Marine and RV",
      "Heavy equipment"
    ],
    limitations: [
      "Not for structural applications",
      "Not for use on mirrors",
      "Requires ventilation during cure"
    ],
    colors: ["Clear", "White", "Black", "Aluminum"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "18 months",
    image: "/images/products/gaudon-d2-heavy-duty.png",
    images: ["/images/products/gaudon-d2-heavy-duty.png"],
    featured: true,
    popular: true,
    badge: "Heavy Duty"
  },

  // ============================================
  // GAUDON B1 - Acrylic Latex (Purple)
  // ============================================
  {
    id: "gaudon-b1",
    model: "B1",
    name: "Acrylic Latex Sealant",
    category: "acrylic",
    type: "single-component",
    cureType: "Water-Based",
    warranty: 10,
    warrantyBadge: "Everyday Use",
    temperatureRange: "-20°C to +80°C",
    description: "Water-based acrylic latex sealant for everyday interior use. Easy one-step application with paintable interior seal and quick repair solution.",
    features: [
      "Easy One-Step Application",
      "Paintable Interior Seal",
      "Quick Repair Solution",
      "Water-Based Formula",
      "100% Sealant"
    ],
    applications: [
      "Interior trim and molding",
      "Baseboards and crown molding",
      "Door and window casings",
      "Drywall cracks",
      "General interior repairs"
    ],
    limitations: [
      "Interior use only",
      "Not for wet areas",
      "Not for high-movement joints"
    ],
    colors: ["White", "Almond", "Clear"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "24 months",
    image: "/images/products/gaudon-b1-acrylic-latex.png",
    images: ["/images/products/gaudon-b1-acrylic-latex.png"],
    featured: true,
    popular: true,
    badge: "Paintable"
  },

  // ============================================
  // GAUDON B1 Premium - Premium Latex (Pink)
  // ============================================
  {
    id: "gaudon-b1-premium",
    model: "B1 Premium",
    name: "Premium Latex Sealant",
    category: "acrylic",
    type: "single-component",
    cureType: "Water-Based",
    warranty: 15,
    warrantyBadge: "Fast Dry",
    temperatureRange: "-20°C to +80°C",
    description: "Premium water-based latex sealant with fast dry formula. Features premium paintable finish, advanced water-resistant protection, and professional-grade results.",
    features: [
      "Premium Paintable Finish",
      "Advanced Water-Resistant Protection",
      "Professional-Grade Results",
      "Fast Dry Formula",
      "100% Silicone"
    ],
    applications: [
      "Professional interior finishing",
      "High-end trim work",
      "Premium door and window casings",
      "Decorative moldings",
      "Commercial interior projects"
    ],
    limitations: [
      "Interior use recommended",
      "Not for constant water exposure",
      "Apply above 5°C"
    ],
    colors: ["White", "Clear"],
    packaging: [
      { type: "Cartridge", size: "10.1 FL OZ (298ml)", unitsPerCase: 12 }
    ],
    shelfLife: "24 months",
    image: "/images/products/gaudon-b1-premium-latex.png",
    images: ["/images/products/gaudon-b1-premium-latex.png"],
    featured: true,
    popular: true,
    badge: "Fast Dry"
  }
];

// Product Categories
export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "kitchen_bath", name: "Kitchen & Bath", count: products.filter(p => p.category === "kitchen_bath").length },
  { id: "weatherproof", name: "Weatherproof", count: products.filter(p => p.category === "weatherproof").length },
  { id: "glass", name: "Glass & Aquarium", count: products.filter(p => p.category === "glass").length },
  { id: "construction", name: "Construction", count: products.filter(p => p.category === "construction").length },
  { id: "acrylic", name: "Acrylic Latex", count: products.filter(p => p.category === "acrylic").length }
];

// Product Types
export const productTypes = [
  { id: "all", name: "All Types" },
  { id: "single-component", name: "Single-Component" }
];

// Cure Types
export const cureTypes = [
  { id: "all", name: "All Cure Types" },
  { id: "Neutral Cure", name: "Neutral Cure" },
  { id: "Acetic Cure", name: "Acetic Cure" },
  { id: "Water-Based", name: "Water-Based" }
];

// Warranty Options
export const warrantyOptions = [
  { id: "all", name: "All Warranties" },
  { id: "30", name: "30 Year" },
  { id: "15", name: "15 Year" },
  { id: "10", name: "10 Year" }
];

// Helper Functions
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductByModel = (model) => products.find(p => p.model.toLowerCase() === model.toLowerCase());
export const getProductsByCategory = (category) => category === "all" ? products : products.filter(p => p.category === category);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getPopularProducts = () => products.filter(p => p.popular);
export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.model.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.applications.some(a => a.toLowerCase().includes(q))
  );
};

export default products;
