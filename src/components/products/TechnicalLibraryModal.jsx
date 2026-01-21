import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

export default function TechnicalLibraryModal({ isOpen, onClose, product }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - Replace these with your actual EmailJS credentials
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      email: email,
      company_name: company,
      product_interest: product?.name,
      message: `TDS Download Request for ${product?.model}`,
      to_email: 'info@gaudon.com'
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      // Note: TDS files would need to be hosted separately
      // For now, we'll just show success message
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setEmail('');
        setCompany('');
      }, 3000);
    } catch (error) {
      alert('Error submitting request. Please contact info@gaudon.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-black to-neutral-700 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Technical Data Sheet</h3>
                <p className="text-gray-300">GAUDON {product?.model}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">Download Starting...</h4>
                <p className="text-neutral-600 mb-4">
                  Your TDS is being prepared. Check your email for technical support resources!
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">Access Technical Resources</h4>
                  <p className="text-neutral-600">
                    Download detailed specifications, application guides, and safety data for GAUDON {product?.model}
                  </p>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-neutral-900 mb-1">High-Value Lead Capture</p>
                      <p className="text-neutral-600">
                        We'll send you additional technical resources, application tips, and product updates.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      placeholder="Your company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-1.5 h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-black to-neutral-700 hover:from-gray-700 hover:to-gray-900 text-white py-6 rounded-xl font-semibold text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download TDS
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    By downloading, you agree to receive technical updates from GAUDON Silicone
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}