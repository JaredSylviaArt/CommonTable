export type Listing = {
  id: string;
  title: string;
  description: string;
  type: "tangible" | "intangible";
  category: string;
  createdAt: string;
  popularityScore: number;
  zipCode: string;
  owner: {
    name: string;
    email: string;
  };
  isForSale?: boolean;
  price?: number;
  transactionStatus?: 'open' | 'pending' | 'complete';
  buyerId?: string;
};

export const listings: Listing[] = [
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
]; 