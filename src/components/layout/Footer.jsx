import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GARAGE_INFO } from '../../data/garageInfo';
import { SERVICES } from '../../data/servicesData';
import { BRANDS } from '../../data/brandsData';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="alpha-footer">
      {/* Top Banner CTA Strip */}
      <motion.div 
        className="alpha-footer__cta-banner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container alpha-footer__cta-container">
          <div className="alpha-footer__cta-text">
            <h3>{t('footerCtaTitle')}</h3>
            <p>{t('footerCtaDesc')}</p>
          </div>
          <div className="alpha-footer__cta-actions">
            <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-footer__cta-phone">
              <Phone size={18} />
              <span>{t('footerEmergencyCall')} {GARAGE_INFO.phone}</span>
            </a>
            <Link to="/book" className="alpha-footer__cta-book">
              {t('footerBookBtn')}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Links & Info */}
      <div className="container alpha-footer__main">
        <motion.div 
          className="alpha-footer__grid"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Column 1: Brand & Bio */}
          <div className="alpha-footer__col alpha-footer__col--brand">
            <Link to="/" className="alpha-footer__logo">
              <img src="/logo.png" alt="Alpha Auto Garage" className="alpha-footer__logo-img" />
              <div className="alpha-footer__logo-text">
                <span className="alpha-footer__brand-title">ALPHA AUTO</span>
                <span className="alpha-footer__brand-sub">GARAGE & TUNING</span>
              </div>
            </Link>
            <p className="alpha-footer__bio">{t('footerBio')}</p>
            <div className="alpha-footer__trust-badge">
              <ShieldCheck size={20} className="alpha-footer__trust-icon" />
              <span>{t('footerTrust')}</span>
            </div>
            <div className="alpha-footer__social">
              <a href={GARAGE_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={GARAGE_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={GARAGE_INFO.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
              <a href={GARAGE_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="alpha-footer__col">
            <h4 className="alpha-footer__col-title">{t('footerCoreServices')}</h4>
            <ul className="alpha-footer__list">
              {SERVICES.slice(0, 6).map((service) => {
                const svcKey = service.id.replace(/-/g, '_');
                const title = t(`service_${svcKey}_title`) !== `service_${svcKey}_title` ? t(`service_${svcKey}_title`) : service.title;
                return (
                  <li key={service.id}>
                    <Link to={`/services/${service.slug}`} className="alpha-footer__link">
                      <ChevronRight size={14} className="alpha-footer__link-arrow" />
                      <span>{title}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to="/services" className="alpha-footer__link alpha-footer__link--all">
                  <span>{t('footerAllServices')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="alpha-footer__col">
            <h4 className="alpha-footer__col-title">{t('footerExplore')}</h4>
            <ul className="alpha-footer__list">
              <li>
                <Link to="/brands" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'العلامات التجارية المعتمدة' : 'Brands We Service'}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'نبذة عن ورشتنا' : 'About Our Workshop'}</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'معرض صور الورشة' : 'Facility & Repair Gallery'}</span>
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'إكسسوارات وترقيات الأداء' : 'Performance Accessories'}</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'آراء وتجارب العملاء' : 'Customer Reviews'}</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="alpha-footer__link">
                  <ChevronRight size={14} className="alpha-footer__link-arrow" />
                  <span>{isRTL ? 'موقعنا والتواصل' : 'Contact & Location'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="alpha-footer__col">
            <h4 className="alpha-footer__col-title">{t('footerContactHours')}</h4>
            <div className="alpha-footer__contact-items">
              <div className="alpha-footer__contact-item">
                <MapPin size={18} className="alpha-footer__contact-icon" />
                <div>
                  <p className="alpha-footer__contact-label">{isRTL ? 'العنوان' : 'Address'}</p>
                  <p className="alpha-footer__contact-value">{GARAGE_INFO.address.formatted}</p>
                </div>
              </div>
              <div className="alpha-footer__contact-item">
                <Phone size={18} className="alpha-footer__contact-icon" />
                <div>
                  <p className="alpha-footer__contact-label">{isRTL ? 'الهاتف والاستجابة السريعة' : 'Phone & Dispatch'}</p>
                  <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-footer__contact-value">
                    {GARAGE_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="alpha-footer__contact-item">
                <Mail size={18} className="alpha-footer__contact-icon" />
                <div>
                  <p className="alpha-footer__contact-label">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                  <a href={`mailto:${GARAGE_INFO.email}`} className="alpha-footer__contact-value">
                    {GARAGE_INFO.email}
                  </a>
                </div>
              </div>
              <div className="alpha-footer__contact-item">
                <Clock size={18} className="alpha-footer__contact-icon" />
                <div>
                  <p className="alpha-footer__contact-label">{isRTL ? 'ساعات العمل الرسمية' : 'Business Hours'}</p>
                  <p className="alpha-footer__contact-value">
                    {isRTL ? 'الإثنين - الجمعة: 8:00 ص - 6:30 م | السبت: 8:30 ص - 4:00 م' : GARAGE_INFO.workingHoursSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Serviced Brands Marquee Text */}
        <div className="alpha-footer__brands-strip">
          <span className="alpha-footer__brands-label">{isRTL ? 'متخصصون في:' : 'Specialized In:'}</span>
          <div className="alpha-footer__brands-pills">
            {BRANDS.map((brand) => (
              <Link to="/brands" key={brand.id} className="alpha-footer__brand-pill">
                {brand.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="alpha-footer__bottom">
          <p className="alpha-footer__copyright">
            © {currentYear} {GARAGE_INFO.name}. {isRTL ? 'جميع الحقوق محفوظة. في خدمتكم على الطريق دائماً بأمان وثقة.' : 'All rights reserved. Back on the road, faster and safer.'}
          </p>
          <div className="alpha-footer__legal-links">
            <Link to="/faq">{isRTL ? 'سياسة الضمان' : 'Warranty Policy'}</Link>
            <span>•</span>
            <Link to="/contact">{isRTL ? 'الخصوصية والشروط' : 'Privacy & Terms'}</Link>
            <span>•</span>
            <Link to="/book">{isRTL ? 'حجز موعد صيانة' : 'Schedule Service'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
