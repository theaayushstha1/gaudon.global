import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Award, 
  Users, 
  Globe2, 
  Factory, 
  Microscope,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Certifications from '../components/home/Certifications';

const milestones = [
  { year: "1999", title: "Company Founded", desc: "Established in Foshan, Guangdong Province" },
  { year: "2005", title: "ISO Certification", desc: "Achieved ISO 9001 Quality Management certification" },
  { year: "2010", title: "Factory Expansion", desc: "New automated production facility" },
  { year: "2015", title: "Global Expansion", desc: "Serving 50+ countries worldwide" },
  { year: "2020", title: "R&D Center", desc: "Advanced research and development facility" },
  { year: "2024", title: "25th Anniversary", desc: "Quarter century of excellence" }
];

const stats = [
  { value: "25+", label: "Years Experience", icon: Building2 },
  { value: "50+", label: "Product Models", icon: Factory },
  { value: "100+", label: "Countries Served", icon: Globe2 },
  { value: "30,000+", label: "Monthly Capacity", icon: Award }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Building Trust Through
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quality & Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              For over 25 years, Foshan Shunde Jinyibai Industrial Co., Ltd. has been 
              a leading manufacturer of premium silicone sealants, trusted by construction 
              professionals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-gray-800 to-black flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-600 font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-6">
                A Legacy of Excellence in Silicone Technology
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 1999 in Foshan's Shunde District, Jinyibai has grown from a small 
                  workshop to one of China's leading silicone sealant manufacturers. Our journey 
                  has been driven by an unwavering commitment to quality and innovation.
                </p>
                <p>
                  Located in the heart of Guangdong Province's industrial zone, our modern 
                  facility features state-of-the-art automated production lines, advanced 
                  quality testing laboratories, and a dedicated R&D center.
                </p>
                <p>
                  Today, we proudly serve customers in over 100 countries, providing premium 
                  silicone sealants for construction, industrial, and specialized applications.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  "ISO 9001:2015 Certified Quality Management",
                  "National Certified Structural Sealant Manufacturer",
                  "Member of China Building Decoration Association",
                  "Advanced International Production Equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gray-600 font-semibold tracking-wider uppercase text-sm">Our Journey</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
              Milestones of Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-gray-600 font-bold text-xl">{milestone.year}</div>
                      <h3 className="text-slate-900 font-bold mt-1">{milestone.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-black ring-4 ring-gray-300 flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Partner with Excellence?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers worldwide. Contact us today to 
              discuss your sealant requirements.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-white text-gray-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}