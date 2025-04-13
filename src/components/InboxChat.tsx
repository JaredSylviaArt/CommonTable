"use client";

import { useState } from "react";
import Link from "next/link";

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

interface InboxChatProps {
  params: { id: string };
  conversation: Conversation;
  conversations: Conversation[];
}

export default function InboxChat({ params, conversation, conversations }: InboxChatProps) {
  const [message, setMessage] = useState("");

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
          {conversations.map((conv) => (
            <Link
              key={conv.id}
              href={`/inbox/${conv.id}`}
              className={`block px-4 py-3 border-b hover:bg-gray-50 ${
                conv.id === params.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="font-medium text-gray-900">
                {conv.participants.find(p => p.id !== "2")?.name || "Unknown"}
              </div>
              <div className="text-sm text-gray-500 truncate">
                {conv.messages[conv.messages.length - 1]?.text || "No messages"}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Message Window */}
      <div className="flex-1 flex flex-col">
        <div className="p-3 border-b bg-gray-50">
          <div className="font-medium">
            {conversation.listing.title}
          </div>
          <div className="text-sm text-gray-500">
            Conversation with {conversation.participants.find(p => p.id !== "2")?.name}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {conversation.messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 ${
                msg.senderId === "2" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  msg.senderId === "2"
                    ? "bg-[#665CF0] text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formatTime(msg.timestamp)}
              </div>
            </div>
          ))}
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