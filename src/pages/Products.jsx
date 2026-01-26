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
      {/* Hero Section - Dark prism background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/product-bg.jpg"
            alt="Product background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

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
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-amber-300 font-medium">{products.length} Products Available</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]">
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Find Your Perfect</span>
                <span className="block text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Sealant Solution
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Browse our complete range of professional-grade silicone sealants. From structural bonding to weatherproofing — we have the right product for every project.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-5 text-sm rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-5 text-sm rounded-full font-medium bg-transparent transition-all duration-200"
                  onClick={() => document.getElementById('product-grid').scrollIntoView({ behavior: 'smooth' })}
                >
                  View All Products
                </Button>
              </div>
            </motion.div>

            {/* Right - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* Product showcase grid */}
              <div className="flex items-end justify-center gap-3">
                {products.slice(0, 4).map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -20, scale: 1.08 }}
                    className="group cursor-pointer"
                  >
                    <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
                      <div
                        className="relative"
                        style={{ height: i % 2 === 0 ? '280px' : '250px' }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_25px_50px_rgba(255,255,255,0.25)] transition-all duration-300"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Subtle reflection/glow effect */}
              <div className="absolute -bottom-4 left-0 right-0 h-20 bg-gradient-to-t from-black/30 via-white/5 to-transparent blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar with Search */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-5">
          {/* Search Bar - Full Width & Bigger */}
          <div className="relative mb-5">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <input
              type="text"
              placeholder="Search products by name, model, category, or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-1 flex-shrink-0" />
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
                className="px-3 py-2 text-sm text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="product-grid" className="py-10">
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
