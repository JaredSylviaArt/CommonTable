"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { listings } from "@/lib/data";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function ListingPage() {
  const params = useParams();
  const listingId = params.id as string;
  const [listing, setListing] = useState(listings.find((l) => l.id === listingId));
  const [modalOpen, setModalOpen] = useState(false);

  if (!listing) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Listing Not Found</h1>
        <p className="text-gray-600 mb-4">The listing you're looking for doesn't exist.</p>
        <Link
          href="/dashboard"
          className="text-indigo-600 hover:text-indigo-500 font-medium"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    setModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    console.log("Purchase confirmed for listing:", listing.id);
    setListing({
      ...listing,
      transactionStatus: 'pending',
      buyerId: 'current-user-id'
    });
    setModalOpen(false);
  };

  const getTransactionStatusBadge = () => {
    if (!listing.transactionStatus) return null;
    
    const statusColors = {
      open: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      complete: 'bg-gray-100 text-gray-800'
    };

    return (
      <span className={`ml-2 px-2 py-1 text-xs rounded-full font-medium ${statusColors[listing.transactionStatus]}`}>
        {listing.transactionStatus.charAt(0).toUpperCase() + listing.transactionStatus.slice(1)}
      </span>
    );
  };

  const getOfferTypeBadge = () => {
    const typeColors = {
      tangible: 'bg-blue-100 text-blue-800',
      intangible: 'bg-purple-100 text-purple-800',
      forSale: 'bg-green-100 text-green-800'
    };

    const type = listing.isForSale ? 'forSale' : listing.type;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium ${typeColors[type]}`}>
        {listing.isForSale ? 'For Sale' : listing.type === 'tangible' ? 'Giveaway' : 'Loan'}
      </span>
    );
  };

  return (
    <div className={`max-w-2xl mx-auto p-6 ${
      listing.isForSale ? 'border-l-4 border-green-500 pl-8' : ''
    }`}>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">{listing.title}</h1>
        {getTransactionStatusBadge()}
      </div>
      
      {listing.isForSale && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-lg font-medium text-gray-900">
            For Sale – ${listing.price}
          </div>
          <div className="mt-2 text-sm text-gray-500">
            CommonTable will facilitate payment and pickup (coming soon)
          </div>
          {listing.transactionStatus === 'pending' && (
            <div className="mt-2 text-sm text-yellow-600">
              Transaction pending...
            </div>
          )}
          {listing.transactionStatus === 'complete' && (
            <div className="mt-2 text-sm text-gray-600">
              This item has been sold
            </div>
          )}
          {(!listing.transactionStatus || listing.transactionStatus === 'open') && (
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
              <Link
                href={`/chat?listingId=${listing.id}&ownerId=${listing.owner.email}`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Message Seller
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="prose max-w-none">
        <p className="text-gray-600">{listing.description}</p>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Details</h2>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            <dd className="mt-1">
              {getOfferTypeBadge()}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Category</dt>
            <dd className="mt-1 text-sm text-gray-900">{listing.category}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900">{listing.zipCode}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Posted</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {new Date(listing.createdAt).toLocaleDateString()}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Owner</h2>
        <div className="space-y-1">
          <p className="text-sm text-gray-900">{listing.owner.name}</p>
          <p className="text-sm text-gray-500">{listing.owner.email}</p>
        </div>
      </div>

      {listing.buyerId && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Buyer</h2>
          <div className="space-y-1">
            <p className="text-sm text-gray-900">User ID: {listing.buyerId}</p>
          </div>
        </div>
      )}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Purchase Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          CommonTable will soon handle secure payments and delivery confirmation for for-sale items. This feature is not live yet.
        </p>
        <button
          onClick={() => setModalOpen(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Got it
        </button>
      </Modal>
    </div>
  );
} 