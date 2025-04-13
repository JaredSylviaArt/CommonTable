export type Listing = {
  id: string;
  title: string;
  description: string;
  type: "tangible" | "intangible";
  category: string;
  createdAt: string | Date;
  popularityScore: number;
  zipCode: string;
  owner?: {
    name: string;
    email: string;
  };
  isForSale?: boolean;
  price?: number;
  transactionStatus?: 'open' | 'pending' | 'complete';
  buyerId?: string | null;
  tags?: string[];
  location?: string;
  ownerId?: string | number;
  offerType?: string;
  status?: string;
  imageUrl?: string;
  condition?: string;
  duration?: string;
  availability?: string;
  lenderId?: string | null;
  borrowerId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  reviews?: any[];
};

export const listings: Listing[] = [
  {
    id: "14",
    title: "Professional Photography Session",
    description: "2-hour professional photography session for portraits or events.",
    type: "intangible",
    offerType: "service",
    price: 150,
    status: "available",
    location: "Downtown Studio",
    ownerId: 2,
    createdAt: new Date("2024-03-05"),
    imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000",
    tags: ["intangible", "photography", "professional", "events"],
    condition: "excellent",
    duration: "2 hours",
    availability: "weekdays",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: true
  },
  {
    id: "1",
    title: "Professional Audio Mixer",
    description: "Yamaha MG10XU 10-channel mixer with built-in effects. Perfect for small to medium-sized events.",
    type: "tangible",
    category: "AV Equipment",
    createdAt: "2024-03-15T10:30:00Z",
    popularityScore: 85,
    zipCode: "90210",
    owner: {
      name: "Sarah Johnson",
      email: "sarah@example.com"
    }
  },
  {
    id: "17",
    title: "Yoga Instruction",
    description: "Private yoga sessions for beginners to advanced practitioners.",
    type: "intangible",
    offerType: "service",
    price: 40,
    status: "available",
    location: "Community Center",
    ownerId: 5,
    createdAt: new Date("2024-03-20"),
    imageUrl: "https://images.unsplash.com/photo-1575053483261-1888be6d1f1a?q=80&w=1000",
    tags: ["intangible", "fitness", "wellness", "instruction"],
    condition: "excellent",
    duration: "1 hour",
    availability: "mornings",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: true
  },
  {
    id: "3",
    title: "Portable Projector",
    description: "Epson PowerLite 1781W wireless projector with HDMI input. Great for presentations.",
    type: "tangible",
    category: "AV Equipment",
    createdAt: "2024-03-20T09:15:00Z",
    popularityScore: 78,
    zipCode: "60601",
    owner: {
      name: "David Rodriguez",
      email: "david@example.com"
    }
  },
  {
    id: "16",
    title: "Graphic Design Consultation",
    description: "One-on-one consultation for branding and design projects.",
    type: "intangible",
    offerType: "service",
    price: 75,
    status: "available",
    location: "Remote",
    ownerId: 4,
    createdAt: new Date("2024-03-15"),
    imageUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1000",
    tags: ["intangible", "design", "consulting", "remote"],
    condition: "excellent",
    duration: "1 hour",
    availability: "flexible",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: true
  },
  {
    id: "5",
    title: "Portable Stage Platform",
    description: "Modular stage platform system, 4x8 sections, easy to transport and assemble.",
    type: "tangible",
    category: "Stage Equipment",
    createdAt: "2024-03-18T11:30:00Z",
    popularityScore: 75,
    zipCode: "33139",
    owner: {
      name: "James Thompson",
      email: "james@example.com"
    }
  },
  {
    id: "19",
    title: "Spanish Language Tutoring",
    description: "Personalized Spanish lessons for all levels.",
    type: "intangible",
    offerType: "service",
    price: 30,
    status: "available",
    location: "Library Study Room",
    ownerId: 7,
    createdAt: new Date("2024-03-30"),
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
    tags: ["intangible", "education", "language", "tutoring"],
    condition: "excellent",
    duration: "1 hour",
    availability: "evenings",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: true
  },
  {
    id: "7",
    title: "Wireless Microphone System",
    description: "Shure BLX24/PG58 wireless microphone system with two handheld mics.",
    type: "tangible",
    category: "AV Equipment",
    createdAt: "2024-03-22T08:45:00Z",
    popularityScore: 82,
    zipCode: "90012",
    owner: {
      name: "Robert Kim",
      email: "robert@example.com"
    }
  },
  {
    id: "21",
    title: "Music Production Workshop",
    description: "Learn the basics of music production and audio engineering.",
    type: "intangible",
    offerType: "service",
    price: 100,
    status: "available",
    location: "Music Studio",
    ownerId: 9,
    createdAt: new Date("2024-04-05"),
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000",
    tags: ["intangible", "music", "education", "workshop"],
    condition: "excellent",
    duration: "3 hours",
    availability: "weekends",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: true
  },
  {
    id: "9",
    title: "LED Stage Lighting Kit",
    description: "Complete LED stage lighting kit with controller and mounting hardware.",
    type: "tangible",
    category: "Lighting",
    createdAt: "2024-03-25T10:20:00Z",
    popularityScore: 80,
    zipCode: "02108",
    owner: {
      name: "Thomas White",
      email: "thomas@example.com"
    }
  },
  {
    id: "2",
    title: "Sermon Series: Finding Purpose",
    description: "A 4-week sermon series on discovering your God-given purpose in life.",
    type: "intangible",
    category: "Sermon Series",
    createdAt: "2024-03-10T14:20:00Z",
    popularityScore: 92,
    zipCode: "94105",
    owner: {
      name: "Michael Chen",
      email: "michael@example.com"
    },
    tags: ["intangible", "sermon", "spiritual"]
  },
  {
    id: "11",
    title: "Portable Sound System",
    description: "Bose L1 Pro8 portable PA system with mixer and stands.",
    type: "tangible",
    category: "AV Equipment",
    createdAt: "2024-03-28T14:15:00Z",
    popularityScore: 83,
    zipCode: "30303",
    owner: {
      name: "William Davis",
      email: "william@example.com"
    }
  },
  {
    id: "4",
    title: "Worship Team Training Materials",
    description: "Comprehensive training materials for worship team development and leadership.",
    type: "intangible",
    category: "Training Materials",
    createdAt: "2024-03-05T16:45:00Z",
    popularityScore: 88,
    zipCode: "78701",
    owner: {
      name: "Emily Wilson",
      email: "emily@example.com"
    },
    tags: ["intangible", "training", "music"]
  },
  {
    id: "6",
    title: "Children's Ministry Curriculum",
    description: "Complete 12-week curriculum for elementary age children's ministry.",
    type: "intangible",
    category: "Curriculum",
    createdAt: "2024-03-12T13:20:00Z",
    popularityScore: 90,
    zipCode: "75201",
    owner: {
      name: "Lisa Anderson",
      email: "lisa@example.com"
    },
    tags: ["intangible", "education", "children"]
  },
  {
    id: "8",
    title: "Small Group Study Guide",
    description: "8-week study guide on building authentic community in small groups.",
    type: "intangible",
    category: "Study Materials",
    createdAt: "2024-03-08T15:10:00Z",
    popularityScore: 87,
    zipCode: "98101",
    owner: {
      name: "Patricia Lee",
      email: "patricia@example.com"
    },
    tags: ["intangible", "study", "community"]
  },
  {
    id: "10",
    title: "Youth Ministry Resources",
    description: "Collection of games, activities, and discussion guides for youth ministry.",
    type: "intangible",
    category: "Youth Ministry",
    createdAt: "2024-03-14T09:30:00Z",
    popularityScore: 89,
    zipCode: "10001",
    owner: {
      name: "Jennifer Brown",
      email: "jennifer@example.com"
    },
    tags: ["intangible", "youth", "resources"]
  },
  {
    id: "12",
    title: "Leadership Development Course",
    description: "Online course materials for church leadership development and team building.",
    type: "intangible",
    category: "Training Materials",
    createdAt: "2024-03-30T11:45:00Z",
    popularityScore: 91,
    zipCode: "20001",
    owner: {
      name: "Maria Garcia",
      email: "maria@example.com"
    },
    tags: ["intangible", "leadership", "training"]
  },
  {
    id: "13",
    title: "Lawn Mower",
    description: "Gas-powered lawn mower in good condition. Used for 2 seasons.",
    type: "tangible",
    offerType: "lend",
    price: 0,
    status: "available",
    location: "123 Main St, Anytown",
    ownerId: 1,
    createdAt: new Date("2024-03-01"),
    imageUrl: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?q=80&w=1000",
    tags: ["tools", "outdoor", "lawn care"],
    condition: "good",
    duration: "1 week",
    availability: "weekends",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: false
  },
  {
    id: "15",
    title: "Vintage Record Player",
    description: "Classic vinyl record player from the 1970s. Fully functional.",
    type: "tangible",
    offerType: "lend",
    price: 0,
    status: "available",
    location: "456 Oak Ave, Anytown",
    ownerId: 3,
    createdAt: new Date("2024-03-10"),
    imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1000",
    tags: ["music", "vintage", "electronics"],
    condition: "good",
    duration: "2 weeks",
    availability: "anytime",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: false
  },
  {
    id: "18",
    title: "Bicycle",
    description: "Mountain bike in excellent condition. Perfect for trails.",
    type: "tangible",
    offerType: "lend",
    price: 0,
    status: "available",
    location: "789 Pine St, Anytown",
    ownerId: 6,
    createdAt: new Date("2024-03-25"),
    imageUrl: "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1000",
    tags: ["sports", "outdoor", "transportation"],
    condition: "excellent",
    duration: "1 week",
    availability: "weekends",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: false
  },
  {
    id: "20",
    title: "Power Tools Set",
    description: "Complete set of power tools including drill, saw, and sander.",
    type: "tangible",
    offerType: "lend",
    price: 0,
    status: "available",
    location: "321 Elm St, Anytown",
    ownerId: 8,
    createdAt: new Date("2024-04-01"),
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1000",
    tags: ["tools", "diy", "construction"],
    condition: "good",
    duration: "3 days",
    availability: "weekdays",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: false
  },
  {
    id: "22",
    title: "Vintage Camera Collection",
    description: "Collection of vintage cameras from the 1950s-1970s.",
    type: "tangible",
    offerType: "lend",
    price: 0,
    status: "available",
    location: "654 Maple Dr, Anytown",
    ownerId: 10,
    createdAt: new Date("2024-04-10"),
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    tags: ["photography", "vintage", "collectibles"],
    condition: "good",
    duration: "1 week",
    availability: "by appointment",
    transactionStatus: "pending",
    buyerId: null,
    lenderId: null,
    borrowerId: null,
    startDate: null,
    endDate: null,
    reviews: [],
    isForSale: false
  }
]; 