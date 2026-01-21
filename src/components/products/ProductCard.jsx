import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const badgeColors = {
  bestseller: "bg-black",
  new: "bg-black",
  premium: "bg-black",
  popular: "bg-black"
};

const categoryColors = {
  acidic_glass_sealant: "from-neutral-600 to-neutral-700",
  neutral_silicone_sealant: "from-neutral-500 to-neutral-600",
  structural_sealant: "from-neutral-700 to-neutral-800",
  weatherproof_sealant: "from-neutral-600 to-neutral-700",
  special_industrial: "from-neutral-800 to-black",
  construction_adhesive: "from-neutral-500 to-neutral-600"
};

export default function ProductCard({ product, index, isSelected, onToggleCompare, canAddMore }) {
  const colorGradient = categoryColors[product.category] || "from-neutral-500 to-neutral-600";

  return (
    <Link to={createPageUrl(`ProductDetail?id=${product.id}`)} className="group block">
      <div className={`bg-white rounded-xl overflow-hidden border-2 transition-all duration-200 h-full flex flex-col ${
        isSelected
          ? 'border-black shadow-lg shadow-black/10'
          : 'border-neutral-100 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/50'
      }`}>
        {/* Image */}
        <div className="relative aspect-square bg-neutral-50 overflow-hidden">
          {product.badge && (
            <Badge className={`absolute top-3 left-3 z-10 ${badgeColors[product.badge]} text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg`}>
              {product.badge}
            </Badge>
          )}

          {onToggleCompare && (
            <button
              onClick={(e) => {
                e.preventDefault();
                if (isSelected || canAddMore) {
                  onToggleCompare();
                }
              }}
              disabled={!isSelected && !canAddMore}
              className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-lg flex items-center justify-center transition-all shadow-md ${
                isSelected
                  ? 'bg-black text-white shadow-black/30'
                  : canAddMore
                    ? 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black'
                    : 'bg-neutral-100 text-neutral-300 cursor-not-allowed'
              }`}
            >
              {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>
          )}

          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-neutral-300 text-sm">No image</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorGradient}`} />
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                {product.category?.replace(/_/g, ' ')}
              </p>
            </div>
            <h3 className="text-xl font-bold text-black mb-1 group-hover:text-neutral-600 transition-colors">
              GAUDON {product.model}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2">
              {product.name}
            </p>
          </div>



          {/* CTA */}
          <div className="mt-auto pt-3 border-t border-neutral-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-black group-hover:text-neutral-600">
                View Details
              </span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
