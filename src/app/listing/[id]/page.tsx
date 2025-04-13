import { notFound } from "next/navigation";
import Link from "next/link";
import { listings } from "@/lib/data";
import { Metadata } from "next";

// Generate static params for all listings
export async function generateStaticParams() {
  return listings.map((listing) => ({
    id: listing.id.toString(),
  }));
}

// Generate metadata for each listing page dynamically
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const listing = listings.find((l) => l.id.toString() === params.id);
  
  if (!listing) {
    return {
      title: "Listing Not Found - CommonTable",
      description: "The requested listing could not be found.",
    };
  }
  
  return {
    title: `${listing.title} - CommonTable`,
    description: listing.description,
    openGraph: {
      title: `${listing.title} - CommonTable`,
      description: listing.description,
      images: ['/images/og-image.jpg'],
    },
  };
}

export default function ListingPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id.toString() === params.id);

  if (!listing) {
    notFound();
  }

  const ownerName = listing.owner?.name || `User ${listing.ownerId}`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">{listing.title}</h1>
        
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
          {/* Placeholder for listing image */}
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
            <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              listing.isForSale ? 'bg-green-100 text-green-800' : 
              listing.isGiveaway ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {listing.isForSale ? 'For Sale' : listing.isGiveaway ? 'Giveaway' : 'Loan'}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              {listing.type === 'tangible' ? 'Tangible' : 'Intangible'}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Posted by {ownerName}
          </div>
        </div>

        <p className="text-gray-600 mb-6">{listing.description}</p>

        {listing.isForSale && (
          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">${listing.price}</span>
          </div>
        )}

        <div className="flex justify-end">
          {listing.ownerId === "1" ? (
            <Link
              href={`/listing/${listing.id}/edit`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#665CF0] hover:bg-[#5549F0]"
            >
              Edit Listing
            </Link>
          ) : (
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#665CF0] hover:bg-[#5549F0]"
            >
              {listing.isForSale ? 'Purchase' : 'Request to Borrow'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 