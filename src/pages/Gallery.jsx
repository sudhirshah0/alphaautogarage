import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { Lightbox } from '../components/common/Lightbox';
import { SEO } from '../components/common/SEO';
import { Maximize2 } from 'lucide-react';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Gallery.css';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="alpha-gallery-page">
      <SEO
        title="Workshop & Repairs Gallery | Alpha Auto Garage"
        description="Explore Alpha Auto Garage's cleanroom bays, diagnostic testing lab, engine overhauls, Hunter 3D wheel alignment, and luxury vehicle craftsmanship."
      />

      <section className="alpha-page-header">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.h3 className="swiss-section-subtitle" variants={textFadeUpVariants}>
              OUR GALLERY
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Facility & Workmanship Showcase
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Take a transparent look inside our cleanroom repair bays, computerized diagnostic labs,
              and precision component rebuilding areas.
            </motion.p>
          </motion.div>

          <div className="alpha-category-filters" role="tablist" aria-label="Filter gallery images">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`alpha-filter-chip ${selectedCategory === cat ? 'alpha-filter-chip--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section alpha-gallery-section">
        <div className="container">
          <motion.div
            className="alpha-gallery-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="alpha-gallery-card"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(idx);
                    }
                  }}
                  aria-label={`View photo: ${item.title}`}
                >
                  <img src={item.image} alt={item.title} className="alpha-gallery-card__img" />
                  <div className="alpha-gallery-card__overlay">
                    <div className="alpha-gallery-card__expand-icon">
                      <Maximize2 size={20} />
                    </div>
                    <div className="alpha-gallery-card__meta">
                      <span className="alpha-gallery-card__cat">{item.category}</span>
                      <h3 className="alpha-gallery-card__title">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};
