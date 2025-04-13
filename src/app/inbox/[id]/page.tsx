import { Metadata } from "next";
import InboxChat from "@/components/InboxChat";

// Define conversation type
type Conversation = {
  id: string;
  participants: {
    id: string;
    name: string;
    email: string;
  }[];
  messages: {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
  }[];
  listing: {
    id: string;
    title: string;
    type: string;
    status: string;
  };
};

// Sample conversations for static generation
export const conversations: Conversation[] = [
  {
    id: "1",
    participants: [
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Current User", email: "me@example.com" }
    ],
    messages: [
      {
        id: "1",
        senderId: "1",
        text: "Hi, I was wondering if the Kitchen Table is still available?",
        timestamp: "2024-03-20T10:00:00Z"
      },
      {
        id: "2",
        senderId: "2",
        text: "Yes, it's still available! When would you like to pick it up?",
        timestamp: "2024-03-20T10:15:00Z"
      },
      {
        id: "3",
        senderId: "1",
        text: "That's great! Would tomorrow afternoon work for you?",
        timestamp: "2024-03-20T10:30:00Z"
      },
      {
        id: "4",
        senderId: "2",
        text: "Tomorrow afternoon works perfectly. I'm available between 2-5pm.",
        timestamp: "2024-03-20T10:45:00Z"
      }
    ],
    listing: {
      id: "123",
      title: "Kitchen Table",
      type: "tangible",
      status: "available"
    }
  },
  {
    id: "2",
    participants: [
      { id: "3", name: "Sarah Miller", email: "sarah@example.com" },
      { id: "2", name: "Current User", email: "me@example.com" }
    ],
    messages: [
      {
        id: "1",
        senderId: "3",
        text: "Hello, is the projector still available to borrow?",
        timestamp: "2024-03-18T14:30:00Z"
      },
      {
        id: "2",
        senderId: "2",
        text: "Hi Sarah, yes it is! When do you need it?",
        timestamp: "2024-03-18T15:00:00Z"
      }
    ],
    listing: {
      id: "456",
      title: "Projector",
      type: "tangible",
      status: "available"
    }
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const conversation = conversations.find(c => c.id === params.id);
  
  if (!conversation) {
    return {
      title: "Conversation Not Found - CommonTable",
    };
  }
  
  const otherParticipant = conversation.participants.find(p => p.id !== "2")?.name || "Unknown";
  
  return {
    title: `Chat with ${otherParticipant} - CommonTable`,
  };
}

// Required for static site generation with Next.js
export function generateStaticParams() {
  return conversations.map((conversation) => ({
    id: conversation.id,
  }));
}

export default function MessagePage({ params }: { params: { id: string } }) {
  // Find the correct conversation based on the ID parameter
  const conversation = conversations.find(c => c.id === params.id) || conversations[0];
  
  return <InboxChat params={params} conversation={conversation} conversations={conversations} />;
} 