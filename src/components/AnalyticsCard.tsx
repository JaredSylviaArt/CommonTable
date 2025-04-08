import React from 'react';

type AnalyticsCardProps = {
  title: string;
  chartData?: React.ReactNode;
  highlight?: {
    value: string;
    label: string;
  };
};

const AnalyticsCard = ({ title, chartData, highlight }: AnalyticsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-medium text-gray-700 mb-6">{title}</h3>
      
      {highlight && (
        <div className="absolute top-8 right-8 bg-[#EBE9FE] text-[#665CF0] py-2 px-4 rounded-lg">
          <p className="text-sm font-medium">{highlight.label}</p>
          <p className="text-2xl font-semibold">{highlight.value}</p>
        </div>
      )}
      
      <div className="mt-4">
        {chartData ? (
          chartData
        ) : (
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard; 