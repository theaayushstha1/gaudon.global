import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: "ISO 9001:2015 Quality Management",
    issuer: "Tongbiao Authentication Center",
    date: "July 31, 2024 - July 30, 2027",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/db06de48c_00.jpg",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "Quality Management System Certification (English)",
    issuer: "Tongbiao Authentication Center",  
    date: "July 31, 2024 - July 30, 2027",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/b35dc8bac_01.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Company Certifications & Awards",
    issuer: "Various Certification Bodies",
    date: "Multiple Certifications",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/d3a0de410_02.jpg",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Production & Quality Certificates",
    issuer: "National Standards",
    date: "Active Certifications",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/f3f39ce12_04.jpg",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Industry Recognition",
    issuer: "Building Materials Association",
    date: "Active Membership",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/c4c1393cc_05.jpg",
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Quality Assurance Certificates",
    issuer: "International Standards",
    date: "Active Certifications",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693f2e2beb4eb49075db14de/6a48435c2_06.jpg",
    color: "from-indigo-500 to-violet-500"
  }
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-32 pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Certifications</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Quality <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Certifications</span>
            </h1>
            <p className="text-xl text-slate-400">
              Internationally recognized certifications demonstrating our commitment 
              to quality and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Certificate Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-semibold mb-3`}>
                      <Shield className="w-3 h-3" />
                      Active
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">
                      <strong>Issuer:</strong> {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-500">
                      <strong>Valid:</strong> {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Quality Standards
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "ISO 9001:2015 Certified",
                  items: [
                    "Comprehensive quality management system",
                    "Regular audits and continuous improvement",
                    "Certified by international standards body"
                  ]
                },
                {
                  icon: Shield,
                  title: "Product Quality Assurance",
                  items: [
                    "Strict raw material inspection",
                    "In-process quality control",
                    "Final product testing before shipment"
                  ]
                },
                {
                  icon: FileCheck,
                  title: "National Certifications",
                  items: [
                    "GB/T 14683-2017 compliant",
                    "CNAS laboratory accreditation",
                    "Building materials certification"
                  ]
                },
                {
                  icon: CheckCircle2,
                  title: "Environmental Standards",
                  items: [
                    "ISO 14001:2004 environmental management",
                    "Eco-friendly production processes",
                    "Sustainable manufacturing practices"
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
                >
                  <section.icon className="w-12 h-12 text-black mb-4" />
                  <h3 className="font-bold text-slate-900 text-xl mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}