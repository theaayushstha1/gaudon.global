import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';

const industries = [
  { value: 'construction', label: 'Construction & Building' },
  { value: 'kitchen_bath', label: 'Kitchen & Bath' },
  { value: 'automotive', label: 'Automotive & HVAC' },
  { value: 'marine', label: 'Marine & Outdoor' },
  { value: 'glass', label: 'Glass & Aquarium' },
  { value: 'interior', label: 'Interior & Painting' }
];

const properties = [
  { value: 'weatherproof', label: 'Weatherproof & UV Resistant' },
  { value: 'mold_resistant', label: 'Mold & Mildew Resistant' },
  { value: 'high_temp', label: 'High Temperature Resistance' },
  { value: 'fast_cure', label: 'Fast Curing' },
  { value: 'heavy_duty', label: 'Heavy Duty / Industrial' },
  { value: 'paintable', label: 'Paintable' }
];

// Mapping to actual GAUDON product models
const recommendations = {
  // Construction
  'construction-weatherproof': ['G2', 'D2', 'G1'],
  'construction-mold_resistant': ['G1', 'G2', 'D2'],
  'construction-high_temp': ['D2', 'G2', 'D1'],
  'construction-fast_cure': ['B1 Premium', 'B1', 'D2'],
  'construction-heavy_duty': ['D2', 'G2', 'D1'],
  'construction-paintable': ['B1', 'B1 Premium', 'G2'],

  // Kitchen & Bath
  'kitchen_bath-weatherproof': ['G1', 'G2', 'D2'],
  'kitchen_bath-mold_resistant': ['G1', 'D1', 'G2'],
  'kitchen_bath-high_temp': ['G1', 'D2', 'G2'],
  'kitchen_bath-fast_cure': ['G1', 'B1 Premium', 'D1'],
  'kitchen_bath-heavy_duty': ['G1', 'D2', 'G2'],
  'kitchen_bath-paintable': ['B1', 'B1 Premium', 'G1'],

  // Automotive & HVAC
  'automotive-weatherproof': ['D2', 'G2', 'D1'],
  'automotive-mold_resistant': ['D2', 'G1', 'G2'],
  'automotive-high_temp': ['D2', 'G2', 'D1'],
  'automotive-fast_cure': ['D2', 'B1 Premium', 'G2'],
  'automotive-heavy_duty': ['D2', 'G2', 'D1'],
  'automotive-paintable': ['B1 Premium', 'B1', 'D2'],

  // Marine & Outdoor
  'marine-weatherproof': ['G2', 'D2', 'D1'],
  'marine-mold_resistant': ['G2', 'G1', 'D2'],
  'marine-high_temp': ['D2', 'G2', 'D1'],
  'marine-fast_cure': ['G2', 'D2', 'B1 Premium'],
  'marine-heavy_duty': ['D2', 'G2', 'D1'],
  'marine-paintable': ['B1 Premium', 'B1', 'G2'],

  // Glass & Aquarium
  'glass-weatherproof': ['G2', 'D1', 'D2'],
  'glass-mold_resistant': ['D1', 'G1', 'G2'],
  'glass-high_temp': ['D1', 'D2', 'G2'],
  'glass-fast_cure': ['D1', 'G2', 'B1 Premium'],
  'glass-heavy_duty': ['D1', 'D2', 'G2'],
  'glass-paintable': ['B1', 'B1 Premium', 'G2'],

  // Interior & Painting
  'interior-weatherproof': ['G2', 'G1', 'B1 Premium'],
  'interior-mold_resistant': ['G1', 'B1 Premium', 'G2'],
  'interior-high_temp': ['D2', 'G2', 'B1 Premium'],
  'interior-fast_cure': ['B1 Premium', 'B1', 'G1'],
  'interior-heavy_duty': ['D2', 'B1 Premium', 'G2'],
  'interior-paintable': ['B1', 'B1 Premium', 'G1'],

  // Default fallback
  'default': ['G1', 'G2', 'D2']
};

export default function SmartProductFinder() {
  const [industry, setIndustry] = useState('');
  const [property, setProperty] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleFind = () => {
    if (industry && property) {
      setShowResults(true);
    }
  };

  const getRecommendedProducts = () => {
    const key = `${industry}-${property}`;
    const modelList = recommendations[key] || recommendations.default;
    return products
      .filter(p => modelList.includes(p.model))
      .slice(0, 3);
  };

  const recommendedProducts = showResults ? getRecommendedProducts() : [];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-full mb-4">
            <Search className="w-4 h-4" />
            Product Finder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 text-display">
            Find Your Product
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Answer two questions and we'll recommend the perfect sealant for your project
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Industry Selector */}
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  1. Your Industry
                </label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind.value} value={ind.value}>
                        {ind.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Property Selector */}
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  2. Key Requirement
                </label>
                <Select value={property} onValueChange={setProperty}>
                  <SelectTrigger className="h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all">
                    <SelectValue placeholder="Select requirement" />
                  </SelectTrigger>
                  <SelectContent>
                    {properties.map((prop) => (
                      <SelectItem key={prop.value} value={prop.value}>
                        {prop.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleFind}
              disabled={!industry || !property}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-12 font-medium disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
            >
              Find Product
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <div className="bg-slate-900 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-medium text-white">
                      Recommended Products
                    </h3>
                  </div>

                  {recommendedProducts.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-4">
                      {recommendedProducts.map((product, idx) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ y: -2 }}
                          className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
                        >
                          {/* Product Image */}
                          <div className="relative bg-slate-100 p-4 h-32 flex items-center justify-center flex-shrink-0">
                            {idx === 0 && (
                              <Badge className="absolute top-2 left-2 bg-emerald-600 text-white text-xs">
                                Best Match
                              </Badge>
                            )}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-auto object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-slate-900">GAUDON {product.model}</h4>
                              {product.badge && (
                                <span
                                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                                  style={{
                                    backgroundColor: `${product.color}20`,
                                    color: product.color
                                  }}
                                >
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mb-3 line-clamp-2 flex-1">{product.name}</p>
                            <Link to={createPageUrl('ProductDetail') + `?id=${product.id}`}>
                              <Button variant="outline" size="sm" className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-sm">
                                View Details
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-white py-4">
                      <p className="text-sm text-slate-400 mb-3">No exact matches found</p>
                      <Link to={createPageUrl('Contact')}>
                        <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full">
                          Contact Our Team
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
