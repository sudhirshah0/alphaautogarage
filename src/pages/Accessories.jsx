import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, MessageCircle, Check, Wrench, Shield } from 'lucide-react';
import { ACCESSORIES, ACCESSORY_CATEGORIES } from '../data/accessoriesData';
import { GARAGE_INFO, buildWhatsAppUrl } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Accessories.css';

export const Accessories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAccessories = useMemo(() => {
    return ACCESSORIES.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleInquireWhatsApp = (item) => {
    const text = `Hello ${GARAGE_INFO.name}, I am interested in purchasing/installing the "${item.name}" (${item.price}). Could you confirm availability and installation options?`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="alpha-accessories-page">
      <SEO
        title="Car Accessories & Performance Upgrades | Alpha Auto Garage"
        description="Search and inquire about genuine automotive upgrades: ceramic tints, carbon aero lips, high-output LED headlights, sport springs, and electronics."
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
              AUTOMOTIVE ACCESSORIES
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Performance & Styling Accessories
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Upgrade your driving experience with certified performance components, styling enhancements,
              and custom electronic telemetry. Professional workshop installation available.
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <div className="alpha-accessory-search-wrap">
            <div className="alpha-accessory-search">
              <Search size={20} className="alpha-accessory-search__icon" />
              <input
                type="text"
                placeholder="Search accessories by name, category, or spec..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="alpha-accessory-search__input"
                aria-label="Search accessories"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="alpha-accessory-search__clear"
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Chips */}
          <div className="alpha-category-filters" role="tablist" aria-label="Filter accessories by category">
            {ACCESSORY_CATEGORIES.map((cat) => (
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

      {/* Accessories Grid */}
      <section className="section alpha-accessories-section">
        <div className="container">
          {filteredAccessories.length === 0 ? (
            <div className="alpha-empty-state">
              <h3>No Accessories Found</h3>
              <p>We could not find any accessories matching "{searchTerm}". Try another search term or reset filters.</p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <motion.div
              className="alpha-accessories-grid"
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
                {filteredAccessories.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45 }}
                    className="alpha-acc-item-card"
                  >
                    <div className="alpha-acc-item-card__img-wrap">
                      <img src={item.image} alt={item.name} className="alpha-acc-item-card__img" />
                      <span className="alpha-acc-item-card__tag">{item.tag}</span>
                      {item.inStock && (
                        <span className="alpha-acc-item-card__stock">In Stock</span>
                      )}
                    </div>

                    <div className="alpha-acc-item-card__body">
                      <div className="alpha-acc-item-card__top">
                        <span className="alpha-acc-item-card__cat">{item.category}</span>
                        <div className="alpha-acc-item-card__rating">
                          <Star size={14} fill="#F59E0B" color="#F59E0B" />
                          <span>{item.rating}</span>
                          <span className="alpha-acc-item-card__rating-count">({item.reviewsCount})</span>
                        </div>
                      </div>

                      <h3 className="alpha-acc-item-card__title">{item.name}</h3>
                      <p className="alpha-acc-item-card__desc">{item.description}</p>

                      {/* Specs Checklist */}
                      <div className="alpha-acc-item-card__specs">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="alpha-acc-item-card__spec">
                            <Check size={13} className="text-accent" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="alpha-acc-item-card__footer">
                        <div className="alpha-acc-item-card__price-wrap">
                          <span className="alpha-acc-item-card__price-label">Retail Price</span>
                          <span className="alpha-acc-item-card__price">{item.price}</span>
                        </div>

                        <Button
                          variant="whatsapp"
                          size="sm"
                          icon={MessageCircle}
                          onClick={() => handleInquireWhatsApp(item)}
                        >
                          Inquire / Fit
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Workshop Installation Banner */}
          <motion.div
            className="alpha-acc-install-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-acc-install-banner__item">
              <Wrench size={24} className="text-accent" />
              <div>
                <h4>Professional Workshop Fitment</h4>
                <p>Have your parts professionally installed and aligned in our bays with warranty backing.</p>
              </div>
            </div>
            <div className="alpha-acc-install-banner__item">
              <Shield size={24} className="text-accent" />
              <div>
                <h4>Certified Quality Guarantee</h4>
                <p>All accessories are precision tested for CAN-bus and electrical compatibility.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
