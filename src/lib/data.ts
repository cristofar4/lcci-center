import { IMG } from "./images";

export type Venue = {
  slug: string;
  name: string;
  kind: string;
  image: string;
  seated: number;
  banquet: number;
  area: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
};

export const VENUES: Venue[] = [
  {
    slug: "grand-hall",
    name: "The Grand Hall",
    kind: "Plenary and Conventions",
    image: IMG.grandHall,
    seated: 6000,
    banquet: 3200,
    area: "4,800 sqm",
    blurb:
      "A column free convention canvas engineered for international summits, plenaries and large scale exhibitions under one soaring roof.",
    features: ["Column free span", "18m ceiling height", "Tiered stage rigging", "4K LED back wall", "Direct truck access"],
    highlight: true,
  },
  {
    slug: "exhibition-pavilion",
    name: "Exhibition Pavilion",
    kind: "Trade Fairs and Expos",
    image: IMG.pavilion,
    seated: 4500,
    banquet: 2600,
    area: "3,600 sqm",
    blurb:
      "A flexible exhibition floor with high load capacity, dense power and data grids and configurable stand layouts for trade fairs.",
    features: ["Modular stand grid", "Heavy floor loading", "Power and data floor boxes", "Loading docks", "Drive in access"],
    highlight: true,
  },
  {
    slug: "summit-auditorium",
    name: "Summit Auditorium",
    kind: "Keynotes and Plenaries",
    image: IMG.auditorium,
    seated: 1200,
    banquet: 0,
    area: "1,400 sqm",
    blurb:
      "A raked auditorium with cinema grade sightlines, immersive acoustics and broadcast infrastructure for flagship keynotes.",
    features: ["Raked seating", "Broadcast control room", "Acoustic treatment", "Simultaneous interpretation", "Green rooms"],
    highlight: true,
  },
  {
    slug: "the-ballroom",
    name: "The Ballroom",
    kind: "Galas and Banquets",
    image: IMG.ballroom,
    seated: 1600,
    banquet: 1100,
    area: "1,800 sqm",
    blurb:
      "An elegant pillarless ballroom dressed in warm light, crafted for award nights, gala dinners and prestige receptions.",
    features: ["Crystal lighting", "Pre function foyer", "Show kitchen access", "Bridal and VIP suites", "Dance floor"],
  },
  {
    slug: "executive-boardrooms",
    name: "Executive Boardrooms",
    kind: "Meetings and Negotiations",
    image: IMG.boardroom,
    seated: 40,
    banquet: 0,
    area: "From 60 sqm",
    blurb:
      "A collection of private boardrooms with hospitality service, video conferencing and discreet executive entrances.",
    features: ["Video conferencing", "Privacy glass", "Concierge service", "Catering on call", "Secure access"],
  },
  {
    slug: "innovation-studios",
    name: "Innovation Studios",
    kind: "Training and Workshops",
    image: IMG.workshop,
    seated: 220,
    banquet: 140,
    area: "From 180 sqm",
    blurb:
      "Bright, reconfigurable studios designed for training programs, masterclasses and collaborative workshop formats.",
    features: ["Movable walls", "Writable surfaces", "Breakout pods", "Hybrid streaming", "Natural light"],
  },
];

export type EventCategory = {
  slug: string;
  title: string;
  image: string;
  copy: string;
  formats: string[];
};

export const EVENTS: EventCategory[] = [
  {
    slug: "conferences",
    title: "Business Conferences",
    image: IMG.keynote,
    copy: "Multi day conferences with plenary stages, breakout tracks and exhibition foyers under one roof.",
    formats: ["Plenary", "Breakout tracks", "Hybrid streaming"],
  },
  {
    slug: "exhibitions",
    title: "Trade Exhibitions",
    image: IMG.expoHall,
    copy: "International trade fairs and expos with configurable stands, heavy logistics and high footfall.",
    formats: ["Trade fairs", "Consumer expos", "Pavilions"],
  },
  {
    slug: "summits",
    title: "Business Summits",
    image: IMG.panel,
    copy: "Heads of industry summits with broadcast keynotes, VIP protocol and high level networking.",
    formats: ["Keynotes", "Roundtables", "VIP protocol"],
  },
  {
    slug: "launches",
    title: "Product Launches",
    image: IMG.productLaunch,
    copy: "Cinematic reveals with bespoke staging, immersive lighting and full broadcast capture.",
    formats: ["Reveal staging", "Press zones", "Brand activations"],
  },
  {
    slug: "meetings",
    title: "Corporate Meetings",
    image: IMG.meeting,
    copy: "Board meetings, AGMs and town halls with executive hospitality and secure access.",
    formats: ["Board meetings", "AGMs", "Town halls"],
  },
  {
    slug: "training",
    title: "Training Programs",
    image: IMG.workshop,
    copy: "Certification courses, masterclasses and workshops in flexible studio environments.",
    formats: ["Masterclasses", "Certifications", "Workshops"],
  },
  {
    slug: "networking",
    title: "Networking Events",
    image: IMG.networking,
    copy: "Curated business mixers, chamber receptions and industry connect evenings.",
    formats: ["Mixers", "Receptions", "Connect nights"],
  },
  {
    slug: "executive",
    title: "Executive Events",
    image: IMG.gala,
    copy: "Award galas, anniversaries and prestige dinners delivered with white glove service.",
    formats: ["Award nights", "Gala dinners", "Anniversaries"],
  },
];

export type Exhibition = {
  title: string;
  year: string;
  category: string;
  image: string;
  stat: string;
  statLabel: string;
  copy: string;
};

export const EXHIBITIONS: Exhibition[] = [
  {
    title: "Lagos International Trade Fair",
    year: "Annual",
    category: "Trade Fair",
    image: IMG.expoHall,
    stat: "250k",
    statLabel: "Visitors",
    copy: "West Africa's flagship trade fair bringing together manufacturers, exporters and buyers across the continent.",
  },
  {
    title: "Nigeria Tech and Innovation Expo",
    year: "2024",
    category: "Technology",
    image: IMG.av,
    stat: "480",
    statLabel: "Exhibitors",
    copy: "A showcase of startups, enterprise technology and digital infrastructure shaping the future of business.",
  },
  {
    title: "Manufacturing and Industry Summit",
    year: "2024",
    category: "Industrial",
    image: IMG.booth,
    stat: "92%",
    statLabel: "Rebook rate",
    copy: "The premier gathering for industrial leaders, supply chain partners and policy makers across the region.",
  },
  {
    title: "Agriculture and Agribusiness Fair",
    year: "2023",
    category: "Agribusiness",
    image: IMG.showcase,
    stat: "120k",
    statLabel: "Visitors",
    copy: "Connecting producers, processors and investors driving the next chapter of African agribusiness.",
  },
];

export type Service = {
  title: string;
  copy: string;
  icon: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Event Management Support",
    icon: "ClipboardList",
    copy: "A dedicated planning team that orchestrates every detail from first brief to final curtain.",
    points: ["Dedicated event manager", "Floor planning and CAD", "Run of show production", "Vendor coordination"],
  },
  {
    title: "Audio Visual Systems",
    icon: "Volume2",
    copy: "Broadcast grade sound, lighting and visuals engineered by an in house technical crew.",
    points: ["Line array sound", "LED walls and projection", "Intelligent lighting", "Live streaming and capture"],
  },
  {
    title: "Conference Facilities",
    icon: "Presentation",
    copy: "Plenary stages, breakout tracks and interpretation built for serious convening.",
    points: ["Simultaneous interpretation", "Delegate registration", "Breakout management", "Hybrid platforms"],
  },
  {
    title: "Exhibition Support",
    icon: "LayoutGrid",
    copy: "Stand design, logistics and on floor services that make exhibitors shine.",
    points: ["Custom stand build", "Logistics and rigging", "Power and connectivity", "Exhibitor concierge"],
  },
  {
    title: "Corporate Hospitality",
    icon: "UtensilsCrossed",
    copy: "Award winning catering and VIP hospitality from intimate dinners to grand banquets.",
    points: ["Bespoke menus", "VIP and protocol", "Show kitchens", "Premium beverage service"],
  },
  {
    title: "Connectivity and Security",
    icon: "ShieldCheck",
    copy: "Enterprise networking and discreet security keep your event seamless and safe.",
    points: ["High density wifi", "Dedicated fibre", "Access control", "24 hour security"],
  },
];

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const STATS: Stat[] = [
  { value: 6000, suffix: "+", label: "Seated capacity" },
  { value: 12, label: "Versatile venues" },
  { value: 25000, suffix: " sqm", label: "Total event space" },
  { value: 1800, suffix: "+", label: "Events delivered" },
];

export const WHY = [
  {
    title: "Unmatched Scale",
    copy: "The largest column free convention canvas in the region, flexible enough for 40 or 6,000 guests.",
    icon: "Maximize",
  },
  {
    title: "Technology Forward",
    copy: "4K LED, line array sound, fibre connectivity and hybrid streaming built into the architecture.",
    icon: "Cpu",
  },
  {
    title: "White Glove Service",
    copy: "A dedicated event team and concierge culture obsessed with flawless execution.",
    icon: "Sparkles",
  },
  {
    title: "Central Location",
    copy: "At the heart of Lagos with effortless access from the airport, business districts and hotels.",
    icon: "MapPin",
  },
  {
    title: "Turnkey Delivery",
    copy: "AV, catering, logistics and security under one roof and one accountable partner.",
    icon: "PackageCheck",
  },
  {
    title: "Sustainable by Design",
    copy: "Energy efficient systems, daylight harvesting and responsible operations throughout.",
    icon: "Leaf",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Discovery and Brief",
    copy: "We listen to your objectives, audience and vision, then translate them into a venue strategy.",
  },
  {
    no: "02",
    title: "Design and Proposal",
    copy: "Floor plans, staging concepts and a transparent proposal tailored to your event.",
  },
  {
    no: "03",
    title: "Production Planning",
    copy: "Run of show, technical specification and vendor coordination locked down to the minute.",
  },
  {
    no: "04",
    title: "Flawless Delivery",
    copy: "Our crew executes on the day while you focus on your guests and your message.",
  },
  {
    no: "05",
    title: "Review and Legacy",
    copy: "Post event analytics, captured content and a plan for your next gathering.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The most professional venue we have worked with in Nigeria. The team made a 4,000 delegate summit feel effortless.",
    name: "Adaeze Okafor",
    role: "Director, Pan African Business Forum",
    image: IMG.person6,
  },
  {
    quote:
      "From load in to teardown the execution was flawless. Our exhibitors called it the best fair floor on the continent.",
    name: "Tunde Bakare",
    role: "CEO, Lagos Trade Expo",
    image: IMG.person2,
  },
  {
    quote:
      "World class acoustics and broadcast infrastructure. Our product launch streamed to forty countries without a hitch.",
    name: "Ngozi Eze",
    role: "VP Marketing, Continental Telecom",
    image: IMG.person1,
  },
  {
    quote:
      "A truly premium setting. The ballroom and hospitality elevated our awards night beyond anything we imagined.",
    name: "Ibrahim Sani",
    role: "Chair, Industry Excellence Awards",
    image: IMG.person4,
  },
];

export const PARTNERS = [
  "Chamber of Commerce",
  "Continental Bank",
  "Atlas Logistics",
  "Meridian Hotels",
  "Vanguard Telecom",
  "Summit Energy",
  "Pinnacle Group",
  "Harbour Industries",
  "Crest Airlines",
  "Beacon Media",
];

export type GalleryItem = {
  src: string;
  category: string;
  title: string;
  span: "tall" | "wide" | "normal";
};

export const GALLERY: GalleryItem[] = [
  { src: IMG.heroConference, category: "Conferences", title: "International Summit Plenary", span: "wide" },
  { src: IMG.expoHall, category: "Exhibitions", title: "Trade Fair Floor", span: "tall" },
  { src: IMG.gala, category: "Galas", title: "Excellence Awards Night", span: "normal" },
  { src: IMG.panel, category: "Conferences", title: "Leadership Panel", span: "normal" },
  { src: IMG.booth, category: "Exhibitions", title: "Innovation Pavilion", span: "normal" },
  { src: IMG.networking, category: "Networking", title: "Business Mixer", span: "tall" },
  { src: IMG.ballroom, category: "Galas", title: "Grand Ballroom Reception", span: "wide" },
  { src: IMG.workshop, category: "Training", title: "Executive Masterclass", span: "normal" },
  { src: IMG.productLaunch, category: "Launches", title: "Flagship Product Reveal", span: "normal" },
  { src: IMG.auditorium, category: "Conferences", title: "Summit Auditorium", span: "normal" },
  { src: IMG.av, category: "Launches", title: "Broadcast Production", span: "tall" },
  { src: IMG.banquet, category: "Galas", title: "Gala Banquet Service", span: "normal" },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Conferences",
  "Exhibitions",
  "Galas",
  "Networking",
  "Training",
  "Launches",
];

export const MILESTONES = [
  { year: "1888", title: "A Legacy Begins", copy: "Founded on a commitment to commerce, industry and the advancement of business in Nigeria." },
  { year: "1995", title: "The Centre Opens", copy: "Our first purpose built exhibition halls welcome the nation's largest trade gatherings." },
  { year: "2012", title: "Grand Expansion", copy: "The Grand Hall and Summit Auditorium add international scale and broadcast capability." },
  { year: "2020", title: "Digital and Hybrid", copy: "Full hybrid infrastructure connects our stages to audiences across the world." },
  { year: "Today", title: "Premier Destination", copy: "The definitive home of conferences and exhibitions in West Africa." },
];

export const FAQS = [
  {
    q: "What is the largest event you can host?",
    a: "The Grand Hall seats up to 6,000 guests in a single column free space, and adjoining venues extend total capacity well beyond that for multi format events.",
  },
  {
    q: "Do you provide catering and audio visual in house?",
    a: "Yes. Catering, audio visual, lighting, connectivity and security are delivered by our in house teams, so you work with one accountable partner.",
  },
  {
    q: "How far in advance should we book?",
    a: "Flagship dates are often reserved nine to twelve months ahead. Smaller meetings and studios can frequently be arranged within weeks.",
  },
  {
    q: "Is the Centre accessible and well connected?",
    a: "The Centre sits in central Lagos with step free access throughout, ample parking and quick routes from the airport, hotels and business districts.",
  },
  {
    q: "Can you support hybrid and broadcast events?",
    a: "Absolutely. Our auditoria include broadcast control rooms, multi camera capture and streaming platforms for global hybrid audiences.",
  },
];

export const LOCATION_ADVANTAGES = [
  { stat: "20 min", label: "From Murtala Muhammed International Airport" },
  { stat: "2,500", label: "On site and partner parking spaces" },
  { stat: "15+", label: "Premium hotels within easy reach" },
  { stat: "24/7", label: "Security and operations" },
];
