"use client";

import { useState } from "react";
import Link from "next/link";
import { listings } from "@/lib/data";

export default function MyListingsPage() {
  const [userListings] = useState(
    listings.filter((listing) => listing.ownerId === "1")
  );

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {listing.title}
              </h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#665CF0] font-medium">
                  {listing.offerType === "sale" ? `$${listing.price}` : "For Lend"}
                </span>
                <Link
                  href={`/listing/${listing.id}`}
                  className="text-[#665CF0] hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 