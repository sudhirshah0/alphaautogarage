import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { GARAGE_INFO, buildWhatsAppUrl } from '../../data/garageInfo';
import { BRANDS } from '../../data/brandsData';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

// Brand specific color schemes & authentic SVG logos
const BRAND_CONFIG = {
  toyota: {
    color: '#EB0A1E',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 4.5C6.75 4.5 2.5 7.46 2.5 11.12c0 2.91 2.68 5.39 6.44 6.24l.58-.69c-3.15-.75-5.32-2.73-5.32-5.05 0-2.88 3.51-5.22 7.8-5.22s7.8 2.34 7.8 5.22c0 2.32-2.17 4.3-5.32 5.05l.58.69c3.76-.85 6.44-3.33 6.44-6.24 0-3.66-4.25-6.62-9.5-6.62zm0 1.25c4.3 0 7.8 2.34 7.8 5.22 0 2.32-2.17 4.3-5.32 5.05l.58.69c3.76-.85 6.44-3.33 6.44-6.24 0-3.66-4.25-6.62-9.5-6.62S2.5 7.46 2.5 11.12c0 2.91 2.68 5.39 6.44 6.24l.58-.69c-3.15-.75-5.32-2.73-5.32-5.05 0-2.88 3.5-5.22 7.8-5.22zm0 1.34c-1.9 0-3.44 2.2-3.44 4.93 0 2.73 1.54 4.93 3.44 4.93s3.44-2.2 3.44-4.93c0-2.73-1.54-4.93-3.44-4.93zm0 1.26c1.2 0 2.18 1.64 2.18 3.67 0 2.03-.98 3.68-2.18 3.68s-2.18-1.65-2.18-3.68c0-2.03.98-3.67 2.18-3.67z" />
      </svg>
    )
  },
  honda: {
    color: '#E40521',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M3.2 4.5A1.5 1.5 0 0 0 1.7 6v12a1.5 1.5 0 0 0 1.5 1.5h17.6a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.2zm1.8 2h2.2l1.6 8.3h.1c.4-2.1 1.1-4.9 1.7-8.3h3.2c.6 3.4 1.3 6.2 1.7 8.3h.1l1.6-8.3h2.2l-2 11h-2.4l-1.6-6.6c-.4 1.8-.9 4.3-1.6 6.6H8.8L7.2 11.4 5.6 17.5H3.2l1.8-11z" />
      </svg>
    )
  },
  nissan: {
    color: '#C3002F',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.2c3.78 0 6.95 2.65 7.6 6.2H4.4c.65-3.55 3.82-6.2 7.6-6.2zm-7.6 9.2h15.2c-.65 3.55-3.82 6.2-7.6 6.2s-6.95-2.65-7.6-6.2z" />
      </svg>
    )
  },
  bmw: {
    color: '#0066B1',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1" />
        <path d="M12 6 A6 6 0 0 1 18 12 L12 12 Z" fill="currentColor" />
        <path d="M6 12 A6 6 0 0 0 12 18 L12 12 Z" fill="currentColor" />
      </svg>
    )
  },
  'mercedes-benz': {
    color: '#007A87',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1.8c4.53 0 8.2 3.67 8.2 8.2 0 4.53-3.67 8.2-8.2 8.2-4.53 0-8.2-3.67-8.2-8.2 0-4.53 3.67-8.2 8.2-8.2zm0 2.2l-1.6 5.8-5.8 1.6 5.6 1.8 1.8 5.8 1.8-5.8 5.6-1.8-5.8-1.6L12 6z" />
      </svg>
    )
  },
  audi: {
    color: '#BB0A30',
    icon: (
      <svg viewBox="0 0 34 18" width="28" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="9" r="4.8" />
        <circle cx="13.3" cy="9" r="4.8" />
        <circle cx="20.7" cy="9" r="4.8" />
        <circle cx="28" cy="9" r="4.8" />
      </svg>
    )
  },
  porsche: {
    color: '#C48A2C',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2L4.5 4.8v6.2c0 5.2 3.2 9.8 7.5 11 4.3-1.2 7.5-5.8 7.5-11V4.8L12 2zm0 2.1l5.8 2.1v4.8c0 4.1-2.4 7.7-5.8 8.8-3.4-1.1-5.8-4.7-5.8-8.8V6.2l5.8-2.1zm-.8 3.5v2.8h-2.8v1.4h2.8v2.8h1.6v-2.8h2.8v-1.4h-2.8V7.6h-1.6z" />
      </svg>
    )
  },
  volkswagen: {
    color: '#00508C',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9.5" />
        <circle cx="12" cy="12" r="8" />
        <path d="M7 8l3 8 2-5 2 5 3-8" strokeWidth="1.3" />
        <path d="M9 8l3 8 3-8" strokeWidth="1.3" />
      </svg>
    )
  },
  'land-rover': {
    color: '#005A2B',
    icon: (
      <svg viewBox="0 0 28 16" width="26" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="14" cy="8" rx="13" ry="7" />
        <path d="M5.5 8.5l3.5-3.5 3.5 3.5M12.5 9.5l3.5-3.5 3.5 3.5M19.5 8.5l3-3" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  },
  lexus: {
    color: '#1B365D',
    icon: (
      <svg viewBox="0 0 26 18" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="13" cy="9" rx="12" ry="7.5" />
        <path d="M9 5v8h8M9 13l6-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
};

const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'Automotive Engineering Excellence Since 2011',
    eyebrowAr: 'التميز في هندسة وصيانة السيارات منذ 2011',
    title: 'Dealership Quality Automotive Repair',
    titleAr: 'صيانة سيارات فاخرة بجودة الوكالة المعتمدة',
    description: 'Precision computerized diagnostics, certified factory maintenance, and performance engineering with zero dealer markup.',
    descriptionAr: 'فحص كمبيوتر دقيق، صيانة دورية معتمدة وفق معايير المصنع، وهندسة أداء احترافية بدون هوامش أسعار الوكالات.',
    primaryCta: 'Book Now',
    primaryCtaAr: 'احجز الآن',
    primaryLink: '/book',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Alpha Auto Garage master technician working on luxury vehicle'
  },
  {
    id: 2,
    eyebrow: 'Certified Factory Diagnostic Tooling',
    eyebrowAr: 'أجهزة فحص المصنع المعتمدة',
    title: 'European & Exotic Powertrain Care',
    titleAr: 'عناية فائقة بمحركات السيارات الأوروبية',
    description: 'Equipped with dealership-grade computerized diagnostic platforms, module programming suites, and factory calibration software.',
    descriptionAr: 'مجهزون بمنصات فحص الوكالات المبرمجة بالكمبيوتر وبرامج المعايرة المعتمدة من المصنع.',
    primaryCta: 'View Brands',
    primaryCtaAr: 'العلامات المعتمدة',
    primaryLink: '/brands',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'High performance sports car in workshop bay'
  },
  {
    id: 3,
    eyebrow: '12-Month / 12,000-Mile Warranty',
    eyebrowAr: 'ضمان 12 شهراً / 12,000 ميل',
    title: 'Precision Brake & Suspension Tuning',
    titleAr: 'ضبط منظومة الفرامل والمساعدات بدقة',
    description: 'Genuine Brembo, Textar, and Akebono OEM brake systems, computerized 3D laser alignment, and electronic damping calibration.',
    descriptionAr: 'أنظمة فرامل بريمبو وتكستار الأصلية، ميزان ليزر ثلاثي الأبعاد ومعايرة امتصاص الصدمات الإلكتروني.',
    primaryCta: 'Brake Service',
    primaryCtaAr: 'صيانة الفرامل',
    primaryLink: '/services/brake-repair',
    image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Performance ceramic disc brake calibration'
  },
  {
    id: 4,
    eyebrow: '100% Genuine OEM Components',
    eyebrowAr: 'قطع غيار أصلية 100%',
    title: 'Powertrain & Gearbox Rebuilds',
    titleAr: 'تجديد وصيانة نواقل الحركة والمحركات',
    description: 'Master technicians specialized in dual-clutch transmissions, high-torque automatic gearboxes, clutch adaptations, and turbocharger rebuilds.',
    descriptionAr: 'فنيون متخصصون في نواقل الحركة ثنائية القابض والأوتوماتيكية وإعادة بناء الشواحن التوربينية.',
    primaryCta: 'View Services',
    primaryCtaAr: 'عرض الخدمات',
    primaryLink: '/services/engine-diagnostics',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Precision automotive engine diagnostic'
  },
  {
    id: 5,
    eyebrow: 'Zero Dealer Surcharges & Hidden Fees',
    eyebrowAr: 'بدون رسوم إضافية أو تكاليف مخفية',
    title: 'Factory Scheduled Milestone Care',
    titleAr: 'الصيانة الدورية المجدولة من المصنع',
    description: 'Manufacturer milestone service intervals, factory synthetic fluids, and complimentary 30-point digital health evaluations.',
    descriptionAr: 'صيانة دورية بالمراحل المعتمدة من المصنع، زيوت تخليقية وفحص رقمي مجاني لحالة السيارة.',
    primaryCta: 'View Packages',
    primaryCtaAr: 'عرض الباقات',
    primaryLink: '/packages',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Luxury SUV multi-point vehicle inspection'
  }
];

export const Hero = () => {
  const { currentLang, t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Auto-advance slides every 6 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const sliderRef = useRef(null);

  // GSAP kinetic text motion on slide change
  useEffect(() => {
    if (!sliderRef.current) return;

    const activeSlideEl = sliderRef.current.querySelector('.px-hero-slide--active');
    if (!activeSlideEl) return;

    const ctx = gsap.context(() => {
      const eyebrow = activeSlideEl.querySelector('.px-hero-slide__eyebrow');
      const title = activeSlideEl.querySelector('.px-hero-slide__title');
      const desc = activeSlideEl.querySelector('.px-hero-slide__description');
      const actions = activeSlideEl.querySelector('.px-hero-slide__actions');
      const bar = activeSlideEl.querySelector('.px-hero-slide__accent-bar');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (bar) {
        tl.fromTo(bar, { scaleY: 0 }, { scaleY: 1, duration: 0.55 }, 0);
      }

      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, y: isRTL ? 14 : 14, letterSpacing: '0.15em' },
          { opacity: 1, y: 0, letterSpacing: '0.12em', duration: 0.5 },
          0.05
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 28, skewX: isRTL ? 2 : -2 },
          { opacity: 1, y: 0, skewX: 0, duration: 0.7 },
          0.12
        );
      }

      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.24
        );
      }

      if (actions) {
        tl.fromTo(
          actions,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.34
        );
      }
    }, activeSlideEl);

    return () => ctx.revert();
  }, [currentSlide, isRTL]);

  const current = HERO_SLIDES[currentSlide];

  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${GARAGE_INFO.name}, I am reaching out from your website regarding ${current.title}.`
  );

  return (
    <div
      className="px-hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Top Brand Marquee Strip - Minimal "Brand we Repair" with Brand-Colored Logos & Text */}
      <div className="px-brand-strip" aria-label={t('brandsWeRepair')}>
        <div className="px-brand-strip__container">
          <div className="px-brand-strip__header">
            <motion.span
              className="px-brand-strip__label"
              initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {t('brandsWeRepair')}
            </motion.span>
            <span className="px-brand-strip__divider" aria-hidden="true" />
          </div>

          <div className="px-brand-marquee" role="presentation">
            <div className="px-brand-marquee__track">
              {/* Loop twice for infinite seamless right-to-left scroll */}
              {[...BRANDS, ...BRANDS].map((brand, i) => {
                const config = BRAND_CONFIG[brand.id] || { color: '#0F172A', icon: null };
                return (
                  <Link
                    to="/brands"
                    key={`${brand.id}-${i}`}
                    className="px-brand-marquee__item"
                    style={{ color: config.color }}
                    title={`${brand.name} repair & diagnostics`}
                  >
                    <span className="px-brand-marquee__logo-wrap" style={{ color: config.color }}>
                      {config.icon}
                    </span>
                    <span className="px-brand-marquee__name" style={{ color: config.color }}>
                      {brand.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Slider (Exact pxpress.ae Structure) */}
      <div className="px-hero-slider" ref={sliderRef}>
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <article
              key={slide.id}
              className={`px-hero-slide ${isActive ? 'px-hero-slide--active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Background Full-Bleed Image with Subtle Zoom */}
              <div className="px-hero-slide__bg-wrap">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="px-hero-slide__bg-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="px-hero-slide__overlay-base" />
                <div className="px-hero-slide__overlay-gradient" />
              </div>

              {/* Slide Content Box */}
              <div className="container px-hero-slide__container">
                <div className="px-hero-slide__content">
                  {/* Vertical Accent Red Bar Indicator (pxpress.ae signature) */}
                  <div className="px-hero-slide__accent-bar" aria-hidden="true" />

                  <div className="px-hero-slide__inner-text">
                    <p className="px-hero-slide__eyebrow">
                      {isRTL && slide.eyebrowAr ? slide.eyebrowAr : slide.eyebrow}
                    </p>

                    <h1 className="px-hero-slide__title">
                      {isRTL && slide.titleAr ? slide.titleAr : slide.title}
                    </h1>

                    <p className="px-hero-slide__description">
                      {isRTL && slide.descriptionAr ? slide.descriptionAr : slide.description}
                    </p>

                    {/* Action Buttons: Book Appointment + WhatsApp */}
                    <div className="px-hero-slide__actions">
                      <Link
                        to={slide.primaryLink}
                        className="px-hero-btn px-hero-btn--primary"
                      >
                        <span>{isRTL && slide.primaryCtaAr ? slide.primaryCtaAr : slide.primaryCta}</span>
                        <ArrowRight size={18} />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-hero-btn px-hero-btn--whatsapp"
                        aria-label="Direct Dispatch via WhatsApp"
                      >
                        <MessageCircle size={18} />
                        <span>{t('whatsappDispatch')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Carousel Arrow Navigation (Left & Right Sleek Circular Controls) */}
        <button
          type="button"
          onClick={prevSlide}
          className="px-hero-nav px-hero-nav--prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="px-hero-nav px-hero-nav--next"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Bottom Bar: SwissAuto-Style Pill Indicators */}
        <div className="px-hero-pagination-bar">
          <div className="container px-hero-pagination-bar__inner">
            <div className="px-hero-dots">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className={`px-hero-dot ${i === currentSlide ? 'px-hero-dot--active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span className="px-hero-dot__pill" />
                </button>
              ))}
            </div>

            <div className="px-hero-counter">
              <span className="px-hero-counter__current">0{currentSlide + 1}</span>
              <span className="px-hero-counter__sep">/</span>
              <span className="px-hero-counter__total">0{HERO_SLIDES.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
