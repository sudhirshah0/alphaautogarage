import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqData';
import { GARAGE_INFO, buildWhatsAppUrl } from '../data/garageInfo';
import { Accordion } from '../components/common/Accordion';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './FAQ.css';

export const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const supportWhatsAppUrl = buildWhatsAppUrl(
    `Hello ${GARAGE_INFO.name}, I have a question about a service estimate/procedure.`
  );

  return (
    <div className="alpha-faq-page">
      <SEO
        title="Frequently Asked Questions (FAQ) | Alpha Auto Garage"
        description="Find answers to common questions about appointments, pricing, computerized diagnostics, OEM warranties, parts, and payment options at Alpha Auto Garage."
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
              KNOWLEDGE BASE & FAQ
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Frequently Asked Questions
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Everything you need to know about our repair processes, diagnostic fees, warranty coverage,
              and vehicle drop-off policies.
            </motion.p>
          </motion.div>

          {/* Search Box */}
          <div className="alpha-faq-search-wrap">
            <div className="alpha-faq-search">
              <Search size={20} className="alpha-faq-search__icon" />
              <input
                type="text"
                placeholder="Search questions (e.g. warranty, pricing, drop-off, parts)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="alpha-faq-search__input"
                aria-label="Search questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="alpha-faq-search__clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="alpha-category-filters" role="tablist" aria-label="Filter FAQ by category">
            {FAQ_CATEGORIES.map((cat) => (
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

      {/* Accordion Content */}
      <section className="section alpha-faq-section">
        <div className="container alpha-faq-container">
          {filteredFaqs.length === 0 ? (
            <div className="alpha-empty-state">
              <h3>No Questions Found</h3>
              <p>We could not find answers matching "{searchQuery}". Ask our master mechanics directly via WhatsApp!</p>
              <Button href={supportWhatsAppUrl} target="_blank" variant="whatsapp" icon={MessageCircle}>
                Ask on WhatsApp
              </Button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion items={filteredFaqs} allowMultiple={false} />
            </motion.div>
          )}

          {/* Still Have Questions CTA */}
          <motion.div
            className="alpha-faq-cta-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-faq-cta-box__icon-wrap">
              <HelpCircle size={32} />
            </div>
            <h3>Still Have Questions About Your Vehicle?</h3>
            <p>
              Speak with Julian Sterling or Roman Alvarez directly. We diagnose complex electrical faults,
              drivetrain errors, and performance upgrades every day.
            </p>
            <div className="alpha-faq-cta-box__actions">
              <Button href={supportWhatsAppUrl} target="_blank" variant="whatsapp" size="md" icon={MessageCircle}>
                Message on WhatsApp
              </Button>
              <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-faq-phone-btn">
                <Phone size={16} />
                <span>Call {GARAGE_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
