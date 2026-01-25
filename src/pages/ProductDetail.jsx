import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Download,
  MessageCircle,
  Package,
  ChevronRight,
  Home,
  Droplet,
  Shield,
  Thermometer,
  Clock,
  ShoppingBag,
  Sparkles,
  Sun,
  Zap,
  Waves,
  CircleCheck,
  Paintbrush,
  Grip
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { products, getProductById } from '@/data/products';

// Simple Feature Icon using Lucide
const FeatureIcon = ({ icon, label }) => {
  const iconMap = {
    'mildew-resistant': Sparkles,
    'waterproof': Droplet,
    'easy-cleanup': Waves,
    'flexible': Zap,
    'weather-resistant': Sun,
    'uv-stable': Sun,
    'high-temp': Thermometer,
    'aquarium-safe': Droplet,
    'clear-finish': Sparkles,
    'paintable': Paintbrush,
    'fast-dry': Clock,
    'water-resistant': Droplet,
    'heavy-duty': Shield,
    'durable': Shield,
    'interior': Home,
    'interior-exterior': Sun,
    'low-odor': Waves,
    'strong-adhesion': Grip,
    'smooth-application': Sparkles,
    'easy-apply': Sparkles
  };

  const IconComponent = iconMap[icon] || CircleCheck;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-2">
        <IconComponent className="w-6 h-6" />
      </div>
      <span className="text-xs font-medium text-slate-600 max-w-[80px]">{label}</span>
    </div>
  );
};

const colorMap = {
  'Crystal Clear': 'bg-gradient-to-br from-white to-slate-100 border-slate-300',
  'Clear': 'bg-gradient-to-br from-white to-slate-100 border-slate-300',
  'White': 'bg-white border-slate-300',
  'Porcelain White': 'bg-white border-slate-300',
  'Black': 'bg-slate-900 border-slate-700',
  'Gray': 'bg-slate-400 border-slate-500',
  'Almond': 'bg-amber-100 border-amber-200',
  'Bronze': 'bg-amber-700 border-amber-800',
  'Aluminum': 'bg-slate-300 border-slate-400'
};

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const [selectedColor, setSelectedColor] = useState(null);

  const product = getProductById(productId);
  const relatedProducts = products.filter(p =>
    p.category === product?.category && p.id !== productId
  ).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Package className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-700 mb-2">Product Not Found</h2>
        <Link to={createPageUrl('Products')}>
          <Button className="bg-slate-900 hover:bg-slate-800">Back to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* White Hero Section with Product Color Limelight */}
      <section className="bg-white pt-24 pb-16 relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button + Breadcrumb */}
          <div className="flex items-center gap-4 mb-8">
            <Link to={createPageUrl('Products')}>
              <Button size="sm" className="rounded-full text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 font-medium px-4">
                ← Back to Products
              </Button>
            </Link>
            <nav className="flex items-center gap-2 text-xs">
              <Link to={createPageUrl('Home')} className="text-slate-500 hover:text-slate-900 flex items-center gap-1">
                <Home className="w-3 h-3" />
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link to={createPageUrl('Products')} className="text-slate-500 hover:text-slate-900">
                Products
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-900 font-medium">{product.model}</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Product Image with Subtle Glow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div
                className="relative rounded-3xl p-8 max-w-md w-full bg-white border"
                style={{
                  borderColor: `${product.color}30`,
                  boxShadow: `0 0 40px ${product.color}15, 0 4px 20px rgba(0,0,0,0.05)`
                }}
              >
                {/* Product image container */}
                <div className="relative flex items-center justify-center">
                  {/* Subtle glow effect behind the product */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full blur-3xl"
                    style={{ background: product.color || '#0F766E', opacity: 0.15 }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl"
                    style={{ background: product.color || '#0F766E', opacity: 0.12 }}
                  />
                  <img
                    src={product.image || product.images?.[0]}
                    alt={product.name}
                    className="relative z-10 w-full h-auto object-contain max-h-96"
                    style={{ filter: `drop-shadow(0 0 15px ${product.color}25)` }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              {/* Badge */}
              <div className="flex items-center gap-2">
                <Badge
                  className="text-white border-0 px-2.5 py-0.5 text-xs"
                  style={{ backgroundColor: product.color || '#0F766E' }}
                >
                  {product.badge}
                </Badge>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  {product.cureType}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  {product.fullName}
                </h1>
                {product.tagline && (
                  <p className="text-sm text-slate-500">{product.tagline}</p>
                )}
              </div>

              {/* Best For */}
              {product.bestFor && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">Best For:</span>
                  <span className="text-slate-900 font-medium">{product.bestFor}</span>
                </div>
              )}

              {/* Warranty Badge */}
              {product.warrantyBadge && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">{product.warrantyBadge}</span>
                </div>
              )}

              {/* Quick Specs */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-700 font-medium">
                  {product.packaging?.size || '10.1 fl oz'}
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-700 font-medium">
                  {product.packaging?.type || 'Cartridge'}
                </span>
              </div>

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 uppercase">Colors:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          colorMap[color] || 'bg-slate-200 border-slate-300'
                        } ${selectedColor === color ? 'ring-2 ring-slate-900 ring-offset-2 ring-offset-white' : ''}`}
                        title={color}
                      />
                    ))}
                  </div>
                  {selectedColor && <span className="text-xs text-slate-600">{selectedColor}</span>}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-5 py-2.5 text-sm font-semibold">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-5 py-2.5 text-sm font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Strip */}
      {product.featureIcons && (
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">Key Features</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {product.featureIcons.map((feature, i) => (
                <FeatureIcon key={i} icon={feature.icon} label={feature.label} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Product Description</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Recommended Use */}
            {product.recommendedUse && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended Use</h2>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{product.recommendedUse}</p>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Table */}
            {product.skus && product.skus.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Specifications</h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">SKU</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Unit Size</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Color</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Dimension (in)</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Weight</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Case Pack</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Cases/Pallet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.skus.map((sku, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 font-medium text-slate-900">{sku.sku}</td>
                          <td className="py-3 px-4 text-slate-600">{sku.size}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full border ${colorMap[sku.color] || 'bg-slate-200'}`} />
                              <span className="text-slate-600">{sku.color}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{sku.dimension}</td>
                          <td className="py-3 px-4 text-slate-600">{sku.weight}</td>
                          <td className="py-3 px-4 text-slate-600">{sku.casePack}</td>
                          <td className="py-3 px-4 text-slate-600">{sku.casesPerPallet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Downloads */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Resources</h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-lg border-slate-300 hover:bg-slate-50">
                  <Download className="w-4 h-4 mr-2" />
                  Technical Data Sheet
                </Button>
                <Button variant="outline" className="rounded-lg border-slate-300 hover:bg-slate-50">
                  <Download className="w-4 h-4 mr-2" />
                  Safety Data Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={createPageUrl(`ProductDetail?id=${related.id}`)}
                    className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all border border-slate-200"
                  >
                    <div className="aspect-square bg-slate-50 p-4 flex items-center justify-center">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <Badge
                        className="text-white border-0 mb-2 text-[10px]"
                        style={{ backgroundColor: related.color || '#0F766E' }}
                      >
                        {related.badge}
                      </Badge>
                      <h3 className="text-base font-bold text-slate-900">{related.model}</h3>
                      <p className="text-sm text-slate-500">{related.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
