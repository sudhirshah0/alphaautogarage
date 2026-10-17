import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Cpu,
  Wrench,
  Check,
  X,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { GARAGE_INFO } from '../data/garageInfo';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { textFadeUpVariants } from '../components/common/MotionText';
import './About.css';

export const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Zero Guesswork Diagnostics',
      desc: 'We never guess with your money. Our technicians run full live telemetry logs to isolate the exact failing sensor or mechanical component before recommending replacement.'
    },
    {
      icon: Award,
      title: 'OEM Certified Components',
      desc: 'We strictly install manufacturer-certified parts from premier tier-1 engineering partners: Bosch, Brembo, Mann, Lemförder, and Mahle.'
    },
    {
      icon: Cpu,
      title: 'Dealer-Level Software Suites',
      desc: 'From BMW ISTA and Mercedes Xentry to Porsche PIWIS, our workstations run the identical software dealership master mechanics use, without the inflated dealer labor rates.'
    },
    {
      icon: Wrench,
      title: '100% Upfront Transparency',
      desc: 'You receive itemized photographic inspections directly to your smartphone. Work begins exclusively with your written authorization.'
    }
  ];

  const comparisonRows = [
    { feature: 'Dealer-Level Computer Diagnostics', alpha: true, dealer: true, quickLube: false },
    { feature: '100% Upfront Itemized Digital Estimates', alpha: true, dealer: false, quickLube: false },
    { feature: 'No Dealer Service Surcharges', alpha: true, dealer: false, quickLube: true },
    { feature: 'Direct Dialogue with Master Mechanic', alpha: true, dealer: false, quickLube: false },
    { feature: 'OEM Factory-Certified Fluids & Parts', alpha: true, dealer: true, quickLube: false },
    { feature: '12-Month / 12,000-Mile Parts & Labor Warranty', alpha: true, dealer: true, quickLube: false },
    { feature: 'Same-Day Fast Turnaround on Routine Service', alpha: true, dealer: false, quickLube: true }
  ];

  const teamMembers = [
    {
      name: 'Julian Sterling',
      role: 'Master Diagnostic Technician & Founder',
      exp: '18 Years Experience',
      certs: 'ASE Master Certified • BMW Master Guild Graduate',
      bio: 'Former lead diagnostic specialist at European dealership networks. Founded Alpha Auto to bring uncompromising precision to independent owners.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Roman Alvarez',
      role: 'Powertrain & Transmission Specialist',
      exp: '14 Years Experience',
      certs: 'Porsche PDK Certified • ZF Drivetrain Master',
      bio: 'Specializes in high-performance dual-clutch transmission rebuilding, mechatronics valve bodies, and turbocharger rebuilds.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kaito Tanaka',
      role: 'Japanese Performance & Hybrid Lead',
      exp: '12 Years Experience',
      certs: 'Toyota/Lexus Hybrid Master • CAN-Bus Electrical Tech',
      bio: 'Expertise in high-voltage hybrid drive systems, VTEC/i-VTEC valvetrain tuning, and advanced electronic architecture.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="alpha-about-page">
      <SEO
        title="About Alpha Auto Garage | Precision & Integrity"
        description="Learn about Alpha Auto Garage's origin, our certified master technicians, our 12-month warranty, and why drivers trust us over inflated dealership service departments."
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
              ABOUT ALPHA AUTO
            </motion.h3>
            <motion.h1 className="alpha-page-title" variants={textFadeUpVariants}>
              Built on Precision. Driven by Trust.
            </motion.h1>
            <motion.p className="alpha-page-desc" variants={textFadeUpVariants}>
              Founded to eliminate the frustration, opaque estimates, and inflated fees of traditional dealership service centers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story & Workshop Section */}
      <section className="section alpha-about-story">
        <div className="container alpha-about-story__grid">
          <motion.div
            className="alpha-about-story__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.span className="section-tag" variants={textFadeUpVariants}>
              How It Started
            </motion.span>
            <motion.h2 className="section-title" variants={textFadeUpVariants}>
              A Different Kind of Auto Garage
            </motion.h2>
            <motion.p className="alpha-about-story__p" variants={textFadeUpVariants}>
              Alpha Auto Garage was established with a singular mission: to provide dealership-grade technical expertise
              with the transparency and personal dedication of a private racing paddock.
            </motion.p>
            <motion.p className="alpha-about-story__p" variants={textFadeUpVariants}>
              Modern vehicles are complex rolling supercomputers. Too many generic shops replace parts blindly on your dime,
              while franchise dealerships charge exorbitant markups for routine maintenance. We bridge that gap by equipping
              our bays with factory diagnostic suites (BMW ISTA, Porsche PIWIS, Mercedes Xentry) operated exclusively by master-certified technicians.
            </motion.p>

            <motion.div className="alpha-about-story__quote" variants={textFadeUpVariants}>
              <p>
                "If we cannot prove why a part failed with digital telemetry, we will never ask you to replace it."
              </p>
              <span>— Julian Sterling, Founder</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="alpha-about-story__media"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="alpha-about-story__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1000&q=80"
                alt="Alpha Auto Garage cleanroom workshop facility"
                className="alpha-about-story__img"
              />
              <div className="alpha-about-story__badge">
                <ShieldCheck size={24} className="text-accent" />
                <div>
                  <strong>Cleanroom Standard</strong>
                  <span>Epoxy-coated bays & laser-aligned equipment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section section-darker alpha-values-section">
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
              Core Principles
            </motion.span>
            <motion.h2 className="section-title" variants={textFadeUpVariants}>
              The Four Pillars of Alpha Auto
            </motion.h2>
            <motion.p className="section-subtitle" variants={textFadeUpVariants}>
              Every turn of the wrench is held to rigorous quality and safety benchmarks.
            </motion.p>
          </motion.div>

          <motion.div
            className="alpha-values-grid"
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
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div key={idx} className="alpha-value-card" variants={textFadeUpVariants}>
                  <div className="alpha-value-card__icon-wrap">
                    <Icon size={26} className="alpha-value-card__icon" />
                  </div>
                  <h3 className="alpha-value-card__title">{val.title}</h3>
                  <p className="alpha-value-card__desc">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="section alpha-comparison-section">
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
              Transparent Difference
            </motion.span>
            <motion.h2 className="section-title" variants={textFadeUpVariants}>
              Why Drivers Choose Alpha Auto
            </motion.h2>
            <motion.p className="section-subtitle" variants={textFadeUpVariants}>
              See how our service model compares against franchise dealerships and generic quick-lube chains.
            </motion.p>
          </motion.div>

          <motion.div
            className="alpha-comparison-table-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <table className="alpha-comparison-table">
              <thead>
                <tr>
                  <th>Service Standard</th>
                  <th className="alpha-col-highlight">Alpha Auto Garage</th>
                  <th>Franchise Dealership</th>
                  <th>Generic Quick-Lube</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.feature}</td>
                    <td className="alpha-col-highlight">
                      {row.alpha ? <Check className="alpha-check" size={20} /> : <X className="alpha-cross" size={20} />}
                    </td>
                    <td>
                      {row.dealer ? <Check className="alpha-check-muted" size={20} /> : <X className="alpha-cross" size={20} />}
                    </td>
                    <td>
                      {row.quickLube ? <Check className="alpha-check-muted" size={20} /> : <X className="alpha-cross" size={20} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Certified Master Technicians */}
      <section className="section section-darker alpha-team-section">
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
              Our Master Mechanics
            </motion.span>
            <motion.h2 className="section-title" variants={textFadeUpVariants}>
              Decades of Certified Track & Road Expertise
            </motion.h2>
            <motion.p className="section-subtitle" variants={textFadeUpVariants}>
              Meet the specialists responsible for your vehicle's safety and mechanical performance.
            </motion.p>
          </motion.div>

          <motion.div
            className="alpha-team-grid"
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
            {teamMembers.map((member, idx) => (
              <motion.div key={idx} className="alpha-team-card" variants={textFadeUpVariants}>
                <div className="alpha-team-card__img-wrap">
                  <img src={member.image} alt={member.name} className="alpha-team-card__img" />
                  <span className="alpha-team-card__exp">{member.exp}</span>
                </div>
                <div className="alpha-team-card__body">
                  <h3 className="alpha-team-card__name">{member.name}</h3>
                  <span className="alpha-team-card__role">{member.role}</span>
                  <div className="alpha-team-card__certs">{member.certs}</div>
                  <p className="alpha-team-card__bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section alpha-about-cta">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.h2 className="section-title" variants={textFadeUpVariants}>
            Experience the Difference in Person
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto 2rem' }} variants={textFadeUpVariants}>
            Visit our workshop at {GARAGE_INFO.address.formatted} or book your appointment online.
          </motion.p>
          <motion.div className="alpha-about-cta__actions" variants={textFadeUpVariants}>
            <Button to="/book" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Book a Service Appointment
            </Button>
            <Button to="/gallery" variant="secondary" size="lg">
              Tour Our Workshop Gallery
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
