"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function CommunityListingsPage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredListings = listings
    .filter((listing) => {
      // Filter by type
      if (selectedType === "All Types") return true;
      if (selectedType === "Tangible") return listing.type === "tangible";
      if (selectedType === "Intangible") return listing.type === "intangible";
      return true;
    })
    .filter((listing) => {
      // Filter by search query
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        listing.title.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query) ||
        (listing.category && listing.category.toLowerCase().includes(query))
      );
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Community Listings</h1>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedType("All Types")}
            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
              selectedType === "All Types"
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => setSelectedType("Tangible")}
            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
              selectedType === "Tangible"
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tangible
          </button>
          <button
            onClick={() => setSelectedType("Intangible")}
            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
              selectedType === "Intangible"
                ? "bg-purple-100 text-purple-700"
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
          className="block rounded-md border-gray-300 py-1.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
        >
          <option>All Locations</option>
          <option>90210</option>
          <option>90211</option>
          <option>90212</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
} 