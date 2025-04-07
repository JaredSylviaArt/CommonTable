"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Share what you have,
              <br />
              <span className="text-[#665CF0]">find what you need</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your community to share resources, equipment, and knowledge. Whether you're looking to give away items, lend equipment, or find what you need, CommonTable makes it easy.
            </p>
            <div className="mt-10">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#665CF0] hover:bg-[#5449d6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#665CF0]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-[#665CF0]/10 flex items-center justify-center">
              <svg className="h-6 w-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Save Time & Money</h3>
            <p className="mt-2 text-gray-600">
              Find what you need without the cost of buying new. Share resources within your community.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-[#665CF0]/10 flex items-center justify-center">
              <svg className="h-6 w-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Build Community</h3>
            <p className="mt-2 text-gray-600">
              Connect with others in your area. Share resources and build relationships.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-[#665CF0]/10 flex items-center justify-center">
              <svg className="h-6 w-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Trust & Safety</h3>
            <p className="mt-2 text-gray-600">
              Built-in verification and community guidelines ensure safe and reliable exchanges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
