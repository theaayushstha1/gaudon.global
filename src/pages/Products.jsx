import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ComparisonTool from '../components/products/ComparisonTool';
import { Search, Plus, Check, ArrowRight, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

// Main categories with sub-categories
const mainCategories = [
  {
    id: 'silicone',
    label: '100% Silicone Sealants',
    shortLabel: 'Silicone',
    accent: '#3b82f6',
    subCategories: [
      { id: 'neutral_cure', label: 'Neutral Cure' },
      { id: 'acetic_cure', label: 'Acetic Cure' }
    ]
  },
  {
    id: 'acrylic_latex',
    label: 'Acrylic Latex Sealants',
    shortLabel: 'Acrylic Latex',
    accent: '#8b5cf6',
    subCategories: []
  },
  {
    id: 'insulating_foam',
    label: 'Insulating Foams',
    shortLabel: 'Foams',
    accent: '#f59e0b',
    subCategories: []
  }
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [comparisonIds, setComparisonIds] = useState([]);

  // Read category from URL on page load
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && mainCategories.some(c => c.id === categoryFromUrl)) {
      setActiveMainCategory(categoryFromUrl);
      setExpandedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const toggleComparison = (productId) => {
    setComparisonIds(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  const handleMainCategoryClick = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
    setActiveMainCategory(categoryId);
    setActiveSubCategory(null);
  };

  const handleSubCategoryClick = (subCategoryId) => {
    setActiveSubCategory(subCategoryId);
  };

  const clearFilters = () => {
    setActiveMainCategory(null);
    setActiveSubCategory(null);
    setExpandedCategory(null);
    setSearchQuery('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = !searchQuery ||
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.fullName?.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by main category
    let matchesMainCategory = true;
    if (activeMainCategory === 'silicone') {
      matchesMainCategory = product.cureType?.includes('Cure') && product.category !== 'insulating_foam' && product.category !== 'acrylic';
    } else if (activeMainCategory === 'acrylic_latex') {
      matchesMainCategory = product.category === 'acrylic' || product.name?.toLowerCase().includes('acrylic') || product.name?.toLowerCase().includes('latex');
    } else if (activeMainCategory === 'insulating_foam') {
      matchesMainCategory = product.category === 'insulating_foam' || product.name?.toLowerCase().includes('foam');
    }

    // Filter by sub-category (cure type)
    let matchesSubCategory = true;
    if (activeSubCategory === 'neutral_cure') {
      matchesSubCategory = product.cureType === 'Neutral Cure';
    } else if (activeSubCategory === 'acetic_cure') {
      matchesSubCategory = product.cureType === 'Acetic Cure';
    }

    return matchesSearch && matchesMainCategory && matchesSubCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Dark prism background */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-[1.1]">
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Find Your Perfect</span>
                <span className="block text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Sealant Solution
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6 max-w-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Professional-grade silicone sealants for every project.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 sm:px-6 py-4 sm:py-5 text-sm rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-5 sm:px-6 py-4 sm:py-5 text-sm rounded-full font-medium bg-transparent transition-all duration-200"
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

      {/* Search Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products by name, model, or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section id="product-grid" className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Left Sidebar - Categories */}
            <div className="w-64 flex-shrink-0 hidden lg:block">
              <div className="bg-white rounded-2xl border border-slate-200 sticky top-36 overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-semibold text-slate-900 text-sm">Product Categories</h3>
                </div>

                <div className="p-3">
                  {/* All Products */}
                  <button
                    onClick={clearFilters}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      !activeMainCategory
                        ? 'bg-slate-900 text-white font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Products</span>
                  </button>

                  {/* Divider */}
                  <div className="my-2 border-t border-slate-100" />

                  {/* Main Categories */}
                  <div className="space-y-1">
                    {mainCategories.map((category, index) => {
                      const isActive = activeMainCategory === category.id;
                      const isExpanded = expandedCategory === category.id;
                      const productCount = products.filter(p => {
                        if (category.id === 'silicone') return p.cureType?.includes('Cure') && p.category !== 'insulating_foam' && p.category !== 'acrylic';
                        if (category.id === 'acrylic_latex') return p.category === 'acrylic';
                        if (category.id === 'insulating_foam') return p.category === 'insulating_foam';
                        return false;
                      }).length;

                      return (
                        <div key={category.id}>
                          <button
                            onClick={() => handleMainCategoryClick(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? 'text-white font-medium'
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                            style={isActive ? { backgroundColor: category.accent } : {}}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate">{category.label}</span>
                              {category.subCategories.length > 0 && (
                                <motion.span
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex-shrink-0"
                                >
                                  <ChevronDown className={`w-4 h-4 ${isActive ? 'text-white/70' : 'text-slate-400'}`} />
                                </motion.span>
                              )}
                            </div>
                          </button>

                          {/* Sub Categories */}
                          <AnimatePresence>
                            {isExpanded && category.subCategories.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="py-2 pl-8 pr-3 space-y-1">
                                  {category.subCategories.map((sub, subIndex) => {
                                    const isSubActive = activeSubCategory === sub.id;
                                    return (
                                      <button
                                        key={sub.id}
                                        onClick={() => handleSubCategoryClick(sub.id)}
                                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center gap-3 ${
                                          isSubActive
                                            ? 'font-medium bg-slate-100'
                                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                        }`}
                                        style={isSubActive ? { color: category.accent } : {}}
                                      >
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                          isSubActive ? '' : 'bg-slate-300'
                                        }`} style={isSubActive ? { backgroundColor: category.accent } : {}} />
                                        <span>{sub.label}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Clear Filters Footer */}
                <AnimatePresence>
                  {(activeMainCategory || activeSubCategory || searchQuery) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-100"
                    >
                      <button
                        onClick={clearFilters}
                        className="w-full px-5 py-3 text-sm text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center gap-2 transition-all"
                      >
                        <X className="w-4 h-4" />
                        Clear All Filters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right - Products Grid */}
            <div className="flex-1">
              {/* Mobile Category Pills - Horizontal Scroll */}
              <div className="lg:hidden mb-6 -mx-4 px-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={clearFilters}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      !activeMainCategory
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 active:bg-slate-200'
                    }`}
                  >
                    All
                  </button>
                  {mainCategories.map((cat) => {
                    const isActive = activeMainCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleMainCategoryClick(cat.id)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                          isActive
                            ? 'text-white'
                            : 'bg-slate-100 text-slate-600 active:bg-slate-200'
                        }`}
                        style={isActive ? { backgroundColor: cat.accent } : {}}
                      >
                        {cat.shortLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Results count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                  {activeMainCategory && (
                    <span className="ml-2 text-slate-400">
                      in {mainCategories.find(c => c.id === activeMainCategory)?.label}
                      {activeSubCategory && ` > ${mainCategories.find(c => c.id === activeMainCategory)?.subCategories.find(s => s.id === activeSubCategory)?.label}`}
                    </span>
                  )}
                </p>
                {comparisonIds.length > 0 && (
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">{comparisonIds.length}</span> selected for comparison
                  </p>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-7 h-7 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">No products found</h3>
                  <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="rounded-full"
                  >
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
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
          </div>
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

// Clean Product Card Component - Mobile Optimized
function ProductCard({ product, index, isSelected, onToggleCompare, canAddMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
    >
      <Link
        to={createPageUrl(`ProductDetail?id=${product.id}`)}
        className="group block h-full"
      >
        <div className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-200 ${
          isSelected
            ? 'ring-2 ring-slate-900 shadow-lg'
            : 'hover:shadow-xl border border-slate-100'
        }`}>
          {/* Image Container */}
          <div className="relative aspect-square sm:aspect-[4/5] bg-gradient-to-b from-slate-50 to-white p-2 sm:p-4">
            {/* Badge */}
            {product.badge && (
              <Badge
                className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 text-white border-0 text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5"
                style={{ backgroundColor: product.color || '#0f172a' }}
              >
                {product.badge}
              </Badge>
            )}

            {/* Compare Button - Hidden on mobile */}
            {onToggleCompare && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isSelected || canAddMore) onToggleCompare();
                }}
                disabled={!isSelected && !canAddMore}
                className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full hidden sm:flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white'
                    : canAddMore
                      ? 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                }`}
              >
                {isSelected ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Plus className="w-3 h-3 sm:w-4 sm:h-4" />}
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
          <div className="p-2.5 sm:p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <p className="text-[8px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1 hidden sm:block">
                {product.category?.replace(/_/g, ' ')}
              </p>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-0.5 group-hover:text-slate-600 transition-colors line-clamp-1">
                GAUDON {product.model}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1 sm:line-clamp-2">
                {product.name}
              </p>
            </div>

            {/* Footer - Simplified on mobile */}
            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-medium text-slate-900">
                Details
              </span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
