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

  const ownerName = listing.owner?.name || `User ${listing.ownerId}`;
  const isFor = listing.isForSale ? "For Sale" : "To Borrow";

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
          {/* Placeholder for listing image */}
          <div className="flex items-center justify-center h-48 bg-gray-50">
            <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {/* Price tag */}
          {listing.isForSale && (
            <div className="absolute top-2 right-2 bg-[#E6FF02] text-gray-900 font-medium px-2 py-1 rounded text-sm">
              ${listing.price}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#665CF0] transition-colors">
              {listing.title}
            </h3>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              listing.type === "tangible" 
                ? "bg-blue-100 text-blue-800" 
                : "bg-purple-100 text-purple-800"
            }`}>
              {listing.type}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{listing.description}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{ownerName}</span>
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-[#E6FF02] rounded-full mr-1"></span>
              {isFor}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 