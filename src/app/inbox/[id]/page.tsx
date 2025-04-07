"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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

export default function MessagePage() {
  const params = useParams();
  const messageId = params.id as string;
  const [newMessage, setNewMessage] = useState("");

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would send to an API
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Message Header */}
      <div className="border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {mockConversation.listing.title}
            </h1>
            <p className="text-sm text-gray-500">
              Conversation with {mockConversation.participants[0].name}
            </p>
          </div>
          <Link
            href={`/listing/${mockConversation.listing.id}`}
            className="text-[#665CF0] text-sm hover:underline"
          >
            View Listing
          </Link>
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-4">
          {mockConversation.messages.map((message) => {
            const isCurrentUser = message.senderId === "2";
            return (
              <div
                key={message.id}
                className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-lg rounded-lg p-3 ${
                    isCurrentUser
                      ? "bg-[#665CF0] text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <p className={isCurrentUser ? "text-white" : "text-gray-900"}>
                    {message.text}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isCurrentUser ? "text-purple-200" : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t p-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#665CF0] focus:border-[#665CF0]"
            />
            <button
              type="submit"
              className="bg-[#665CF0] text-white px-4 py-2 rounded-md hover:bg-[#5449d6] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 