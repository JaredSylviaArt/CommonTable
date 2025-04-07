"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";
import { Listing } from "@/lib/data";

const categories = [
  "AV Equipment",
  "Sermon Series",
  "Training Materials",
  "Stage Equipment",
  "Curriculum",
  "Study Materials",
  "Lighting",
  "Youth Ministry"
];

export default function PostPage() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState<Partial<Listing>>({
    type: "tangible",
    isForSale: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log("New listing:", formData);
    setShowToast(true);
    setFormData({
      type: "tangible",
      isForSale: false,
    });
    setTimeout(() => router.push("/dashboard"), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Post a New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Offer Type</label>
          <div className="mt-2 space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="tangible"
                checked={formData.type === "tangible" && !formData.isForSale}
                onChange={() => setFormData({ ...formData, type: "tangible", isForSale: false })}
                className="h-4 w-4 text-[#665CF0] focus:ring-[#665CF0]"
              />
              <span className="ml-2">Giveaway</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="intangible"
                checked={formData.type === "intangible"}
                onChange={() => setFormData({ ...formData, type: "intangible", isForSale: false })}
                className="h-4 w-4 text-[#665CF0] focus:ring-[#665CF0]"
              />
              <span className="ml-2">Loan</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="forSale"
                checked={formData.isForSale}
                onChange={() => setFormData({ ...formData, type: "tangible", isForSale: true })}
                className="h-4 w-4 text-[#665CF0] focus:ring-[#665CF0]"
              />
              <span className="ml-2">For Sale</span>
            </label>
          </div>
        </div>

        {formData.isForSale && (
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                id="price"
                required
                min="0"
                step="0.01"
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.category || ""}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            required
            pattern="[0-9]{5}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.zipCode || ""}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="ownerName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.owner?.name || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                owner: { ...formData.owner, name: e.target.value },
              })
            }
          />
        </div>

        <div>
          <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="ownerEmail"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder-gray-500 focus:border-[#665CF0] focus:ring-[#665CF0]"
            value={formData.owner?.email || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                owner: { ...formData.owner, email: e.target.value },
              })
            }
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#665CF0] hover:bg-[#5449d6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#665CF0]"
          >
            Post
          </button>
        </div>
      </form>

      <Toast
        message="Listing posted successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 