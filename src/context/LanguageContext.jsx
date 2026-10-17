import React, { createContext, useContext, useState, useEffect } from 'react';

// Comprehensive English & UAE Arabic translations dictionary
export const TRANSLATIONS = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    offers: 'Offers',
    brands: 'Brands',
    services: 'Services',
    packages: 'Packages',
    contact: 'Contact',
    bookNow: 'Book Now',
    brandsWeRepair: 'Brand we Repair',
    viewAllBrands: 'View All Brands',
    viewAllServices: 'View All Services',
    comparePackages: 'Compare All Packages',
    reserveBay: 'Reserve a Bay',

    // Hero
    heroTitle: 'Dealership Quality Automotive Repair',
    heroEyebrow: 'Automotive Engineering Excellence Since 2011',
    heroDesc: 'Precision computerized diagnostics, certified factory maintenance, and performance engineering with zero dealer markup.',
    bookAppointment: 'Book an Appointment',
    whatsappDispatch: 'WhatsApp',

    // Pillars
    pillarsSub: 'WHY CHOOSE ALPHA AUTO',
    pillarsTitle: 'Dealership Quality Without Dealership Surcharges',
    pillar1Title: 'Certified Master Techs',
    pillar1Desc: 'Factory-trained specialists certified across German, British, and Japanese platforms.',
    pillar2Title: 'Genuine OEM Components',
    pillar2Desc: '100% factory original parts and manufacturer approved synthetic lubricants.',
    pillar3Title: '12-Month / 12k Warranty',
    pillar3Desc: 'Comprehensive parts and labor warranty protecting your peace of mind on all repairs.',
    pillar4Title: 'Factory Diagnostic Scan',
    pillar4Desc: 'Computerized dealer-level OBD scan and 30-point digital health report included.',

    // Brands We Service
    brandsSub: 'BRANDS WE SERVICE',
    brandsTitle: 'Specialized in European, Japanese & Exotic Automotives',
    brandsDesc: 'We carry certified tooling, computerized diagnostic suites, and manufacturer-approved fluids for all 10 specialized marques.',
    popular: 'Popular:',
    viewServices: 'View Services',
    viewAllBrandsBtn: 'View All 10 Serviced Brands & Tooling',

    // What We Offer (Services)
    servicesSub: 'WHAT WE OFFER',
    servicesTitle: 'To Our Customers At Alpha Auto Garage',
    servicesDesc: 'Comprehensive dealership-alternative auto repair and maintenance solutions backed by state-of-the-art diagnostics and 12-Month warranty.',
    catAll: 'All',
    catDiagnostics: 'Diagnostics',
    catBrakes: 'Brakes & Suspension',
    catMaintenance: 'Maintenance',
    catElectrical: 'Electrical & AC',
    details: 'Details',
    exploreAllServicesBtn: 'Explore All 8 Core Workshop Services',

    // Services Items
    service_oil_change_title: 'Synthetic Oil & Filter Service',
    service_oil_change_desc: 'Full synthetic motor oil replacement, OEM filter change, and comprehensive 30-point safety check.',
    service_oil_change_price: 'Starting from AED 320',
    service_oil_change_time: '45 – 60 minutes',

    service_engine_diagnostics_title: 'Computerized Engine Diagnostics',
    service_engine_diagnostics_desc: 'Dealer-level scan tool diagnostics, sensor data analysis, and root-cause fault identification.',
    service_engine_diagnostics_price: 'Starting from AED 450',
    service_engine_diagnostics_time: '1 – 2 hours',

    service_brake_repair_title: 'Brake System Repair & Replacement',
    service_brake_repair_desc: 'Brembo/OEM ceramic brake pad replacements, slotted rotor resurfacing, and DOT 4/5.1 fluid flush.',
    service_brake_repair_price: 'Starting from AED 480',
    service_brake_repair_time: '2 – 3 hours',

    service_maintenance_title: 'Factory Scheduled Maintenance',
    service_maintenance_desc: 'Logbook milestone services complying 100% with manufacturer warranties and dealership service schedules.',
    service_maintenance_price: 'Starting from AED 650',
    service_maintenance_time: '3 – 5 hours',

    service_ac_service_title: 'Air Conditioning & Climate Control',
    service_ac_service_desc: 'R134a & R1234yf system evacuation, recharge, UV dye leak testing, and anti-bacterial evaporator cleaning.',
    service_ac_service_price: 'Starting from AED 350',
    service_ac_service_time: '1 – 2 hours',

    service_tires_alignment_title: 'Tires, Balancing & 3D Laser Alignment',
    service_tires_alignment_desc: 'Laser 3D wheel alignment, road-force balancing, and premium tire fitting (Michelin, Pirelli, Continental).',
    service_tires_alignment_price: 'Starting from AED 250',
    service_tires_alignment_time: '45 – 75 minutes',

    service_battery_electrical_title: 'Battery, Starter & Electrical Systems',
    service_battery_electrical_desc: 'AGM/Lithium battery load testing, alternator testing, wiring loom repairs, and ECU coding.',
    service_battery_electrical_price: 'Starting from AED 420',
    service_battery_electrical_time: '1 – 2 hours',

    service_transmission_title: 'Transmission & Suspension Overhaul',
    service_transmission_desc: 'ZF / DSG / PDK gearbox fluid flush, clutch adaptation, bushing replacements, and air suspension diagnostics.',
    service_transmission_price: 'Starting from AED 1,200',
    service_transmission_time: '1 – 2 days',

    // Packages
    pkg_minor_title: 'Minor Service Package',
    pkg_minor_tagline: 'Essential routine protection & factory fluids',
    pkg_major_title: 'Major Milestone Package',
    pkg_major_tagline: 'Comprehensive powertrain & system overhaul',
    pkg_warranty_title: '12-Month Warranty Protection',
    pkg_warranty_tagline: 'Extended powertrain & mechanical coverage',
    pkg_contract_title: 'Annual Service Contract',
    pkg_contract_tagline: 'Year-round scheduled maintenance & priority booking',

    // Why Choose Us
    whySub: 'WHY CHOOSE US',
    whyTitle: 'Your Trusted Dealership Alternative',
    whyDesc: 'Experience the pinnacle of automotive engineering, genuine hospitality, and uncompromising quality without dealer markups.',
    why1Title: 'PROFESSIONAL TEAM & TOOLS',
    why1Desc: 'Every technician is factory-trained with decades of combined experience on European and Japanese powertrains. We utilize official dealer diagnostics (ISTA, Xentry, ODIS, PIWIS).',
    why1F1: 'ASE Master Certified Mechanics',
    why1F2: 'Factory ECU Diagnostic Platforms',
    why1F3: 'Digital Oscilloscopes & Pressure Rigs',

    why2Title: '100% OEM PARTS & WARRANTY',
    why2Desc: 'We never cut corners with cheap knock-offs. All replacements utilize Original Equipment Manufacturer (OEM) components backed by our rock-solid 12-Month / 12,000-Mile warranty.',
    why2F1: '12-Month / 12,000-Mile Warranty',
    why2F2: 'Tier-1 OEM Suppliers (Bosch, Brembo)',
    why2F3: 'Full Factory Warranty Compliance',

    why3Title: 'TRANSPARENT FIXED PRICING',
    why3Desc: 'No surprises and zero hidden fees. Receive an itemized digital estimate before any wrench is turned. We require your explicit consent before initiating any repair work.',
    why3F1: 'Digital Inspection Reports with Photos',
    why3F2: 'Zero Unauthorized Repairs',
    why3F3: 'Up to 40% Savings vs Official Dealers',

    why4Title: 'EXPRESS BAYS & COURTESY',
    why4Desc: 'Dedicated rapid-service bays for oil changes, brake pads, and battery swaps. Enjoy our customer lounge with high-speed WiFi, artisanal espresso, and live bay updates.',
    why4F1: 'Same-Day Minor Service Turnaround',
    why4F2: 'Free 30-Point Digital Safety Check',
    why4F3: 'Customer Work Lounge with Espresso',

    // Stats
    stat1Val: '12+',
    stat1Lbl: 'Years of Excellence',
    stat1Desc: 'Serving discerning drivers in UAE since 2011',
    stat2Val: '15,000+',
    stat2Lbl: 'Vehicles Serviced',
    stat2Desc: 'From daily drivers to exotic supercars',
    stat3Val: '99.2%',
    stat3Lbl: 'Customer Satisfaction',
    stat3Desc: 'Based on 240+ verified client ratings',
    stat4Val: '12 Mo',
    stat4Lbl: 'Warranty Guarantee',
    stat4Desc: 'Comprehensive parts and labor coverage',

    // Process Steps
    processTag: 'How It Works',
    processTitle: 'The Alpha Standard Repair Process',
    processSubtitle: 'No guesswork, no dealership markups. An effortless 4-step experience designed to respect your time and safety.',
    step1Title: 'Book or Drop-Off',
    step1Desc: 'Schedule an appointment online in under 60 seconds or use our 24/7 secure key-drop kiosk.',
    step2Title: 'Digital Diagnostic',
    step2Desc: 'Dealer-grade scan tool health report with photos, live sensor readings, and exact root cause.',
    step3Title: 'Upfront Approval',
    step3Desc: 'Itemized estimate sent to your phone. Zero surprise charges — work only begins with your authorization.',
    step4Title: 'Certified Repair & Test',
    step4Desc: 'Precision repair using OEM parts, followed by rigorous road testing and full 12-Month warranty backing.',

    // Accessories
    accSub: 'PERFORMANCE & STYLING',
    accTitle: 'Curated Automotive Accessories',
    accDesc: 'Professional-grade ceramic coatings, carbon aerodynamic trim, high-output LED upgrades, and interior protection.',
    accBtn: 'Browse Full Accessories Catalog',

    // Reviews
    reviewsSub: 'CUSTOMER REVIEWS',
    reviewsTitle: 'What Drivers Say About Alpha Auto',
    reviewsDesc: 'Rated 4.9/5 stars across 240+ verified Google and local customer reviews in UAE.',
    reviewsBtn: 'Read All 240+ Verified Reviews',
    rev1Text: 'Alpha Auto diagnosed an intermittent transmission shudder that the main dealership couldn’t solve after two visits. Flawless repair and saved me thousands.',
    rev1Car: 'Porsche Macan GTS Owner',
    rev2Text: 'Honest, fast, and remarkably thorough. The digital inspection video they sent to my WhatsApp before touching a bolt built instant trust.',
    rev2Car: 'BMW M4 Competition Owner',
    rev3Text: 'Best garage in town for European cars. They only use genuine OEM filters and fluids, and their customer lounge is first-class.',
    rev3Car: 'Mercedes-Benz E63 AMG Owner',

    // FAQs
    faqSub: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Everything You Need To Know',
    faqDesc: 'Have questions about our dealer-level servicing, warranty coverage, or pricing? Find rapid answers below.',
    faqBtn: 'View All Frequently Asked Questions',
    faq1Q: 'Do I need an appointment, or do you accept walk-ins?',
    faq1A: 'While we gladly accept walk-ins for rapid services like oil changes and tire checks, we strongly recommend booking in advance through our online booking page or WhatsApp to guarantee immediate bay availability and dedicated technician time.',
    faq2Q: 'Can I drop off my car before or after regular business hours?',
    faq2A: 'Yes. We offer a secure 24/7 key drop box located beside our main reception gate. Park your vehicle in our designated customer arrival bays, fill out the night-drop envelope with your contact details, and deposit your key. We will contact you the following morning at 8:00 AM.',
    faq3Q: 'How are your service estimates calculated? Are there any hidden fees?',
    faq3A: 'We operate under 100% upfront pricing transparency. Before any mechanical work begins, you receive an itemized quote detailing OEM part costs, labor hours, and disposal/environmental fees. We never perform any unauthorized work without your explicit written approval.',
    faq4Q: 'Do you offer financing or split payments for major repairs?',
    faq4A: 'Yes, we partner with leading automotive service financing providers to offer flexible 0% interest payment plans over 3, 6, or 12 months for transmission repairs, engine rebuilds, and comprehensive overhauls.',
    faq5Q: 'What diagnostic tools do you use for European and Japanese luxury cars?',
    faq5A: 'We invest continuously in factory-level diagnostic suites including BMW ISTA, Mercedes-Benz Xentry DAS, Porsche PIWIS III, Audi/VW ODIS, and Toyota/Lexus Techstream. This allows us to code modules, adapt clutches, and read deep manufacturer sensor streams.',

    // Final CTA
    ctaBadge: 'Direct Dispatch Active',
    ctaTitle: 'YOUR BEST ALTERNATE TO DEALERSHIP QUALITY SERVICES',
    ctaDesc: 'Book your service appointment today or drop by for a computerized diagnostic check. Enjoy transparent quotes, OEM certified parts, and our 12-Month / 12,000-Mile warranty guarantee.',
    ctaBookBtn: 'Book an Appointment',
    ctaCall: 'Call',

    // Footer
    footerCtaTitle: 'Need Emergency Assistance or a Quick Estimate?',
    footerCtaDesc: 'Our ASE-certified master mechanics are on standby to get you back on the road safely.',
    footerBookBtn: 'Book a Service',
    footerEmergencyCall: 'Call',
    footerBio: 'Full-service auto repair, computerized diagnostics, and preventive maintenance for European, Japanese, and exotic luxury vehicles.',
    footerTrust: 'Certified Technicians & OEM Parts Guarantee',
    footerCoreServices: 'Core Services',
    footerExplore: 'Explore',
    footerContactHours: 'Contact & Hours',
    footerAllServices: 'View All 8 Services →',
    footerRights: 'All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',

    // Floating Actions
    quickCall: 'Call',
    quickWhatsApp: 'WhatsApp',
    quickBook: 'Book Now',
    quickTooltip: 'Chat with us on WhatsApp'
  },

  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    offers: 'العروض',
    brands: 'العلامات التجارية',
    services: 'خدماتنا',
    packages: 'الباقات',
    contact: 'اتصل بنا',
    bookNow: 'احجز الآن',
    brandsWeRepair: 'علامات تجارية نقوم بصيانتها',
    viewAllBrands: 'عرض جميع العلامات التجارية',
    viewAllServices: 'عرض كافة الخدمات',
    comparePackages: 'مقارنة كافة الباقات',
    reserveBay: 'احجز موعدك الآن',

    // Hero
    heroTitle: 'صيانة سيارات فاخرة بجودة الوكالة',
    heroEyebrow: 'التميز في هندسة وصيانة السيارات منذ 2011',
    heroDesc: 'فحص كمبيوتر دقيق، صيانة دورية معتمدة وفق معايير المصنع، وهندسة أداء احترافية بدون هوامش أسعار الوكالات.',
    bookAppointment: 'حجز موعد صيانة',
    whatsappDispatch: 'واتساب',

    // Pillars
    pillarsSub: 'لماذا تختار ألفا أوتو',
    pillarsTitle: 'جودة الوكالة المعتمدة بأسعار تنافسية وشفافة',
    pillar1Title: 'فنيون ومهندسون معتمدون',
    pillar1Desc: 'متخصصون مدربون في المصانع ومعتمدون لجميع منصات السيارات الألمانية والبريطانية واليابانية.',
    pillar2Title: 'قطع غيار أصلية 100%',
    pillar2Desc: 'قطع غيار مصنعية أصلية 100% وزيوت محركات تخليقية معتمدة من كبرى الشركات العالمية.',
    pillar3Title: 'ضمان 12 شهراً / 12,000 ميل',
    pillar3Desc: 'ضمان شامل على القطع وأجور اليد يمنحك راحة البال التامة بعد كل عملية صيانة.',
    pillar4Title: 'أجهزة فحص المصنع المتقدمة',
    pillar4Desc: 'فحص إلكتروني متطور بنفس أجهزة الوكالة مع تقرير فني رقمي شامل لحالة السيارة.',

    // Brands We Service
    brandsSub: 'العلامات التجارية المعتمدة',
    brandsTitle: 'متخصصون في صيانة السيارات الأوروبية واليابانية والفاخرة',
    brandsDesc: 'نمتلك أحدث أجهزة الفحص المعتمدة، وعدة صيانة متطورة، وزيوت مصنعية أصلية لكافة العلامات التجارية.',
    popular: 'الموديلات الشائعة:',
    viewServices: 'عرض الخدمات',
    viewAllBrandsBtn: 'عرض جميع العلامات الـ 10 وأجهزة الفحص',

    // What We Offer (Services)
    servicesSub: 'ما نقدمه',
    servicesTitle: 'لعملائنا الكرام في كراج ألفا أوتو',
    servicesDesc: 'حلول صيانة وإصلاح سيارات شاملة كبديل معتمد للوكالات مدعومة بأحدث تقنيات التشخيص وضمان 12 شهراً.',
    catAll: 'الكل',
    catDiagnostics: 'فحص كمبيوتر',
    catBrakes: 'الفرامل والمساعدات',
    catMaintenance: 'الصيانة الدورية',
    catElectrical: 'الكهرباء والتكييف',
    details: 'التفاصيل',
    exploreAllServicesBtn: 'استكشف جميع خدمات ورشتنا الثمانية الرئيسية',

    // Services Items
    service_oil_change_title: 'خدمة الزيت التخليقي والفلتر الأصلي',
    service_oil_change_desc: 'تغيير زيت المحرك التخليقي بالكامل مع فلتر أصلي وفحص أمان شامل لـ 30 نقطة حيوية.',
    service_oil_change_price: 'ابتداءً من 320 درهم',
    service_oil_change_time: '45 – 60 دقيقة',

    service_engine_diagnostics_title: 'فحص وتشخيص المحرك بالكمبيوتر',
    service_engine_diagnostics_desc: 'فحص شامل بأجهزة الوكالة، وتحليل قراءات الحساسات المباشرة وتحديد أسباب الأعطال بدقة.',
    service_engine_diagnostics_price: 'ابتداءً من 450 درهم',
    service_engine_diagnostics_time: '1 – 2 ساعة',

    service_brake_repair_title: 'صيانة وتغيير منظومة الفرامل',
    service_brake_repair_desc: 'استبدال أقمشة وهوبات بريمبو أو القطع الأصلية مع خرط الهوبات وتغيير زيت الفرامل DOT 4/5.1.',
    service_brake_repair_price: 'ابتداءً من 480 درهم',
    service_brake_repair_time: '2 – 3 ساعات',

    service_maintenance_title: 'الصيانة الدورية المعتمدة من المصنع',
    service_maintenance_desc: 'صيانة دورية متوافقة 100% مع كتيب المصنع وجدول الوكالة دون التأثير على سريان الضمان.',
    service_maintenance_price: 'ابتداءً من 650 درهم',
    service_maintenance_time: '3 – 5 ساعات',

    service_ac_service_title: 'صيانة التكييف والتحكم بالمناخ',
    service_ac_service_desc: 'تفريغ وإعادة شحن غاز R134a و R1234yf، فحص التسريب بالأشعة فوق البنفسجية وتنظيف الثلاجة.',
    service_ac_service_price: 'ابتداءً من 350 درهم',
    service_ac_service_time: '1 – 2 ساعة',

    service_tires_alignment_title: 'الإطارات والميزان بالليزر ثلاثي الأبعاد',
    service_tires_alignment_desc: 'ميزان ليزر 3D متطور، ترصيص إلكتروني دقيق وتوفير أفضل الإطارات (ميشلان، بيريللي، كونتيننتال).',
    service_tires_alignment_price: 'ابتداءً من 250 درهم',
    service_tires_alignment_time: '45 – 75 دقيقة',

    service_battery_electrical_title: 'البطارية والأنظمة الكهربائية',
    service_battery_electrical_desc: 'فحص كفاءة بطاريات AGM والليثيوم، صيانة الدينامو، إصلاح الظفيرة وبرمجة كمبيوتر السيارة.',
    service_battery_electrical_price: 'ابتداءً من 420 درهم',
    service_battery_electrical_time: '1 – 2 ساعة',

    service_transmission_title: 'صيانة ناقل الحركة والمساعدات',
    service_transmission_desc: 'تغيير زيت وفلتر قير ZF / DSG / PDK وبرمجة الكلتشات وصيانة المساعدات الهيدروليكية والهوائية.',
    service_transmission_price: 'ابتداءً من 1,200 درهم',
    service_transmission_time: '1 – 2 يوم',

    // Packages
    pkg_minor_title: 'باقة الخدمة الصغرى',
    pkg_minor_tagline: 'صيانة روتينية أساسية وزيوت معتمدة',
    pkg_major_title: 'باقة الخدمة الكبرى',
    pkg_major_tagline: 'فحص وصيانة شاملة لكافة أجزاء المحرك',
    pkg_warranty_title: 'باقة حماية الضمان (12 شهر)',
    pkg_warranty_tagline: 'تغطية ميكانيكية شاملة لناقل الحركة والمحرك',
    pkg_contract_title: 'عقد الصيانة السنوي',
    pkg_contract_tagline: 'صيانة دورية مستمرة على مدار العام مع أولوية الحجز',

    // Why Choose Us
    whySub: 'لماذا تختارنا',
    whyTitle: 'بديلك الموثوق والمعتمد للوكالات',
    whyDesc: 'استمتع بأعلى معايير هندسة السيارات، والضيافة الراقية، والجودة الفائقة دون دفع هوامش الوكالات المرتفعة.',
    why1Title: 'فريق احترافي وأحدث الأجهزة',
    why1Desc: 'جميع الفنيين مدربون في المصانع بخبرات طويلة في المحركات الأوروبية واليابانية، مع أجهزة تشخيص الوكالة الرسمية (ISTA, Xentry, ODIS, PIWIS).',
    why1F1: 'فنيون حاصلون على شهادات معتمدة عالمياً (ASE Master)',
    why1F2: 'أجهزة فحص إلكترونية مطابقة للوكالة',
    why1F3: 'أجهزة قياس رقمية وفحص دقيق للضغوط',

    why2Title: 'قطع غيار أصلية 100% مع الضمان',
    why2Desc: 'لا نستخدم قطع مقلدة على الإطلاق. جميع القطع المستبدلة أصلية 100% ومغطاة بضمان حقيقي لمدة 12 شهراً / 12,000 ميل.',
    why2F1: 'ضمان شامل 12 شهراً / 12,000 ميل',
    why2F2: 'موردون أصليون من الفئة الأولى (بوش، بريمبو)',
    why2F3: 'حفاظ كامل على سريان ضمان المصنع',

    why3Title: 'أسعار ثابتة وشفافة بدون مفاجآت',
    why3Desc: 'بدون أي رسوم خفية أو مفاجآت. نرسل لك تقريراً مفصلاً بالأسعار قبل البدء بأي عمل ولا نبدأ إلا بموافقتك المباشرة.',
    why3F1: 'تقارير فحص رقمية مدعمة بالصور',
    why3F2: 'لا نقوم بأي إصلاح دون إذن مسبق',
    why3F3: 'توفير يصل إلى 40% مقارنة بالوكالات',

    why4Title: 'مسارات صيانة سريعة وضيافة فاخرة',
    why4Desc: 'مسارات مخصصة للصيانة السريعة لتغيير الزيوت والفرامل والبطاريات، مع استراحة مميزة توفر قهوة وضيافة ومتابعة حية لسيارتك.',
    why4F1: 'إنجاز الصيانة الدورية في نفس اليوم',
    why4F2: 'فحص سلامة مجاني لـ 30 نقطة بالسيارة',
    why4F3: 'استراحة كبار العملاء مع واي فاي وقهوة فاخرة',

    // Stats
    stat1Val: '12+',
    stat1Lbl: 'سنوات من التميز',
    stat1Desc: 'في خدمة عشاق السيارات في الإمارات منذ عام 2011',
    stat2Val: '15,000+',
    stat2Lbl: 'سيارة تمت صيانتها',
    stat2Desc: 'من سيارات الاستخدام اليومي حتى السوبركار الفاخرة',
    stat3Val: '99.2%',
    stat3Lbl: 'نسبة رضا العملاء',
    stat3Desc: 'بناءً على أكثر من 240 تقييماً موثقاً',
    stat4Val: '12 شهراً',
    stat4Lbl: 'ضمان شامل ومعتمد',
    stat4Desc: 'تغطية شاملة لقطع الغيار وأجور الصيانة',

    // Process Steps
    processTag: 'طريقة العمل',
    processTitle: 'خطوات صيانة سيارتك في ألفا أوتو',
    processSubtitle: 'بدون أي تخمين أو مبالغات في الأسعار. تجربة سلسة في 4 خطوات تحترم وقتك وتضمن أمانك التام.',
    step1Title: 'احجز موعدك أو سلّم سيارتك',
    step1Desc: 'احجز موعدك أونلاين خلال أقل من دقيقة أو استخدم صندوق المفاتيح الآمن على مدار الساعة.',
    step2Title: 'فحص كمبيوتر وتشخيص رقمي',
    step2Desc: 'تقرير فحص إلكتروني دقيق بمستوى الوكالة مع صور وقراءات حية للحساسات لتحديد العطل.',
    step3Title: 'اعتماد مسبق للتكاليف',
    step3Desc: 'تسعيرة مفصلة تصل إلى هاتفك. لا نبدأ العمل أبداً إلا بعد موافقتك الصريحة.',
    step4Title: 'صيانة معتمدة واختبار قيادة',
    step4Desc: 'صيانة دقيقة بقطع أصلية متبوعة باختبار قيادة حقيقي مع ضمان كامل لمدة 12 شهراً.',

    // Accessories
    accSub: 'الأداء والتعديل',
    accTitle: 'إكسسوارات وترقيات سيارات متميزة',
    accDesc: 'نانو سيراميك احترافي، ألياف كربون ديناميكية، إضاءات LED عالية الكفاءة، وحماية كاملة للمقصورة.',
    accBtn: 'تصفح كتالوج الإكسسوارات بالكامل',

    // Reviews
    reviewsSub: 'آراء عملائنا',
    reviewsTitle: 'ماذا يقول مالكو السيارات عن ألفا أوتو',
    reviewsDesc: 'تقييم 4.9/5 عبر أكثر من 240 تقييماً معتمداً على جوجل ومنصات التقييم في الإمارات.',
    reviewsBtn: 'قراءة كافة التقييمات المعتمدة (240+)',
    rev1Text: 'قام فريق ألفا أوتو بتشخيص عطل في القير عجزت الوكالة عن حله لمرتين متتاليتين. إصلاح احترافي ودقيق ووفرت آلاف الدراهم.',
    rev1Car: 'مالك بورش ماكان GTS',
    rev2Text: 'أمانة وسرعة ودقة متناهية. فيديو الفحص الرقمي الذي أرسلوه لي عبر الواتساب قبل بدء العمل جعلني أثق بهم تماماً.',
    rev2Car: 'مالك بي إم دبليو M4 كومبيتيشن',
    rev3Text: 'أفضل كراج لصيانة السيارات الأوروبية. التزام بالقطع والزيوت الأصلية واستراحة العملاء قمة في الراحة والاهتمام.',
    rev3Car: 'مالك مرسيدس E63 AMG',

    // FAQs
    faqSub: 'الأسئلة الشائعة',
    faqTitle: 'كل ما تود معرفته عن خدماتنا',
    faqDesc: 'هل لديك تساؤلات حول جودة صيانة الوكالة أو تغطية الضمان أو الأسعار؟ تجد الإجابات السريعة هنا.',
    faqBtn: 'عرض كافة الأسئلة الشائعة',
    faq1Q: 'هل أحتاج إلى حجز موعد مسبق أم يمكنني الحضور مباشرة؟',
    faq1A: 'نرحب بحضوركم المباشر للخدمات السريعة كالصيانة الدورية وتغيير الإطارات، لكننا نوصي بشدة بالحجز المسبق عبر الموقع أو الواتساب لضمان توفير مسار صيانة فوري ووقت مخصص لسيارتك دون انتظار.',
    faq2Q: 'هل يمكنني تسليم السيارة قبل أو بعد ساعات العمل الرسمية؟',
    faq2A: 'نعم بكل تأكيد. نوفر صندوق تسليم مفاتيح آمن على مدار 24 ساعة بجوار بوابة الاستقبال. ما عليك سوى إيقاف سيارتك، وتدوين بياناتك في مظروف التسليم ووضع المفتاح. وسنتصل بك في تمام الساعة 8:00 صباحاً.',
    faq3Q: 'كيف يتم حساب تكلفة الصيانة؟ وهل توجد أي رسوم خفية؟',
    faq3A: 'نلتزم بالشفافية المطلقة بنسبة 100%. قبل لمس السيارة، تتلقى تقريراً رقمياً مفصلاً يوضح أسعار القطع الأصلية وأجور العمل بدقة. ولا نقوم بأي عمل إضافي دون موافقتك الكتابية.',
    faq4Q: 'هل تتوفر خيارات تمويل أو تقسيط على الصيانة الكبرى؟',
    faq4A: 'نعم، نوفر خطط تقسيط مرنة بفائدة 0% على فترات 3 أو 6 أو 12 شهراً عبر شركائنا المعتمدين لعمليات توضيب المحركات والجير بوكس والصيانة الشاملة.',
    faq5Q: 'ما هي أجهزة الفحص المعتمدة لديكم للسيارات الأوروبية واليابانية؟',
    faq5A: 'نستثمر باستمرار في أحدث أجهزة تشخيص المصنع الرسمية مثل BMW ISTA و Mercedes-Benz Xentry و Porsche PIWIS III و Audi/VW ODIS و Toyota/Lexus Techstream لقراءة بيانات الحساسات وبرمجة الكمبيوتر بدقة الوكالة.',

    // Final CTA
    ctaBadge: 'فريق الاستجابة السريعة جاهز',
    ctaTitle: 'بديلك الأفضل والأضمن لصيانة سيارتك بجودة الوكالة',
    ctaDesc: 'احجز موعد صيانة سيارتك اليوم أو تفضل بزيارتنا لإجراء فحص إلكتروني دقيق. استمتع بتسعيرة شفافة، قطع غيار أصلية، وضمان معتمد لمدة 12 شهراً.',
    ctaBookBtn: 'حجز موعد صيانة',
    ctaCall: 'اتصل بـ',

    // Footer
    footerCtaTitle: 'هل تحتاج إلى مساعدة طارئة أو تسعير فوري؟',
    footerCtaDesc: 'مهندسونا المعتمدون على أهبة الاستعداد لإعادتك إلى الطريق بأمان وثقة.',
    footerBookBtn: 'حجز موعد صيانة',
    footerEmergencyCall: 'اتصل بـ',
    footerBio: 'مركز متكامل لصيانة السيارات، الفحص بالكمبيوتر، والصيانة الوقائية الدورية للسيارات الأوروبية واليابانية والفاخرة.',
    footerTrust: 'فنيون معتمدون وضمان قطع غيار أصلية 100%',
    footerCoreServices: 'الخدمات الرئيسية',
    footerExplore: 'روابط هامة',
    footerContactHours: 'الاتصال وساعات العمل',
    footerAllServices: 'عرض جميع الخدمات الثمانية ←',
    footerRights: 'جميع الحقوق محفوظة.',
    footerPrivacy: 'سياسة الخصوصية',
    footerTerms: 'الشروط والأحكام',

    // Floating Actions
    quickCall: 'اتصال',
    quickWhatsApp: 'واتساب',
    quickBook: 'احجز الآن',
    quickTooltip: 'تواصل معنا مباشرة عبر واتساب'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('alpha_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('alpha_lang', currentLang);
    const isArabic = currentLang === 'ar';

    // Set HTML lang and dir for full native RTL layout
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    if (isArabic) {
      document.body.classList.add('rtl-arabic');
    } else {
      document.body.classList.remove('rtl-arabic');
    }
  }, [currentLang]);

  const switchLanguage = (code) => {
    setCurrentLang(code);
  };

  const t = (key) => {
    return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  const isRTL = currentLang === 'ar';

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
