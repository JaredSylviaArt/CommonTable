'use client';

import React, { useState } from 'react';
import StatsCard from '@/components/StatsCard';
import AnalyticsCard from '@/components/AnalyticsCard';
import FileTypeCard from '@/components/FileTypeCard';

export default function AdminDashboard() {
  const [showFileTypes, setShowFileTypes] = useState(false);

  const fileTypeStats = [
    { type: 'JPG', size: '237KB' },
    { type: 'PNG', size: '573KB' },
    { type: 'AI', size: '257KB' },
    { type: 'SVG', size: '157 impution' },
  ];

  // Placeholder chart component - would be replaced with a real chart library
  const LeadsChart = () => (
    <div className="relative h-64 w-full">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg overflow-hidden">
        <svg viewBox="0 0 100 20" className="absolute bottom-0 w-full h-full">
          <path
            fill="none"
            stroke="#665CF0"
            strokeWidth="0.5"
            strokeLinecap="round"
            d="M0,10 Q10,15 20,10 T40,10 T60,13 T80,5 T100,12"
            className="text-indigo-500"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="relative">
          {showFileTypes && (
            <div className="absolute top-20 left-20 z-10">
              <FileTypeCard 
                fileTypes={fileTypeStats} 
                onClose={() => setShowFileTypes(false)} 
              />
            </div>
          )}
          
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <button
                onClick={() => setShowFileTypes(!showFileTypes)}
                className="bg-white text-indigo-700 font-medium py-2 px-6 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Create Listing
              </button>
              
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">User</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M42,-56.1C54.9,-47.3,66.1,-35,71.5,-19.8C76.9,-4.7,76.5,13.5,69.7,28.5C63,43.5,49.9,55.4,35.1,62.3C20.3,69.2,3.7,71.1,-12.7,69.1C-29,67.1,-45.1,61.2,-58.9,49.8C-72.7,38.3,-84.2,21.4,-84.4,4.2C-84.7,-13.1,-73.8,-30.6,-60,-43.3C-46.2,-56,-30.5,-64,-14.3,-66.3C1.9,-68.7,29.1,-64.9,42,-56.1Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          
          <AnalyticsCard 
            title="Leads" 
            chartData={<LeadsChart />}
            highlight={{ value: "100K", label: "total rate" }}
          />
        </div>
        
        <StatsCard 
          title="Performance Overview" 
          stats={[
            { type: 'Active Listings', value: '87' },
            { type: 'Total Transactions', value: '245' },
            { type: 'Community Growth', value: '+15%' },
            { type: 'Pending Requests', value: '12' },
          ]}
        />
      </div>
    </div>
  );
} 