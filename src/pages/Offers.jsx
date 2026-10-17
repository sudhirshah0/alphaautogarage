import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, CheckCircle2, Copy, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { OFFERS } from '../data/offersData';
import { GARAGE_INFO } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Offers.css';

export const Offers = () => {
  const [copiedCode, setCopiedCode] = React.useState('');

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 3000);
  };

  return (
    <div className="alpha-offers-page">
      <SEO
        title="Promotions & Special Service Offers | Alpha Auto Garage"
        description="Exclusive automotive maintenance and repair offers at Alpha Auto Garage: free 30-point safety inspections, brake service discounts, and diagnostic credits."
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
              EXCLUSIVE PROMOTIONS
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Special Offers & Service Coupons
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Take advantage of limited-time discounts on dealer-quality repairs, factory maintenance bundles,
              and complimentary multi-point safety inspections.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Offers List */}
      <section className="section alpha-offers-section">
        <div className="container">
          <motion.div
            className="alpha-offers-grid"
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
            {OFFERS.map((offer, idx) => (
              <motion.div
                key={offer.id}
                className="alpha-offer-card"
                variants={textFadeUpVariants}
                custom={{ delay: idx * 0.08 }}
              >
                <div className="alpha-offer-card__image-wrap">
                  <img src={offer.image} alt={offer.title} className="alpha-offer-card__image" />
                  <div className="alpha-offer-card__discount-pill">{offer.discount}</div>
                  <span className="alpha-offer-card__badge">{offer.badge}</span>
                </div>

                <div className="alpha-offer-card__body">
                  <div className="alpha-offer-card__validity">
                    <Calendar size={14} className="text-accent" />
                    <span>{offer.validUntil}</span>
                  </div>

                  <h3 className="alpha-offer-card__title">{offer.title}</h3>
                  <p className="alpha-offer-card__tagline">{offer.tagline}</p>
                  <p className="alpha-offer-card__desc">{offer.description}</p>

                  <div className="alpha-offer-card__coupon-box">
                    <div className="alpha-offer-card__coupon-left">
                      <span className="alpha-offer-card__coupon-label">PROMO CODE:</span>
                      <strong className="alpha-offer-card__coupon-code">{offer.code}</strong>
                    </div>
                    <button
                      type="button"
                      className="alpha-offer-card__copy-btn"
                      onClick={() => handleCopy(offer.code)}
                      aria-label="Copy promotion code"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <CheckCircle2 size={15} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="alpha-offer-card__terms">*{offer.terms}</p>

                  <div className="alpha-offer-card__actions">
                    <Button
                      to={`/book?offer=${offer.code}`}
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="alpha-offer-card__btn"
                    >
                      {offer.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom callout */}
          <motion.div
            className="alpha-offers-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-offers-banner__text">
              <h3>Have a Manufacturer Recall or Warranty Question?</h3>
              <p>Contact our advisors with your VIN number and we will pull your vehicle service history records instantly.</p>
            </div>
            <div className="alpha-offers-banner__actions">
              <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-offers-banner__phone">
                <Phone size={16} />
                <span>Call {GARAGE_INFO.phone}</span>
              </a>
              <Button to="/book" variant="primary" size="md">
                Book Inspection
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
