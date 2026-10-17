import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, FileCheck, Truck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { textFadeUpVariants, EASING_LUXURY } from '../common/MotionText';
import './DealershipPillars.css';

const PILLARS = [
  {
    id: 'parts',
    icon: ShieldCheck,
    title: '100% High Quality Parts',
    titleAr: 'قطع غيار أصلية عالية الجودة 100%',
    description: 'We use only genuine OEM and factory-approved replacement parts to safeguard your vehicle performance.',
    descriptionAr: 'نستخدم قطع غيار مصنعية أصلية ومعتمدة 100% لحماية أداء وموثوقية سيارتك.',
    link: '/about',
    linkText: 'Learn More',
    linkTextAr: 'اعرف المزيد'
  },
  {
    id: 'repair',
    icon: Wrench,
    title: 'Dealership Quality Repair',
    titleAr: 'صيانة احترافية بجودة الوكالة',
    description: 'Latest computerized diagnostic tools and factory-trained master mechanics specialized in luxury marques.',
    descriptionAr: 'أحدث أجهزة الفحص المبرمجة بالكمبيوتر وفنيون ومهندسون مدربون ومتخصصون في السيارات الفاخرة.',
    link: '/services',
    linkText: 'Explore Services',
    linkTextAr: 'استكشف الخدمات'
  },
  {
    id: 'warranty',
    icon: FileCheck,
    title: '12-Month Warranty Plans',
    titleAr: 'خطط ضمان لمدة 12 شهراً',
    description: 'Complete peace of mind with our 12-month / 12,000-mile warranty covering qualified parts and labor.',
    descriptionAr: 'راحة بال مطلقة مع ضمان شامل لمدة 12 شهراً / 12,000 ميل يغطي قطع الغيار وأجور اليد.',
    link: '/faq',
    linkText: 'Warranty Details',
    linkTextAr: 'تفاصيل الضمان'
  },
  {
    id: 'inspection',
    icon: Truck,
    title: 'Free 30-Point Inspection',
    titleAr: 'فحص مجاني شامل لـ 30 نقطة',
    description: 'Every booked service includes a complimentary multi-point safety and mechanical health evaluation.',
    descriptionAr: 'تشمل جميع الحجوزات فحصاً رقمياً مجانياً لسلامة المركبة وحالتها الميكانيكية بالكامل.',
    link: '/book',
    linkText: 'Book Inspection',
    linkTextAr: 'حجز الفحص'
  }
];

export const DealershipPillars = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="alpha-pillars-strip">
      <div className="container">
        <motion.div
          className="alpha-pillars-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 }
            }
          }}
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                className="alpha-pillar-card"
                variants={textFadeUpVariants}
                custom={{ delay: idx * 0.06, duration: 0.6 }}
              >
                <div className="alpha-pillar-card__icon-wrap">
                  <Icon size={24} className="alpha-pillar-card__icon" />
                </div>
                <motion.h3
                  className="alpha-pillar-card__title"
                  variants={textFadeUpVariants}
                >
                  {isRTL ? pillar.titleAr : pillar.title}
                </motion.h3>
                <motion.p
                  className="alpha-pillar-card__desc"
                  variants={textFadeUpVariants}
                >
                  {isRTL ? pillar.descriptionAr : pillar.description}
                </motion.p>
                <Link to={pillar.link} className="alpha-pillar-card__link">
                  <span>{isRTL ? pillar.linkTextAr : pillar.linkText}</span>
                  <ChevronRight size={14} className={isRTL ? 'alpha-rtl-arrow' : ''} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
