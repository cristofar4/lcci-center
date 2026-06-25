export const SITE = {
  name: "LCCI Conference and Exhibition Centre",
  shortName: "LCCI Centre",
  tagline: "Nigeria's Premier Conference and Exhibition Destination",
  description:
    "LCCI Conference and Exhibition Centre is the leading destination for conferences, exhibitions, trade fairs, business summits and corporate events in Lagos, Nigeria. World class halls, technology forward spaces and white glove service.",
  url: "https://lcci-centre.com",
  ogImage: "/og.png",
  email: "events@lcci-centre.com",
  phone: "+234 700 000 5224",
  phoneHref: "+2347000005224",
  address: {
    line1: "Lateef Jakande Road, Alausa",
    line2: "Ikeja, Lagos",
    country: "Nigeria",
  },
  hours: "Monday to Saturday, 8am to 8pm",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "The Centre", href: "/about" },
  { label: "Venues", href: "/venues" },
  { label: "Events", href: "/events" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
