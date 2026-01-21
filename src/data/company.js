// GAUDON Silicone Company Data
// Last Updated: January 17, 2026

export const company = {
  name: {
    en: "GAUDON Industrial Co., Ltd.",
    cn: "GAUDON实业有限公司",
    short: "GAUDON",
    brand: "GAUDON"
  },
  tagline: {
    en: "Professional Silicone Solutions",
    cn: "专业硅酮解决方案"
  },
  founded: 1999,
  yearsInBusiness: new Date().getFullYear() - 1999,

  contact: {
    address: {
      full: "Foshan City, Guangdong Province, China",
      city: "Foshan",
      province: "Guangdong",
      country: "China",
      zip: "528322"
    },
    email: "info@gaudon.com",
    phone: "+86 757 2566 8888",
    website: {
      usa: "https://gaudon.com",
      china: "https://gaudon.com"
    }
  },

  stats: {
    yearsExperience: 25,
    productModels: 50,
    countriesServed: 100,
    monthlyCapacity: "30,000+"
  },

  certifications: [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      standard: "GB/T19001-2016",
      certificateNo: "60724Q10271R1S",
      issueDate: "2024-07-31",
      expiryDate: "2027-07-30",
      scope: "Manufacture of Glass Cement",
      issuingBody: "Tongbiao Authentication Center",
      active: true
    },
    {
      name: "ISO 14001:2004",
      description: "Environmental Management System",
      active: true
    },
    {
      name: "National Certified Structural Sealant Manufacturer",
      nameCn: "国家硅酮结构密封胶生产认定企业",
      description: "Government certification for structural silicone sealant production",
      active: true
    },
    {
      name: "China Building Metal Structure Association Member",
      nameCn: "中国建筑金属结构协会会员",
      active: true
    },
    {
      name: "CBDA Curtain Wall Engineering Branch Member",
      description: "China Building Decoration Association",
      active: true
    }
  ],

  milestones: [
    { year: 1999, title: "Company Founded", description: "Established in Foshan, Guangdong Province" },
    { year: 2005, title: "ISO Certification", description: "Achieved ISO 9001 Quality Management certification" },
    { year: 2010, title: "Factory Expansion", description: "New automated production facility" },
    { year: 2015, title: "Global Expansion", description: "Serving 50+ countries worldwide" },
    { year: 2020, title: "R&D Center", description: "Advanced research and development facility" },
    { year: 2024, title: "25th Anniversary", description: "Quarter century of excellence" }
  ],

  values: [
    {
      title: "Quality First",
      description: "Strict quality control from raw materials to finished products"
    },
    {
      title: "Innovation",
      description: "Continuous R&D investment for product improvement"
    },
    {
      title: "Customer Focus",
      description: "Dedicated to producing products that satisfy customers"
    },
    {
      title: "Integrity",
      description: "Building trust through honest business practices"
    }
  ],

  facilities: {
    factorySize: "Modern automated production facility",
    location: "Shunde District Industrial Zone",
    equipment: "International advanced production equipment",
    labTesting: "Precision testing laboratory",
    rdCenter: "Dedicated R&D center"
  }
};

// Project References / Case Studies
export const projects = [
  // Residential
  { name: "Jinke Jimei Tianchenwan", nameCn: "金科·集美天辰湾", type: "residential", location: "Foshan" },
  { name: "Poly Country Garden", nameCn: "保利碧桂园", type: "residential", location: "Guangdong" },
  { name: "Foshan Greenland", nameCn: "佛山绿地", type: "residential", location: "Foshan" },
  { name: "Country Garden Twin Towers", nameCn: "碧桂园双子星", type: "residential", location: "Guangdong" },
  { name: "Vanke Golden Garden", nameCn: "万科金域花园", type: "residential", location: "Guangdong" },
  { name: "Jiayu Blue Bay Phase 1-4", nameCn: "嘉誉蓝湾一期至四期", type: "residential", location: "Guangdong" },
  { name: "Haiyue New City Phase 6-7", nameCn: "海悦新城六期至七期", type: "residential", location: "Guangdong" },
  { name: "Donglin Meiyu Phase 1-4", nameCn: "东林美域一期至四期", type: "residential", location: "Guangdong" },
  { name: "Blue Coast Phase 1", nameCn: "蓝色海岸一期", type: "residential", location: "Guangdong" },
  // Commercial/Industrial
  { name: "Guangdong Transportation Group", nameCn: "广东交通集团(中铁隧道局集团)", type: "infrastructure", location: "Guangdong" },
  { name: "Donglian Building", nameCn: "东联大厦", type: "commercial", location: "Guangdong" },
  { name: "Zhifuyuan Industrial City", nameCn: "智富园工业城", type: "industrial", location: "Guangdong" }
];

// Warranty Tiers
export const warrantyTiers = [
  { years: 30, name: "Premium", products: ["GAUDON 9009", "GAUDON 8008", "GAUDON 20000", "GAUDON 10000"], color: "gold" },
  { years: 20, name: "Professional", products: ["GAUDON 999", "GAUDON 777", "GAUDON 7800"], color: "gray" },
  { years: 15, name: "Standard Plus", products: ["GAUDON 7600"], color: "white" },
  { years: 10, name: "Standard", products: ["GAUDON 7880", "GAUDON 793-A", "GAUDON 7300"], color: "green" },
  { years: 5, name: "Economy", products: ["GAUDON 7200"], color: "gray" }
];

// Technical Standards
export const standards = [
  { code: "GB 16776-2005", name: "National Standard for Structural Silicone Sealants" },
  { code: "GB/T14683-2017", name: "National Standard for Silicone Sealants for Construction" },
  { code: "B.GF 20HM GB/T14683-2017", name: "Building Material Standard for Weatherproofing Sealants" },
  { code: "GB/T19001-2016/ISO9001:2015", name: "Quality Management System Standard" }
];

// Applications / Industries Served
export const applications = [
  {
    id: "curtain-wall",
    name: "Curtain Wall",
    icon: "Building2",
    description: "High-rise building facade systems",
    products: ["GAUDON 9009", "GAUDON 20000", "GAUDON 10000", "GAUDON 999"]
  },
  {
    id: "windows-doors",
    name: "Windows & Doors",
    icon: "DoorOpen",
    description: "Residential and commercial fenestration",
    products: ["GAUDON 7800", "GAUDON 7300", "GAUDON 7200", "GAUDON 6600"]
  },
  {
    id: "glass-assembly",
    name: "Glass Assembly",
    icon: "Square",
    description: "Aquariums, showcases, glass structures",
    products: ["GAUDON 9900", "GAUDON 9000", "GAUDON 8000"]
  },
  {
    id: "electronics",
    name: "Electronics & Industrial",
    icon: "Cpu",
    description: "Automotive, lighting, electrical components",
    products: ["GAUDON 7900"]
  },
  {
    id: "construction",
    name: "General Construction",
    icon: "Hammer",
    description: "Interior decoration, DIY, renovation",
    products: ["GAUDON 9700-A", "GAUDON 3300", "GAUDON 5500"]
  }
];

export default company;
