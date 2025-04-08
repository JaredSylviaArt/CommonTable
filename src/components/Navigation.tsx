"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/listings?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Location Bar */}
      <div className="bg-[#665CF0] py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-[72px]">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-white text-sm font-medium">Orlando, FL 32806</span>
          </div>
          <div className="relative pr-4">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white text-sm font-medium flex items-center hover:bg-white/10 px-3 py-1 rounded-lg transition-colors"
            >
              My Account
              <svg className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                <Link
                  href="/my-listings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  My Listings
                </Link>
                <Link
                  href="/inbox"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Messages
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Settings
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="flex h-16">
          {/* Logo Section - Fixed width aligned with Sidebar */}
          <div className="w-[256px] min-w-[256px] px-6 flex items-center border-r border-gray-200">
            <Link href="/">
              <Image
                src="/CommonTable/Logo.png"
                alt="CommonTable Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-between px-6">
            <div className="max-w-lg w-full">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#665CF0] focus:border-[#665CF0] sm:text-sm"
                    placeholder="Search listings..."
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center ml-6">
              <Link
                href="/post"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#665CF0] hover:bg-[#5549F0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#665CF0]"
              >
                Post a Listing
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 