import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Search, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { textFadeUpVariants } from '../common/MotionText';
import './ProcessSteps.css';

export const ProcessSteps = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      icon: CalendarCheck,
      title: t('step1Title'),
      desc: t('step1Desc')
    },
    {
      step: '02',
      icon: Search,
      title: t('step2Title'),
      desc: t('step2Desc')
    },
    {
      step: '03',
      icon: CheckCircle,
      title: t('step3Title'),
      desc: t('step3Desc')
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: t('step4Title'),
      desc: t('step4Desc')
    }
  ];

  return (
    <section className="section alpha-process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          <motion.span className="section-tag" variants={textFadeUpVariants}>
            {t('processTag')}
          </motion.span>
          <motion.h2 className="section-title" variants={textFadeUpVariants}>
            {t('processTitle')}
          </motion.h2>
          <motion.p className="section-subtitle" variants={textFadeUpVariants}>
            {t('processSubtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="alpha-process-grid"
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
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="alpha-process-card"
                variants={textFadeUpVariants}
                custom={{ delay: idx * 0.06 }}
              >
                <div className="alpha-process-card__number">{item.step}</div>
                <div className="alpha-process-card__icon-wrap">
                  <Icon size={24} className="alpha-process-card__icon" />
                </div>
                <motion.h3 className="alpha-process-card__title" variants={textFadeUpVariants}>
                  {item.title}
                </motion.h3>
                <motion.p className="alpha-process-card__desc" variants={textFadeUpVariants}>
                  {item.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
