/**
 * Curated photography for the LCCI Conference and Exhibition Centre.
 * Real images are served from Unsplash and load in the visitor's browser.
 * Every <SmartImage> degrades to a branded gradient if a source is unavailable,
 * so the experience never breaks. Swap any id below for owned media in /public.
 */

type ImgOpts = { w?: number; h?: number; q?: number };

export function unsplash(id: string, { w = 1600, h, q = 80 }: ImgOpts = {}) {
  const crop = h ? `&h=${h}&fit=crop&crop=edges` : "&fit=crop";
  return `https://images.unsplash.com/${id}?auto=format&q=${q}&w=${w}${crop}`;
}

export const IMG = {
  // Hero / cinematic
  heroConference: "photo-1505373877841-8d25f7d46678",
  heroCrowd: "photo-1492684223066-81342ee5ff30",
  heroStage: "photo-1531058020387-3be344556be6",
  heroLights: "photo-1511578314322-379afb476865",

  // Conferences & keynotes
  keynote: "photo-1540575467063-178a50c2df87",
  audience: "photo-1556761175-4b46a572b786",
  panel: "photo-1591115765373-5207764f72e7",
  speaker: "photo-1475721027785-f74eccf877e2",
  seminar: "photo-1524178232363-1fb2b075b655",

  // Meetings & corporate
  boardroom: "photo-1517245386807-bb43f82c33c4",
  meeting: "photo-1600880292203-757bb62b4baf",
  meetingRoom: "photo-1497366216548-37526070297c",
  workshop: "photo-1552664730-d307ca884978",
  networking: "photo-1556761175-5973dc0f32e7",
  handshake: "photo-1521791136064-7986c2920216",

  // Exhibitions & trade fairs
  exhibition: "photo-1540575467063-178a50c2df87",
  expoHall: "photo-1559223607-a43c990c692c",
  booth: "photo-1559223669-e0065fa7f142",
  productLaunch: "photo-1492684223066-81342ee5ff30",
  showcase: "photo-1505236858219-8359eb29e329",

  // Architecture & venues
  glassFacade: "photo-1431540015161-0bf868a2d407",
  atrium: "photo-1486406146926-c627a92ad1ab",
  grandHall: "photo-1582719478250-c89cae4dc85b",
  ballroom: "photo-1519167758481-83f550bb49b3",
  auditorium: "photo-1576670159805-381a5f0b71a5",
  lobby: "photo-1564069114553-7215e1ff1890",
  exterior: "photo-1497366811353-6870744d04b2",
  pavilion: "photo-1577412647305-991150c7d163",

  // Gala & hospitality
  gala: "photo-1519671482749-fd09be7ccebf",
  banquet: "photo-1530103862676-de8c9debad1d",
  reception: "photo-1464366400600-7168b8af9bc3",
  catering: "photo-1555244162-803834f70033",

  // Tech / AV
  av: "photo-1598488035139-bdbb2231ce04",
  lightingRig: "photo-1470229722913-7c0e2dbbafd3",
  control: "photo-1551818255-e6e10975bc17",

  // City / location
  cityNight: "photo-1519501025264-65ba15a82390",
  skyline: "photo-1477959858617-67f85cf4f1df",
  cityAerial: "photo-1444723121867-7a241cacace9",

  // People / testimonials
  person1: "photo-1573497019940-1c28c88b4f3e",
  person2: "photo-1560250097-0b93528c311a",
  person3: "photo-1580489944761-15a19d654956",
  person4: "photo-1568602471122-7832951cc4c5",
  person5: "photo-1507003211169-0a1dd7228f2d",
  person6: "photo-1494790108377-be9c29b29330",
};

export const HERO_VIDEOS = [
  "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  "https://cdn.coverr.co/videos/coverr-people-at-a-conference-1573/1080p.mp4",
];
