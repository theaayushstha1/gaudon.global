import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Factory, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../shared/LanguageContext';

const companyImages = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/ab1ce50e4_04.jpg",
    title: "Production Facility",
    category: "Factory"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/a847479a6_03.jpg",
    title: "Quality Control Lab",
    category: "R&D"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/7637226f5_05.jpg",
    title: "Manufacturing Line",
    category: "Production"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f3302d24da57442c2c3ab/7aae76fd2_JINYIBAI-7800.jpg",
    title: "Product Packaging",
    category: "Quality"
  }
];

export default function FactoryLocation() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">{t('ourFacility')}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            {t('worldClassManufacturing')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('facilityDesc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {companyImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs text-gray-400 mb-1">{img.category}</p>
                    <p className="font-semibold">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 bg-gradient-to-r from-gray-800 to-black rounded-2xl p-6 text-white"
            >
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">{t('factoryLocation')}</h3>
              <p className="text-gray-300 text-sm">
                No.4-3, DongFuzhong 1st Road, Fulv Village,<br />
                Leliu Street, Shunde District,<br />
                Foshan City, Guangdong Province, China
              </p>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5428!2d113.2503!3d22.9877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzE1LjgiTiAxMTPCsDE1JzAxLjEiRQ!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Facility Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Factory, value: "10,000m²", label: t('factoryArea') },
            { icon: Users, value: "200+", label: t('employees') },
            { icon: Building2, value: "5", label: t('productionLines') },
            { icon: Award, value: "10+", label: t('certifications') }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700"
            >
              <stat.icon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}