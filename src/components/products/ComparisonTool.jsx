import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GitCompare, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ComparisonTool({ products, selectedIds, onToggle, onClear }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const selectedProducts = products.filter(p => selectedIds.includes(p.id));
  const canCompare = selectedProducts.length >= 2;

  if (selectedIds.length === 0) return null;

  return (
    <>
      {/* Floating Comparison Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-black p-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-black to-neutral-700 flex items-center justify-center">
              <GitCompare className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-neutral-900">
                {selectedIds.length} Product{selectedIds.length > 1 ? 's' : ''} Selected
              </p>
              <p className="text-sm text-neutral-600">
                {canCompare ? 'Ready to compare' : 'Select at least 2 products'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsExpanded(true)}
              disabled={!canCompare}
              className="bg-gradient-to-r from-black to-neutral-700 hover:from-gray-700 hover:to-gray-900 text-white rounded-xl"
            >
              Compare Now
            </Button>
            <Button
              onClick={onClear}
              variant="outline"
              className="rounded-xl"
            >
              Clear All
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full my-8 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-black to-neutral-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <GitCompare className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Product Comparison</h3>
                      <p className="text-gray-300">Compare {selectedProducts.length} products side-by-side</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="text-left p-4 font-bold text-neutral-900 w-48">Specification</th>
                      {selectedProducts.map(product => (
                        <th key={product.id} className="p-4 text-center min-w-[200px]">
                          <div className="space-y-3">
                            <div className="aspect-square w-full bg-slate-100 rounded-xl overflow-hidden mb-2">
                              {product.images?.[0] ? (
                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-300">
                                  <GitCompare className="w-12 h-12" />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-lg text-neutral-900">GAUDON {product.model}</p>
                              <p className="text-sm text-neutral-600">{product.name}</p>
                              {product.badge && (
                                <Badge className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                                  {product.badge}
                                </Badge>
                              )}
                            </div>
                            <Button
                              onClick={() => onToggle(product.id)}
                              variant="outline"
                              size="sm"
                              className="w-full"
                            >
                              <Minus className="w-4 h-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Category', key: 'category', format: (v) => v?.replace(/_/g, ' ') },
                      { label: 'Type', key: 'type', format: (v) => v },
                      { label: 'Capacity', key: 'capacity', format: (v) => v },
                      { label: 'Temperature Range', key: 'temperature_range', format: (v) => v },
                      { label: 'Cure Time', key: 'cure_time', format: (v) => v },
                      { label: 'Shelf Life', key: 'shelf_life', format: (v) => v },
                      { label: 'Warranty', key: 'warranty_years', format: (v) => v ? `${v} Years` : '-' },
                      { label: 'Color Options', key: 'color_options', format: (v) => v?.join(', ') || '-' }
                    ].map((spec, idx) => (
                      <tr key={idx} className="border-b border-neutral-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-semibold text-neutral-700">{spec.label}</td>
                        {selectedProducts.map(product => (
                          <td key={product.id} className="p-4 text-center text-neutral-600">
                            {spec.format(product[spec.key]) || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-b border-neutral-100">
                      <td className="p-4 font-semibold text-neutral-700">Key Features</td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4">
                          {product.features?.length > 0 ? (
                            <ul className="space-y-2 text-sm text-left">
                              {product.features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-neutral-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-neutral-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 p-6 flex justify-between items-center">
                <p className="text-neutral-600">
                  Need help choosing? <a href="mailto:info@gaudon.com" className="text-black hover:underline font-semibold">Contact our technical team</a>
                </p>
                <Button
                  onClick={() => setIsExpanded(false)}
                  className="bg-gradient-to-r from-black to-neutral-700 hover:from-gray-700 hover:to-gray-900 text-white rounded-xl"
                >
                  Done Comparing
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}