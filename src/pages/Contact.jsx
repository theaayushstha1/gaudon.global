import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  HelpCircle,
  Building2,
  MessageSquare,
  MapPin,
  Package,
  Zap,
  Users
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const inquiryTypes = [
  { id: 'quote', label: 'Get a Quote', icon: FileText, desc: 'Product pricing & bulk orders' },
  { id: 'oem', label: 'OEM/Private Label', icon: Building2, desc: 'Custom manufacturing' },
  { id: 'technical', label: 'Technical Support', icon: HelpCircle, desc: 'Product questions' },
  { id: 'general', label: 'General Inquiry', icon: MessageSquare, desc: 'Other questions' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    country: '',
    inquiry_type: '',
    product_interest: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

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
        { ...formData, inquiry_type: selectedType?.label || 'General', to_email: 'gaudonusallc@gmail.com' },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      alert('Error submitting form. Please email gaudonusallc@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean dark */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}
      >
        <div className="absolute inset-0 pattern-grid" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm mb-6">
              <Clock className="w-4 h-4" />
              Response within 24 hours
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 text-display-lg">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-red-400 to-pink-400">Great Together</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Whether you need bulk orders, custom formulations, or technical support,
              our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Bar - Clean */}
      <section className="py-4 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Mail, label: 'Email Us', value: 'gaudonusallc@gmail.com', href: 'mailto:gaudonusallc@gmail.com' },
              { icon: Phone, label: 'Call / WhatsApp', value: '+1 626-778-9568', href: 'tel:+16267789568' },
              { icon: Clock, label: 'Business Hours', value: 'Mon-Fri 8:30AM - 5:30PM CST', href: null },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-[#000000]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-[#000000] hover:text-gray-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#000000]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Left Side - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-[#000000] mb-2">Send Us a Message</h2>
                  <p className="text-slate-500">Fill out the form below and we'll be in touch shortly.</p>
                </div>

                {/* Inquiry Type Selection */}
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">What can we help you with?</p>
                  <div className="space-y-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type)}
                        className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                          selectedType?.id === type.id
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            selectedType?.id === type.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`font-medium text-sm ${selectedType?.id === type.id ? 'text-emerald-700' : 'text-slate-700'}`}>
                              {type.label}
                            </p>
                            <p className="text-xs text-slate-500">{type.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="p-5 rounded-xl bg-[#000000] text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Professional Grade Quality</p>
                      <p className="text-sm text-slate-400">30-year warranty you can trust</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                      <p className="text-xl font-semibold">25+</p>
                      <p className="text-xs text-slate-400">Years Experience</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                      <p className="text-xl font-semibold">100+</p>
                      <p className="text-xs text-slate-400">Countries Served</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#000000]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#000000] mb-1">Headquarters</p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Foshan City, Guangdong Province, China<br />
                        ZIP: 528322
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                {submitted ? (
                  <div className="text-center py-16 px-8 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#000000] mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-md mx-auto mb-6">
                      Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company_name" className="text-slate-700">Company Name *</Label>
                        <Input
                          id="company_name"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          required
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact_person" className="text-slate-700">Contact Person *</Label>
                        <Input
                          id="contact_person"
                          name="contact_person"
                          value={formData.contact_person}
                          onChange={handleChange}
                          required
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-slate-700">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="email@company.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-700">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country" className="text-slate-700">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="Your country"
                        />
                      </div>
                      <div>
                        <Label htmlFor="quantity" className="text-slate-700">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                          placeholder="e.g., 500 cartons/month"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="product_interest" className="text-slate-700">Product Interest</Label>
                      <Input
                        id="product_interest"
                        name="product_interest"
                        value={formData.product_interest}
                        onChange={handleChange}
                        className="mt-1.5 h-11 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000]"
                        placeholder="e.g., GAUDON 9009, Structural Sealant"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-700">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1.5 rounded-xl border-slate-200 focus:border-[#000000] focus:ring-[#000000] resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-slate-500 text-xs">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
