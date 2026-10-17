import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Wind,
  Compass,
  Zap,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Calendar,
  ChevronLeft,
  ArrowRight,
  Phone
} from 'lucide-react';
import { getServiceBySlug, SERVICES } from '../data/servicesData';
import { GARAGE_INFO } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { Accordion } from '../components/common/Accordion';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './ServiceDetail.css';

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

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Wrench;

  return (
    <div className="alpha-service-detail-page">
      <SEO
        title={`${service.title} | Auto Service`}
        description={service.shortDescription}
        ogImage={service.heroImage}
      />

      {/* Hero Banner */}
      <section className="alpha-service-hero">
        <div className="alpha-service-hero__bg">
          <img src={service.heroImage} alt={service.title} className="alpha-service-hero__img" />
          <div className="alpha-service-hero__overlay" />
        </div>

        <div className="container alpha-service-hero__container">
          <Link to="/services" className="alpha-service-hero__back">
            <ChevronLeft size={16} />
            <span>Back to All Services</span>
          </Link>

          <motion.div
            className="alpha-service-hero__content"
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
            <motion.div className="alpha-service-hero__badge" variants={textFadeUpVariants}>
              <Icon size={18} />
              <span>{service.category} Service</span>
            </motion.div>

            <motion.h1 className="alpha-service-hero__title" variants={textFadeUpVariants}>
              {service.title}
            </motion.h1>
            <motion.p className="alpha-service-hero__desc" variants={textFadeUpVariants}>
              {service.shortDescription}
            </motion.p>

            <motion.div className="alpha-service-hero__meta-strip" variants={textFadeUpVariants}>
              <div className="alpha-service-hero__meta-box">
                <span className="alpha-service-hero__meta-label">Starting Price</span>
                <span className="alpha-service-hero__meta-val alpha-service-hero__price">
                  {service.priceRange}
                </span>
              </div>

              <div className="alpha-service-hero__meta-box">
                <span className="alpha-service-hero__meta-label">Est. Turnaround</span>
                <span className="alpha-service-hero__meta-val">
                  <Clock size={16} /> {service.turnaroundTime}
                </span>
              </div>

              <div className="alpha-service-hero__meta-box">
                <span className="alpha-service-hero__meta-label">Warranty</span>
                <span className="alpha-service-hero__meta-val">
                  <ShieldCheck size={16} /> {service.warranty}
                </span>
              </div>
            </motion.div>

            <motion.div className="alpha-service-hero__actions" variants={textFadeUpVariants}>
              <Button
                to={`/book?service=${service.slug}`}
                variant="primary"
                size="lg"
                icon={Calendar}
              >
                Book This Service Now
              </Button>
              <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-service-hero__phone">
                <Phone size={18} />
                <span>Call {GARAGE_INFO.phone}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="section alpha-service-body">
        <div className="container alpha-service-body__grid">
          {/* Left Column: Deep Dive */}
          <div className="alpha-service-body__main">
            <motion.div
              className="alpha-detail-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={textFadeUpVariants}
            >
              <h2 className="alpha-detail-block__title">Service Overview</h2>
              <p className="alpha-detail-block__text">{service.overview}</p>
            </motion.div>

            {/* Included Tasks Checklist */}
            <motion.div
              className="alpha-detail-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={textFadeUpVariants}
            >
              <h3 className="alpha-detail-block__title">What Is Included in This Service</h3>
              <p className="alpha-detail-block__sub">
                Every task is carried out using manufacturer-approved checklists and computerized torque specifications:
              </p>
              <div className="alpha-checklist-grid">
                {service.includedWork.map((task, idx) => (
                  <div key={idx} className="alpha-checklist-item">
                    <CheckCircle2 size={18} className="alpha-checklist-icon" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Warning Symptoms */}
            <motion.div
              className="alpha-detail-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={textFadeUpVariants}
            >
              <h3 className="alpha-detail-block__title">Common Warning Signs & Symptoms</h3>
              <p className="alpha-detail-block__sub">
                If your vehicle exhibits any of these symptoms, schedule an inspection promptly:
              </p>
              <div className="alpha-symptoms-list">
                {service.symptoms.map((symptom, idx) => (
                  <div key={idx} className="alpha-symptom-item">
                    <AlertTriangle size={18} className="alpha-symptom-icon" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <motion.div
                className="alpha-detail-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={textFadeUpVariants}
              >
                <h3 className="alpha-detail-block__title">Frequently Asked Questions</h3>
                <Accordion items={service.faqs} />
              </motion.div>
            )}
          </div>

          {/* Right Sidebar: Quick Booking Box & Other Services */}
          <aside className="alpha-service-body__sidebar">
            <motion.div
              className="alpha-sidebar-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={textFadeUpVariants}
            >
              <h4 className="alpha-sidebar-card__title">Reserve Your Bay</h4>
              <p className="alpha-sidebar-card__desc">
                Choose your preferred date and time. We will reserve technician bay time immediately.
              </p>

              <div className="alpha-sidebar-summary">
                <div className="alpha-sidebar-row">
                  <span>Service:</span>
                  <strong>{service.title}</strong>
                </div>
                <div className="alpha-sidebar-row">
                  <span>Estimate:</span>
                  <strong className="text-accent">{service.priceRange}</strong>
                </div>
                <div className="alpha-sidebar-row">
                  <span>Turnaround:</span>
                  <span>{service.turnaroundTime}</span>
                </div>
                <div className="alpha-sidebar-row">
                  <span>Warranty:</span>
                  <span>{service.warranty}</span>
                </div>
              </div>

              <Button
                to={`/book?service=${service.slug}`}
                variant="primary"
                size="md"
                className="alpha-sidebar-btn"
                icon={Calendar}
              >
                Proceed to Booking
              </Button>

              <p className="alpha-sidebar-note">
                ✓ Free 30-Point Safety Check included with every booking.
              </p>
            </motion.div>

            {/* Other Related Services */}
            <motion.div
              className="alpha-sidebar-card alpha-sidebar-card--nav"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={textFadeUpVariants}
            >
              <h4 className="alpha-sidebar-card__title">Other Core Services</h4>
              <ul className="alpha-sidebar-services-list">
                {SERVICES.filter((s) => s.id !== service.id).map((other) => (
                  <li key={other.id}>
                    <Link to={`/services/${other.slug}`} className="alpha-sidebar-service-link">
                      <span>{other.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
};
