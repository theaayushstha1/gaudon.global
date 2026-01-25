import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Building2, FileCheck, FileText, Eye, X } from 'lucide-react';

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

// Industry credentials
const credentials = [
  {
    title: "National Production License",
    description: "Nationally certified structural silicone sealant manufacturer",
    icon: Shield
  },
  {
    title: "CBDA Member",
    description: "China Building Decoration Association - Curtain Wall Engineering Branch",
    icon: Building2
  },
  {
    title: "Metal Structure Association",
    description: "China Building Metal Structure Association Member",
    icon: FileCheck
  },
  {
    title: "CNAS Accredited",
    description: "China National Accreditation Service for Conformity Assessment",
    icon: Award
  }
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

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: 'linear-gradient(to bottom, #000000 0%, #111111 100%)' }}>
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Certifications &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-red-400 to-pink-400">Credentials</span>
            </h1>
            <p className="text-lg text-gray-400">
              Quality assured through internationally recognized standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Display */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-neutral-900 mb-2 text-center"
          >
            Our Certifications
          </motion.h2>
          <p className="text-neutral-600 text-center mb-10">
            Click on any certificate to view in full size
          </p>

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
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-neutral-300">
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
                  <div className="p-5">
                    <h3 className="font-bold text-neutral-900 mb-1">{cert.title}</h3>
                    <p className="text-sm text-neutral-500">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-neutral-900 mb-8 text-center"
          >
            Our Credentials
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-gray-400 transition-colors"
              >
                <cred.icon className="w-8 h-8 text-black mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-1">{cred.title}</h3>
                <p className="text-neutral-600 text-sm">{cred.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Foshan Shunde JINYIBAI Industry Co., Ltd.</h3>
          <p className="text-neutral-400 mb-4">Unified Social Credit Code: 91440606759202695L</p>
          <p className="text-neutral-400 text-sm max-w-2xl mx-auto">
            No. 4-3, DongFuzhong 1st Road, Fulv Village, Leliu Street, Shunde District, Foshan City, Guangdong Province, China 528322
          </p>
        </div>
      </section>
    </div>
  );
}