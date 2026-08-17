import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Fragrance House',
    slug: 'fragrance-house',
    category: 'Commercial',
    subcategory: 'Olfactory Campaign & Still Life',
    year: '2026',
    location: 'Cape Town',
    client: 'Fragrance House Atelier',
    role: 'Photography & Creative Direction',
    description: 'A visual study of scent, identity, and raw natural ingredients under sculpted Atlantic light.',
    fullStatement: 'Commissioned by Fragrance House to introduce their 2026 signature extract collection. The campaign explores tactile intimacy: heavy fluted glass meeting warm skin, cedarwood residue, and the tactile weight of perfume in morning light. Shot using a mix of digital medium format and bespoke optical prisms on location in Higgovale, Cape Town.',
    coverImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-001',
    featured: true,
    exhibitionDate: 'March 2026',
    sequence: [
      {
        type: 'full-bleed',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2400&auto=format&fit=crop',
            caption: 'Plate 01: Extract No. IV in morning raking light.',
            aspectRatio: 'landscape',
            alt: 'Amber perfume bottle with golden light reflections',
            metadata: {
              camera: 'Medium Format Digital',
              lens: '80mm f/2.8 Prime',
              location: 'Higgovale Studio, Cape Town',
              curatorNote: 'Single directional source with reflector bounce.'
            }
          }
        ],
        annotation: '01 / 08 · Digital Medium Format · Higgovale Studio'
      },
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 02: Raw botanical resin and bergamot peel.',
            aspectRatio: 'portrait',
            alt: 'Hands holding botanical ingredients for perfume',
            metadata: { lens: '110mm Macro' }
          },
          {
            url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 03: Tactile glass weight & surface refraction.',
            aspectRatio: 'portrait',
            alt: 'Perfume mist suspended in air with luxury bottle',
            metadata: { lens: '80mm f/2.8' }
          }
        ],
        quote: '“Scent is memory made physical — we sought to photograph the atmosphere before the aroma leaves the skin.”'
      },
      {
        type: 'asymmetric-large-small',
        leadImageIndex: 0,
        images: [
          {
            url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1800&auto=format&fit=crop',
            caption: 'Plate 04: The Alchemist Table — test vials and botanical distillates.',
            aspectRatio: 'landscape',
            alt: 'Luxury minimalist glass vessels arranged in editorial symmetry',
            metadata: { lens: '45mm Wide' }
          },
          {
            url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=1000&auto=format&fit=crop',
            caption: 'Plate 05: Collarbone and applied pulse point.',
            aspectRatio: 'portrait',
            alt: 'Editorial portrait showing perfume application on neck',
            metadata: { lens: '85mm f/1.4' }
          }
        ]
      },
      {
        type: 'caption-focus',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=2000&auto=format&fit=crop',
            caption: 'Plate 06: Final campaign key visual — Bergamot & Smoked Vetiver.',
            aspectRatio: 'landscape',
            alt: 'Sleek luxury fragrance bottle on textured mineral plinth'
          }
        ],
        annotation: 'Exhibited in the Cape Town Design Archive 2026 Collection.'
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop',
        caption: 'Extract No. IV bottle study',
        alt: 'Amber perfume bottle'
      },
      {
        url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Botanical ingredients',
        alt: 'Botanical perfume study'
      },
      {
        url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Refraction & Mist',
        alt: 'Glass refraction'
      },
      {
        url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1800&auto=format&fit=crop',
        caption: 'The Alchemist Table',
        alt: 'Perfume workspace'
      },
      {
        url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=1000&auto=format&fit=crop',
        caption: 'Skin & Scent Study',
        alt: 'Editorial portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=2000&auto=format&fit=crop',
        caption: 'Key Campaign Visual',
        alt: 'Perfume on stone plinth'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Lorea High Tea Bus',
    slug: 'lorea-high-tea-bus',
    category: 'Lifestyle',
    subcategory: 'Brand, Hospitality & Movement',
    year: '2026',
    location: 'Cape Town',
    client: 'Lorea Collective',
    role: 'Photography & Creative Production',
    description: 'An afternoon of mobile elegance winding between Signal Hill and the Atlantic Coastline.',
    fullStatement: 'Lorea High Tea Bus reimagines colonial afternoon tea through contemporary African hospitality. The visual approach leaned into kinetic warmth: sunlight flaring through moving curved windows, fine china clinking over mountain bends, and unguarded laughter captured with natural film cadence.',
    coverImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-002',
    featured: true,
    exhibitionDate: 'January 2026',
    sequence: [
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1400&auto=format&fit=crop',
            caption: 'Plate 01: Porcelain, iced rooibos infusion, and Atlantic glow.',
            aspectRatio: 'portrait',
            alt: 'High tea table setting with fine tableware and florals'
          },
          {
            url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop',
            caption: 'Plate 02: Guests conversing along the coastal road pass.',
            aspectRatio: 'portrait',
            alt: 'Guests laughing and enjoying afternoon tea inside chic bus'
          }
        ]
      },
      {
        type: 'full-width',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2200&auto=format&fit=crop',
            caption: 'Plate 03: Pastry craftsmanship by Lorea Culinary.',
            aspectRatio: 'landscape',
            alt: 'Artisanal macarons and tartlets on brass tier stand'
          }
        ],
        annotation: '02 / 06 · Natural Sunlight · Signal Hill Route'
      },
      {
        type: 'asymmetric-large-small',
        leadImageIndex: 0,
        images: [
          {
            url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1800&auto=format&fit=crop',
            caption: 'Plate 04: Sparkling wine pour caught at 1/1600s.',
            aspectRatio: 'landscape',
            alt: 'Champagne poured into coupe glasses'
          },
          {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
            caption: 'Plate 05: Portrait in motion.',
            aspectRatio: 'portrait',
            alt: 'Editorial portrait of stylish guest in sunlit interior'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=2000&auto=format&fit=crop',
        caption: 'High tea table setting',
        alt: 'High tea setting'
      },
      {
        url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop',
        caption: 'Candid conversation',
        alt: 'Guests laughing'
      },
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2200&auto=format&fit=crop',
        caption: 'Culinary presentation',
        alt: 'Pastry craftsmanship'
      },
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1800&auto=format&fit=crop',
        caption: 'Champagne toast',
        alt: 'Champagne toast'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
        caption: 'Guest portrait',
        alt: 'Editorial portrait'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    title: "Graduation '26",
    slug: 'graduation-26',
    category: 'Portraits',
    subcategory: 'Editorial Commemoration',
    year: '2026',
    location: 'Cape Town',
    client: 'Private Commission',
    role: 'Editorial Photography',
    description: 'Deconstructing academic milestone portraiture into timeless, high-fashion monumentality.',
    fullStatement: 'Rejecting standard assembly-line cap and gown photography, Graduation ‘26 treats academic accomplishment as an editorial triumph. Captured against the sandstones and monumental colonnades of Cape Town’s historic campus grounds, honoring ancestry, quiet poise, and future authority.',
    coverImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-003',
    featured: true,
    exhibitionDate: 'February 2026',
    sequence: [
      {
        type: 'full-width',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2200&auto=format&fit=crop',
            caption: 'Plate 01: Stoic presence — velvet stole and sandstone pillars.',
            aspectRatio: 'landscape',
            alt: 'Graduate in dignified attire with sculptural poise'
          }
        ],
        annotation: '03 / 06 · Direct Midday Contrast · Jameson Hall Steps'
      },
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 02: Intimate profile with generational gratitude.',
            aspectRatio: 'portrait',
            alt: 'Refined young man portrait in academic blazer'
          },
          {
            url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 03: Degree conferral celebration with family heirloom jewelry.',
            aspectRatio: 'portrait',
            alt: 'Woman portrait in graduate hood with confident smile'
          }
        ],
        quote: '“Not merely a record of completion, but a declaration of legacy.”'
      },
      {
        type: 'caption-focus',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1800&auto=format&fit=crop',
            caption: 'Plate 04: The Cohort in motion — brotherhood and shared triumph.',
            aspectRatio: 'landscape',
            alt: 'Graduates walking together in cinematic outdoor setting'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop',
        caption: 'Pillars & Heritage',
        alt: 'Graduate portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
        caption: 'Quiet Authority',
        alt: 'Graduate man portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
        caption: 'Legacy in Bloom',
        alt: 'Graduate woman portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1800&auto=format&fit=crop',
        caption: 'The Cohort',
        alt: 'Group portrait'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Atelier Vesper',
    slug: 'atelier-vesper',
    category: 'Creative',
    subcategory: 'Couture Lookbook & Monoliths',
    year: '2026',
    location: 'Cape Town',
    client: 'Vesper Tailoring House',
    role: 'Art Direction & Photography',
    description: 'Sculptural wool silhouettes juxtaposed with raw weathered basalt on the Atlantic seaboard.',
    fullStatement: 'Shot during winter twilight on the granite boulders of Llandudno. Atelier Vesper explores the dialogue between rigid tailoring craftsmanship and unyielding South African geological forms.',
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-004',
    featured: true,
    exhibitionDate: 'April 2026',
    sequence: [
      {
        type: 'asymmetric-large-small',
        leadImageIndex: 0,
        images: [
          {
            url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop',
            caption: 'Plate 01: Heavy wool overcoat draped across Atlantic rock.',
            aspectRatio: 'landscape',
            alt: 'Fashion model in architectural coat on coastal granite'
          },
          {
            url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
            caption: 'Plate 02: Monochromatic silhouette against cold mist.',
            aspectRatio: 'portrait',
            alt: 'High fashion editorial model with dramatic yellow garment'
          }
        ]
      },
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 03: Seam curvature and lapel geometry.',
            aspectRatio: 'portrait',
            alt: 'Fashion detail of fabric and tailoring'
          },
          {
            url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 04: Wind resistance study.',
            aspectRatio: 'portrait',
            alt: 'Fashion model with windblown dress outdoors'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop',
        caption: 'Overcoat on Granite',
        alt: 'Model on ocean rock'
      },
      {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Monochromatic Form',
        alt: 'Fashion silhouette'
      },
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
        caption: 'Lapel Detail',
        alt: 'Tailoring detail'
      },
      {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
        caption: 'Wind & Fabric',
        alt: 'Editorial in wind'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    title: 'The Atlantic Nuptials',
    slug: 'the-atlantic-nuptials',
    category: 'Weddings',
    subcategory: 'Contemporary Matrimony',
    year: '2026',
    location: 'Bantry Bay, Cape Town',
    client: 'Chloe & Marcus',
    role: 'Documentary & Fine Art Photography',
    description: 'An intimate clifftop ceremony documented with quiet restraint and documentary honesty.',
    fullStatement: 'Foregoing high-saturation wedding conventions for an honest, cinema-grain documentation. Thirty guests perched above the ocean swell, champagne served in crystal coupes, and candle-lit speeches that carried past midnight.',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-005',
    featured: false,
    exhibitionDate: 'January 2026',
    sequence: [
      {
        type: 'full-bleed',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2200&auto=format&fit=crop',
            caption: 'Plate 01: Sunset vows above the Atlantic breakwater.',
            aspectRatio: 'landscape',
            alt: 'Bride and groom embracing in ocean twilight'
          }
        ]
      },
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 02: Silk veil caught in seaside gust.',
            aspectRatio: 'portrait',
            alt: 'Romantic veil detail in ocean breeze'
          },
          {
            url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 03: The First Dance under low tungsten lanterns.',
            aspectRatio: 'portrait',
            alt: 'Wedding couple first dance in warm low light'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop',
        caption: 'Sunset Vows',
        alt: 'Couple in sunset'
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        caption: 'Veil in Breeze',
        alt: 'Silk veil detail'
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
        caption: 'The First Dance',
        alt: 'First dance'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    title: 'Nocturne Botanica',
    slug: 'nocturne-botanica',
    category: 'Events',
    subcategory: 'Gastronomy & Private Salon',
    year: '2026',
    location: 'Kirstenbosch, Cape Town',
    client: 'Epice & Glass',
    role: 'Editorial Event Photography',
    description: 'A private seven-course feast within a nocturnal glasshouse surrounded by indigenous fynbos.',
    fullStatement: 'Capturing the sensory pulse of nocturnal dining. Natural candlelight bouncing off bespoke glassware, chef preparations at the wood fire, and the tactile presence of an unrepeatable evening.',
    coverImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-006',
    featured: false,
    exhibitionDate: 'February 2026',
    sequence: [
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 01: Rare Syrah decanted into handblown crystal.',
            aspectRatio: 'portrait',
            alt: 'Wine pouring into glass in candlelit restaurant'
          },
          {
            url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 02: The long communal banquet table.',
            aspectRatio: 'portrait',
            alt: 'Long banquet dinner table with candles and flowers'
          }
        ]
      },
      {
        type: 'full-width',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2200&auto=format&fit=crop',
            caption: 'Plate 03: Charred king oyster and fermented wild berry reduction.',
            aspectRatio: 'landscape',
            alt: 'Fine dining culinary dish plating'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop',
        caption: 'Wine Decanting',
        alt: 'Wine decanter'
      },
      {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
        caption: 'Banquet Table',
        alt: 'Banquet dinner'
      },
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2200&auto=format&fit=crop',
        caption: 'Culinary Plating',
        alt: 'Fine dining plate'
      }
    ]
  },
  {
    id: 7,
    number: '07',
    title: 'Solitude in Form',
    slug: 'solitude-in-form',
    category: 'Portraits',
    subcategory: 'Personal Branding & Character',
    year: '2026',
    location: 'Cape Town Studio',
    client: 'Sindiwe M. (Author & Dramatist)',
    role: 'Editorial Portraiture',
    description: 'Stripping back decorative distractions to reveal psychological depth and raw expressive truth.',
    fullStatement: 'Shot with zero artificial diffusion. Using directional window light and textured canvas backdrops, these portraits offer a monument to artistic vocation, stillness, and character.',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-007',
    featured: false,
    exhibitionDate: 'March 2026',
    sequence: [
      {
        type: 'two-column',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 01: Direct gaze and tactile shadow.',
            aspectRatio: 'portrait',
            alt: 'Striking black and white or moody woman portrait'
          },
          {
            url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
            caption: 'Plate 02: Profile lineation.',
            aspectRatio: 'portrait',
            alt: 'Sculptural male portrait with dramatic lighting'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop',
        caption: 'Direct Gaze',
        alt: 'Woman portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
        caption: 'Profile Lineation',
        alt: 'Male portrait'
      }
    ]
  },
  {
    id: 8,
    number: '08',
    title: 'Kloof Street Pavilions',
    slug: 'kloof-street-pavilions',
    category: 'Commercial',
    subcategory: 'Architecture & Hospitality',
    year: '2026',
    location: 'Cape Town',
    client: 'Studio K Architectes',
    role: 'Architectural & Spatial Photography',
    description: 'Clean geometry, raw concrete, and indigenous flora framed in golden late-afternoon shadows.',
    fullStatement: 'Commissioned to document modern urban residential interventions in Kloof Street. How sunlight sculpts timber slats and creates living shadows throughout the day.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    catalogCode: 'AYS-2026-008',
    featured: false,
    exhibitionDate: 'February 2026',
    sequence: [
      {
        type: 'full-width',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop',
            caption: 'Plate 01: Cantilevered terrace framing Table Mountain.',
            aspectRatio: 'landscape',
            alt: 'Modern architectural villa overlooking mountain'
          }
        ]
      }
    ],
    allImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
        caption: 'Cantilevered Terrace',
        alt: 'Modern villa terrace'
      }
    ]
  }
];
