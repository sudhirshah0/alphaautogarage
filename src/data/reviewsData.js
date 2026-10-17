/**
 * Reviews and Testimonials Data
 * NOTE: Update these entries with your genuine verified Google / Yelp customer testimonials.
 */

export const REVIEWS_OVERVIEW = {
  averageRating: 4.9,
  totalReviews: 248,
  breakdown: [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ],
  // TODO: Replace with your Google Business Review link (e.g., https://g.page/r/your-shop/review)
  googleReviewUrl: "https://maps.google.com/?q=Alpha+Auto+Garage+Reviews"
};

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    car: "2021 BMW M340i xDrive",
    service: "Computerized Engine Diagnostics & Maintenance",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    text:
      "Dealer quoted me $2,400 to replace an entire wiring loom for an intermittent misfire code. Took it to Alpha Auto — their diagnostic technician identified a single corroded ground pin on cylinder 3 within 45 minutes. Saved me over $1,800. Honest, highly skilled, and transparent.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    car: "2019 Porsche Macan S",
    service: "Brake System & PDK Transmission Service",
    rating: 5,
    date: "1 month ago",
    verified: true,
    text:
      "Hard to find an independent shop you can trust with a Porsche. Alpha Auto did the full 60k service including PDK transmission fluid and Brembo brake pads. The car shifts silky smooth and the pedal feel is razor sharp. The workshop is cleaner than a surgical room.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "rev-3",
    author: "David Chen",
    car: "2022 Lexus RX 350",
    service: "Synthetic Oil Service & 3D Laser Alignment",
    rating: 5,
    date: "2 months ago",
    verified: true,
    text:
      "Superb customer experience. Booked via their website in under a minute, brought the car in at 9:00 AM, received a detailed digital inspection report with pictures by 10:15 AM, and picked it up before noon. No surprise fees whatsoever.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "rev-4",
    author: "Julian Mercer",
    car: "2020 Mercedes-Benz E450 Coupe",
    service: "Air Conditioning & Climate Control",
    rating: 5,
    date: "3 months ago",
    verified: true,
    text:
      "My dual-zone AC was blowing warm on the passenger side during a heatwave. Alpha diagnosed a faulty blend door actuator and safely recovered and recharged the R1234yf system. Finished in less than 24 hours. Will never go back to the dealership.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "rev-5",
    author: "Sarah Jenkins",
    car: "2018 Audi S4",
    service: "Suspension Overhaul & Alignment",
    rating: 5,
    date: "4 months ago",
    verified: true,
    text:
      "Replaced worn front upper control arms and performed a Hunter 3D 4-wheel alignment. The high-speed steering wobble is 100% eliminated. Truly appreciate how they walked me into the bay and showed me the torn rubber bushings in person.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "rev-6",
    author: "Tariq Al-Mansoor",
    car: "2021 Land Rover Defender 110",
    service: "Factory Scheduled Maintenance & Off-Road Prep",
    rating: 5,
    date: "5 months ago",
    verified: true,
    text:
      "Full fluids renewal, differential service, and suspension calibration before an overland trek. The team really understands Land Rover electronics and mechanical quirks. Flawless work.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80"
  }
];
