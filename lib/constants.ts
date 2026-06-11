export const WHATSAPP_NUMBER = '+6596773465';
export const WHATSAPP_LINK = 'https://wa.me/6596773465';
export const WHATSAPP_PREFILL = 'Hi Homeaspect, I need emergency plumbing assistance.';
export const WHATSAPP_FULL_LINK = `https://wa.me/6596773465?text=${encodeURIComponent('Hi Homeaspect, I need emergency plumbing assistance.')}`;
export const PHONE_NUMBER = '+65 9677 3465';
export const PHONE_LINK = 'tel:+6596773465';
export const COMPANY_NAME = 'Homeaspect';
export const SITE_URL = 'https://homeaspect.com.sg';

export const SERVICES = [
  {
    slug: 'toilet-bowl-choke-repair',
    title: 'Toilet Bowl Choke Repair',
    shortTitle: 'Toilet Choke',
    description: 'Professional toilet bowl choke repair services. We clear even the most stubborn blockages quickly and effectively.',
    image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Toilet bowl with water indicating choke blockage in Singapore bathroom',
  },
  {
    slug: 'pipe-leak-repair',
    title: 'Pipe Leak Repair',
    shortTitle: 'Pipe Leak',
    description: 'Fast pipe leak repair to prevent water damage. Our technicians locate and fix leaks with minimal disruption.',
    image: 'https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Water leaking from residential pipe requiring urgent repair',
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    shortTitle: 'Water Heater',
    description: 'Expert water heater repair and replacement. We service all major brands and models for HDB and condo units.',
    image: 'https://images.pexels.com/photos/3761559/pexels-photo-3761559.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Bathroom sink faucet with water heater unit in Singapore apartment',
  },
  {
    slug: 'sink-choke-repair',
    title: 'Sink Choke Repair',
    shortTitle: 'Sink Choke',
    description: 'Reliable sink choke repair for kitchen and bathroom sinks. Fast clearing of clogs and blockages.',
    image: 'https://images.pexels.com/photos/6248900/pexels-photo-6248900.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Kitchen sink with drain blockage and stagnant water',
  },
  {
    slug: 'floor-trap-choke-repair',
    title: 'Floor Trap Choke Clearing',
    shortTitle: 'Floor Trap',
    description: 'Professional floor trap choke clearing. Prevent water pooling and foul odours in your bathroom and kitchen.',
    image: 'https://images.pexels.com/photos/9462641/pexels-photo-9462641.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Bathroom floor drain with water pooling from blocked floor trap',
  },
  {
    slug: 'tap-repair',
    title: 'Tap Repair & Replacement',
    shortTitle: 'Tap Repair',
    description: 'Tap repair and replacement services. Fix leaking taps, install new fixtures, and restore proper water flow.',
    image: 'https://images.pexels.com/photos/34295406/pexels-photo-34295406.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Dripping bathroom faucet tap with water droplet indicating leak',
  },
  {
    slug: 'basin-replacement',
    title: 'Basin Replacement',
    shortTitle: 'Basin',
    description: 'Basin replacement and installation services. Professional fitting for HDB and condo bathrooms and kitchens.',
    image: 'https://images.pexels.com/photos/3761559/pexels-photo-3761559.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Modern bathroom washbasin with chrome faucet for replacement',
  },
] as const;

export const SERVICE_AREAS = [
  'Tampines', 'Bedok', 'Jurong', 'Woodlands', 'Sengkang', 'Punggol',
  'Hougang', 'Ang Mo Kio', 'Bishan', 'Toa Payoh', 'Novena', 'Clementi',
  'Bukit Batok', 'Choa Chu Kang', 'Yishun', 'Pasir Ris', 'Tiong Bahru',
  'Queenstown', 'Marine Parade', 'Serangoon',
];

export const FAQS = [
  {
    question: 'How quickly can Homeaspect respond to an emergency?',
    answer: 'We aim to respond within 30-60 minutes for emergency plumbing calls across Singapore. Our technicians are strategically located to cover all areas including HDB estates and private condos.',
  },
  {
    question: 'Do you charge extra for night or weekend emergency calls?',
    answer: 'Our emergency plumbing rates are transparent. While after-hours calls may incur a nominal surcharge, we always inform you of the estimated cost before starting any work. No hidden fees.',
  },
  {
    question: 'What areas in Singapore do you cover?',
    answer: 'Homeaspect covers all areas across Singapore including Tampines, Bedok, Jurong, Woodlands, Sengkang, Punggol, and more. Both HDB and private condominium plumbing services are available.',
  },
  {
    question: 'Do you provide a warranty for your plumbing work?',
    answer: 'Yes, Homeaspect provides a workmanship warranty on all plumbing repairs. The warranty period varies depending on the type of service performed. We stand behind the quality of our work.',
  },
  {
    question: 'Can you repair plumbing in HDB flats?',
    answer: 'Absolutely. Our technicians are experienced with HDB plumbing systems and regulations. We handle HDB-approved plumbing works including pipe replacement, toilet repairs, and choke clearing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, PayNow, bank transfer, and major credit/debit cards. Payment is collected after the job is completed to your satisfaction.',
  },
  {
    question: 'How do I know if my plumbing issue is an emergency?',
    answer: 'Any situation involving active water leaks, flooding, complete blockage of toilets or drains, or burst pipes qualifies as a plumbing emergency. Contact us immediately via WhatsApp for fast assistance.',
  },
  {
    question: 'Do you replace water heaters as well as repair them?',
    answer: 'Yes, we provide both water heater repair and replacement services. If your unit is beyond repair, we can recommend and install a suitable replacement from trusted brands.',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/emergency-plumbing', label: 'Emergency' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// Emergency service images - showing actual plumbing problems
export const EMERGENCY_SERVICES = [
  {
    title: 'Burst or Leaking Pipes',
    description: 'Active water leaks that can cause structural damage, mould growth, or flooding',
    image: 'https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Water leaking from residential pipe causing damage to home',
  },
  {
    title: 'Severe Toilet Chokes',
    description: 'Complete blockage that renders the toilet unusable, especially in single-toilet homes',
    image: 'https://images.pexels.com/photos/4239015/pexels-photo-4239015.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Toilet with severe choke blockage requiring professional emergency repair',
  },
  {
    title: 'Water Heater Failure',
    description: 'No hot water, leaking units, or electrical issues with your water heater',
    image: 'https://images.pexels.com/photos/31710804/pexels-photo-31710804/free-photo-of-close-up-of-a-dripping-faucet-indoors.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Dripping faucet indicating water heater failure no hot water',
  },
  {
    title: 'Sink or Drain Overflow',
    description: 'Water backing up into sinks, showers, or floor drains',
    image: 'https://images.pexels.com/photos/6248900/pexels-photo-6248900.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Kitchen sink with water backing up from blocked drain',
  },
  {
    title: 'Floor Trap Choke',
    description: 'Water pooling on bathroom or kitchen floors with foul odours',
    image: 'https://images.pexels.com/photos/9462641/pexels-photo-9462641.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Bathroom floor drain blocked with water pooling on tiles',
  },
  {
    title: 'Emergency Plumbing Response',
    description: 'Professional plumber dispatched fast with the right tools and parts',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: "Plumber's hands fixing pipe under sink with wrench during emergency",
  },
] as const;

// Trust section images - showing real residential context
export const TRUST_ITEMS = [
  {
    title: 'Singapore-Wide',
    description: 'Covering all HDB estates and condos across Singapore',
    image: 'https://images.pexels.com/photos/8186482/pexels-photo-8186482.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageAlt: 'Singapore residential apartment buildings with HDB flats',
  },
  {
    title: '24/7 Availability',
    description: 'Round-the-clock emergency plumbing support, including weekends and holidays',
    image: 'https://images.pexels.com/photos/1599790/pexels-photo-1599790.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageAlt: 'Bathroom at night showing plumbing emergency requiring 24-hour service',
  },
  {
    title: 'Experienced Technicians',
    description: 'Skilled plumbers with years of experience handling all plumbing issues',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageAlt: "Experienced plumber's hands repairing pipe fitting with professional tools",
  },
  {
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden charges. Know the cost before work begins',
    image: 'https://images.pexels.com/photos/9462224/pexels-photo-9462224.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageAlt: 'Residential bathroom sink showing typical plumbing repair scenario',
  },
] as const;

// About page images
export const ABOUT_IMAGES = {
  hero: 'https://images.pexels.com/photos/8186489/pexels-photo-8186489.jpeg?auto=compress&cs=tinysrgb&w=800',
  heroAlt: 'Singapore HDB residential buildings where Homeaspect provides plumbing',
  team: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
  teamAlt: "Plumber's hands installing steel pipe fitting with professional tools",
} as const;
