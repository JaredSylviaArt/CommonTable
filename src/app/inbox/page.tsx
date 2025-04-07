"use client";

import { useState } from "react";
import Link from "next/link";

// Mock messages data
const mockMessages = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Re: Kitchen Table",
    preview: "That sounds great! When would be a good time to pick it up?",
    timestamp: "2024-03-20T10:30:00Z",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Garden Tools Question",
    preview: "Hi, I was wondering if the tools are still available?",
    timestamp: "2024-03-19T15:45:00Z",
    unread: false,
  },
  {
    id: 3,
    sender: "Mike Johnson",
    subject: "Desk Chair",
    preview: "Thanks for the offer! Is it still available?",
    timestamp: "2024-03-18T09:15:00Z",
    unread: false,
  },
];

export default function InboxPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Inbox</h1>

      {/* Filters */}
      <div className="flex space-x-2 mb-6">
        {["All", "Unread", "Sent"].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
              selectedFilter === filter
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="space-y-2">
        {mockMessages.map((message) => (
          <Link 
            key={message.id}
            href={`/inbox/${message.id}`}
            className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${message.unread ? "text-gray-900" : "text-gray-700"}`}>
                    {message.sender}
                  </span>
                  {message.unread && (
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full" />
                  )}
                </div>
                <h3 className={`text-sm ${message.unread ? "font-medium text-gray-900" : "text-gray-700"}`}>
                  {message.subject}
                </h3>
                <p className="text-sm text-gray-500 truncate">{message.preview}</p>
              </div>
              <span className="text-xs text-gray-500">
                {new Date(message.timestamp).toLocaleDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 