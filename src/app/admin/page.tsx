"use client";

import { useState } from "react";
import { listings } from "@/lib/data";
import { Listing } from "@/lib/data";
import Link from "next/link";

export default function AdminPage() {
  const [allListings, setAllListings] = useState<Listing[]>(listings);
  const [featuredListings, setFeaturedListings] = useState<string[]>([]);

  const handleRemove = (id: string) => {
    setAllListings(prev => prev.filter(listing => listing.id !== id));
  };

  const handleFeature = (id: string) => {
    setFeaturedListings(prev => 
      prev.includes(id) 
        ? prev.filter(listingId => listingId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Admin Dashboard
          <span className="inline-block w-10 h-1 bg-[#E6FF02] ml-1 align-middle"></span>
        </h1>
        <Link
          href="/dashboard"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{listing.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      listing.type === "tangible" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {listing.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {listing.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{listing.owner?.name || listing.ownerId || 'Unknown'}</div>
                    <div className="text-sm text-gray-500">{listing.owner?.email || 'No email'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(listing.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleFeature(listing.id)}
                      className={`${
                        featuredListings.includes(listing.id)
                          ? "bg-[#665CF0] text-white ring-2 ring-[#E6FF02]"
                          : "text-indigo-600 hover:text-indigo-900"
                      } px-3 py-1 rounded-md text-sm font-medium`}
                    >
                      {featuredListings.includes(listing.id) ? "Featured" : "Feature"}
                    </button>
                    <button
                      onClick={() => handleRemove(listing.id)}
                      className="text-red-600 hover:text-red-900 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {allListings.length} listings ({featuredListings.length} featured)
      </div>
    </div>
  );
} 