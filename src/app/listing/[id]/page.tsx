import { notFound } from "next/navigation";
import Link from "next/link";
import { listings } from "@/lib/data";

export default async function ListingPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id === params.id);

  if (!listing) {
    notFound();
  }

  const ownerName = listing.owner?.name || `User ${listing.ownerId}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/listings"
            className="text-[#665CF0] hover:text-[#5449d6] flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{listing.title}</h1>
            <p className="text-gray-500 mb-6">{listing.description}</p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium text-gray-900">
                    {listing.type === "tangible" ? "Physical Item" : "Service"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium text-gray-900">{listing.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{listing.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Owner</p>
                  <p className="font-medium text-gray-900">{ownerName}</p>
                </div>
              </div>

              {listing.isForSale ? (
                <div>
                  <p className="text-2xl font-bold text-[#665CF0]">
                    ${listing.price}
                  </p>
                  <button className="w-full bg-[#665CF0] text-white py-3 px-6 rounded-lg hover:bg-[#5449d6] transition-colors">
                    Purchase
                  </button>
                </div>
              ) : (
                <div>
                  <button className="w-full bg-[#665CF0] text-white py-3 px-6 rounded-lg hover:bg-[#5449d6] transition-colors">
                    Request to Borrow
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="font-medium text-gray-900">{listing.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-medium text-gray-900">{listing.availability}</p>
                </div>
                {listing.duration && (
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{listing.duration}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 