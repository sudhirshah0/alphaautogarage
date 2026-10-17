import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle2, Phone, Calendar, MessageCircle } from 'lucide-react';
import { BookingForm } from '../components/forms/BookingForm';
import { GARAGE_INFO, buildWhatsAppUrl } from '../data/garageInfo';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './BookService.css';

export const BookService = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const emergencyWhatsApp = buildWhatsAppUrl(
    `EMERGENCY TOWING / BREAKDOWN: Hello ${GARAGE_INFO.name}, I need immediate towing or breakdown assistance.`
  );

  return (
    <div className="alpha-book-page">
      <SEO
        title="Schedule Service & Maintenance | Alpha Auto Garage"
        description="Book certified automotive repair, oil service, computerized engine diagnostics, and maintenance online with instant WhatsApp confirmation."
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
              BOOK AN APPOINTMENT
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Reserve Your Workshop Bay
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Complete the form below to lock in your preferred date and time.
              Instant confirmation and direct communication with our service dispatchers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form & Assurance Section */}
      <section className="section alpha-book-main">
        <div className="container alpha-book-grid">
          {/* Main Booking Form */}
          <motion.div
            className="alpha-book-form-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <BookingForm preselectedService={serviceParam} />
          </motion.div>

          {/* Sidebar Guarantee & Hours */}
          <aside className="alpha-book-sidebar">
            <motion.div
              className="alpha-book-guarantee-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textFadeUpVariants}
            >
              <h3 className="alpha-book-guarantee-title">The Alpha Promise</h3>
              <ul className="alpha-book-guarantee-list">
                <li>
                  <CheckCircle2 size={18} className="text-accent" />
                  <div>
                    <strong>No Surprise Invoices</strong>
                    <p>We provide full itemized estimates before a single wrench touches your car.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheck size={18} className="text-accent" />
                  <div>
                    <strong>12 Mo / 12k Mi Warranty</strong>
                    <p>Comprehensive parts and labor guarantee on all authorized repairs.</p>
                  </div>
                </li>
                <li>
                  <Clock size={18} className="text-accent" />
                  <div>
                    <strong>Same-Day Fast Turnaround</strong>
                    <p>Express bays allocated for fluid maintenance and diagnostics.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              className="alpha-book-hours-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textFadeUpVariants}
            >
              <h4>Workshop Reception Hours</h4>
              <div className="alpha-book-hours-rows">
                {GARAGE_INFO.hours.map((h, idx) => (
                  <div key={idx} className="alpha-book-hours-row">
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </div>
                ))}
              </div>

              <div className="alpha-book-emergency-box">
                <span className="alpha-book-emergency-tag">24/7 Breakdown Dispatch</span>
                <p>Stranded or need flatbed towing? Reach our dispatch line directly:</p>
                <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-book-phone-link">
                  <Phone size={16} />
                  <span>{GARAGE_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
};
