"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <>
      {/* Location Bar */}
      <div className="bg-[#665CF0] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-white text-sm font-medium">Location</span>
          </div>
          <div className="flex items-center">
            <button className="text-white text-sm font-medium flex items-center">
              My Account
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b">
        <div className="flex items-center">
          {/* Logo Section - Aligned with Sidebar */}
          <div className="w-64 px-6 py-4 border-r">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">COMMON<span className="font-normal">TABLE</span></span>
            </Link>
          </div>

          {/* Search and Post Button Section */}
          <div className="flex-1 px-6 py-4">
            <div className="max-w-2xl mx-auto flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for items, services, or categories..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#665CF0] focus:border-[#665CF0] shadow-sm"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  href="/post"
                  className="bg-[#665CF0] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#5449d6] transition-colors shadow-sm flex items-center gap-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 