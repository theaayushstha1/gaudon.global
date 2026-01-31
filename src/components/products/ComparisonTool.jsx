import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, Plus, Minus, CheckCircle2 } from 'lucide-react';
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
              <Scale className="w-6 h-6 text-white" />
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 overflow-y-auto"
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
              <div className="bg-white border-b border-slate-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center">
                      <Scale className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Product Comparison</h3>
                      <p className="text-slate-500">Compare {selectedProducts.length} products side-by-side</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-600" />
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
                        <th key={product.id} className="p-4 text-center min-w-[250px]">
                          <div className="space-y-3">
                            <div className="h-48 bg-gradient-to-b from-slate-50 to-white rounded-xl overflow-hidden mb-2 p-4 flex items-center justify-center">
                              {product.image ? (
                                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-auto object-contain" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-300">
                                  <Scale className="w-12 h-12" />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-lg text-neutral-900">{product.bestFor || product.name.split(' ').slice(0, 2).join(' ')}</p>
                              <p className="text-sm text-neutral-600">{product.cureType ? `${product.cureType} Sealant` : product.name}</p>
                              <p className="text-xs text-neutral-400 font-medium mt-0.5">GAUDON {product.model}</p>
                              {product.badge && (
                                <Badge className="mt-2 text-white border-0" style={{ backgroundColor: product.color || '#f59e0b' }}>
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
                      { label: 'Best For', key: 'bestFor', format: (v) => v || '-' },
                      { label: 'Cure Type', key: 'cureType', format: (v) => v || '-' },
                      { label: 'Product Type', key: 'type', format: (v) => v ? v.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '-' },
                      { label: 'Size', key: 'packaging', format: (v) => v?.size || '-' },
                      { label: 'Warranty', key: 'warranty', format: (v) => v ? `${v} Years` : '-' },
                      { label: 'Colors Available', key: 'colors', format: (v) => v?.length > 0 ? v.join(', ') : '-' },
                    ].map((spec, idx) => (
                      <tr key={idx} className={`border-b border-neutral-100 ${idx % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                        <td className="p-4 font-semibold text-neutral-700">{spec.label}</td>
                        {selectedProducts.map(product => (
                          <td key={product.id} className="p-4 text-center text-neutral-600">
                            {spec.format(product[spec.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-b border-neutral-100">
                      <td className="p-4 font-semibold text-neutral-700">Key Features</td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          {product.featureIcons?.length > 0 ? (
                            <div className="flex flex-col items-center gap-2">
                              {product.featureIcons.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                  <span className="text-neutral-600 text-sm">{feature.label}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-neutral-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-4 font-semibold text-neutral-700">Applications</td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4">
                          {product.applications?.length > 0 ? (
                            <p className="text-sm text-neutral-600 text-center">
                              {product.applications.slice(0, 4).join(', ')}
                            </p>
                          ) : (
                            <span className="text-neutral-400 text-center block">-</span>
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
                  Need help choosing? <a href="mailto:gaudonusallc@gmail.com" className="text-black hover:underline font-semibold">Contact our technical team</a>
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