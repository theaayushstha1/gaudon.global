import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CheckCircle2,
  Download,
  MessageCircle,
  Package,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { products, getProductById } from '@/data/products';

const colorMap = {
  'Clear': '#FFFFFF',
  'White': '#F5F5F5',
  'Black': '#1A1A1A',
  'Gray': '#9CA3AF',
  'Grey': '#9CA3AF',
  'Brown': '#8B4513',
  'Almond': '#E8D4B8',
  'Bronze': '#CD7F32'
};

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('300ml');

  const product = getProductById(productId);
  const relatedProducts = products.filter(p =>
    p.category === product?.category && p.id !== productId
  ).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Package className="w-16 h-16 text-neutral-300 mb-4" />
        <h2 className="text-2xl font-bold text-neutral-700 mb-2">Product Not Found</h2>
        <Link to={createPageUrl('Products')}>
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const productImages = product.images || [product.image_url].filter(Boolean);
  const rating = 4.9;
  const reviewCount = 64;

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link to={createPageUrl('Home')} className="text-neutral-500 hover:text-black">
            Home
          </Link>
          <span className="text-neutral-300">/</span>
          <Link to={createPageUrl('Products')} className="text-neutral-500 hover:text-black">
            Products
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900 font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 mb-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden mb-4 aspect-square relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={productImages[selectedImageIndex] || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/placeholder.jpg'}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </AnimatePresence>
              
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + productImages.length) % productImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % productImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square bg-slate-50 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-black' : 'border-transparent hover:border-neutral-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Title & Rating */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-black border-gray-800">
                  {product.category?.replace(/_/g, ' ')}
                </Badge>
                {product.badge && (
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-600 mb-4">GAUDON Model {product.model}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <span className="text-lg font-semibold text-neutral-900">{rating}</span>
                <span className="text-neutral-500">({reviewCount})</span>
                <button className="text-black hover:underline font-medium">Write a review</button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="details" className="mb-8">
              <TabsList className="bg-slate-100 p-1 rounded-lg mb-6">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                {/* Package Size Selector */}
                <div>
                  <label className="font-semibold text-neutral-900 mb-3 block">Package Size</label>
                  <div className="flex gap-3">
                    {['300ml Cartridge', '590ml Sausage'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-xl border-2 transition-all ${
                          selectedSize === size
                            ? 'border-black bg-gray-100 text-black font-semibold'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                {product.color_options && product.color_options.length > 0 && (
                  <div>
                    <label className="font-semibold text-neutral-900 mb-3 block">Available Colors</label>
                    <div className="flex flex-wrap gap-3">
                      {product.color_options.map((color) => (
                        <div key={color} className="flex flex-col items-center gap-2">
                          <div
                            className="w-12 h-12 rounded-full border-2 border-neutral-300 shadow-sm cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: colorMap[color] || '#E5E7EB' }}
                            title={color}
                          />
                          <span className="text-xs text-neutral-600">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {product.description && (
                  <div>
                    <p className="text-neutral-700 leading-relaxed">{product.description}</p>
                  </div>
                )}

                {/* Key Benefits - Two Columns */}
                {product.features && product.features.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-bold text-neutral-900 mb-4 text-lg">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="features">
                <div className="space-y-4">
                  {product.applications && product.applications.length > 0 && (
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-3">Applications</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.applications.map((app, i) => (
                          <div key={i} className="flex items-center gap-2 text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-black" />
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specs">
                <div className="space-y-4">
                  {product.capacity && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Net Capacity</span>
                      <p className="font-semibold text-neutral-900">{product.capacity}</p>
                    </div>
                  )}
                  {product.type && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Package Type</span>
                      <p className="font-semibold text-neutral-900">{product.type}</p>
                    </div>
                  )}
                  {product.temperature_range && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Temperature Range</span>
                      <p className="font-semibold text-neutral-900">{product.temperature_range}</p>
                    </div>
                  )}
                  {product.cure_time && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Cure Time</span>
                      <p className="font-semibold text-neutral-900">{product.cure_time}</p>
                    </div>
                  )}
                  {product.shelf_life && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Shelf Life</span>
                      <p className="font-semibold text-neutral-900">{product.shelf_life}</p>
                    </div>
                  )}
                  {product.warranty_years && (
                    <div className="border-b border-neutral-200 pb-3">
                      <span className="text-neutral-500 text-sm">Warranty</span>
                      <p className="font-semibold text-neutral-900">{product.warranty_years} Years</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="downloads">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-left" size="lg">
                    <Download className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Technical Data Sheet (TDS)</div>
                      <div className="text-sm text-neutral-500">Detailed specifications and properties</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" size="lg">
                    <Download className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Safety Data Sheet (SDS)</div>
                      <div className="text-sm text-neutral-500">Safety information and handling</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" size="lg">
                    <Download className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Installation Guide</div>
                      <div className="text-sm text-neutral-500">Step-by-step application instructions</div>
                    </div>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to={createPageUrl('Contact')} className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-black to-neutral-700 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')} className="flex-1">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full rounded-xl py-6 border-neutral-300 hover:bg-slate-50"
                >
                  <Package className="w-5 h-5 mr-2" />
                  Order Sample
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Comparison */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-neutral-200 pt-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">Compare Similar Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-neutral-700 border-b border-neutral-200">Product</th>
                    <th className="text-center p-4 font-semibold text-neutral-700 border-b border-neutral-200 bg-gray-50">
                      {product.name}
                      <Badge className="ml-2 bg-neutral-800">Current</Badge>
                    </th>
                    {relatedProducts.map(p => (
                      <th key={p.id} className="text-center p-4 font-semibold text-neutral-700 border-b border-neutral-200">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-neutral-600">Cure Time</td>
                    <td className="p-4 text-center bg-gray-50/50">{product.cure_time || '-'}</td>
                    {relatedProducts.map(p => (
                      <td key={p.id} className="p-4 text-center">{p.cure_time || '-'}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-neutral-600">Temperature Range</td>
                    <td className="p-4 text-center bg-gray-50/50">{product.temperature_range || '-'}</td>
                    {relatedProducts.map(p => (
                      <td key={p.id} className="p-4 text-center">{p.temperature_range || '-'}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-neutral-600">Warranty</td>
                    <td className="p-4 text-center bg-gray-50/50">{product.warranty_years ? `${product.warranty_years} years` : '-'}</td>
                    {relatedProducts.map(p => (
                      <td key={p.id} className="p-4 text-center">{p.warranty_years ? `${p.warranty_years} years` : '-'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-neutral-600">Available Colors</td>
                    <td className="p-4 text-center bg-gray-50/50">{product.color_options?.length || 0}</td>
                    {relatedProducts.map(p => (
                      <td key={p.id} className="p-4 text-center">{p.color_options?.length || 0}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    <td className="p-4 text-center bg-gray-50/50">
                      <Button disabled className="bg-slate-300 text-neutral-600">Current Product</Button>
                    </td>
                    {relatedProducts.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        <Link to={createPageUrl('ProductDetail') + `?id=${p.id}`}>
                          <Button variant="outline" className="border-black text-black hover:bg-gray-50">View Details</Button>
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}