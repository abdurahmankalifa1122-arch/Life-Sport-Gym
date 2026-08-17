import {
  ServiceItem,
  MembershipPlan,
  TrainerProfile,
  GalleryItem,
  TestimonialItem,
  FaqItem,
} from '../types';

export const GYM_INFO = {
  name: 'Life Sport Gym',
  logoUrl: './logo.png',
  logoLocal: './logo.png',
  tagline: 'Build a Stronger Life.',
  amharicWelcome: 'እንኳን ወደ ላይፍ ስፖርት ጂም በደህና መጡ',
  amharicSub: 'ቦሌ • አዲስ አበባ • ኢትዮጵያ',
  locationCity: 'Bole, Addis Ababa',
  country: 'Ethiopia',
  phone: '+251 11 629 9953',
  phoneRaw: '+251116299953',
  currency: 'ETB',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bole+Addis+Ababa+Ethiopia+Life+Sport+Gym',
  hoursNotice: 'Contact the gym directly for daily morning, afternoon, and weekend training schedules.',
  addressPlaceholder: 'Bole Sub-City, Addis Ababa, Ethiopia (Contact gym for exact landmark directions)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'strength-training',
    title: 'Strength & Powerlifting',
    category: 'Heavy Lifting',
    iconName: 'Dumbbell',
    description:
      'High-capacity Olympic barbells, calibrated steel plates, heavy-duty power racks, and deadlift platforms engineered for serious progressive overload.',
    features: [
      'Competition-grade Olympic barbells',
      'Solid steel & bumper plate collection',
      'Reinforced power cages & squat stations',
      'Dedicated chalk-friendly lifting platforms',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'free-weights',
    title: 'Free Weight & Dumbbell Matrix',
    category: 'Hypertrophy',
    iconName: 'Shield',
    description:
      'Comprehensive range of heavy dumbbells, flat, incline, and decline adjustable benches designed to target all muscle groups with maximum safety and stability.',
    features: [
      'Full dumbbell racks from light to heavy pairs',
      'Multiple heavy-duty adjustable benches',
      'Preacher curl & isolation stations',
      'Spacious free-weight training floor',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'heavy-machines',
    title: 'Plate-Loaded & Cable Machines',
    category: 'Resistance',
    iconName: 'Layers',
    description:
      'Biomechanically optimized selectorized pin-loaded and plate-loaded machines for safe, high-intensity muscle building and targeted hypertrophy.',
    features: [
      'Dual-stack cable crossover towers',
      'Heavy plate-loaded leg press & hack squats',
      'Lat pulldown & seated cable row stations',
      'Chest press, shoulder press & fly systems',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardio & Metabolic Conditioning',
    category: 'Endurance',
    iconName: 'Flame',
    description:
      'Commercial-grade cardiovascular equipment built for stamina, rapid fat loss, athletic conditioning, and heart health.',
    features: [
      'High-performance commercial treadmills',
      'Stationary upright & spin resistance bikes',
      'Elliptical trainers for low-impact endurance',
      'Warm-up & cool-down mobility zone',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness & Core',
    category: 'Performance',
    iconName: 'Zap',
    description:
      'Versatile functional space equipped with battle tools, pull-up bars, resistance equipment, and core development tools for real-world strength.',
    features: [
      'Heavy pull-up & dip stations',
      'Kettlebell selection & functional weights',
      'Core conditioning & abdominal boards',
      'Dynamic mobility & agility equipment',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'personal-coaching',
    title: 'Personal Training Consultation',
    category: 'Coaching',
    iconName: 'Award',
    description:
      'Structured 1-on-1 guidance focusing on proper exercise mechanics, progressive strength programming, and disciplined workout consistency.',
    features: [
      'Form evaluation & movement assessment',
      'Custom workout split recommendations',
      'Accountability & weekly progression tracking',
      'Direct trainer consultation upon inquiry',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80',
  },
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: '1-Month Standard Pass',
    duration: '1 Month Membership',
    priceNote: 'Contact Gym for Price (ETB)',
    badge: 'Flexible',
    description:
      'Full monthly access to Life Sport Gym free weights, heavy machines, cardio equipment, and locker facilities in Bole.',
    features: [
      'Unlimited gym floor access during operating hours',
      'Full use of all Olympic barbells & dumbbell racks',
      'Complete access to plate-loaded & cable machines',
      'Cardiovascular & conditioning zone access',
      'Locker room & changing area access',
    ],
    ctaText: 'Inquire for Monthly Rate',
  },
  {
    id: 'quarterly',
    name: '3-Month Discipline Pass',
    duration: '3 Months Membership',
    priceNote: 'Contact Gym for Price (ETB)',
    badge: 'Most Popular',
    isPopular: true,
    description:
      'Our recommended commitment block to build measurable muscle mass, develop real lifting discipline, and lock in consistent routine.',
    features: [
      'Unlimited access across all 3 months',
      'Priority access to all training zones & platforms',
      'Ideal duration for structured strength adaptation',
      'Locker & equipment storage availability',
      'Direct front-desk renewal support',
    ],
    ctaText: 'Inquire for 3-Month Plan',
  },
  {
    id: 'annual',
    name: 'Long-Term Strength Pass',
    duration: '6 or 12 Month Membership',
    priceNote: 'Contact Gym for Price (ETB)',
    badge: 'Best Value',
    description:
      'For dedicated lifters committed to year-round physical dominance and continuous performance gains in Bole.',
    features: [
      'Extended long-term unlimited gym access',
      'Guaranteed membership rate lock for the term',
      'Full facility privileges & premium access',
      'Dedicated member support at Bole front desk',
      'Payment settled directly in Ethiopian Birr (ETB)',
    ],
    ctaText: 'Inquire for Long-Term Rates',
  },
  {
    id: 'personal-coaching-plan',
    name: '1-on-1 Personal Training',
    duration: 'Session-Based Packages',
    priceNote: 'Contact Gym for Price (ETB)',
    badge: 'Coaching',
    description:
      'Direct one-on-one personal coaching with experienced male strength instructors tailored to your specific physical objectives.',
    features: [
      'One-on-one dedicated technique coaching',
      'Personalized strength & lifting roadmap',
      'Form correction on Squat, Bench & Deadlift',
      'Flexible session scheduling with staff',
      'Inquire with front desk for coach availability',
    ],
    ctaText: 'Inquire for Trainer Rates',
  },
];

export const TRAINERS: TrainerProfile[] = [
  {
    id: 'coach-1',
    title: 'Senior Strength & Barbell Specialist',
    role: 'Lead Strength Instructor (Placeholder)',
    specialty: 'Powerlifting, Heavy Compound Lifts & Progressive Overload',
    focusAreas: ['Barbell Squat & Deadlift Mechanics', 'Strength Foundation', 'Injury Prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    isPlaceholderNote: 'Editable coach placeholder. Contact Life Sport Gym for current trainer roster & schedule.',
  },
  {
    id: 'coach-2',
    title: 'Hypertrophy & Conditioning Coach',
    role: 'Bodybuilding & Fitness Instructor (Placeholder)',
    specialty: 'Muscle Building, Cable Mechanics & Body Composition',
    focusAreas: ['Hypertrophy Split Programming', 'Machine & Cable Technique', 'Endurance Conditioning'],
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    isPlaceholderNote: 'Editable coach placeholder. Contact Life Sport Gym for current trainer roster & schedule.',
  },
  {
    id: 'coach-3',
    title: 'Functional Conditioning Coach',
    role: 'Athletic Performance Specialist (Placeholder)',
    specialty: 'Cardiovascular Fitness, Core Stability & Functional Strength',
    focusAreas: ['High-Intensity Conditioning', 'Mobility & Joint Health', 'Athletic Preparation'],
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    isPlaceholderNote: 'Editable coach placeholder. Contact Life Sport Gym for current trainer roster & schedule.',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Olympic Lifting Platform & Heavy Barbells',
    category: 'freeweights',
    categoryLabel: 'Free Weights',
    description: 'Precision knurled Olympic bars and heavy-duty bumper plates ready for high-weight compound training.',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-2',
    title: 'Heavy Dumbbell Station & Incline Benches',
    category: 'freeweights',
    categoryLabel: 'Free Weights',
    description: 'Extensive range of heavy paired dumbbells arranged on solid industrial dual-tier racks.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-3',
    title: 'Multi-Station Heavy Cable Crossover',
    category: 'machines',
    categoryLabel: 'Resistance Machines',
    description: 'Dual adjustable pulley system for chest flyes, cable rows, lat pull variations, and arm isolation.',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-4',
    title: 'Commercial Treadmill & Cardio Row',
    category: 'cardio',
    categoryLabel: 'Cardio Zone',
    description: 'High-end commercial cardio line for high-intensity interval training and stamina development.',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-5',
    title: 'Plate-Loaded Squat & Leg Press Bay',
    category: 'machines',
    categoryLabel: 'Resistance Machines',
    description: 'Heavy steel plate-loaded machines built for intense lower body strength and quad hypertrophy.',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-6',
    title: 'Dedicated Conditioning & Boxing Zone',
    category: 'facility',
    categoryLabel: 'Training Facility',
    description: 'Spacious athletic area for functional conditioning, core workouts, and dynamic preparation.',
    imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-7',
    title: 'Dedicated Male Strength Training & Conditioning',
    category: 'facility',
    categoryLabel: 'Training Facility',
    description: 'Atmospheric, focused dark training space designed strictly for disciplined fitness and zero distractions.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-8',
    title: 'Incline Bench Press & Free Weight Station',
    category: 'freeweights',
    categoryLabel: 'Free Weights',
    description: 'Ergonomic dense-foam commercial benches built to support heavy barbell and dumbbell presses.',
    imageUrl: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&w=1000&q=80',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    title: 'Serious Strength Atmosphere',
    subtitle: 'No Gimmicks, Pure Discipline',
    description:
      'We provide an unapologetically focused fitness environment where you can lift heavy, stay consistent, and push your physical limits without distractions.',
    iconName: 'Trophy',
  },
  {
    id: 'why-2',
    title: 'Prime Bole Location',
    subtitle: 'Central Addis Ababa Access',
    description:
      'Conveniently situated in Bole, making morning, afternoon, and post-work workout sessions seamless to fit into your busy schedule.',
    iconName: 'MapPin',
  },
  {
    id: 'why-3',
    title: 'Heavy Duty Equipment',
    subtitle: 'Comprehensive Weight Stacks',
    description:
      'Equipped with solid Olympic barbells, expansive dumbbell pairs, sturdy power cages, and reliable cable stations built for real load.',
    iconName: 'Activity',
  },
  {
    id: 'why-4',
    title: 'Transparent ETB Rates',
    subtitle: 'Fair Value in Ethiopian Birr',
    description:
      'Straightforward membership plans paid in local Ethiopian Birr (ETB). No hidden registration fees or complex contracts.',
    iconName: 'CheckCircle',
  },
  {
    id: 'why-5',
    title: 'Motivating Brotherhood of Lifters',
    subtitle: 'High-Energy Culture',
    description:
      'Surround yourself with members who value discipline, hard work, and mutual respect. The energy on the floor drives every rep.',
    iconName: 'Users',
  },
  {
    id: 'why-6',
    title: 'Direct Personal Assistance',
    subtitle: 'Support at the Front Desk',
    description:
      'Our team is on-site at Bole to assist with membership inquiries, facility orientation, and personal coaching arrangements.',
    iconName: 'Headphones',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Verified Member Placeholder (e.g., Dawit T.)',
    memberSince: 'Member in Bole',
    location: 'Bole, Addis Ababa',
    quote:
      '“Life Sport Gym has the exact heavy lifting atmosphere I was searching for in Bole. The barbells, racks, and dumbbell selection allow me to train seriously without waiting.”',
    isEditablePlaceholder: true,
  },
  {
    id: 'test-2',
    author: 'Verified Member Placeholder (e.g., Yonas K.)',
    memberSince: 'Member in Bole',
    location: 'Addis Ababa',
    quote:
      '“Clean facility, well-maintained weight machines, and a disciplined vibe. Highly recommended for anyone in Addis Ababa looking to stay consistent with their fitness.”',
    isEditablePlaceholder: true,
  },
  {
    id: 'test-3',
    author: 'Verified Member Placeholder (e.g., Michael B.)',
    memberSince: 'Member in Bole',
    location: 'Bole, Addis Ababa',
    quote:
      '“Great equipment layout in a prime Bole location. Calling the front desk was easy and getting started was seamless. Great place to build real strength.”',
    isEditablePlaceholder: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I register for a membership at Life Sport Gym?',
    answer:
      'You can register directly at our front desk in Bole, Addis Ababa, or call our team at +251 11 629 9953. Our staff will walk you through available membership options, tour the gym floor, and register your profile on the spot.',
  },
  {
    id: 'faq-2',
    question: 'What currency and payment methods are accepted?',
    answer:
      'All membership fees are priced in Ethiopian Birr (ETB). Payment is handled in-person at the gym front desk. Please contact +251 11 629 9953 to confirm current in-person payment methods.',
  },
  {
    id: 'faq-3',
    question: 'Are there personal trainers available for 1-on-1 coaching?',
    answer:
      'Yes, personal training consultation and 1-on-1 coaching packages are available. Please call +251 11 629 9953 or visit the front desk to speak with available trainers and discuss your training goals.',
  },
  {
    id: 'faq-4',
    question: 'Where exactly in Bole, Addis Ababa is the gym located?',
    answer:
      'Life Sport Gym is located in Bole, Addis Ababa, Ethiopia. For exact landmark navigation and current entrance directions, please call +251 11 629 9953 or use the Google Maps link on this page.',
  },
  {
    id: 'faq-5',
    question: 'Can I visit for a single session or day pass?',
    answer:
      'Day access and guest visit policies can be confirmed directly by calling +251 11 629 9953 or checking in with the front desk staff upon arrival.',
  },
];
