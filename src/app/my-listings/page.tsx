"use client";

import { useState } from "react";
import Link from "next/link";
import { listings } from "@/lib/data";

export default function MyListingsPage() {
  // Mock user ID - in a real app, this would come from authentication
  const mockUserId = 1;
  
  const [userListings, setUserListings] = useState(
    listings.filter(listing => listing.ownerId === mockUserId)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
          <Link
            href="/post"
            className="bg-[#665CF0] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5449d6] transition-colors"
          >
            Create New Listing
          </Link>
        </div>

        {userListings.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900 mb-4">No listings yet</h2>
            <p className="text-gray-500 mb-6">Create your first listing to get started</p>
            <Link
              href="/post"
              className="bg-[#665CF0] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5449d6] transition-colors inline-block"
            >
              Create New Listing
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{listing.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{listing.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {listing.type === "tangible" ? "Physical Item" : "Service"}
                    </span>
                    <Link
                      href={`/listing/${listing.id}`}
                      className="text-[#665CF0] hover:text-[#5449d6] text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 