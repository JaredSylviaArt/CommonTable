import React from 'react';

type FileTypeProps = {
  fileTypes: {
    type: string;
    size: string;
  }[];
  onClose?: () => void;
};

const FileTypeCard: React.FC<FileTypeProps> = ({ fileTypes, onClose }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">File Type</h3>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {fileTypes.map((file, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium text-gray-800">{file.type}</span>
            <span className="text-gray-600">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTypeCard; 