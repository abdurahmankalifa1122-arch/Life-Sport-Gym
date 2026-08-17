export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  iconName: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  priceNote: string;
  badge?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TrainerProfile {
  id: string;
  role: string;
  title: string;
  specialty: string;
  focusAreas: string[];
  imageUrl: string;
  isPlaceholderNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'freeweights' | 'machines' | 'cardio' | 'facility';
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  memberSince: string;
  location: string;
  quote: string;
  isEditablePlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
