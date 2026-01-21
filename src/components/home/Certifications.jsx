import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../shared/LanguageContext';

export default function Certifications() {
  const { t } = useLanguage();

  const certifications = [
    { name: "ISO 9001:2015", desc: t('qualityManagement') },
    { name: "ISO 14001:2004", desc: t('environmentalManagement') },
    { name: "CNAS", desc: t('chinaAccreditation') },
    { name: "IAF", desc: t('intlAccreditation') },
    { name: "CBDA", desc: t('buildingAssociation') },
    { name: "GB/T14683-2017", desc: t('nationalCompliance') }
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4">
            {t('certifiedExcellence')}
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            {t('certDesc')}
          </p>
        </motion.div>

        {/* Official Certification Documents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-400"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 text-white">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5" />
                ISO 9001:2015 Certificate (CN)
              </h3>
            </div>
            <div className="p-6">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/64ddefcc2_image.png"
                alt="ISO 9001 Certificate Chinese"
                className="w-full rounded-2xl shadow-md"
                loading="lazy"
              />
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/60e35a3e7_QualityCertificationCN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-slate-900 hover:text-gray-600 font-medium transition-colors"
              >
                View Full Certificate →
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-400"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 text-white">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Award className="w-5 h-5" />
                ISO 9001:2015 Certificate (EN)
              </h3>
            </div>
            <div className="p-6">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/cc22e7074_image.png"
                alt="ISO 9001 Certificate English"
                className="w-full rounded-2xl shadow-md"
                loading="lazy"
              />
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/44842a754_QualityCertificationENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-slate-900 hover:text-gray-600 font-medium transition-colors"
              >
                View Full Certificate →
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 bg-white rounded-2xl border border-slate-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{cert.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
