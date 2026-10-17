/**
 * Services data for Alpha Auto Garage
 */

export const SERVICES = [
  {
    id: "oil-change",
    slug: "oil-change",
    title: "Synthetic Oil & Filter Service",
    shortDescription:
      "Full synthetic motor oil replacement, OEM filter change, and comprehensive 30-point safety check.",
    category: "Preventive",
    iconName: "Droplets",
    priceRange: "Starting from $89",
    turnaroundTime: "45 – 60 minutes",
    warranty: "3,000 miles / 3 months",
    heroImage:
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Keep your engine performing at maximum efficiency and longevity with our premium synthetic oil service. We use manufacturer-certified synthetic oils (Motul, Castrol Edge, Mobil 1) matched specifically to your vehicle's engine tolerances.",
    includedWork: [
      "Up to 6 quarts of full synthetic OEM-spec oil",
      "Brand-new OEM oil filter installation",
      "Fluid level checks & top-off (coolant, brake fluid, steering)",
      "Tire pressure inspection & correction (TPMS check)",
      "Battery health & terminal load test",
      "Visual undercarriage & suspension inspection"
    ],
    symptoms: [
      "Engine oil light illuminated",
      "Dark, gritty oil texture on the dipstick",
      "Increased engine noise, ticking, or knocking",
      "Mileage interval exceeded (5,000 – 7,500 miles)"
    ],
    faqs: [
      {
        q: "How often should I change synthetic oil in my European car?",
        a: "We recommend between 5,000 to 7,500 miles or at least once every 6 months depending on driving conditions, despite factory claims of 10,000 miles, to preserve timing chains and turbochargers."
      },
      {
        q: "Do you use OEM filters?",
        a: "Yes, we exclusively fit OEM filters (Mann, Mahle, Bosch, Genuine) according to your manufacturer's specifications."
      }
    ]
  },
  {
    id: "engine-diagnostics",
    slug: "engine-diagnostics",
    title: "Computerized Engine Diagnostics",
    shortDescription:
      "Dealer-level scan tool diagnostics, sensor data analysis, and root-cause fault identification.",
    category: "Diagnostics",
    iconName: "Cpu",
    priceRange: "Starting from $120",
    turnaroundTime: "1 – 2 hours",
    warranty: "Accurate diagnosis guaranteed",
    heroImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    overview:
      "A Check Engine light can indicate anything from a loose gas cap to complex ignition or timing faults. We utilize dealership-level scan software (ISTA for BMW, Star/Xentry for Mercedes, VAG-COM for Audi/VW, Techstream for Toyota/Lexus) to retrieve live telemetry and pinpoint exact issues without guesswork.",
    includedWork: [
      "Full OBD-II and CAN-bus system scan across all modules",
      "Live data log evaluation (fuel trim, O2 sensors, MAF, misfire counters)",
      "Actuator testing and electrical harness continuity checks",
      "Exhaust smoke test for vacuum/boost leaks (if applicable)",
      "Comprehensive diagnostic report with itemized repair roadmap"
    ],
    symptoms: [
      "Solid or flashing Check Engine light",
      "Limp mode or sudden loss of acceleration power",
      "Rough idling, sputtering, or stalling at stoplights",
      "Excessive fuel consumption and black/grey exhaust smoke"
    ],
    faqs: [
      {
        q: "What is the difference between your diagnostics and an auto parts store scan?",
        a: "Parts stores merely read stored generic P-codes. Our master technicians analyze live data streams, module communication, fuel trims, and component voltages to find the actual root cause rather than replacing parts blind."
      },
      {
        q: "Is the diagnostic fee credited toward repair work?",
        a: "Yes! If you authorize the repair with Alpha Auto Garage, we credit 50% of your diagnostic fee directly toward the labor."
      }
    ]
  },
  {
    id: "brake-repair",
    slug: "brake-repair",
    title: "Brake System Repair & Replacement",
    shortDescription:
      "Ceramic/semi-metallic brake pads, rotors, caliper servicing, and high-temperature fluid flush.",
    category: "Safety",
    iconName: "ShieldAlert",
    priceRange: "Starting from $180 per axle",
    turnaroundTime: "2 – 3 hours",
    warranty: "24 months / 24,000 miles",
    heroImage:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Your vehicle's braking system is its most vital safety asset. We service disc and drum brakes using low-dust, high-friction ceramic or semi-metallic pads and precision-balanced rotors, ensuring confident, noise-free stopping power.",
    includedWork: [
      "Digital measurement of rotor thickness and pad wear percentage",
      "Installation of premium OEM/Brembo/Akebono brake pads",
      "Rotor resurfacing or precision replacement",
      "Brake caliper slide pin lubrication and boot inspection",
      "DOT 4/5.1 pressure brake fluid flush & air bleeding",
      "ABS and electronic parking brake calibration"
    ],
    symptoms: [
      "High-pitched squealing, squeaking, or metal grinding",
      "Steering wheel vibration or pedal pulsation when braking",
      "Soft, spongy, or sinking brake pedal feel",
      "Car pulls to one side during hard deceleration"
    ],
    faqs: [
      {
        q: "Do I always need to replace rotors with new pads?",
        a: "If rotors are below the manufacturer's minimum thickness discard specification or show heat scoring/warping, replacing them ensures safety, prevents pedal pulsation, and maximizes pad life."
      },
      {
        q: "Do ceramic pads produce brake dust?",
        a: "Ceramic pads produce significantly less and much lighter-colored dust than traditional European semi-metallic pads, keeping your wheels noticeably cleaner."
      }
    ]
  },
  {
    id: "scheduled-maintenance",
    slug: "scheduled-maintenance",
    title: "Factory Scheduled Maintenance",
    shortDescription:
      "30k, 60k, 90k, and 120k mile factory inspections preserving factory warranties and performance.",
    category: "Preventive",
    iconName: "CalendarCheck",
    priceRange: "Starting from $210",
    turnaroundTime: "3 – 5 hours",
    warranty: "12 months / 12,000 miles",
    heroImage:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Avoid costly breakdowns with manufacturer-compliant milestone servicing. We adhere strictly to OEM maintenance schedules for European, Asian, and American vehicles, maintaining digital service history records.",
    includedWork: [
      "Engine oil, transmission fluid, and differential fluid analysis",
      "Spark plug and ignition coil inspection/replacement",
      "Cabin micro-filter & engine intake air filter replacement",
      "Serpentine drive belt and tensioner wear assessment",
      "Cooling system pressure and freeze-point test",
      "Digital service indicator reset and stamped logbook"
    ],
    symptoms: [
      "Maintenance reminder indicator (Service A/B, Inspection I/II)",
      "Car reached 30,000 / 60,000 / 90,000 / 120,000 miles",
      "Gradual decrease in fuel economy and engine responsiveness",
      "Unserviced transmission fluid approaching 60k miles"
    ],
    faqs: [
      {
        q: "Will servicing my car at Alpha Auto void my manufacturer warranty?",
        a: "No! Under the Magnuson-Moss Warranty Act, you have the legal right to have your vehicle serviced by independent certified garages without voiding your factory warranty."
      }
    ]
  },
  {
    id: "ac-service",
    slug: "ac-service",
    title: "Air Conditioning & Climate Control",
    shortDescription:
      "R134a & R1234yf refrigerant evacuation, UV leak detection, compressor, and evaporator repair.",
    category: "Climate",
    iconName: "Wind",
    priceRange: "Starting from $149",
    turnaroundTime: "1 – 3 hours",
    warranty: "12 months / 12,000 miles",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Stay comfortable in every climate. Whether your AC blows warm air, makes odd whistling noises, or smells damp, our certified technicians recover, test, and recharge dual-zone and multi-stage automotive climate systems.",
    includedWork: [
      "Digital pressure analysis on high and low AC lines",
      "Refrigerant evacuation, moisture vacuuming, and fresh oil recharge",
      "UV fluorescent dye injection to detect micro-leaks",
      "Cabin air microfilter inspection & antimicrobial duct sanitization",
      "AC compressor clutch, condenser fan, and blend door operation check"
    ],
    symptoms: [
      "AC vents blowing ambient or warm air instead of crisp cold air",
      "Musty, moldy, or chemical smell when the blower starts",
      "Rattling or clicking noise when AC button is engaged",
      "Weak airflow despite fan on maximum speed"
    ],
    faqs: [
      {
        q: "Do you service both older R134a and newer R1234yf refrigerants?",
        a: "Yes, we possess dedicated, certified recovery and charging stations for both traditional R134a systems and modern eco-friendly R1234yf systems found in 2017+ vehicles."
      }
    ]
  },
  {
    id: "tires-and-alignment",
    slug: "tires-and-alignment",
    title: "Tires, Balancing & 3D Laser Alignment",
    shortDescription:
      "Hunter high-definition 3D 4-wheel alignment, road-force balancing, tire mounting, and puncture repair.",
    category: "Handling",
    iconName: "Compass",
    priceRange: "Alignment from $129",
    turnaroundTime: "1 – 2 hours",
    warranty: "6 months alignment check warranty",
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Maximize tire tread life, improve handling, and ensure highway stability. Using our state-of-the-art Hunter 3D laser alignment rack, we measure camber, caster, and toe angles down to fractions of a millimeter.",
    includedWork: [
      "Hunter HawkEye Elite 3D 4-wheel alignment setup and calibration",
      "Road-force computerized dynamic wheel balancing",
      "Tire tread depth laser mapping and irregular wear evaluation",
      "Suspension ball joint, tie rod, and bushing play testing",
      "Tire Pressure Monitoring System (TPMS) sensor recoding"
    ],
    symptoms: [
      "Vehicle pulling or drifting to the left or right on flat roads",
      "Off-center steering wheel when driving straight",
      "Uneven inner or outer tire tread wear (feathering / cupping)",
      "Vibration through the steering wheel at highway speeds (55–75 mph)"
    ],
    faqs: [
      {
        q: "How often should wheel alignment be checked?",
        a: "We advise checking alignment once per year, whenever installing new tires, or immediately after hitting severe potholes or curbs."
      }
    ]
  },
  {
    id: "battery-and-electrical",
    slug: "battery-and-electrical",
    title: "Battery, Starter & Electrical Systems",
    shortDescription:
      "AGM/Lithium battery replacement, alternator testing, wiring repair, and parasitic draw troubleshooting.",
    category: "Electrical",
    iconName: "Zap",
    priceRange: "Starting from $99",
    turnaroundTime: "45 – 90 minutes",
    warranty: "Up to 3-year battery manufacturer warranty",
    heroImage:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Modern cars contain dozens of sensitive electronic control units. We test, calibrate, and install high-cranking AGM batteries with full battery management system (BMS) registration to protect your electronics.",
    includedWork: [
      "Conductance battery health and Cold Cranking Amps (CCA) load test",
      "Alternator charging voltage and diode ripple measurement",
      "Starter draw amperage evaluation",
      "BMS (Battery Management System) electronic registration",
      "Parasitic battery drain testing with millivolt drop diagnostics"
    ],
    symptoms: [
      "Engine cranks slowly or clicks repeatedly without starting",
      "Battery/alternator warning light displayed on cluster",
      "Flickering headlights, erratic dashboard displays, or radio resets",
      "Battery is more than 3 to 4 years old"
    ],
    faqs: [
      {
        q: "Why does my European car require battery registration?",
        a: "Modern vehicles (BMW, Audi, Porsche, Mercedes) adjust alternator charging rates based on battery age. Registering the new battery informs the ECU to reset charging profiles, preventing battery boiling and premature failure."
      }
    ]
  },
  {
    id: "transmission-suspension",
    slug: "transmission-suspension",
    title: "Transmission & Suspension Overhaul",
    shortDescription:
      "Automatic & DSG transmission fluid flushes, clutch service, shocks, struts, and control arm replacements.",
    category: "Mechanical",
    iconName: "Wrench",
    priceRange: "Custom quote following inspection",
    turnaroundTime: "1 – 2 days",
    warranty: "12 months / 12,000 miles",
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Restore that tight, responsive factory ride quality. Our specialists repair everything from worn strut mounts, control arm bushings, and sway bar links to dual-clutch transmission flushes and torque converter repairs.",
    includedWork: [
      "Comprehensive multi-link suspension and subframe inspection",
      "Transmission pan removal, magnet inspection, and OEM filter replacement",
      "Precision fluid refill with manufacturer-approved ATF/DSG/DCT fluid",
      "Strut, coil spring, and shock absorber replacement",
      "CV axle, differential seals, and driveshaft guibo flex-disc renewal"
    ],
    symptoms: [
      "Hard shifting, slipping gears, or delayed engagement into Drive/Reverse",
      "Clunking or rattling over road bumps and speed humps",
      "Excessive car body roll when cornering or nose-diving under braking",
      "Fluid leaks underneath the transmission or differential area"
    ],
    faqs: [
      {
        q: "Is transmission fluid really 'lifetime' like some dealers claim?",
        a: "No fluid lasts forever. ZF, the manufacturer of transmissions for BMW, Audi, and Porsche, recommends servicing fluid every 60,000 miles to prevent valve body wear and clutch pack degradation."
      }
    ]
  }
];

export const getServiceBySlug = (slug) => {
  return SERVICES.find((service) => service.slug === slug);
};
