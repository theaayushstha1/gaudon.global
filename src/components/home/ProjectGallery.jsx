import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight, Eye, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Cube Berlin',
    location: 'Berlin, Germany',
    type: 'Commercial Tower',
    year: '2023',
    products: ['GAUDON 20000', 'GAUDON 999'],
    description: 'Iconic glass cube building featuring innovative structural silicone glazing with geometric facade patterns.',
    image: '/images/projects/berlin.jpg'
  },
  {
    id: 2,
    name: '100PP Office Tower',
    location: 'Singapore',
    type: 'Commercial Office',
    year: '2022',
    products: ['GAUDON 9009', 'GAUDON 10000'],
    description: 'State-of-the-art office building with premium weatherproofing sealant applications and dramatic lighting.',
    image: '/images/projects/singapore.jpg'
  },
  {
    id: 3,
    name: 'Iconic Tower Dubai',
    location: 'Dubai, UAE',
    type: 'Residential',
    year: '2023',
    products: ['GAUDON 999', 'GAUDON 7800'],
    description: 'Premium residential skyscraper designed by Pininfarina with comprehensive facade sealing solutions.',
    image: '/images/projects/dubai.jpg'
  },
  {
    id: 4,
    name: 'China Art Museum',
    location: 'Shanghai, China',
    type: 'Cultural',
    year: '2022',
    products: ['GAUDON 20000', 'GAUDON 9900'],
    description: 'Iconic red architectural landmark featuring specialty sealants for unique structural design.',
    image: '/images/projects/shanghai.jpg'
  },
  {
    id: 5,
    name: 'Deutsche Bank Towers',
    location: 'Frankfurt, Germany',
    type: 'Commercial',
    year: '2021',
    products: ['GAUDON 9009', 'GAUDON 777'],
    description: 'Twin tower corporate headquarters with extensive glass curtain wall and weatherproofing systems.',
    image: '/images/projects/frankfurt.jpg'
  },
  {
    id: 6,
    name: 'Central Crossing',
    location: 'Hong Kong',
    type: 'Mixed-Use',
    year: '2022',
    products: ['GAUDON 7900', 'GAUDON 7800'],
    description: 'Foster + Partners mixed-use development combining retail, office, and residential with seamless facade sealing.',
    image: '/images/projects/hongkong.jpg'
  }
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const prevProject = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 mb-3">
            <Layers className="w-3 h-3" />
            Case Studies
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2">
            Project Gallery
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            See how GAUDON products are used in real-world construction projects
          </p>
        </motion.div>

        {/* Projects Grid - Smaller cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openModal(project, idx)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[4/3] shadow-lg">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-white/60 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-video bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevProject(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextProject(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Progress indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {projects.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                    {selectedProject.type}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedProject.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {selectedProject.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">Products Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.products.map((product, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
