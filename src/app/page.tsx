"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Share Resources, Build Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect with your church community to share equipment, resources, and expertise. Whether you&apos;re looking to borrow or lend, CommonTable makes it easy.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="inline-block bg-[#665CF0] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#5449d6] transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/listings" className="text-[#665CF0] hover:text-[#5449d6]">
                      Browse Listings
                    </Link>
                  </li>
                  <li>
                    <Link href="/post" className="text-[#665CF0] hover:text-[#5449d6]">
                      Create a Listing
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-[#665CF0] hover:text-[#5449d6]">
                      View Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#665CF0]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Time</h3>
            <p className="text-gray-600">Find what you need quickly and easily in your local community.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#665CF0]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Community</h3>
            <p className="text-gray-600">Connect with neighbors and build stronger relationships.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-[#665CF0]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#665CF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Safety</h3>
            <p className="text-gray-600">Verified users and secure transactions for peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
