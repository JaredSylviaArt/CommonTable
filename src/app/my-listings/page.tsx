"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function MyListingsPage() {
  const [userListings, setUserListings] = useState([]);
  
  // Reload listings every time the page is mounted
  useEffect(() => {
    // Get current user's listings (ownerId === "1")
    const currentUserListings = listings.filter((listing) => 
      listing.ownerId === "1" || listing.ownerId === 1
    );
    setUserListings(currentUserListings);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
        <Link
          href="/post"
          className="bg-[#665CF0] text-white px-4 py-2 rounded-lg hover:bg-[#5449d6] transition-colors"
        >
          Create New Listing
        </Link>
      </div>

      {userListings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">You don't have any listings yet</p>
          <Link
            href="/post"
            className="inline-block bg-[#665CF0] text-white px-4 py-2 rounded-lg hover:bg-[#5449d6] transition-colors"
          >
            Create Your First Listing
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
} 