"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";
import { Listing } from "@/lib/data";

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#665CF0] focus:border-[#665CF0]"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#665CF0] focus:border-[#665CF0]"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price (if for sale)
          </label>
          <input
            type="number"
            id="price"
            value={formData.price || ""}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#665CF0] focus:border-[#665CF0]"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isForSale"
            checked={formData.isForSale}
            onChange={(e) => setFormData({ ...formData, isForSale: e.target.checked })}
            className="h-4 w-4 text-[#665CF0] focus:ring-[#665CF0] border-gray-300 rounded"
          />
          <label htmlFor="isForSale" className="ml-2 block text-sm text-gray-900">
            This item is for sale
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#665CF0] text-white px-4 py-2 rounded-md hover:bg-[#5449d6] transition-colors"
          >
            Create Listing
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