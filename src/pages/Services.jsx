import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Wind,
  Compass,
  Zap,
  Wrench,
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Services.css';

const iconMap = {
  Droplets,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Wind,
  Compass,
  Zap,
  Wrench
};

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Preventive',
    'Diagnostics',
    'Safety',
    'Climate',
    'Handling',
    'Electrical',
    'Mechanical'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="alpha-services-page">
      <SEO
        title="Automotive Services & Maintenance"
        description="Comprehensive vehicle services: synthetic oil changes, brake repair, computerized engine diagnostics, AC servicing, tires, 3D wheel alignment, and factory maintenance."
      />

      {/* Page Header */}
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
              OUR SERVICES
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Dealership Quality Car Service & Repairs
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Equipped with dealer-grade diagnostic software and specialty factory tooling.
              We service all systems with transparent pricing and full 12-Month warranty coverage.
            </motion.p>
          </motion.div>

          {/* Category Filter Chips */}
          <div className="alpha-category-filters" role="tablist" aria-label="Filter services by category">
            {categories.map((cat) => (
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

      {/* Services Grid */}
      <section className="section alpha-services-grid-section">
        <div className="container">
          <motion.div
            className="alpha-services-list"
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
              {filteredServices.map((service) => {
                const Icon = iconMap[service.iconName] || Wrench;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    className="alpha-service-detail-card"
                  >
                    <div className="alpha-service-detail-card__image-wrap">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="alpha-service-detail-card__image"
                      />
                      <div className="alpha-service-detail-card__tag">
                        <Icon size={16} />
                        <span>{service.category}</span>
                      </div>
                    </div>

                    <div className="alpha-service-detail-card__body">
                      <div className="alpha-service-detail-card__top">
                        <h3 className="alpha-service-detail-card__title">{service.title}</h3>
                        <span className="alpha-service-detail-card__price">{service.priceRange}</span>
                      </div>

                      <p className="alpha-service-detail-card__desc">{service.shortDescription}</p>

                      {/* Included Work Highlights */}
                      <div className="alpha-service-detail-card__highlights">
                        <span className="alpha-service-detail-card__subheading">Includes:</span>
                        <ul className="alpha-service-detail-card__checklist">
                          {service.includedWork.slice(0, 3).map((item, idx) => (
                            <li key={idx}>
                              <CheckCircle2 size={14} className="text-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="alpha-service-detail-card__meta-bar">
                        <div className="alpha-service-detail-card__meta-item">
                          <Clock size={15} />
                          <span>Est: {service.turnaroundTime}</span>
                        </div>
                        <div className="alpha-service-detail-card__meta-item">
                          <ShieldCheck size={15} />
                          <span>{service.warranty}</span>
                        </div>
                      </div>

                      <div className="alpha-service-detail-card__actions">
                        <Link
                          to={`/services/${service.slug}`}
                          className="alpha-service-detail-card__link"
                        >
                          <span>Full Description & Specs</span>
                          <ChevronRight size={15} />
                        </Link>

                        <Button
                          to={`/book?service=${service.slug}`}
                          variant="primary"
                          size="md"
                          icon={Calendar}
                        >
                          Book This Service
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
