import { Listing } from "@/lib/data";
import Link from "next/link";

export default function ListingCard({ listing }: { listing: Listing }) {
  const getTagColor = () => {
    if (listing.isForSale) return "bg-green-100 text-green-800";
    return listing.type === "tangible" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800";
  };

  const getTagText = () => {
    if (listing.isForSale) return "For Sale";
    return listing.type === "tangible" ? "Giveaway" : "Loan";
  };

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200">
        {/* Image Placeholder */}
        <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
          <svg className="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 48 48">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h.01" />
          </svg>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{listing.category}</span>
                <span className="text-gray-200">•</span>
                <span className="text-sm text-gray-500">{listing.zipCode}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 truncate">{listing.title}</h3>
            </div>
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getTagColor()}`}>
              {getTagText()}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{listing.description}</p>

          {listing.isForSale && !listing.transactionStatus && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-base font-semibold text-gray-900">${listing.price}</p>
              <p className="text-xs text-gray-500 mt-1">
                CommonTable will facilitate payment and pickup (coming soon)
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 