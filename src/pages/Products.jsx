import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ComparisonTool from '../components/products/ComparisonTool';
import { Search, Plus, Check, ArrowRight, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

const categoryFilters = [
  { id: 'all', label: 'All Products' },
  { id: 'kitchen_bath', label: 'Kitchen & Bath' },
  { id: 'weatherproof', label: 'Weatherproof' },
  { id: 'glass', label: 'Glass & Aquarium' },
  { id: 'construction', label: 'Construction' },
  { id: 'acrylic', label: 'Acrylic & Latex' }
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [comparisonIds, setComparisonIds] = useState([]);

  const toggleComparison = (productId) => {
    setComparisonIds(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = !searchQuery ||
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.fullName?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Dynamic and engaging */}
      <section className="relative bg-slate-950 pt-24 pb-16 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-40 right-40 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-20 right-60 w-48 h-48 bg-amber-500 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">{products.length} Products Available</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1]">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400">
                  Silicone Sealants
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                Engineered for excellence. Trusted by professionals worldwide with our 30-year warranty guarantee.
              </p>

              {/* Search Bar - Enhanced */}
              <div className="relative max-w-md group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search by name, model, or application..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all text-sm"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 bg-white/5 px-2 py-1 rounded border border-white/10">
                      ⌘K
                    </kbd>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 mt-8">
                {[
                  { value: '30', label: 'Year Warranty' },
                  { value: '100+', label: 'Countries' },
                  { value: '25+', label: 'Years Exp.' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Floating Products Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative h-[320px]"
            >
              {/* Product images floating */}
              {products.slice(0, 3).map((product, i) => (
                <motion.div
                  key={product.id}
                  className="absolute"
                  style={{
                    left: `${15 + i * 28}%`,
                    top: i === 1 ? '10%' : '25%',
                    zIndex: 3 - i
                  }}
                  initial={{ opacity: 0, y: 20, rotate: -5 + i * 5 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: -5 + i * 5
                  }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                >
                  <div
                    className="w-28 h-40 rounded-2xl p-3 backdrop-blur-sm border border-white/10 shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}20 0%, transparent 100%)`,
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <span className="text-[9px] font-medium text-white">{product.model}</span>
                  </div>
                </motion.div>
              ))}

              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-white/5" />
                <div className="absolute w-80 h-80 rounded-full border border-dashed border-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}

            {(searchQuery || activeCategory !== 'all') && (
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-3 py-2 text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
            {comparisonIds.length > 0 && (
              <p className="text-sm text-slate-600">
                <span className="font-medium">{comparisonIds.length}</span> selected for comparison
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
              <Button
                variant="outline"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="rounded-full"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  isSelected={comparisonIds.includes(product.id)}
                  onToggleCompare={() => toggleComparison(product.id)}
                  canAddMore={comparisonIds.length < 3}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Tool */}
      <ComparisonTool
        products={products}
        selectedIds={comparisonIds}
        onToggle={toggleComparison}
        onClear={() => setComparisonIds([])}
      />
    </div>
  );
}

// Clean Product Card Component
function ProductCard({ product, index, isSelected, onToggleCompare, canAddMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={createPageUrl(`ProductDetail?id=${product.id}`)}
        className="group block h-full"
      >
        <div className={`bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-200 ${
          isSelected
            ? 'ring-2 ring-slate-900 shadow-lg'
            : 'hover:shadow-xl border border-slate-100'
        }`}>
          {/* Image Container */}
          <div className="relative aspect-[4/5] bg-gradient-to-b from-slate-50 to-white p-4">
            {/* Badge */}
            {product.badge && (
              <Badge
                className="absolute top-3 left-3 z-10 text-white border-0 text-[10px] font-semibold px-2 py-0.5"
                style={{ backgroundColor: product.color || '#0f172a' }}
              >
                {product.badge}
              </Badge>
            )}

            {/* Compare Button */}
            {onToggleCompare && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isSelected || canAddMore) onToggleCompare();
                }}
                disabled={!isSelected && !canAddMore}
                className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white'
                    : canAddMore
                      ? 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                }`}
              >
                {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
            )}

            {/* Product Image */}
            <img
              src={product.image || product.images?.[0]}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                {product.category?.replace(/_/g, ' ')}
              </p>
              <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-slate-600 transition-colors">
                GAUDON {product.model}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-1">
                {product.name}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-900">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
