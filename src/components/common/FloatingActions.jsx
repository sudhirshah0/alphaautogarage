import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { GARAGE_INFO, buildWhatsAppUrl } from '../../data/garageInfo';
import { useLanguage } from '../../context/LanguageContext';
import './FloatingActions.css';

export const FloatingActions = () => {
  const { t, isRTL } = useLanguage();

  const whatsappMessage = isRTL
    ? `مرحباً ${GARAGE_INFO.name}، أود الاستفسار عن خدمات الصيانة وحجز موعد لسيارتي.`
    : `Hello ${GARAGE_INFO.name}, I would like to inquire about a car service or booking.`;

  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick contact" className="alpha-floating-whatsapp">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="alpha-floating-btn"
          aria-label={t('quickTooltip')}
        >
          <div className="alpha-floating-pulse" />
          <MessageCircle size={28} />
          <span className="alpha-floating-tooltip">{t('quickTooltip')}</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar (Call, WhatsApp, Book Now) */}
      <nav aria-label="Mobile quick actions" className="alpha-mobile-bottom-bar">
        <a
          href={`tel:${GARAGE_INFO.phoneRaw}`}
          className="alpha-mobile-bar-btn alpha-mobile-bar-btn--call"
          aria-label="Call Alpha Auto Garage"
        >
          <Phone size={18} />
          <span>{t('quickCall')}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="alpha-mobile-bar-btn alpha-mobile-bar-btn--whatsapp"
          aria-label="WhatsApp Alpha Auto Garage"
        >
          <MessageCircle size={18} />
          <span>{t('quickWhatsApp')}</span>
        </a>

        <Link
          to="/book"
          className="alpha-mobile-bar-btn alpha-mobile-bar-btn--book"
          aria-label="Book a service appointment"
        >
          <Calendar size={18} />
          <span>{t('quickBook')}</span>
        </Link>
      </nav>
    </>
  );
};
