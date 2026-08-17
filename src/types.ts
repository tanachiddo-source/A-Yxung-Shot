export type Category = 
  | 'All'
  | 'Portraits'
  | 'Events'
  | 'Weddings'
  | 'Commercial'
  | 'Lifestyle'
  | 'Creative';

export interface ProjectImage {
  url: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'ultrawide';
  alt: string;
  metadata?: {
    camera?: string;
    lens?: string;
    location?: string;
    year?: string;
    curatorNote?: string;
  };
}

export interface SequenceBlock {
  type: 'full-width' | 'two-column' | 'asymmetric-large-small' | 'full-bleed' | 'caption-focus';
  images: ProjectImage[];
  leadImageIndex?: number;
  annotation?: string;
  quote?: string;
}

export interface Project {
  id: number;
  number: string; // e.g. "01"
  title: string;
  slug: string;
  category: Category;
  subcategory: string;
  year: string;
  location: string;
  client: string;
  role: string;
  description: string;
  fullStatement: string;
  coverImage: string;
  sequence: SequenceBlock[];
  allImages: ProjectImage[];
  featured: boolean;
  catalogCode: string;
  exhibitionDate?: string;
  colorPalette?: string[];
}

export interface ServiceItem {
  id: string;
  category: Category;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  startingRate: string;
  estimatedTimeline: string;
  image: string;
  recommendedFor: string;
}

export interface BookingInquiry {
  id: string;
  referenceNumber: string;
  createdAt: string;
  serviceType: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime?: string;
  location: string;
  guestCount?: string;
  duration?: string;
  budgetRange?: string;
  visionDetails: string;
  referralSource: string;
  status: 'Received' | 'In Review' | 'Date Tentative' | 'Confirmed';
}
