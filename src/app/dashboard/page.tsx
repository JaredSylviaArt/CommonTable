"use client";

import React, { useState, useEffect } from "react";
import ListingCard from "@/components/ListingCard";
import { useFirestore } from "@/context/FirestoreContext";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("newest");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const { listings, myListings, loadingListings, getListings } = useFirestore();
  const { currentUser } = useAuth();

  useEffect(() => {
    getListings();
  }, [getListings]);

  // Filter and sort listings based on active tab and filters
  const getFilteredListings = () => {
    let filteredListings = [...listings];
    
    // Filter by type
    if (selectedType !== "all") {
      filteredListings = filteredListings.filter(
        (listing) => listing.type === selectedType
      );
    }
    
    // Filter by tab
    if (activeTab === "popular") {
      // Sort by popularity (this is just a mock - you'd need a popularity metric)
      filteredListings.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (activeTab === "newest") {
      // Sort by date, newest first
      filteredListings.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt.seconds * 1000) : new Date(0);
        const dateB = b.createdAt ? new Date(b.createdAt.seconds * 1000) : new Date(0);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (activeTab === "my-listings") {
      // Only show my listings if user is logged in
      filteredListings = currentUser 
        ? myListings 
        : [];
    }
    
    return filteredListings;
  };

  const filteredListings = getFilteredListings();

  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === "newest"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("newest")}
          >
            Newest
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === "popular"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === "my-listings"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("my-listings")}
          >
            My Listings
          </button>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="all">All Types</option>
              <option value="tangible">Tangible</option>
              <option value="intangible">Intangible</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="all">All Locations</option>
              <option value="local">Local Only</option>
              <option value="remote">Remote Available</option>
            </select>
          </div>
        </div>
        
        {/* Listings Grid */}
        {loadingListings ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No listings found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {activeTab === "my-listings" 
                ? "You haven't created any listings yet." 
                : "No listings match your current filters."}
            </p>
            {activeTab === "my-listings" && (
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = "/post"}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create a listing
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
} 