import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import emailjs from '@emailjs/browser';

export default function StickyQuoteWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    phone: '',
    product_interest: '',
    urgency: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...formData, to_email: 'gaudonusallc@gmail.com' },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setFormData({
          company_name: '',
          email: '',
          phone: '',
          product_interest: '',
          urgency: '',
          message: ''
        });
      }, 3000);
    } catch {
      alert('Error submitting quote request. Please email gaudonusallc@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#000000] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#111111] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-24 right-24 w-[400px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-40 overflow-hidden border border-slate-200"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            <div className="bg-[#000000] p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quick Quote</h3>
                  <p className="text-sm text-slate-400">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-5 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#000000] mb-2">Request Sent!</h4>
                  <p className="text-slate-500 text-sm">
                    We'll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="company_name" className="text-slate-700 text-sm">Company Name *</Label>
                    <Input
                      id="company_name"
                      required
                      value={formData.company_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                      className="mt-1 h-10 rounded-lg border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="email" className="text-slate-700 text-sm">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1 h-10 rounded-lg border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 text-sm">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1 h-10 rounded-lg border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="product_interest" className="text-slate-700 text-sm">Product Interest</Label>
                    <Input
                      id="product_interest"
                      placeholder="e.g., GAUDON 9700"
                      value={formData.product_interest}
                      onChange={(e) => setFormData(prev => ({ ...prev, product_interest: e.target.value }))}
                      className="mt-1 h-10 rounded-lg border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                    />
                  </div>

                  <div>
                    <Label className="text-slate-700 text-sm">Project Urgency *</Label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                      <SelectTrigger className="mt-1 h-10 rounded-lg border-slate-200">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (24-48hrs)</SelectItem>
                        <SelectItem value="normal">Normal (1 week)</SelectItem>
                        <SelectItem value="planning">Planning Phase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 text-sm">Requirements *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={3}
                      placeholder="Describe your project needs..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-1 resize-none rounded-lg border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#000000] hover:bg-[#111111] text-white h-11 rounded-full font-medium transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Get Quote
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
