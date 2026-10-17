import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { REVIEWS, REVIEWS_OVERVIEW } from '../data/reviewsData';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Reviews.css';

export const Reviews = () => {
  const [starFilter, setStarFilter] = useState('All');

  const filteredReviews = starFilter === 'All'
    ? REVIEWS
    : REVIEWS.filter((r) => r.rating === Number(starFilter));

  return (
    <div className="alpha-reviews-page">
      <SEO
        title="Customer Reviews & Ratings | Alpha Auto Garage"
        description="Read verified driver testimonials and ratings for Alpha Auto Garage. Trusted by European and Japanese sports car and daily commuter owners."
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
              TESTIMONIALS & REVIEWS
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Real Reviews from Real Drivers
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              We measure our success by the satisfaction, safety, and performance experienced by our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Score Card */}
      <section className="section alpha-reviews-summary-section">
        <div className="container">
          <motion.div
            className="alpha-reviews-score-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-reviews-score-card__main">
              <span className="alpha-reviews-score-card__num">{REVIEWS_OVERVIEW.averageRating}</span>
              <div className="alpha-reviews-score-card__stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="alpha-reviews-score-card__count">
                Based on {REVIEWS_OVERVIEW.totalReviews} verified Google and client reviews
              </span>
              <Button
                href={REVIEWS_OVERVIEW.googleReviewUrl}
                target="_blank"
                variant="outline"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
                className="alpha-reviews-google-btn"
              >
                Review Us on Google
              </Button>
            </div>

            {/* Percentage Bars */}
            <div className="alpha-reviews-score-card__bars">
              {REVIEWS_OVERVIEW.breakdown.map((b) => (
                <div key={b.stars} className="alpha-reviews-bar-row">
                  <span className="alpha-reviews-bar-label">{b.stars} Stars</span>
                  <div className="alpha-reviews-bar-track">
                    <motion.div
                      className="alpha-reviews-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="alpha-reviews-bar-pct">{b.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="section alpha-reviews-list-section">
        <div className="container">
          <div className="alpha-reviews-controls">
            <span className="alpha-reviews-controls__label">Filter by Rating:</span>
            <div className="alpha-category-filters" role="tablist">
              {['All', '5', '4'].map((val) => (
                <button
                  key={val}
                  type="button"
                  role="tab"
                  aria-selected={starFilter === val}
                  className={`alpha-filter-chip ${starFilter === val ? 'alpha-filter-chip--active' : ''}`}
                  onClick={() => setStarFilter(val)}
                >
                  {val === 'All' ? 'All Ratings' : `${val} Stars Only`}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="alpha-reviews-full-grid"
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
              {filteredReviews.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="alpha-review-card alpha-review-card--full"
                >
                  <div className="alpha-review-card__header">
                    <div className="alpha-review-card__stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <span className="alpha-review-card__date">{item.date}</span>
                  </div>

                  <p className="alpha-review-card__text">"{item.text}"</p>

                  <div className="alpha-review-card__service-badge">
                    <span>Service: {item.service}</span>
                  </div>

                  <div className="alpha-review-card__author-wrap">
                    <img src={item.avatar} alt={item.author} className="alpha-review-card__avatar" />
                    <div>
                      <h4 className="alpha-review-card__author">{item.author}</h4>
                      <span className="alpha-review-card__car">{item.car}</span>
                    </div>
                    {item.verified && (
                      <span className="alpha-review-verified">
                        <CheckCircle size={14} /> Verified Client
                      </span>
                    )}
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
