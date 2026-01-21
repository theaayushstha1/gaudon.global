// GAUDON Silicone Products Data
// Source: Official GAUDON Product Catalog (About + Product Catalog.pdf)
// Last Updated: January 11, 2026

export const products = [
  // ============================================
  // CATEGORY 1: STRUCTURAL SILICONE SEALANTS
  // ============================================
  {
    id: "gaudon-9009",
    model: "GAUDON 9009",
    name: "Two-Component Structural Silicone Sealant",
    nameCn: "双组份硅酮结构密封胶",
    category: "structural",
    type: "two-component",
    cureType: "Neutral Cure",
    warranty: 30,
    warrantyBadge: "30 YEAR",
    temperatureRange: "-50°C to +150°C",
    standard: "GB 16776-2005",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "7 days",
    description: "Premium two-component structural silicone sealant for high-rise curtain wall glazing. Provides exceptional bonding strength and durability for glass-to-metal structural joints.",
    features: [
      "30+ year service life under normal conditions",
      "Excellent weather resistance",
      "Superior adhesion to glass and metal",
      "No primer required for most substrates",
      "Compatible with other neutral cure silicones"
    ],
    applications: [
      "Glass curtain wall structural bonding",
      "Metal structural component assembly",
      "Hidden frame curtain walls",
      "Secondary sealing for insulating glass"
    ],
    limitations: [
      "Not for surfaces with oil, grease, or organic solvents",
      "Requires moisture for curing - not for sealed environments",
      "Not for constantly wet or submerged areas",
      "Surface temperature must be 6°C to 40°C during application"
    ],
    colors: ["Gray (mixed)", "Custom colors available"],
    packaging: [
      { type: "Component A", size: "190L drum", unitsPerCase: 1 },
      { type: "Component A", size: "18.5L pail", unitsPerCase: 1 },
      { type: "Component B", size: "19L pail", unitsPerCase: 1 },
      { type: "Component B", size: "300ml × 7", unitsPerCase: 7 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-9009.jpg",
    images: ["/images/products/gaudon-9009.jpg", "/images/products/gaudon-9009-2.jpg"],
    featured: true,
    popular: true,
    badge: "Premium"
  },
  {
    id: "gaudon-8008",
    model: "GAUDON 8008",
    name: "Two-Component Insulating Glass Silicone Sealant",
    nameCn: "双组份中空硅酮玻璃密封胶",
    category: "structural",
    type: "two-component",
    cureType: "Neutral Cure",
    warranty: 10,
    warrantyBadge: "10 YEAR",
    temperatureRange: "-50°C to +150°C",
    standard: "GB 16776-2005",
    description: "Professional two-component silicone sealant specifically designed for insulating glass secondary sealing applications.",
    features: [
      "10+ year service life",
      "Excellent weather resistance",
      "Good adhesion to glass and aluminum spacers",
      "No primer needed under normal conditions",
      "Compatible with other neutral cure silicones"
    ],
    applications: [
      "Insulating glass secondary sealing",
      "Double-glazed unit assembly"
    ],
    limitations: [
      "Not for surfaces with oil or organic solvents",
      "Requires moisture for curing",
      "Not for constantly wet environments",
      "Surface temperature must be 6°C to 40°C"
    ],
    colors: ["Black (mixed)", "Custom available"],
    packaging: [
      { type: "Component A", size: "190L drum", unitsPerCase: 1 },
      { type: "Component A", size: "18.5L pail", unitsPerCase: 1 },
      { type: "Component B", size: "19L pail", unitsPerCase: 1 },
      { type: "Component B", size: "300ml × 7", unitsPerCase: 7 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-8008.jpg",
    images: ["/images/products/gaudon-8008.jpg"],
    featured: false,
    popular: false,
    badge: null
  },
  {
    id: "gaudon-20000",
    model: "GAUDON 20000",
    name: "High-Strength Curtain Wall Structural Sealant",
    nameCn: "高强度幕墙结构密封胶",
    category: "structural",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 30,
    warrantyBadge: "30 YEAR",
    temperatureRange: "-50°C to +100°C",
    standard: "1 MG GB 16776-2005",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-strength single-component structural sealant for demanding curtain wall applications. Offers exceptional bonding and 30+ year durability.",
    features: [
      "30+ year service life under normal weather conditions",
      "Excellent weather resistance (UV, ozone, rain, snow, extreme temps)",
      "Superior adhesion strength",
      "No primer required for most substrates",
      "Good compatibility with other neutral cure silicones"
    ],
    applications: [
      "Glass curtain wall structural bonding",
      "Glass-to-metal structural joints",
      "Hidden frame curtain wall systems",
      "High-security sealing applications"
    ],
    limitations: [
      "Not for oil/grease contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constantly wet/submerged locations",
      "Apply between 6°C and 40°C",
      "Surfaces must be clean and dry"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-20000.jpg",
    images: ["/images/products/gaudon-20000.jpg", "/images/products/gaudon-20000-2.jpg"],
    featured: true,
    popular: true,
    badge: "30 Year"
  },
  {
    id: "gaudon-10000",
    model: "GAUDON 10000",
    name: "High-Strength Curtain Wall Weatherproofing Sealant",
    nameCn: "高强度幕墙耐候密封胶",
    category: "structural",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 30,
    warrantyBadge: "30 YEAR",
    temperatureRange: "-50°C to +100°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Premium weatherproofing sealant for glass curtain walls and non-structural waterproof sealing applications.",
    features: [
      "Excellent weather resistance (UV, ozone, rain, snow, -50°C to +100°C)",
      "Superior adhesion to glass, metal, concrete, stone, ceramic",
      "Low modulus with excellent flexibility",
      "Good elasticity and compression recovery",
      "30-minute skin, 60-minute tack-free"
    ],
    applications: [
      "Glass curtain wall non-structural sealing",
      "Metal panel waterproof sealing",
      "Skylight sealing",
      "Concrete and stone joint sealing",
      "Ceramic tile gap sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil/grease contaminated surfaces",
      "Not for poorly ventilated locations",
      "Not for constant water immersion",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-10000.jpg",
    images: ["/images/products/gaudon-10000.jpg"],
    featured: true,
    popular: true,
    badge: "30 Year"
  },

  // ============================================
  // CATEGORY 2: WEATHERPROOFING SEALANTS
  // ============================================
  {
    id: "gaudon-999",
    model: "GAUDON 999",
    name: "High-Performance Neutral Silicone Structural Sealant",
    nameCn: "高性能中性硅酮结构胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 20,
    warrantyBadge: "20 YEAR",
    temperatureRange: "-50°C to +100°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-performance neutral cure silicone for glass curtain walls, metal panels, and demanding weatherproofing applications.",
    features: [
      "20-year warranty",
      "Excellent weather resistance to UV, ozone, rain, snow",
      "Temperature range -50°C to +100°C",
      "Superior adhesion to most building materials",
      "Low modulus, high flexibility"
    ],
    applications: [
      "Glass curtain wall sealing",
      "Metal panel joint sealing",
      "Skylight waterproofing",
      "Concrete and stone sealing",
      "Ceramic and tile gap filling"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months (cartridge), 12 months (sausage)",
    image: "/images/products/gaudon-999.jpg",
    images: ["/images/products/gaudon-999.jpg"],
    featured: true,
    popular: true,
    badge: "20 Year"
  },
  {
    id: "gaudon-777",
    model: "GAUDON 777",
    name: "All-Purpose King Silicone Weatherproofing Sealant",
    nameCn: "(全能王)硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 20,
    warrantyBadge: "20 YEAR",
    temperatureRange: "-50°C to +100°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Versatile all-purpose weatherproofing sealant ideal for aluminum panels, external walls, and high-end door/window applications.",
    features: [
      "20-year warranty",
      "Excellent all-around performance",
      "Superior weather resistance",
      "Strong adhesion to multiple substrates",
      "Designed for demanding applications"
    ],
    applications: [
      "Aluminum panel joint filling",
      "External wall gap sealing",
      "High-end door and window sealing",
      "Silicone sealant for special design requirements"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-777.jpg",
    images: ["/images/products/gaudon-777.jpg"],
    featured: false,
    popular: true,
    badge: "All-Purpose"
  },
  {
    id: "gaudon-7800",
    model: "GAUDON 7800",
    name: "High-Performance Neutral Silicone Weatherproofing Sealant",
    nameCn: "高性能中性硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 20,
    warrantyBadge: "20 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "All-purpose neutral cure weatherproofing sealant for small curtain wall projects, aluminum panels, and general construction sealing.",
    features: [
      "20-year warranty",
      "Excellent weather resistance",
      "Good adhesion to most building materials",
      "Maintains flexibility after curing",
      "No primer needed for most applications"
    ],
    applications: [
      "Small curtain wall engineering",
      "Aluminum panel sealing",
      "Stone joint filling",
      "Skylight and external wall sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-7800.jpg",
    images: ["/images/products/gaudon-7800.jpg"],
    featured: true,
    popular: true,
    badge: "20 Year"
  },
  {
    id: "gaudon-7880",
    model: "GAUDON 7880",
    name: "Stainless Steel Fast-Dry Premium Weatherproofing Sealant",
    nameCn: "不锈钢快干型精品硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 10,
    warrantyBadge: "10 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "20 minutes",
    tackFreeTime: "45 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Fast-drying premium sealant specially formulated for stainless steel and titanium alloy applications.",
    features: [
      "10-year warranty",
      "Fast-drying formula",
      "Optimized for stainless steel bonding",
      "Excellent weather resistance",
      "Good adhesion to metal substrates"
    ],
    applications: [
      "Stainless steel projects",
      "Titanium alloy applications",
      "Aluminum panel sealing",
      "Skylight board sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-7880.jpg",
    images: ["/images/products/gaudon-7880.jpg"],
    featured: false,
    popular: false,
    badge: "Fast-Dry"
  },
  {
    id: "gaudon-793a",
    model: "GAUDON 793-A",
    name: "High-Performance Neutral Weatherproofing Sealant",
    nameCn: "高性能中性硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 10,
    warrantyBadge: "10 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-quality neutral cure sealant for non-structural glass curtain walls and general weatherproofing applications.",
    features: [
      "10-year warranty",
      "Excellent weather resistance",
      "Good flexibility after curing",
      "Strong adhesion to building materials",
      "Low modulus design"
    ],
    applications: [
      "Non-structural glass curtain wall sealing",
      "Aluminum panel sealing",
      "External wall joint filling",
      "Sunlight board bonding"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-793a.jpg",
    images: ["/images/products/gaudon-793a.jpg"],
    featured: false,
    popular: false,
    badge: null
  },
  {
    id: "gaudon-7600",
    model: "GAUDON 7600",
    name: "High-Quality Neutral Silicone Weatherproofing Sealant",
    nameCn: "高品质中性硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 15,
    warrantyBadge: "15 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-quality weatherproofing sealant with excellent performance for aluminum panel and external wall applications.",
    features: [
      "15-year warranty",
      "Excellent weather resistance",
      "Good flexibility and elasticity",
      "Strong adhesion to most substrates",
      "Reliable performance"
    ],
    applications: [
      "Aluminum panel joint filling",
      "Sunlight board sealing",
      "External wall joint sealing",
      "High-end renovation projects"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-7600.jpg",
    images: ["/images/products/gaudon-7600.jpg"],
    featured: false,
    popular: true,
    badge: "15 Year"
  },
  {
    id: "gaudon-7300",
    model: "GAUDON 7300",
    name: "Advanced Neutral Silicone Weatherproofing Sealant",
    nameCn: "高级中性硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 10,
    warrantyBadge: "10 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Advanced neutral cure sealant designed for high-end aluminum doors, windows, and interior decoration applications.",
    features: [
      "10-year warranty",
      "Excellent weather resistance",
      "Good flexibility",
      "Strong adhesion",
      "Ideal for interior and exterior use"
    ],
    applications: [
      "High-end aluminum door and window sealing",
      "Interior decoration joint filling",
      "General building material sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-7300.jpg",
    images: ["/images/products/gaudon-7300.jpg"],
    featured: false,
    popular: false,
    badge: null
  },
  {
    id: "gaudon-7200",
    model: "GAUDON 7200",
    name: "Neutral Silicone Weatherproofing Sealant",
    nameCn: "中性硅酮耐候胶",
    category: "weatherproofing",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: 5,
    warrantyBadge: "5 YEAR",
    temperatureRange: "-20°C to +50°C",
    standard: "B.GF 20HM GB/T14683-2017",
    skinTime: "30 minutes",
    tackFreeTime: "60 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Cost-effective neutral cure weatherproofing sealant for standard door, window, and decoration applications.",
    features: [
      "5-year warranty",
      "Good weather resistance",
      "Reliable flexibility",
      "Solid adhesion to common substrates",
      "Economical choice"
    ],
    applications: [
      "High-end aluminum door and window sealing",
      "Interior decoration",
      "General building sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 },
      { type: "Sausage", size: "592ml", unitsPerCase: 20 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-7200.jpg",
    images: ["/images/products/gaudon-7200.jpg"],
    featured: false,
    popular: false,
    badge: "Value"
  },

  // ============================================
  // CATEGORY 3: SPECIALTY SILICONES
  // ============================================
  {
    id: "gaudon-7900",
    model: "GAUDON 7900",
    name: "Electronics & Industrial RTV Silicone Rubber",
    nameCn: "电子电气及特殊工业用胶 硅酮RTV橡胶",
    category: "specialty",
    type: "single-component",
    cureType: "Neutral Cure",
    warranty: null,
    warrantyBadge: "Industrial",
    temperatureRange: "-30°C to +180°C",
    standard: "B.GF 20HM GB/T14683-2017",
    description: "Professional RTV silicone rubber for electronics, electrical equipment, and special industrial applications. Excellent thermal and electrical properties.",
    features: [
      "Wide temperature range -30°C to +180°C",
      "Excellent heat resistance",
      "Superior cold resistance",
      "UV and weather resistant",
      "High durability and longevity",
      "Excellent electrical insulation",
      "High voltage resistance",
      "No material performance degradation"
    ],
    applications: [
      "Automotive lighting",
      "Daily lighting fixtures",
      "Special lamps and fixtures",
      "Electronics bonding and sealing",
      "High-voltage electrical components",
      "Home appliances",
      "Industrial insulation"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for oil/grease contaminated surfaces",
      "Not for poorly ventilated areas",
      "Not for frost or wet surfaces",
      "Not for constant water immersion"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black", "Custom"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "6 months",
    image: "/images/products/gaudon-7900.jpg",
    images: ["/images/products/gaudon-7900.jpg"],
    featured: true,
    popular: false,
    badge: "RTV"
  },

  // ============================================
  // CATEGORY 4: ACIDIC GLASS SEALANTS
  // ============================================
  {
    id: "gaudon-9900",
    model: "GAUDON 9900",
    name: "High-Strength Acidic Large Glass Sealant",
    nameCn: "高强度酸性大板玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "High Elasticity",
    temperatureRange: "-40°C to +120°C",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-strength acidic silicone for large glass bonding and aquarium assembly. Features excellent transparency and non-yellowing formula.",
    features: [
      "High elasticity",
      "Transparent and non-yellowing",
      "Fast skin formation (5 minutes)",
      "Excellent weather resistance",
      "Long service life"
    ],
    applications: [
      "Aquarium assembly",
      "Large flat glass bonding",
      "Glass showcase assembly",
      "Point-fixed glass curtain walls",
      "Transparent glass structures"
    ],
    limitations: [
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Not for frost or wet surfaces",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-9900.jpg",
    images: ["/images/products/gaudon-9900.jpg"],
    featured: true,
    popular: true,
    badge: "High Elasticity"
  },
  {
    id: "gaudon-9000",
    model: "GAUDON 9000",
    name: "High-Quality Acidic Large Glass Sealant",
    nameCn: "高品质酸性大板玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "High Elasticity",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-quality acidic silicone for small aquariums and high-end door/window glass bonding applications.",
    features: [
      "High elasticity",
      "Transparent and clear",
      "Fast curing",
      "Excellent weather resistance",
      "Good adhesion to glass"
    ],
    applications: [
      "Small aquarium assembly",
      "High-end door and window projects",
      "Various building applications"
    ],
    limitations: [
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Not for frost or wet surfaces",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-9000.jpg",
    images: ["/images/products/gaudon-9000.jpg"],
    featured: false,
    popular: false,
    badge: null
  },
  {
    id: "gaudon-8000",
    model: "GAUDON 8000",
    name: "High-Performance Acidic Large Glass Sealant",
    nameCn: "高性能酸性大板玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "High Toughness",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "High-performance acidic silicone with high toughness for large flat glass assembly applications.",
    features: [
      "High toughness",
      "Transparent and non-yellowing",
      "Fast skin formation",
      "Excellent weather resistance",
      "Long service life"
    ],
    applications: [
      "Large flat glass assembly",
      "High-end door and window projects",
      "Glass bonding applications"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Not for frost or wet surfaces"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-8000.jpg",
    images: ["/images/products/gaudon-8000.jpg"],
    featured: false,
    popular: false,
    badge: "High Toughness"
  },
  {
    id: "gaudon-8800",
    model: "GAUDON 8800",
    name: "Premium Acidic Large Glass Sealant",
    nameCn: "精品酸性大板玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: null,
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Premium quality acidic silicone for large flat glass and high-end door/window bonding applications.",
    features: [
      "Premium quality formula",
      "Transparent",
      "Fast curing",
      "Excellent adhesion to glass",
      "Good weather resistance"
    ],
    applications: [
      "Large flat glass assembly",
      "High-end door and window bonding",
      "Various building applications"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-8800.jpg",
    images: ["/images/products/gaudon-8800.jpg"],
    featured: false,
    popular: false,
    badge: null
  },
  {
    id: "gaudon-8600",
    model: "GAUDON 8600",
    name: "Fast-Dry Acidic Large Glass Sealant",
    nameCn: "速干型酸性大板玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "Fast-Dry",
    standard: "GB/T14683-2017",
    skinTime: "3 minutes",
    tackFreeTime: "45 minutes",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Fast-drying acidic silicone for door/window installation, ceiling work, and interior decoration applications.",
    features: [
      "High quality formula",
      "Fast-drying technology",
      "Transparent and clear",
      "Excellent adhesion to glass",
      "Good weather resistance"
    ],
    applications: [
      "Door and window installation",
      "Ceiling work",
      "Interior decoration",
      "Glass assembly"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Not for frost or wet surfaces"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "12 months",
    image: "/images/products/gaudon-8600.jpg",
    images: ["/images/products/gaudon-8600.jpg"],
    featured: false,
    popular: false,
    badge: "Fast-Dry"
  },
  {
    id: "gaudon-6600",
    model: "GAUDON 6600",
    name: "Advanced Fast-Dry Acidic Glass Sealant",
    nameCn: "高级快干酸性玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "Universal",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Universal fast-drying acidic silicone for door/window installation and general glass assembly applications.",
    features: [
      "Universal type formula",
      "Fast-drying",
      "Good adhesion",
      "Weather resistant",
      "Economical choice"
    ],
    applications: [
      "Door and window installation",
      "Glass assembly",
      "General construction use"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "10 months",
    image: "/images/products/gaudon-6600.jpg",
    images: ["/images/products/gaudon-6600.jpg"],
    featured: false,
    popular: false,
    badge: "Universal"
  },
  {
    id: "gaudon-5500",
    model: "GAUDON 5500",
    name: "Advanced Acidic Silicone Glass Sealant",
    nameCn: "高级酸性硅酮玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "Universal",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Universal acidic silicone for door/window installation, ceiling, and general construction applications.",
    features: [
      "Universal type formula",
      "Good adhesion to glass",
      "Weather resistant",
      "Economical pricing",
      "Reliable performance"
    ],
    applications: [
      "Door and window installation",
      "Ceiling work",
      "General construction applications"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "Porcelain White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "9 months",
    image: "/images/products/gaudon-5500.jpg",
    images: ["/images/products/gaudon-5500.jpg"],
    featured: false,
    popular: false,
    badge: "Universal"
  },
  {
    id: "gaudon-3300",
    model: "GAUDON 3300",
    name: "Acidic Silicone Glass Sealant",
    nameCn: "酸性硅酮玻璃胶",
    category: "glass",
    type: "single-component",
    cureType: "Acidic Cure",
    warranty: null,
    warrantyBadge: "Universal",
    standard: "GB/T14683-2017",
    skinTime: "5 minutes",
    tackFreeTime: "1 hour",
    fullCure: "1-2 days surface, 7 days full strength",
    description: "Economy acidic silicone glass sealant for door/window installation and interior decoration.",
    features: [
      "Universal type formula",
      "Basic adhesion to glass",
      "Weather resistant",
      "Most economical option",
      "Suitable for standard applications"
    ],
    applications: [
      "Door and window installation",
      "Interior decoration",
      "General glass sealing"
    ],
    limitations: [
      "Cannot be used as structural sealant",
      "Not for surfaces with oil or organic solvents",
      "Not for poorly ventilated areas",
      "Apply between 6°C and 40°C"
    ],
    colors: ["Transparent", "White", "Silver Gray", "Black"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "9 months",
    image: "/images/products/gaudon-3300.jpg",
    images: ["/images/products/gaudon-3300.jpg"],
    featured: false,
    popular: false,
    badge: "Value"
  },

  // ============================================
  // CATEGORY 5: CONSTRUCTION ADHESIVES
  // ============================================
  {
    id: "gaudon-9700a",
    model: "GAUDON 9700-A",
    name: "Nail-Free High-Strength Construction Adhesive",
    nameCn: "免钉胶 高强度建筑粘合剂",
    category: "adhesive",
    type: "single-component",
    cureType: "Special",
    warranty: null,
    warrantyBadge: "Nail-Free",
    standard: "GB 16776-2005",
    description: "High-strength nail-free construction adhesive that replaces traditional nails and screws. Excellent for bonding various building materials.",
    features: [
      "Super strong adhesion",
      "Good flexibility, no cracking",
      "Paintable after drying",
      "Wide application range",
      "No drilling required",
      "Anti-moisture and anti-mold",
      "Anti-aging and heat resistant",
      "Time and cost saving",
      "Durable and long-lasting"
    ],
    applications: [
      "Replaces traditional nails",
      "Wood bonding",
      "Stone and marble",
      "Metal surfaces",
      "Glass bonding",
      "Ceramic tiles",
      "Plastic materials",
      "Rubber materials",
      "Gypsum board",
      "Fiberboard",
      "Crafts and DIY projects",
      "Advertising industry",
      "Decoration industry",
      "Manufacturing"
    ],
    limitations: [
      "Follow proper surface preparation",
      "Ensure surfaces are clean and dry"
    ],
    colors: ["Porcelain White"],
    packaging: [
      { type: "Cartridge", size: "300ml", unitsPerCase: 24 }
    ],
    shelfLife: "24 months",
    image: "/images/products/gaudon-9700a.jpg",
    images: ["/images/products/gaudon-9700a.jpg"],
    featured: false,
    popular: true,
    badge: "Nail-Free"
  }
];

// Product Categories
export const categories = [
  { id: "all", name: "All Products", nameCn: "所有产品", count: products.length },
  { id: "structural", name: "Structural Sealants", nameCn: "结构密封胶", count: products.filter(p => p.category === "structural").length },
  { id: "weatherproofing", name: "Weatherproofing Sealants", nameCn: "耐候密封胶", count: products.filter(p => p.category === "weatherproofing").length },
  { id: "specialty", name: "Specialty Silicones", nameCn: "特种硅酮", count: products.filter(p => p.category === "specialty").length },
  { id: "glass", name: "Glass Sealants", nameCn: "玻璃胶", count: products.filter(p => p.category === "glass").length },
  { id: "adhesive", name: "Construction Adhesives", nameCn: "建筑粘合剂", count: products.filter(p => p.category === "adhesive").length }
];

// Product Types
export const productTypes = [
  { id: "all", name: "All Types" },
  { id: "single-component", name: "Single-Component" },
  { id: "two-component", name: "Two-Component" }
];

// Cure Types
export const cureTypes = [
  { id: "all", name: "All Cure Types" },
  { id: "Neutral Cure", name: "Neutral Cure" },
  { id: "Acidic Cure", name: "Acidic Cure" }
];

// Warranty Options
export const warrantyOptions = [
  { id: "all", name: "All Warranties" },
  { id: "30", name: "30 Year" },
  { id: "20", name: "20 Year" },
  { id: "15", name: "15 Year" },
  { id: "10", name: "10 Year" },
  { id: "5", name: "5 Year" }
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
    p.nameCn.includes(query) ||
    p.description.toLowerCase().includes(q) ||
    p.applications.some(a => a.toLowerCase().includes(q))
  );
};

export default products;
