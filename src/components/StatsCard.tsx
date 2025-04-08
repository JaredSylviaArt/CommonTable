import React from 'react';

type StatsCardProps = {
  title: string;
  stats: {
    type: string;
    value: string;
  }[];
};

const StatsCard = ({ title, stats }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-medium text-gray-700 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">{stat.type}</span>
            <span className="text-gray-600">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard; 