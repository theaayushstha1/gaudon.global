import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'acidic_glass_sealant', label: 'Acidic Glass Sealant' },
  { value: 'neutral_silicone_sealant', label: 'Neutral Silicone' },
  { value: 'structural_sealant', label: 'Structural Sealant' },
  { value: 'weatherproof_sealant', label: 'Weatherproof' },
  { value: 'special_industrial', label: 'Special Industrial' },
  { value: 'construction_adhesive', label: 'Construction Adhesive' }
];

const types = [
  { value: 'all', label: 'All Types' },
  { value: 'cartridge', label: 'Cartridge (300ml)' },
  { value: 'sausage', label: 'Sausage (590ml)' },
  { value: 'bucket', label: 'Bucket' }
];

const applications = [
  { value: 'all', label: 'All Applications' },
  { value: 'curtain_wall', label: 'Curtain Wall' },
  { value: 'window_door', label: 'Window & Door' },
  { value: 'electronic', label: 'Electronic Grade' },
  { value: 'automotive', label: 'Automotive Sealing' }
];

export default function ProductFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedApplication,
  setSelectedApplication 
}) {
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
    if (setSelectedApplication) setSelectedApplication('all');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedType !== 'all' || (selectedApplication && selectedApplication !== 'all');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-8 sticky top-24 z-20"
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        {/* Search */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            placeholder="Search products by model or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-gray-500/20"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 4).map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-full transition-all ${
                selectedCategory === cat.value 
                  ? 'bg-gradient-to-r from-gray-800 to-black border-0 text-white' 
                  : 'border-slate-200 hover:border-gray-500 hover:text-gray-600'
              }`}
            >
              {cat.label}
            </Button>
          ))}
          
          {/* More categories dropdown could go here */}
        </div>

        {/* Clear filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Application Type Filter */}
      {setSelectedApplication && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <span className="text-sm font-semibold text-slate-700 mb-2 block">Filter by Application:</span>
          <div className="flex flex-wrap gap-2">
            {applications.map((app) => (
              <Button
                key={app.value}
                variant={selectedApplication === app.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedApplication(app.value)}
                className={`rounded-full text-xs transition-all ${
                  selectedApplication === app.value 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 border-0 text-white' 
                    : 'border-slate-200 hover:border-purple-500 hover:text-purple-600'
                }`}
              >
                {app.label}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {/* Category pills - mobile friendly */}
      <div className="flex flex-wrap gap-2 mt-4 lg:hidden">
        {categories.slice(4).map((cat) => (
          <Button
            key={cat.value}
            variant={selectedCategory === cat.value ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat.value)}
            className={`rounded-full text-xs transition-all ${
              selectedCategory === cat.value 
                ? 'bg-gradient-to-r from-gray-800 to-black border-0 text-white' 
                : 'border-slate-200 hover:border-gray-500 hover:text-gray-600'
            }`}
          >
            {cat.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}