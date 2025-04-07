export type Message = {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
};

export type Conversation = {
  id: string;
  title: string;
  participants: {
    id: string;
    name: string;
    avatar: string;
  }[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
};

export const conversations: Conversation[] = [
  {
    id: "1",
    title: "AV Equipment Discussion",
    participants: [
      { id: "1", name: "Sarah Johnson", avatar: "SJ" },
      { id: "2", name: "Michael Chen", avatar: "MC" }
    ],
    lastMessage: "The mixer is available next week",
    lastMessageTime: "2024-04-05T14:30:00Z",
    unreadCount: 2,
    messages: [
      {
        id: "1",
        content: "Hi! I'm interested in borrowing your audio mixer",
        senderId: "2",
        timestamp: "2024-04-05T10:00:00Z"
      },
      {
        id: "2",
        content: "Sure! When would you need it?",
        senderId: "1",
        timestamp: "2024-04-05T10:15:00Z"
      },
      {
        id: "3",
        content: "Next week for our youth service",
        senderId: "2",
        timestamp: "2024-04-05T14:20:00Z"
      },
      {
        id: "4",
        content: "The mixer is available next week",
        senderId: "1",
        timestamp: "2024-04-05T14:30:00Z"
      }
    ]
  },
  {
    id: "2",
    title: "Sermon Series Planning",
    participants: [
      { id: "1", name: "Sarah Johnson", avatar: "SJ" },
      { id: "3", name: "David Rodriguez", avatar: "DR" }
    ],
    lastMessage: "Let's discuss the outline tomorrow",
    lastMessageTime: "2024-04-04T16:45:00Z",
    unreadCount: 0,
    messages: [
      {
        id: "1",
        content: "Do you have the sermon series materials ready?",
        senderId: "3",
        timestamp: "2024-04-04T15:00:00Z"
      },
      {
        id: "2",
        content: "Yes, I'll share them with you",
        senderId: "1",
        timestamp: "2024-04-04T16:30:00Z"
      },
      {
        id: "3",
        content: "Let's discuss the outline tomorrow",
        senderId: "3",
        timestamp: "2024-04-04T16:45:00Z"
      }
    ]
  },
  {
    id: "3",
    title: "Stage Equipment Inquiry",
    participants: [
      { id: "1", name: "Sarah Johnson", avatar: "SJ" },
      { id: "4", name: "Emily Wilson", avatar: "EW" }
    ],
    lastMessage: "Thanks for the info!",
    lastMessageTime: "2024-04-03T11:20:00Z",
    unreadCount: 0,
    messages: [
      {
        id: "1",
        content: "Do you have stage platforms available?",
        senderId: "4",
        timestamp: "2024-04-03T10:00:00Z"
      },
      {
        id: "2",
        content: "Yes, we have 4x8 sections available",
        senderId: "1",
        timestamp: "2024-04-03T11:00:00Z"
      },
      {
        id: "3",
        content: "Thanks for the info!",
        senderId: "4",
        timestamp: "2024-04-03T11:20:00Z"
      }
    ]
  }
]; 