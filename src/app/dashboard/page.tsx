"use client";

import { useState } from "react";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"newest" | "popular" | "my">("newest");
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");

  const filteredListings = listings
    .filter(listing => 
      (selectedType === "All Types" || listing.type === selectedType) &&
      (selectedLocation === "All Locations" || listing.location === selectedLocation)
    )
    .sort((a, b) => {
      if (activeTab === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (activeTab === "popular") {
        return b.popularity - a.popularity;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const myListings = activeTab === "my" 
    ? filteredListings.filter(listing => listing.ownerId === 1) 
    : filteredListings;

  const listingsToShow = activeTab === "my" ? myListings : filteredListings;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "newest" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("newest")}
        >
          Newest
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "popular" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("popular")}
        >
          Popular
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "my" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("my")}
        >
          My Listings
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              selectedType === "All Types" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedType("All Types")}
          >
            All Types
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              selectedType === "Tangible" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedType("Tangible")}
          >
            Tangible
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              selectedType === "Intangible" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedType("Intangible")}
          >
            Intangible
          </button>
        </div>

        <select
          className="border rounded-lg px-4 py-2 bg-white text-gray-700"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="All Locations">All Locations</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Austin, TX">Austin, TX</option>
          <option value="Seattle, WA">Seattle, WA</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listingsToShow.length > 0 ? (
          listingsToShow.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-500">No listings found.</p>
          </div>
        )}
      </div>
    </div>
  );
} 