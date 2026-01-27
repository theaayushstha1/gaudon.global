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
  Grip,
  Maximize2,
  Award,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { products, getProductById } from '@/data/products';

// Icon mapping for features
const featureIconMap = {
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
  'easy-apply': Sparkles,
  'expansion': Maximize2,
  'adhesion': Grip,
  'insulation': Thermometer,
  'pro-grade': Award
};

// Just the icon component
const FeatureIconOnly = ({ icon }) => {
  const IconComponent = featureIconMap[icon] || CircleCheck;
  return <IconComponent className="w-5 h-5" />;
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
      {/* Hero Section with Product Image and Info */}
      <section className="bg-white pt-24 pb-12 relative overflow-hidden">
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

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 flex justify-center lg:sticky lg:top-32 lg:self-start"
            >
              <div
                className="relative rounded-2xl p-6 lg:p-8 w-full max-w-sm bg-white border"
                style={{
                  borderColor: `${product.color}30`,
                  boxShadow: `0 0 40px ${product.color}15, 0 4px 20px rgba(0,0,0,0.05)`
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl"
                    style={{ background: product.color || '#0F766E', opacity: 0.15 }}
                  />
                  <img
                    src={product.image || product.images?.[0]}
                    alt={product.name}
                    className="relative z-10 w-full h-auto object-contain max-h-80"
                    style={{ filter: `drop-shadow(0 0 15px ${product.color}25)` }}
                  />
                </div>

                {/* Quick specs under image */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1.5 bg-slate-50 rounded-full text-xs text-slate-600 font-medium">
                    {product.packaging?.size || '10.1 fl oz'}
                  </span>
                  <span className="px-3 py-1.5 bg-slate-50 rounded-full text-xs text-slate-600 font-medium">
                    {product.packaging?.type || 'Cartridge'}
                  </span>
                </div>

                {/* Color Options */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="text-xs text-slate-400">Colors:</span>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            colorMap[color] || 'bg-slate-200 border-slate-300'
                          } ${selectedColor === color ? 'ring-2 ring-slate-900 ring-offset-2 ring-offset-white' : ''}`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Product Info & Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    className="text-white border-0 px-2.5 py-0.5 text-xs"
                    style={{ backgroundColor: product.color || '#0F766E' }}
                  >
                    {product.badge}
                  </Badge>
                  <span className="text-xs text-slate-400 uppercase tracking-wide">
                    {product.cureType}
                  </span>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  {product.fullName}
                </h1>

                {product.bestFor && (
                  <p className="text-sm text-slate-500">
                    <span className="font-medium text-slate-700">Best For:</span> {product.bestFor}
                  </p>
                )}
              </div>

              {/* Warranty Badge */}
              {product.warrantyBadge && (
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-2 text-sm mb-6">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">{product.warrantyBadge}</span>
                </div>
              )}

              {/* Product Description */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  Product Description
                </h2>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {product.description}
                </p>
              </div>

              {/* Recommended Use */}
              {product.recommendedUse && (
                <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                    Recommended Use
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {product.recommendedUse}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-6 py-2.5 text-sm font-semibold">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg px-6 py-2.5 text-sm font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Key Features with Icons */}
              {product.featureIcons && product.featureIcons.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                    Key Features
                  </h2>
                  <div className="flex flex-wrap gap-6">
                    {product.featureIcons.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-emerald-600">
                          <FeatureIconOnly icon={feature.icon} />
                        </span>
                        <span className="text-sm text-slate-600">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Applications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {product.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg text-sm text-slate-700 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Table */}
            {product.skus && product.skus.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Specifications</h2>
                <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
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
                        <tr key={i} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50">
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
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Resources</h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="bg-white rounded-lg border-slate-300 hover:bg-slate-100">
                  <Download className="w-4 h-4 mr-2" />
                  Technical Data Sheet
                </Button>
                <Button variant="outline" className="bg-white rounded-lg border-slate-300 hover:bg-slate-100">
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
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={createPageUrl(`ProductDetail?id=${related.id}`)}
                    className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all border border-slate-200 hover:border-slate-300"
                  >
                    <div className="aspect-[4/3] bg-white p-6 flex items-center justify-center">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-slate-50">
                      <Badge
                        className="text-white border-0 mb-2 text-[10px]"
                        style={{ backgroundColor: related.color || '#0F766E' }}
                      >
                        {related.badge}
                      </Badge>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-600 transition-colors">{related.model}</h3>
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
