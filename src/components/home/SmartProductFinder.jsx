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
  { value: 'automotive', label: 'Automotive' },
  { value: 'medical', label: 'Medical & Healthcare' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'marine', label: 'Marine & Offshore' },
  { value: 'glass', label: 'Glass & Glazing' }
];

const properties = [
  { value: 'high_temp', label: 'High Temperature Resistance' },
  { value: 'weatherproof', label: 'Weatherproof & UV Resistant' },
  { value: 'fast_cure', label: 'Fast Curing' },
  { value: 'food_grade', label: 'Food Grade Safe' },
  { value: 'structural', label: 'High Strength Structural' },
  { value: 'flexible', label: 'High Flexibility' }
];

const recommendations = {
  'construction-high_temp': ['GAUDON 7900', 'GAUDON 7800', 'GAUDON 7600'],
  'construction-weatherproof': ['GAUDON 999', 'GAUDON 777', 'GAUDON 20000'],
  'construction-structural': ['GAUDON 9009', 'GAUDON 20000', 'GAUDON 10000'],
  'automotive-high_temp': ['GAUDON 7900', 'GAUDON 7800', 'GAUDON 7600'],
  'automotive-fast_cure': ['GAUDON 7800', 'GAUDON 7600', 'GAUDON 793-A'],
  'medical-food_grade': ['GAUDON 9900', 'GAUDON 9000', 'GAUDON 8000'],
  'electronics-high_temp': ['GAUDON 7900', 'GAUDON 7800', 'GAUDON 7600'],
  'glass-weatherproof': ['GAUDON 999', 'GAUDON 777', 'GAUDON 20000'],
  'glass-structural': ['GAUDON 9009', 'GAUDON 20000', 'GAUDON 10000'],
  'marine-weatherproof': ['GAUDON 999', 'GAUDON 777', 'GAUDON 20000'],
  'default': ['GAUDON 9700-A', 'GAUDON 999', 'GAUDON 9009']
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
              className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 font-medium disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
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
                          className="bg-white rounded-xl p-4 hover:shadow-lg transition-all"
                        >
                          {idx === 0 && (
                            <Badge className="bg-slate-900 text-white mb-2 text-xs">
                              Best Match
                            </Badge>
                          )}
                          <h4 className="font-semibold text-slate-900 mb-1">{product.model}</h4>
                          <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.name}</p>
                          <Link to={createPageUrl('ProductDetail') + `?id=${product.id}`}>
                            <Button variant="outline" size="sm" className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-sm">
                              View Details
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
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
