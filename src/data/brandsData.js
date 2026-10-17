/**
 * Car Brands strictly serviced by Alpha Auto Garage
 * As requested: BMW, Mercedes-Benz, Audi, Toyota, Lexus, Nissan, Porsche, Land Rover, Volkswagen, Honda
 */

export const BRANDS = [
  {
    id: "bmw",
    name: "BMW",
    country: "Germany",
    tagline: "The Ultimate Driving Machine",
    specialty: "M Performance tuning, Valvetronic timing, xDrive maintenance, ISTA dealer diagnostics.",
    popularModels: ["3 Series", "5 Series", "M3 / M4", "X3", "X5", "M5"],
    diagnosticTool: "BMW ISTA/D & ISTA/P Diagnostic System",
    badge: "Precision Engineering",
    description:
      "From N55 and B58 turbocharged engines to S58 M-Power platforms, we carry factory-certified tooling, timing lock kits, and OEM fluids.",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    country: "Germany",
    tagline: "The Best or Nothing",
    specialty: "Service A & B milestones, AIRMATIC suspension, 4MATIC drivetrains, Star/Xentry diagnostics.",
    popularModels: ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "AMG GT"],
    diagnosticTool: "Mercedes-Benz Star Diagnosis (Xentry DAS)",
    badge: "Luxury Engineering",
    description:
      "Specialized care for AMG performance and standard luxury models, including air suspension rebuilding and BlueTEC emissions care.",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "audi",
    name: "Audi",
    country: "Germany",
    tagline: "Vorsprung durch Technik",
    specialty: "Quattro all-wheel drive, TFSI carbon cleaning, S-Tronic / DSG dual-clutch transmission service.",
    popularModels: ["A4", "A6", "S4 / S5", "RS6", "Q5", "Q7"],
    diagnosticTool: "VCDS (VAG-COM) & ODIS Factory Diagnostics",
    badge: "Turbo & AWD Leader",
    description:
      "Advanced diagnostics for TFSI direct-injection carbon fouling, timing chains, and high-performance Quattro differentials.",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "porsche",
    name: "Porsche",
    country: "Germany",
    tagline: "There Is No Substitute",
    specialty: "Boxer engine maintenance, PDK clutch calibration, ceramic composite brakes, IMS bearing inspection.",
    popularModels: ["911 (997/991/992)", "Cayman / Boxster", "Macan", "Cayenne", "Panamera"],
    diagnosticTool: "PIWIS III Factory Porsche Diagnostic Tester",
    badge: "Pure Sports Pedigree",
    description:
      "Track-level preparation, PDK transmission services, and meticulous inspection for air-cooled and modern water-cooled Porsche sports cars.",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Germany",
    tagline: "Das Auto",
    specialty: "TSI/TDI engine maintenance, DSG mechatronics repair, Haldex 4Motion fluid servicing.",
    popularModels: ["Golf GTI / R", "Jetta", "Tiguan", "Passat", "Atlas"],
    diagnosticTool: "ODIS & Ross-Tech VCDS Suite",
    badge: "Everyday Performance",
    description:
      "Expert servicing for turbocharged VW hatchbacks, sedans, and family SUVs using certified OEM components and factory-interval fluids.",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "land-rover",
    name: "Land Rover",
    country: "United Kingdom",
    tagline: "Above and Beyond",
    specialty: "Electronic Air Suspension (EAS), Terrain Response calibration, transfer case, supercharged V6/V8 servicing.",
    popularModels: ["Range Rover", "Range Rover Sport", "Defender", "Velar", "Discovery"],
    diagnosticTool: "Land Rover Pathfinder & SDD Diagnostic Suite",
    badge: "Luxury Off-Road Master",
    description:
      "Dedicated air suspension leak detection, cooling system updates, and robust all-terrain drivetrain maintenance.",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lexus",
    name: "Lexus",
    country: "Japan",
    tagline: "The Relentless Pursuit of Perfection",
    specialty: "Hybrid Synergy drive, V8 powertrain longevity, electronic damping, pristine OEM maintenance.",
    popularModels: ["IS 300 / 350", "ES 350", "RX 350 / 450h", "GX 460", "LC 500"],
    diagnosticTool: "Toyota / Lexus Techstream Diagnostics",
    badge: "Unrivaled Reliability",
    description:
      "Preserving supreme luxury and bulletproof engineering with genuine Lexus parts, hybrid battery testing, and fluids.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japan",
    tagline: "Let's Go Places",
    specialty: "Hybrid drive diagnostics, scheduled milestone maintenance, suspension, brake service, cooling system.",
    popularModels: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "4Runner"],
    diagnosticTool: "OEM Toyota Techstream TIS",
    badge: "Durability & Longevity",
    description:
      "Keep your Toyota running past 300,000 miles with factory-scheduled oil services, transmission flushes, and genuine OEM components.",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japan",
    tagline: "The Power of Dreams",
    specialty: "VTEC / i-VTEC valve adjustments, CVT & automatic transmission servicing, Earth Dreams turbo maintenance.",
    popularModels: ["Civic / Type R", "Accord", "CR-V", "Pilot", "Odyssey"],
    diagnosticTool: "Honda HDS (Honda Diagnostic System)",
    badge: "Smart Engineering",
    description:
      "From high-revving Type R performance to dependable daily commuter maintenance, we provide precision care for Honda engines.",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japan",
    tagline: "Innovation that Excites",
    specialty: "VQ-series V6 maintenance, CVT transmission fluid service, Z-car sports tuning, brake & suspension repairs.",
    popularModels: ["Altima", "Maxima", "Rogue", "370Z / Z", "Pathfinder"],
    diagnosticTool: "Nissan CONSULT-III Plus Diagnostics",
    badge: "Performance & Utility",
    description:
      "Specialized CVT transmission fluid exchanges, engine diagnostics, and full mechanical overhauls for Nissan passenger cars and SUVs.",
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80"
  }
];
