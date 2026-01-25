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
  ChevronDown,
  Home,
  Droplet,
  Shield,
  Thermometer,
  Clock,
  FileText,
  ShoppingBag,
  Sparkles,
  Sun,
  Zap,
  Waves,
  CircleCheck
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
    'high-temp': Thermometer,
    'aquarium-safe': Droplet,
    'clear-finish': Sparkles,
    'paintable': Sparkles,
    'fast-dry': Clock,
    'water-resistant': Droplet,
    'heavy-duty': Shield,
    'durable': Shield,
    'interior': Home,
    'interior-exterior': Sun
  };

  const IconComponent = iconMap[icon] || CircleCheck;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-2">
        <IconComponent className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">{label}</span>
    </div>
  );
};

const colorMap = {
  'Clear': 'bg-gradient-to-br from-white to-slate-100 border-slate-300',
  'White': 'bg-white border-slate-300',
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
  const [openFaq, setOpenFaq] = useState(null);

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
      {/* Dark Hero Section */}
      <section className="bg-slate-950 pt-24 pb-16 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        {/* Gradient glow effect */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: product.color || '#0F766E' }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8">
            <Link to={createPageUrl('Home')} className="text-slate-500 hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" />
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to={createPageUrl('Products')} className="text-slate-500 hover:text-white">
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-white font-medium">{product.model}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div
                className="relative rounded-3xl p-10 max-w-md w-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${product.color}15 0%, ${product.color}05 50%, transparent 100%)`,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 opacity-20 blur-2xl"
                  style={{ background: `radial-gradient(circle at center, ${product.color || '#0F766E'}, transparent 70%)` }}
                />
                <img
                  src={product.image || product.images?.[0]}
                  alt={product.name}
                  className="relative z-10 w-full h-auto object-contain max-h-96 drop-shadow-2xl"
                />
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
                  {product.category?.replace(/_/g, ' ')}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {product.fullName}
                </h1>
                {product.tagline && (
                  <p className="text-sm text-slate-400">{product.tagline}</p>
                )}
              </div>

              {/* Best For */}
              {product.bestFor && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 uppercase tracking-wide">Best For:</span>
                  <span className="text-white font-medium">{product.bestFor}</span>
                </div>
              )}

              {/* Guarantee Badge */}
              {product.guarantee && (
                <div className="bg-teal-600/20 border border-teal-500/30 text-teal-400 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">{product.guarantee}</span>
                </div>
              )}

              {/* Quick Specs */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300">
                  {product.cureType}
                </span>
                <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300">
                  {product.packaging?.size || '10.1 FL OZ'}
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
                        } ${selectedColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''}`}
                        title={color}
                      />
                    ))}
                  </div>
                  {selectedColor && <span className="text-xs text-slate-400">{selectedColor}</span>}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Where to Buy
                </Button>
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-white hover:bg-slate-100 text-slate-900 rounded-lg px-5 py-2.5 text-sm font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-lg px-4 py-2.5 text-sm">
                    Request Sample
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Icons Strip */}
      {product.featureIcons && (
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
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
              <h2 className="text-lg font-bold text-slate-900 mb-3">Product Description</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features & Benefits */}
            {product.featuresWithBenefits && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Features & Benefits</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.featuresWithBenefits.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900">{feature.title}</span>
                        <p className="text-sm text-slate-500 mt-0.5">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Grid */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Specifications</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {/* Technical Data */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Cure Times</h3>
                  <div className="space-y-2 text-sm">
                    {product.skinTime && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Skin Time</span>
                        <span className="font-medium text-slate-900">{product.skinTime}</span>
                      </div>
                    )}
                    {product.tackFreeTime && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tack-Free</span>
                        <span className="font-medium text-slate-900">{product.tackFreeTime}</span>
                      </div>
                    )}
                    {product.fullCure && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Full Cure</span>
                        <span className="font-medium text-slate-900">{product.fullCure}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Applications */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Applications</h3>
                  <ul className="space-y-1.5 text-sm">
                    {product.applications?.slice(0, 4).map((app, i) => (
                      <li key={i} className="text-slate-600 flex items-start gap-1.5">
                        <span className="text-teal-500 mt-1.5">•</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Substrates */}
                {product.substrates && (
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Substrates</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {product.substrates.slice(0, 6).map((substrate, i) => (
                        <span key={i} className="px-2 py-1 bg-white rounded text-xs text-slate-600 border border-slate-200">
                          {substrate}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Limitations */}
                {product.limitations && (
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Limitations</h3>
                    <ul className="space-y-1.5 text-sm">
                      {product.limitations.slice(0, 3).map((limitation, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-1.5">
                          <span className="text-amber-500 mt-1.5">•</span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* SKU Table */}
            {product.skus && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Available SKUs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-3 font-semibold text-slate-600">SKU</th>
                        <th className="text-left py-3 px-3 font-semibold text-slate-600">Size</th>
                        <th className="text-left py-3 px-3 font-semibold text-slate-600">Color</th>
                        <th className="text-left py-3 px-3 font-semibold text-slate-600">Case Pack</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.skus.map((sku, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-3 font-mono text-xs">{sku.sku}</td>
                          <td className="py-3 px-3 text-slate-600">{sku.size}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full border ${colorMap[sku.color] || 'bg-slate-200'}`} />
                              <span className="text-slate-600">{sku.color}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-slate-600">{sku.casePack}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQ */}
            {product.faq && product.faq.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 mb-4">FAQ</h2>
                <div className="space-y-2">
                  {product.faq.map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50"
                      >
                        <span className="font-medium text-slate-900 text-sm">{item.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 text-sm text-slate-600">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Downloads */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Resources</h2>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Technical Data Sheet
                </Button>
                <Button variant="outline" className="rounded-lg">
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
              <h2 className="text-lg font-bold text-slate-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-3 gap-4">
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
                    <div className="p-3">
                      <Badge
                        className="text-white border-0 mb-1.5 text-[9px]"
                        style={{ backgroundColor: related.color || '#0F766E' }}
                      >
                        {related.badge}
                      </Badge>
                      <h3 className="text-sm font-bold text-slate-900">{related.model}</h3>
                      <p className="text-xs text-slate-500">{related.name}</p>
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
