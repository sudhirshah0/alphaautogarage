import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { GARAGE_INFO, buildWhatsAppUrl } from '../data/garageInfo';
import { ContactForm } from '../components/forms/ContactForm';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './Contact.css';

export const Contact = () => {
  const generalWhatsAppUrl = buildWhatsAppUrl(
    `Hello ${GARAGE_INFO.name}, I am reaching out through your website contact page.`
  );

  return (
    <div className="alpha-contact-page">
      <SEO
        title="Contact & Location | Alpha Auto Garage"
        description="Visit Alpha Auto Garage or get in touch via phone, WhatsApp, or email. Location map, business hours, and instant messaging assistance."
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
              CONNECT WITH US
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Contact & Workshop Location
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Have questions about an estimate, check engine diagnostics, or accessory fitting?
              Reach our service desk via call, WhatsApp, or visit our facility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Cards + Contact Form */}
      <section className="section alpha-contact-section">
        <div className="container alpha-contact-main-grid">
          {/* Left Cards: Contact Info & Hours */}
          <div className="alpha-contact-info-col">
            <motion.div
              className="alpha-contact-cards-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {/* Card 1: Phone & Dispatch */}
              <motion.div className="alpha-contact-card" variants={textFadeUpVariants}>
                <div className="alpha-contact-card__icon-wrap">
                  <Phone size={22} className="alpha-contact-card__icon" />
                </div>
                <h3 className="alpha-contact-card__title">Phone & Dispatch</h3>
                <p className="alpha-contact-card__sub">Speak directly with service advisors</p>
                <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-contact-card__link">
                  {GARAGE_INFO.phone}
                </a>
              </motion.div>

              {/* Card 2: WhatsApp */}
              <motion.div className="alpha-contact-card" variants={textFadeUpVariants}>
                <div className="alpha-contact-card__icon-wrap" style={{ background: 'rgba(37, 211, 102, 0.12)', borderColor: 'rgba(37, 211, 102, 0.3)' }}>
                  <MessageCircle size={22} style={{ color: '#25D366' }} />
                </div>
                <h3 className="alpha-contact-card__title">Instant WhatsApp</h3>
                <p className="alpha-contact-card__sub">Fast messaging & photo sharing</p>
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alpha-contact-card__link"
                  style={{ color: '#25D366' }}
                >
                  {GARAGE_INFO.whatsappDisplay}
                </a>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div className="alpha-contact-card" variants={textFadeUpVariants}>
                <div className="alpha-contact-card__icon-wrap">
                  <Mail size={22} className="alpha-contact-card__icon" />
                </div>
                <h3 className="alpha-contact-card__title">Direct Email</h3>
                <p className="alpha-contact-card__sub">Itemized invoices & corporate fleet inquiries</p>
                <a href={`mailto:${GARAGE_INFO.email}`} className="alpha-contact-card__link">
                  {GARAGE_INFO.email}
                </a>
              </motion.div>

              {/* Card 4: Address */}
              <motion.div className="alpha-contact-card" variants={textFadeUpVariants}>
                <div className="alpha-contact-card__icon-wrap">
                  <MapPin size={22} className="alpha-contact-card__icon" />
                </div>
                <h3 className="alpha-contact-card__title">Workshop Facility</h3>
                <p className="alpha-contact-card__sub">{GARAGE_INFO.address.formatted}</p>
                <a
                  href={GARAGE_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alpha-contact-card__link"
                >
                  Get Driving Directions <ExternalLink size={13} />
                </a>
              </motion.div>
            </motion.div>

            {/* Operating Hours Box */}
            <motion.div
              className="alpha-contact-hours-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textFadeUpVariants}
            >
              <div className="alpha-contact-hours-box__header">
                <Clock size={20} className="text-accent" />
                <h3>Operating & Workshop Bay Hours</h3>
              </div>
              <div className="alpha-contact-hours-list">
                {GARAGE_INFO.hours.map((item, idx) => (
                  <div key={idx} className="alpha-contact-hours-item">
                    <span>{item.days}</span>
                    <strong className={item.isOpen ? '' : 'text-accent'}>{item.time}</strong>
                  </div>
                ))}
              </div>
              <p className="alpha-contact-night-drop">
                🔑 <strong>24/7 Night Key Drop:</strong> Secure key deposit box available beside front reception gate for early morning or late evening drop-offs.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div
            className="alpha-contact-form-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={textFadeUpVariants}
          >
            <div className="alpha-contact-form-header">
              <h2>Send an Online Inquiry</h2>
              <p>Fill out the form below and our team will reply immediately via WhatsApp or phone.</p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="alpha-map-section">
        <div className="container">
          <motion.div
            className="alpha-map-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <div>
              <span className="section-tag">Facility Location</span>
              <h2>Find Our Workshop</h2>
              <p>{GARAGE_INFO.address.formatted}</p>
            </div>
            <Button
              href={GARAGE_INFO.address.googleMapsUrl}
              target="_blank"
              variant="outline"
              size="md"
              icon={Navigation}
            >
              Open in Google Maps
            </Button>
          </motion.div>

          <motion.div
            className="alpha-map-frame-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Alpha Auto Garage Location Map"
              src={GARAGE_INFO.address.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
