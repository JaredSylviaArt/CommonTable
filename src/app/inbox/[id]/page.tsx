"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mock conversation data
const mockConversation = {
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
};

export default function MessagePage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send to a server
      setMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Message List */}
      <div className="w-64 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Messages</h2>
        </div>
        <div className="overflow-y-auto">
          {/* Message list items would go here */}
        </div>
      </div>

      {/* Message Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {/* Messages would go here */}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#665CF0]"
            />
            <button
              type="submit"
              className="bg-[#665CF0] text-white px-4 py-2 rounded-lg hover:bg-[#5449d6] transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 