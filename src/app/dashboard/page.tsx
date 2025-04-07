"use client";

import { useState } from "react";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Newest");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredListings = listings;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {["Newest", "Popular", "My Listings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === tab
                    ? "border-[#665CF0] text-[#665CF0]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedType("Tangible")}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              selectedType === "Tangible"
                ? "bg-[#665CF0] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tangible
            <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded">221</span>
          </button>
          <button
            onClick={() => setSelectedType("Intangible")}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              selectedType === "Intangible"
                ? "bg-[#665CF0] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Intangible
          </button>
        </div>

        <div className="flex-1" />

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="block rounded-lg border-gray-200 py-2 pl-3 pr-10 text-sm focus:border-[#665CF0] focus:outline-none focus:ring-[#665CF0]"
        >
          <option>All Locations</option>
          <option>90210</option>
          <option>90211</option>
          <option>90212</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
} 