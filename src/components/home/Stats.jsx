import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import { textFadeUpVariants } from '../common/MotionText';
import './Stats.css';

// Component that counts up a number using GSAP
const GSAPCounter = ({ endValue, decimals = 0, suffix = '' }) => {
  const countRef = useRef(null);

  useEffect(() => {
    if (!countRef.current) return;

    const obj = { val: 0 };
    const num = parseFloat(String(endValue).replace(/[^0-9.]/g, '')) || 0;

    const anim = gsap.to(obj, {
      val: num,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: false, // We trigger smoothly on mount / view
      onUpdate: () => {
        if (countRef.current) {
          const formatted = decimals > 0 ? obj.val.toFixed(decimals) : Math.floor(obj.val).toLocaleString();
          countRef.current.innerText = `${formatted}${suffix}`;
        }
      }
    });

    return () => anim.kill();
  }, [endValue, decimals, suffix]);

  return <span ref={countRef}>0{suffix}</span>;
};

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      numeric: 15000,
      decimals: 0,
      suffix: '+',
      fallback: t('stat1Val'),
      label: t('stat1Lbl'),
      description: t('stat1Desc')
    },
    {
      numeric: 99.4,
      decimals: 1,
      suffix: '%',
      fallback: t('stat2Val'),
      label: t('stat2Lbl'),
      description: t('stat2Desc')
    },
    {
      numeric: 15,
      decimals: 0,
      suffix: '+',
      fallback: t('stat3Val'),
      label: t('stat3Lbl'),
      description: t('stat3Desc')
    },
    {
      numeric: 35,
      decimals: 0,
      suffix: '+',
      fallback: t('stat4Val'),
      label: t('stat4Lbl'),
      description: t('stat4Desc')
    }
  ];

  return (
    <section className="alpha-stats-section">
      <div className="container">
        <motion.div
          className="alpha-stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="alpha-stat-card"
              variants={textFadeUpVariants}
              custom={{ delay: idx * 0.08, duration: 0.65 }}
            >
              <div className="alpha-stat-card__value">
                <GSAPCounter
                  endValue={stat.numeric}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <motion.h3
                className="alpha-stat-card__label"
                variants={textFadeUpVariants}
              >
                {stat.label}
              </motion.h3>
              <motion.p
                className="alpha-stat-card__desc"
                variants={textFadeUpVariants}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
