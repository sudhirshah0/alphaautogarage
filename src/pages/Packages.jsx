import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Calendar, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';
import { GARAGE_INFO } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Packages.css';

export const Packages = () => {
  return (
    <div className="alpha-packages-page">
      <SEO
        title="Service Packages & Extended Warranty Contracts | Alpha Auto Garage"
        description="Transparent service packages and warranty contracts: Minor Service, Major Milestones, 150-Point Pre-Purchase Inspections, and Extended Warranty plans."
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
              SERVICE CONTRACTS & PLANS
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Curated Service & Warranty Packages
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Fixed transparent pricing with zero surprise charges. All packages utilize manufacturer-certified OEM parts,
              factory fluids, and complete 12-Month warranty protection.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section alpha-packages-section">
        <div className="container">
          <motion.div
            className="alpha-packages-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                className="alpha-package-card"
                variants={textFadeUpVariants}
                custom={{ delay: idx * 0.08 }}
              >
                <div className="alpha-package-card__header">
                  <div className="alpha-package-card__badge-row">
                    <Badge variant="accent">{pkg.badge}</Badge>
                    <span className="alpha-package-card__turnaround">
                      <Clock size={13} />
                      <span>{pkg.turnaround}</span>
                    </span>
                  </div>

                  <h3 className="alpha-package-card__title">{pkg.title}</h3>
                  <p className="alpha-package-card__tagline">{pkg.tagline}</p>

                  <div className="alpha-package-card__pricing">
                    <span className="alpha-package-card__price">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="alpha-package-card__orig-price">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <span className="alpha-package-card__rec">Recommended: {pkg.recommended}</span>
                </div>

                <div className="alpha-package-card__body">
                  <p className="alpha-package-card__desc">{pkg.description}</p>

                  <div className="alpha-package-card__features-title">What is Included:</div>
                  <ul className="alpha-package-card__features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="alpha-package-card__footer">
                    <Button
                      to={`/book?package=${pkg.slug}`}
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="alpha-package-card__btn"
                    >
                      Book This Package
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom plan callout */}
          <motion.div
            className="alpha-packages-custom-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-packages-custom-box__content">
              <ShieldCheck size={40} className="text-accent" />
              <div>
                <h3>Need a Custom Fleet or Exotic Supercar Maintenance Plan?</h3>
                <p>
                  We tailor bespoke scheduled service contracts for multi-vehicle households, high-mileage executive commuters, and track performance cars.
                </p>
              </div>
            </div>
            <Button to="/contact" variant="outline" size="md">
              Inquire Custom Contract
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
