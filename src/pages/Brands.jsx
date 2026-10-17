import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Wrench, CheckCircle2, Calendar, ChevronRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Brands.css';

export const Brands = () => {
  return (
    <div className="alpha-brands-page">
      <SEO
        title="Car Brands We Service | BMW, Mercedes, Porsche, Audi & More"
        description="Alpha Auto Garage specializes exclusively in luxury & precision engineering: BMW, Mercedes-Benz, Audi, Porsche, Land Rover, Volkswagen, Lexus, Toyota, Honda, and Nissan."
      />

      {/* Header */}
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
              BRANDS WE SERVICE
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Specialized Luxury & Performance Marques
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              We focus exclusively on the platforms we know inside and out. Using genuine OEM software,
              factory wiring schematics, and specialized tooling for exactly 10 world-class marques.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Brands Cards */}
      <section className="section alpha-brands-section">
        <div className="container">
          <motion.div
            className="alpha-brands-grid"
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
            <AnimatePresence mode="popLayout">
              {BRANDS.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="alpha-brand-card"
                >
                  <div className="alpha-brand-card__image-wrap">
                    <img src={brand.image} alt={`${brand.name} repair and service`} className="alpha-brand-card__image" />
                    <div className="alpha-brand-card__badge-wrap">
                      <Badge variant="accent">{brand.badge}</Badge>
                    </div>
                  </div>

                  <div className="alpha-brand-card__body">
                    <div className="alpha-brand-card__header">
                      <h2 className="alpha-brand-card__name">{brand.name}</h2>
                      <span className="alpha-brand-card__tagline">"{brand.tagline}"</span>
                    </div>

                    <p className="alpha-brand-card__desc">{brand.description}</p>

                    {/* Diagnostic Tool Capability */}
                    <div className="alpha-brand-card__spec-box">
                      <div className="alpha-brand-card__spec-title">
                        <Cpu size={16} className="text-accent" />
                        <span>Dedicated Diagnostic Software:</span>
                      </div>
                      <p className="alpha-brand-card__spec-val">{brand.diagnosticTool}</p>
                    </div>

                    {/* Specialty Focus */}
                    <div className="alpha-brand-card__spec-box">
                      <div className="alpha-brand-card__spec-title">
                        <Wrench size={16} className="text-accent" />
                        <span>Core Technical Focus:</span>
                      </div>
                      <p className="alpha-brand-card__spec-val">{brand.specialty}</p>
                    </div>

                    {/* Popular Models */}
                    <div className="alpha-brand-card__models">
                      <span className="alpha-brand-card__models-label">Frequent Models in Bay:</span>
                      <div className="alpha-brand-card__models-pills">
                        {brand.popularModels.map((model, idx) => (
                          <span key={idx} className="alpha-brand-model-pill">{model}</span>
                        ))}
                      </div>
                    </div>

                    <div className="alpha-brand-card__footer">
                      <Button
                        to={`/book?brand=${brand.id}`}
                        variant="primary"
                        size="md"
                        icon={Calendar}
                        className="alpha-brand-card__btn"
                      >
                        Book {brand.name} Service
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
