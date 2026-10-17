import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Car
} from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { DealershipPillars } from '../components/home/DealershipPillars';
import { Stats } from '../components/home/Stats';
import { ProcessSteps } from '../components/home/ProcessSteps';
import { Accordion } from '../components/common/Accordion';
import { SERVICES } from '../data/servicesData';
import { BRANDS } from '../data/brandsData';
import { REVIEWS } from '../data/reviewsData';
import { ACCESSORIES } from '../data/accessoriesData';
import { FAQS } from '../data/faqData';
import { GARAGE_INFO } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';
import { MotionSectionHeader, MotionText, textFadeUpVariants } from '../components/common/MotionText';
import './Home.css';

// Map icon names to lucide components
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

export const Home = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { key: 'All', label: t('catAll') },
    { key: 'Diagnostics', label: t('catDiagnostics') },
    { key: 'Brakes & Suspension', label: t('catBrakes') },
    { key: 'Maintenance', label: t('catMaintenance') },
    { key: 'Electrical & AC', label: t('catElectrical') }
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4)));

  const homeFaqs = isRTL
    ? [
        { id: 'faq-1', question: t('faq1Q'), answer: t('faq1A') },
        { id: 'faq-2', question: t('faq2Q'), answer: t('faq2A') },
        { id: 'faq-3', question: t('faq3Q'), answer: t('faq3A') },
        { id: 'faq-4', question: t('faq4Q'), answer: t('faq4A') },
        { id: 'faq-5', question: t('faq5Q'), answer: t('faq5A') }
      ]
    : FAQS.slice(0, 5);

  const displayReviews = REVIEWS.slice(0, 3).map((rev, index) => {
    if (isRTL) {
      const idx = index + 1;
      return {
        ...rev,
        text: t(`rev${idx}Text`),
        car: t(`rev${idx}Car`)
      };
    }
    return rev;
  });

  return (
    <div className="alpha-home">
      <SEO
        title={isRTL ? "أفضل مركز صيانة سيارات أوروبية ويابانية بديل للوكالة | ألفا أوتو" : "Best Dealership Alternative Car Service Center | Alpha Auto Garage"}
        description={isRTL ? "يقدم كراج ألفا أوتو خدمات صيانة وإصلاح السيارات بجودة الوكالة، فحص كمبيوتر دقيق، قطع غيار أصلية وضمان 12 شهراً." : "Alpha Auto Garage provides dealer-quality European & Japanese car repair, computerized diagnostics, OEM parts, 12-month warranty, and scheduled maintenance."}
      />

      {/* 1. SwissAuto-Style Hero */}
      <Hero />

      {/* 2. SwissAuto-Style 4 Pillar Feature Banner */}
      <DealershipPillars />

      {/* 3. Brands We Service (Replicating SwissAuto's "box brands") */}
      <section className="section alpha-home-brands">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('brandsSub')}
            title={t('brandsTitle')}
            desc={t('brandsDesc')}
          />

          <motion.div
            className="alpha-brands-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
          >
            {BRANDS.map((brand) => (
              <motion.div key={brand.id} variants={textFadeUpVariants}>
                <Link to="/brands" className="alpha-brand-card">
                  <div className="alpha-brand-card__img-wrap">
                    <img src={brand.image} alt={brand.name} className="alpha-brand-card__img" />
                  </div>
                  <div className="alpha-brand-card__body">
                    <h4 className="alpha-brand-card__name">{brand.name}</h4>
                    <p className="alpha-brand-card__tagline">{brand.tagline}</p>
                    <div className="alpha-brand-card__models">
                      <span>{t('popular')}</span> {brand.popularModels.slice(0, 3).join(', ')}
                    </div>
                    <div className="alpha-brand-card__footer">
                      <span className="alpha-brand-card__link">
                        <span>{t('viewServices')}</span>
                        <ChevronRight size={14} className={isRTL ? 'alpha-rtl-arrow' : ''} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="alpha-brands-cta">
            <Button to="/brands" variant="outline" size="md" icon={ChevronRight} iconPosition="right">
              {t('viewAllBrandsBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* 4. What We Offer (Replicating SwissAuto's "WHAT WE OFFER") */}
      <section className="section alpha-home-services">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('servicesSub')}
            title={t('servicesTitle')}
            desc={t('servicesDesc')}
          />

          {/* Category Tabs */}
          <div className="alpha-services-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`alpha-services-tab ${activeCategory === cat.key ? 'alpha-services-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            className="alpha-home-services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Wrench;
              const svcKey = service.id.replace(/-/g, '_');
              const cardTitle = t(`service_${svcKey}_title`) !== `service_${svcKey}_title` ? t(`service_${svcKey}_title`) : service.title;
              const cardDesc = t(`service_${svcKey}_desc`) !== `service_${svcKey}_desc` ? t(`service_${svcKey}_desc`) : service.shortDescription;
              const cardPrice = t(`service_${svcKey}_price`) !== `service_${svcKey}_price` ? t(`service_${svcKey}_price`) : service.priceRange;
              const cardTime = t(`service_${svcKey}_time`) !== `service_${svcKey}_time` ? t(`service_${svcKey}_time`) : service.turnaroundTime;

              return (
                <motion.div
                  key={service.id}
                  className="alpha-service-card"
                  variants={textFadeUpVariants}
                >
                  <div className="alpha-service-card__top">
                    <div className="alpha-service-card__icon-wrap">
                      <IconComponent size={24} className="alpha-service-card__icon" />
                    </div>
                    <Badge variant="accent">{service.category}</Badge>
                  </div>

                  <h3 className="alpha-service-card__title">{cardTitle}</h3>
                  <p className="alpha-service-card__desc">{cardDesc}</p>

                  <div className="alpha-service-card__included">
                    {service.includedWork.slice(0, 3).map((item, i) => (
                      <div key={i} className="alpha-service-card__included-item">
                        <CheckCircle2 size={13} className="text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="alpha-service-card__meta">
                    <span className="alpha-service-card__price">{cardPrice}</span>
                    <span className="alpha-service-card__time">⏱ {cardTime}</span>
                  </div>

                  <div className="alpha-service-card__actions">
                    <Link
                      to={`/services/${service.slug}`}
                      className="alpha-service-card__detail-link"
                    >
                      <span>{t('details')}</span>
                      <ChevronRight size={14} className={isRTL ? 'alpha-rtl-arrow' : ''} />
                    </Link>

                    <Button
                      to={`/book?service=${service.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      {t('bookNow')}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="alpha-home-services__bottom-cta">
            <Button to="/services" variant="outline" size="lg" icon={ChevronRight} iconPosition="right">
              {t('exploreAllServicesBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Replicating SwissAuto's "Benefit hm-why-choose") */}
      <section className="section alpha-why-choose">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('whySub')}
            title={t('whyTitle')}
            desc={t('whyDesc')}
          />

          <motion.div
            className="alpha-why-grid"
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
            <motion.div className="alpha-why-card" variants={textFadeUpVariants}>
              <div className="alpha-why-card__num">01</div>
              <h3 className="alpha-why-card__title">{t('why1Title')}</h3>
              <p className="alpha-why-card__desc">{t('why1Desc')}</p>
              <ul className="alpha-why-card__list">
                <li><CheckCircle2 size={15} /> {t('why1F1')}</li>
                <li><CheckCircle2 size={15} /> {t('why1F2')}</li>
                <li><CheckCircle2 size={15} /> {t('why1F3')}</li>
              </ul>
            </motion.div>

            <motion.div className="alpha-why-card" variants={textFadeUpVariants}>
              <div className="alpha-why-card__num">02</div>
              <h3 className="alpha-why-card__title">{t('why2Title')}</h3>
              <p className="alpha-why-card__desc">{t('why2Desc')}</p>
              <ul className="alpha-why-card__list">
                <li><CheckCircle2 size={15} /> {t('why2F1')}</li>
                <li><CheckCircle2 size={15} /> {t('why2F2')}</li>
                <li><CheckCircle2 size={15} /> {t('why2F3')}</li>
              </ul>
            </motion.div>

            <motion.div className="alpha-why-card" variants={textFadeUpVariants}>
              <div className="alpha-why-card__num">03</div>
              <h3 className="alpha-why-card__title">{t('why3Title')}</h3>
              <p className="alpha-why-card__desc">{t('why3Desc')}</p>
              <ul className="alpha-why-card__list">
                <li><CheckCircle2 size={15} /> {t('why3F1')}</li>
                <li><CheckCircle2 size={15} /> {t('why3F2')}</li>
                <li><CheckCircle2 size={15} /> {t('why3F3')}</li>
              </ul>
            </motion.div>

            <motion.div className="alpha-why-card" variants={textFadeUpVariants}>
              <div className="alpha-why-card__num">04</div>
              <h3 className="alpha-why-card__title">{t('why4Title')}</h3>
              <p className="alpha-why-card__desc">{t('why4Desc')}</p>
              <ul className="alpha-why-card__list">
                <li><CheckCircle2 size={15} /> {t('why4F1')}</li>
                <li><CheckCircle2 size={15} /> {t('why4F2')}</li>
                <li><CheckCircle2 size={15} /> {t('why4F3')}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Trust Statistics & 4-Step Process */}
      <Stats />
      <ProcessSteps />

      {/* 7. Performance Accessories Preview */}
      <section className="section alpha-home-accessories">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('accSub')}
            title={t('accTitle')}
            desc={t('accDesc')}
          />

          <motion.div
            className="alpha-home-accessories__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {ACCESSORIES.slice(0, 4).map((item) => (
              <motion.div key={item.id} className="alpha-accessory-card" variants={textFadeUpVariants}>
                <div className="alpha-accessory-card__img-wrap">
                  <img src={item.image} alt={item.name} className="alpha-accessory-card__img" />
                  <span className="alpha-accessory-card__tag">{item.tag}</span>
                </div>
                <div className="alpha-accessory-card__body">
                  <div className="alpha-accessory-card__cat">{item.category}</div>
                  <h4 className="alpha-accessory-card__name">{item.name}</h4>
                  <p className="alpha-accessory-card__desc">{item.description}</p>
                  <div className="alpha-accessory-card__footer">
                    <span className="alpha-accessory-card__price">{item.price}</span>
                    <Button to="/accessories" variant="secondary" size="sm">
                      {t('details')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="alpha-home-accessories__cta">
            <Button to="/accessories" variant="outline" size="lg" icon={ChevronRight} iconPosition="right">
              {t('accBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Customer Reviews Preview */}
      <section className="section alpha-home-reviews">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('reviewsSub')}
            title={t('reviewsTitle')}
            desc={t('reviewsDesc')}
          />

          <motion.div
            className="alpha-home-reviews__grid"
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
            {displayReviews.map((review) => (
              <motion.div key={review.id} className="alpha-review-card" variants={textFadeUpVariants}>
                <div className="alpha-review-card__header">
                  <div className="alpha-review-card__stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={24} className="alpha-review-card__quote-icon" />
                </div>

                <p className="alpha-review-card__text">"{review.text}"</p>

                <div className="alpha-review-card__author-wrap">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="alpha-review-card__avatar"
                  />
                  <div>
                    <h4 className="alpha-review-card__author">{review.author}</h4>
                    <span className="alpha-review-card__car">{review.car}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="alpha-home-reviews__cta">
            <Button to="/reviews" variant="secondary" size="md">
              {t('reviewsBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (Replicating SwissAuto's FAQ section) */}
      <section className="section alpha-home-faq">
        <div className="container">
          <MotionSectionHeader
            subtitle={t('faqSub')}
            title={t('faqTitle')}
            desc={t('faqDesc')}
          />

          <motion.div
            className="alpha-home-faq__container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textFadeUpVariants}
          >
            <Accordion items={homeFaqs} />
          </motion.div>

          <div className="alpha-home-faq__cta">
            <Button to="/faq" variant="outline" size="md" icon={ChevronRight} iconPosition="right">
              {t('faqBtn')}
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Final High-Impact Booking CTA Strip */}
      <section className="alpha-final-cta">
        <div className="container">
          <motion.div
            className="alpha-final-cta__box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, duration: 0.7 }
              }
            }}
          >
            <div className="alpha-final-cta__content">
              <motion.span className="alpha-final-cta__badge" variants={textFadeUpVariants}>
                {t('ctaBadge')}
              </motion.span>
              <motion.h2 className="alpha-final-cta__title" variants={textFadeUpVariants}>
                {t('ctaTitle')}
              </motion.h2>
              <motion.p className="alpha-final-cta__desc" variants={textFadeUpVariants}>
                {t('ctaDesc')}
              </motion.p>
              <motion.div className="alpha-final-cta__actions" variants={textFadeUpVariants}>
                <Button to="/book" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  {t('ctaBookBtn')}
                </Button>
                <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-final-cta__phone">
                  <Phone size={18} />
                  <span>{t('ctaCall')} {GARAGE_INFO.phone}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
