import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Wind,
  Compass,
  Zap,
  Wrench,
  Tag,
  Check,
  FileCheck
} from 'lucide-react';
import { GARAGE_INFO, buildWhatsAppUrl } from '../../data/garageInfo';
import { SERVICES } from '../../data/servicesData';
import { BRANDS } from '../../data/brandsData';
import { PACKAGES } from '../../data/packagesData';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const serviceIconMap = {
  Droplets,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Wind,
  Compass,
  Zap,
  Wrench
};

export const Navbar = () => {
  const { currentLang, switchLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Exactly 2 languages: English and UAE
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' }
  ];

  const selectedLang = languages.find((l) => l.code === currentLang) || languages[0];

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setBrandsDropdownOpen(false);
    setPackagesDropdownOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Handle sticky navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${GARAGE_INFO.name}, I am reaching out from your website navigation.`
  );

  return (
    <header className={`alpha-navbar ${scrolled ? 'alpha-navbar--scrolled' : ''}`}>
        <div className="container alpha-navbar__container">
          {/* Logo */}
          <Link to="/" className="alpha-navbar__logo" aria-label="Alpha Auto Garage Home">
            <img
              src="/logo-dark.png"
              alt="Alpha Auto Garage Logo"
              className="alpha-navbar__logo-img"
            />
            <div className="alpha-navbar__brand-text">
              <span className="alpha-navbar__brand-name">ALPHA AUTO</span>
              <span className="alpha-navbar__brand-tag">GARAGE & TUNING</span>
            </div>
          </Link>

          {/* Desktop Navigation - Exact items requested: Home, About, Offers, Brands, Services, Packages, Contact, Language */}
          <nav className="alpha-navbar__nav" aria-label="Main Navigation">
            <ul className="alpha-navbar__menu">
              {/* 1. Home */}
              <li className="alpha-navbar__item">
                 <NavLink
                   to="/"
                   end
                   className={({ isActive }) =>
                     `alpha-navbar__link ${isActive ? 'alpha-navbar__link--active' : ''}`
                   }
                 >
                   {t('home')}
                 </NavLink>
               </li>

               {/* 2. About */}
               <li className="alpha-navbar__item">
                 <NavLink
                   to="/about"
                   className={({ isActive }) =>
                     `alpha-navbar__link ${isActive ? 'alpha-navbar__link--active' : ''}`
                   }
                 >
                   {t('about')}
                 </NavLink>
               </li>

               {/* 3. Offers */}
               <li className="alpha-navbar__item">
                 <NavLink
                   to="/offers"
                   className={({ isActive }) =>
                     `alpha-navbar__link ${isActive ? 'alpha-navbar__link--active' : ''}`
                   }
                 >
                   {t('offers')}
                 </NavLink>
               </li>

               {/* 4. Brands Dropdown */}
               <li
                 className="alpha-navbar__item alpha-navbar__item--has-dropdown"
                 onMouseEnter={() => setBrandsDropdownOpen(true)}
                 onMouseLeave={() => setBrandsDropdownOpen(false)}
               >
                 <NavLink
                   to="/brands"
                   className={({ isActive }) =>
                     `alpha-navbar__link alpha-navbar__link--dropdown ${
                       isActive || brandsDropdownOpen ? 'alpha-navbar__link--active' : ''
                     }`
                   }
                 >
                   <span>{t('brands')}</span>
                   <ChevronDown size={14} className="alpha-navbar__chevron" />
                 </NavLink>

                 {/* Brands Dropdown */}
                 <div
                   className={`alpha-mega-menu alpha-mega-menu--brands ${
                     brandsDropdownOpen ? 'alpha-mega-menu--open' : ''
                   }`}
                 >
                   <div className="alpha-dropdown-menu__list">
                     {BRANDS.map((brand) => (
                       <Link
                         key={brand.id}
                         to="/brands"
                         className="alpha-dropdown-item"
                         onClick={() => setBrandsDropdownOpen(false)}
                       >
                         <span className="alpha-dropdown-item__text">{brand.name}</span>
                         <ChevronRight size={14} className="alpha-dropdown-item__arrow" />
                       </Link>
                     ))}
                   </div>
                   <div className="alpha-dropdown-menu__footer">
                     <Link to="/brands" className="alpha-dropdown-menu__all-link" onClick={() => setBrandsDropdownOpen(false)}>
                       <span>{t('viewAllBrands')}</span>
                       <ArrowRight size={13} />
                     </Link>
                   </div>
                 </div>
               </li>

               {/* 5. Services Dropdown */}
               <li
                 className="alpha-navbar__item alpha-navbar__item--has-dropdown"
                 onMouseEnter={() => setServicesDropdownOpen(true)}
                 onMouseLeave={() => setServicesDropdownOpen(false)}
               >
                 <NavLink
                   to="/services"
                   className={({ isActive }) =>
                     `alpha-navbar__link alpha-navbar__link--dropdown ${
                       isActive || servicesDropdownOpen ? 'alpha-navbar__link--active' : ''
                     }`
                   }
                 >
                   <span>{t('services')}</span>
                   <ChevronDown size={14} className="alpha-navbar__chevron" />
                 </NavLink>

                 {/* Services Dropdown */}
                 <div
                   className={`alpha-mega-menu alpha-mega-menu--services ${
                     servicesDropdownOpen ? 'alpha-mega-menu--open' : ''
                   }`}
                 >
                   <div className="alpha-dropdown-menu__list alpha-dropdown-menu__list--services">
                     {SERVICES.map((service) => {
                       const Icon = serviceIconMap[service.iconName] || Wrench;
                       const serviceKey = `service_${service.id.replace(/-/g, '_')}_title`;
                       const serviceTitle = t(serviceKey) !== serviceKey ? t(serviceKey) : service.title;
                       return (
                         <Link
                           key={service.id}
                           to={`/services/${service.slug}`}
                           className="alpha-dropdown-item"
                           onClick={() => setServicesDropdownOpen(false)}
                         >
                           <span className="alpha-dropdown-item__icon-wrap">
                             <Icon size={15} />
                           </span>
                           <span className="alpha-dropdown-item__text">{serviceTitle}</span>
                           <ChevronRight size={14} className="alpha-dropdown-item__arrow" />
                         </Link>
                       );
                     })}
                   </div>
                   <div className="alpha-dropdown-menu__footer">
                     <Link to="/services" className="alpha-dropdown-menu__all-link" onClick={() => setServicesDropdownOpen(false)}>
                       <span>{t('viewAllServices')}</span>
                       <ArrowRight size={13} />
                     </Link>
                   </div>
                 </div>
               </li>

               {/* 6. Packages Dropdown */}
               <li
                 className="alpha-navbar__item alpha-navbar__item--has-dropdown"
                 onMouseEnter={() => setPackagesDropdownOpen(true)}
                 onMouseLeave={() => setPackagesDropdownOpen(false)}
               >
                 <NavLink
                   to="/packages"
                   className={({ isActive }) =>
                     `alpha-navbar__link alpha-navbar__link--dropdown ${
                       isActive || packagesDropdownOpen ? 'alpha-navbar__link--active' : ''
                     }`
                   }
                 >
                   <span>{t('packages')}</span>
                   <ChevronDown size={14} className="alpha-navbar__chevron" />
                 </NavLink>

                 {/* Packages Dropdown */}
                 <div
                   className={`alpha-mega-menu alpha-mega-menu--packages ${
                     packagesDropdownOpen ? 'alpha-mega-menu--open' : ''
                   }`}
                 >
                   <div className="alpha-dropdown-menu__list">
                     {PACKAGES.map((pkg) => {
                       const pkgTitleKey = `pkg_${pkg.id.replace(/-/g, '_')}_title`;
                       const pkgTagKey = `pkg_${pkg.id.replace(/-/g, '_')}_tagline`;
                       const pkgTitle = t(pkgTitleKey) !== pkgTitleKey ? t(pkgTitleKey) : pkg.title;
                       const pkgTag = t(pkgTagKey) !== pkgTagKey ? t(pkgTagKey) : pkg.tagline;
                       return (
                         <Link
                           key={pkg.id}
                           to="/packages"
                           className="alpha-dropdown-item alpha-dropdown-item--package"
                           onClick={() => setPackagesDropdownOpen(false)}
                         >
                           <div className="alpha-dropdown-item__pkg-info">
                             <span className="alpha-dropdown-item__text">{pkgTitle}</span>
                             <span className="alpha-dropdown-item__pkg-tag">{pkgTag}</span>
                           </div>
                           <span className="alpha-dropdown-item__pkg-price">{pkg.price}</span>
                         </Link>
                       );
                     })}
                   </div>
                   <div className="alpha-dropdown-menu__footer">
                     <Link to="/packages" className="alpha-dropdown-menu__all-link" onClick={() => setPackagesDropdownOpen(false)}>
                       <span>{t('comparePackages')}</span>
                       <ArrowRight size={13} />
                     </Link>
                   </div>
                 </div>
               </li>

              {/* 7. Contact */}
              <li className="alpha-navbar__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `alpha-navbar__link ${isActive ? 'alpha-navbar__link--active' : ''}`
                  }
                >
                  {t('contact')}
                </NavLink>
              </li>

              {/* 8. Language Selector */}
              <li
                className="alpha-navbar__item alpha-navbar__item--has-dropdown"
                onMouseEnter={() => setLangDropdownOpen(true)}
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="alpha-navbar__lang-btn"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-label="Select language"
                >
                  <span className="alpha-navbar__lang-flag">{selectedLang.flag}</span>
                  <span className="alpha-navbar__lang-name">{selectedLang.name}</span>
                  <ChevronDown size={13} className="alpha-navbar__chevron" />
                </button>

                {/* Language Dropdown */}
                <div
                  className={`alpha-lang-dropdown ${
                    langDropdownOpen ? 'alpha-lang-dropdown--open' : ''
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`alpha-lang-dropdown__item ${
                        selectedLang.code === lang.code ? 'alpha-lang-dropdown__item--active' : ''
                      }`}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <span className="alpha-lang-flag">{lang.flag}</span>
                      <span className="alpha-lang-text">{lang.name}</span>
                      {selectedLang.code === lang.code && <Check size={14} className="text-accent" />}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          {/* Right: Book Now CTA & Mobile Hamburger Toggle */}
          <div className="alpha-navbar__actions">
            <NavLink
              to="/book"
              className="alpha-swiss-skew-btn alpha-navbar__desktop-cta"
            >
              <span className="alpha-swiss-skew-btn__inner">
                <Calendar size={15} />
                <span>{t('bookNow')}</span>
              </span>
            </NavLink>

            <button
              type="button"
              className="alpha-navbar__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`alpha-mobile-drawer ${mobileMenuOpen ? 'alpha-mobile-drawer--open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="alpha-mobile-drawer__content">
            <ul className="alpha-mobile-drawer__menu">
              {/* Home */}
              <li className="alpha-mobile-drawer__item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `alpha-mobile-drawer__link ${isActive ? 'alpha-mobile-drawer__link--active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('home')}
                </NavLink>
              </li>

              {/* About */}
              <li className="alpha-mobile-drawer__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `alpha-mobile-drawer__link ${isActive ? 'alpha-mobile-drawer__link--active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('about')}
                </NavLink>
              </li>

              {/* Offers */}
              <li className="alpha-mobile-drawer__item">
                <NavLink
                  to="/offers"
                  className={({ isActive }) =>
                    `alpha-mobile-drawer__link ${isActive ? 'alpha-mobile-drawer__link--active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('offers')}
                </NavLink>
              </li>

              {/* Brands Accordion */}
              <li className="alpha-mobile-drawer__item">
                <div
                  className="alpha-mobile-drawer__toggle-row"
                  onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                >
                  <NavLink
                    to="/brands"
                    className="alpha-mobile-drawer__link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('brands')}
                  </NavLink>
                  <button
                    type="button"
                    className="alpha-mobile-drawer__sub-toggle"
                    aria-label="Toggle brands list"
                  >
                    <ChevronDown
                      size={18}
                      className={mobileBrandsOpen ? 'alpha-rotate-180' : ''}
                    />
                  </button>
                </div>
                {mobileBrandsOpen && (
                  <ul className="alpha-mobile-sublist alpha-mobile-sublist--brands">
                    {BRANDS.map((b) => (
                      <li key={b.id}>
                        <Link to="/brands" onClick={() => setMobileMenuOpen(false)}>
                          {b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Services Accordion */}
              <li className="alpha-mobile-drawer__item">
                <div
                  className="alpha-mobile-drawer__toggle-row"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <NavLink
                    to="/services"
                    className="alpha-mobile-drawer__link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('services')}
                  </NavLink>
                  <button
                    type="button"
                    className="alpha-mobile-drawer__sub-toggle"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown
                      size={18}
                      className={mobileServicesOpen ? 'alpha-rotate-180' : ''}
                    />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <ul className="alpha-mobile-sublist">
                    {SERVICES.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/services"
                        className="alpha-mobile-sublist__all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t('viewAllServices')} →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Packages Accordion */}
              <li className="alpha-mobile-drawer__item">
                <div
                  className="alpha-mobile-drawer__toggle-row"
                  onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)}
                >
                  <NavLink
                    to="/packages"
                    className="alpha-mobile-drawer__link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('packages')}
                  </NavLink>
                  <button
                    type="button"
                    className="alpha-mobile-drawer__sub-toggle"
                    aria-label="Toggle packages list"
                  >
                    <ChevronDown
                      size={18}
                      className={mobilePackagesOpen ? 'alpha-rotate-180' : ''}
                    />
                  </button>
                </div>
                {mobilePackagesOpen && (
                  <ul className="alpha-mobile-sublist">
                    {PACKAGES.map((pkg) => (
                      <li key={pkg.id}>
                        <Link
                          to="/packages"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {pkg.title} ({pkg.price})
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Contact */}
              <li className="alpha-mobile-drawer__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `alpha-mobile-drawer__link ${isActive ? 'alpha-mobile-drawer__link--active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('contact')}
                </NavLink>
              </li>

              {/* Language Selection in Drawer */}
              <li className="alpha-mobile-drawer__item">
                <div className="alpha-mobile-drawer__lang-row">
                  <span className="alpha-mobile-drawer__lang-label">Language:</span>
                  <div className="alpha-mobile-drawer__lang-buttons">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        className={`alpha-mobile-lang-chip ${selectedLang.code === l.code ? 'alpha-mobile-lang-chip--active' : ''}`}
                        onClick={() => switchLanguage(l.code)}
                      >
                        {l.flag} {l.name}
                      </button>
                    ))}
                  </div>
                </div>
              </li>

              {/* Book Now (Signature Skewed Button in drawer) */}
              <li className="alpha-mobile-drawer__item" style={{ marginTop: '1rem' }}>
                <NavLink
                  to="/book"
                  className="alpha-swiss-skew-btn alpha-swiss-skew-btn--full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="alpha-swiss-skew-btn__inner">
                    <Calendar size={18} />
                    <span>{t('bookNow')}</span>
                  </span>
                </NavLink>
              </li>
            </ul>

            {/* Quick Contact Footnote in Drawer */}
            <div className="alpha-mobile-drawer__footer">
              <div className="alpha-mobile-drawer__direct-btns">
                <a href={`tel:${GARAGE_INFO.phoneRaw}`} className="alpha-mobile-drawer__call-btn">
                  <Phone size={16} />
                  <span>Call {GARAGE_INFO.phone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alpha-mobile-drawer__wa-btn"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="alpha-mobile-drawer__aux">
                <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <span>•</span>
                <Link to="/accessories" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
                <span>•</span>
                <Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
                <span>•</span>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};
