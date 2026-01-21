import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Just 3 key reviews
const reviews = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Construction Manager',
    company: 'Al-Futtaim Construction',
    location: 'Dubai, UAE',
    rating: 5,
    review: 'We have been using GAUDON sealants for our high-rise projects for 3 years. The quality is consistent and the 30-year warranty gives our clients confidence.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&facepad=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Project Engineer',
    company: 'Pacific Glazing Ltd',
    location: 'Singapore',
    rating: 5,
    review: 'The structural sealants meet all our curtain wall requirements. Fast curing time helps us stay on schedule.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&facepad=2'
  },
  {
    id: 3,
    name: 'Heinrich Mueller',
    role: 'Technical Manager',
    company: 'BauTech GmbH',
    location: 'Frankfurt',
    rating: 5,
    review: 'German-quality standards met. The product certifications and technical documentation are comprehensive.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces&facepad=2'
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-slate-500">
            What our clients say about GAUDON products
          </p>
        </motion.div>

        {/* Reviews Row - Compact */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Review text */}
                <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-4">
                  "{review.review}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.role}, {review.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
