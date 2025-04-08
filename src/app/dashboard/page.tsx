"use client";

import { useState } from "react";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Newest");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredListings = listings
    .filter((listing) => {
      // Filter by tab
      if (activeTab === "Newest") {
        return true; // Show all for newest
      } else if (activeTab === "Popular") {
        // Show items with high popularity score or special status
        return listing.popularityScore >= 5 || listing.isForSale || listing.isGiveaway;
      } else if (activeTab === "My Listings") {
        return listing.ownerId === "1"; // Show user's listings
      }
      return true;
    })
    .filter((listing) => {
      // Filter by location
      if (selectedLocation === "All Locations") return true;
      return listing.location.includes(selectedLocation);
    })
    .sort((a, b) => {
      // Sort by date for newest
      if (activeTab === "Newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      // Sort by popularity for popular
      if (activeTab === "Popular") {
        const aScore = a.popularityScore + (a.isForSale ? 3 : 0) + (a.isGiveaway ? 2 : 0);
        const bScore = b.popularityScore + (b.isForSale ? 3 : 0) + (b.isGiveaway ? 2 : 0);
        return bScore - aScore;
      }
      // Sort by date for my listings
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

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

      {/* Location Filter */}
      <div className="flex items-center gap-4 mt-6">
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