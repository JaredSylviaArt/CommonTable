"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("Profile");
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    zipCode: "90210",
    notifications: {
      email: true,
      push: false,
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>

      {/* Settings Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {["Profile", "Notifications", "Privacy", "Security"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`
              mr-8 pb-4 text-sm font-medium border-b-2
              ${
                activeSection === section
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Profile Settings */}
      {activeSection === "Profile" && (
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                value={userData.zipCode}
                onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="pt-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Settings */}
      {activeSection === "Notifications" && (
        <div className="max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive updates about your listings and messages</p>
              </div>
              <button
                onClick={() => setUserData({
                  ...userData,
                  notifications: { ...userData.notifications, email: !userData.notifications.email }
                })}
                className={`
                  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  ${userData.notifications.email ? "bg-purple-600" : "bg-gray-200"}
                `}
              >
                <span
                  className={`
                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0
                    transition duration-200 ease-in-out
                    ${userData.notifications.email ? "translate-x-5" : "translate-x-0"}
                  `}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                <p className="text-sm text-gray-500">Receive notifications on your device</p>
              </div>
              <button
                onClick={() => setUserData({
                  ...userData,
                  notifications: { ...userData.notifications, push: !userData.notifications.push }
                })}
                className={`
                  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  ${userData.notifications.push ? "bg-purple-600" : "bg-gray-200"}
                `}
              >
                <span
                  className={`
                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0
                    transition duration-200 ease-in-out
                    ${userData.notifications.push ? "translate-x-5" : "translate-x-0"}
                  `}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 