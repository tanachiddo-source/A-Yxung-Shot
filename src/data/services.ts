import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'portraits',
    category: 'Portraits',
    title: 'Portraits & Identity',
    tagline: 'Individual portraits, creative portraits, personal branding, and editorial sessions.',
    description: 'Stripping away artificial posture to capture authentic presence, artistic authority, and timeless character. Designed for artists, founders, creative practitioners, and graduates.',
    deliverables: [
      '60–120 minute dedicated session',
      'Studio or on-location across Cape Town',
      'Art direction & styling consultation',
      '15–25 high-resolution retouched master files',
      'Private online viewing & download gallery',
      'Full personal & editorial usage rights'
    ],
    startingRate: 'From R 3,500',
    estimatedTimeline: '7–10 working days',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    recommendedFor: 'Editorial lookbooks, artist press kits, personal branding, graduation milestones.'
  },
  {
    id: 'commercial',
    category: 'Commercial',
    title: 'Commercial & Campaign',
    tagline: 'Brands, restaurants, products, campaigns, and spatial imagery.',
    description: 'High-concept visual storytelling tailored for independent luxury brands, fashion ateliers, gastronomy houses, and spatial designers who require imagery that feels like an editorial magazine spread rather than standard advertising.',
    deliverables: [
      'Half-day or full-day production',
      'Pre-production creative treatment & moodboard',
      'Model & location coordination support',
      'Color-graded high-resolution campaign assets',
      'Web-optimized & print-ready deliverables',
      'Commercial advertising & digital license'
    ],
    startingRate: 'From R 8,500',
    estimatedTimeline: '10–14 working days',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    recommendedFor: 'Product launches, fragrance & beauty, hospitality, architectural spaces, lookbooks.'
  },
  {
    id: 'events',
    category: 'Events',
    title: 'Events & Celebrations',
    tagline: 'Graduations, private salons, launches, celebrations, and cultural gatherings.',
    description: 'Documentary coverage that values atmosphere, candid kinetic energy, and natural unposed emotion over stiff formal lineups. Preserving the tangible rhythm of an unrepeatable evening.',
    deliverables: [
      '2 to 6 hours of continuous coverage',
      'Unobtrusive documentary style shooting',
      '100–300 curated, color-corrected photographs',
      '48-hour express preview gallery for immediate press/socials',
      'Archival print-ready downloads'
    ],
    startingRate: 'From R 4,800',
    estimatedTimeline: '5–7 working days',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop',
    recommendedFor: 'Private banquets, brand launch parties, graduation celebrations, gallery vernissages.'
  },
  {
    id: 'weddings',
    category: 'Weddings',
    title: 'Contemporary Weddings',
    tagline: 'Couples, intimate ceremonies, receptions, and destination matrimonial stories.',
    description: 'A cinema-grade, documentary approach to weddings. No awkward clichés or forced poses — just authentic light, genuine intimacy, refined textures, and the visual weight of family legacy.',
    deliverables: [
      '6 to 10 hours full matrimonial narrative',
      'Pre-wedding consultation & timeline planning',
      'Engagement / couple editorial portrait session included',
      '350–600 meticulously color-graded photographs',
      'High-resolution archival cloud gallery with password protection',
      'Custom fine-art exhibition print consultation'
    ],
    startingRate: 'From R 18,000',
    estimatedTimeline: '3–4 weeks',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    recommendedFor: 'Intimate elopements, Atlantic coast weddings, Franschhoek wine estate nuptials.'
  },
  {
    id: 'creative',
    category: 'Creative',
    title: 'Creative Direction & Concept',
    tagline: 'Conceptual shoots, multidisciplinary collaborations, and visual storytelling.',
    description: 'Bespoke experimental visual productions combining photography, creative direction, set intervention, and mixed medium art. For creatives and collectives seeking uncompromising visual identity.',
    deliverables: [
      'Comprehensive concept development & art direction',
      'Full visual production management',
      'Bespoke lighting & experimental optical techniques',
      'Complete creative license package',
      'Fine art exhibition master files'
    ],
    startingRate: 'Custom Quotation',
    estimatedTimeline: 'Project dependent',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    recommendedFor: 'Music releases, gallery exhibitions, experimental lookbooks, editorial magazine submissions.'
  }
];
