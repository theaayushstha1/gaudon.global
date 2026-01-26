import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Eye,
  X,
  Sun,
  Droplets,
  Wind,
  ThermometerSun,
  Sparkles,
  Clock
} from 'lucide-react';

// Certificate images
const certificateImages = [
  {
    src: "/images/certificates/iso-certificate.png",
    title: "ISO 9001:2015 Certificate",
    description: "Quality Management System Certification"
  },
  {
    src: "/images/certificates/certificate-collage.png",
    title: "Industry Certifications",
    description: "National Production Licenses, Product Certifications, Association Memberships"
  }
];

// Why Choose GAUDON items - Clean icons + titles only
const whyChooseItems = [
  { title: "UV Resistant", icon: Sun },
  { title: "Waterproof", icon: Droplets },
  { title: "Weather Tough", icon: Wind },
  { title: "Heat Stable", icon: ThermometerSun },
  { title: "Premium Formula", icon: Sparkles },
  { title: "Long Lasting", icon: Shield },
  { title: "Easy Application", icon: Clock },
];

export default function Achievements() {
  const [viewingImage, setViewingImage] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Image Viewer Modal */}
      {viewingImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setViewingImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={viewingImage.src}
              alt={viewingImage.title}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 font-medium">{viewingImage.title}</p>
          </div>
        </div>
      )}

      {/* Hero Section - Clean & Simple */}
      <section className="relative pt-36 md:pt-40 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/about-bg.jpg"
            alt="Modern glass architecture"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">About</span>{' '}
              <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">GAUDON</span>
            </h1>

            <p className="text-lg text-white/90 mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] leading-relaxed max-w-xl">
              Professional silicone sealant manufacturer with 25+ years of experience.
              Trusted by construction professionals in over 100 countries worldwide.
            </p>
            <p className="text-base text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] leading-relaxed max-w-xl">
              From kitchen & bath sealants to heavy-duty construction adhesives, we deliver
              ISO 9001 certified quality you can count on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Display - MOVED UP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-slate-600">
              Click on any certificate to view in full size
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificateImages.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setViewingImage(cert)}
              >
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-slate-300">
                  <div className="relative overflow-hidden bg-slate-50">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Full Size
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">{cert.title}</h3>
                    <p className="text-slate-500">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About GAUDON Section - MOVED BELOW CERTIFICATES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">GAUDON</strong> is a professional manufacturer of high-performance silicone sealants, backed by over 25 years of manufacturing experience. Our production base is located in Guangdong, China, within one of the world's most advanced industrial regions for construction materials.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We operate modern, large-scale facilities equipped with automated production lines and precision testing systems. Our products are developed and manufactured under the <strong className="text-slate-800">ISO 9001:2015</strong> quality management system, with strict controls applied to raw materials, production processes, and finished products to ensure consistent performance and reliability.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Since 1999, GAUDON has focused on delivering durable, safe, and environmentally responsible sealant solutions for real-world construction needs. Our team brings together experienced professionals across R&D, manufacturing, and quality control, continuously improving formulations to meet the demands of modern building applications.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Today, GAUDON products are trusted across domestic and international markets for their quality, value, and dependable performance. As we expand into the U.S. market, GAUDON is committed to long-term partnerships built on <strong className="text-slate-800">integrity, consistency, and results</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose GAUDON Section - Clean icons + titles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              Why Choose GAUDON?
            </h2>
            <p className="text-slate-500">
              Professional-grade sealants built for performance
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <item.icon className="w-6 h-6 text-slate-600 mb-2" />
                <span className="text-sm font-medium text-slate-700">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Partner Info - LAST with warm amber background */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-700 text-sm uppercase tracking-wider mb-2 font-medium">Manufacturing Partner</p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Foshan Qiaohong New Material Co., Ltd.</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Located in Guangdong Province, China — one of the world's leading industrial regions for construction materials and chemical manufacturing.
          </p>
        </div>
      </section>
    </div>
  );
}
