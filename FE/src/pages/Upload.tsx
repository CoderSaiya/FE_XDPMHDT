import React, { useState } from "react";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      uploadFile(e.target.files[0]);
    }
  };

  const uploadFile = (file: File) => {
    setIsUploading(true);
    let progressInterval: NodeJS.Timeout;

    // Simulate upload progress
    progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          setIsUploading(false);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 300);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {!file && (
        <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg hover:border-blue-500 focus:border-blue-500 transition-all">
          <label className="flex flex-col items-center cursor-pointer">
            <svg
              className="w-12 h-12 mb-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V8a4 4 0 018 0v8m4 4H5a2 2 0 01-2-2V8a2 2 0 012-2h3.5m9.5 0H19a2 2 0 012 2v10a2 2 0 01-2 2h-4M12 11v6m0 0l3-3m-3 3l-3-3"
              />
            </svg>
            <span className="text-sm text-gray-400">
              Upload a file or drag and drop
            </span>
            <span className="text-xs text-gray-400">
              PNG, JPG, GIF up to 10MB
            </span>
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
        </div>
      )}

      {isUploading && (
        <div className="w-full max-w-md">
          <div className="flex justify-between text-xs mb-2">
            <span>{file?.name}</span>
            <span>{`${progress}%`}</span>
          </div>
          <div className="relative w-full h-2 bg-gray-300 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {!isUploading && file && progress === 100 && (
        <div className="w-full max-w-md flex justify-between items-center mt-4">
          <span>{file.name}</span>
          <div className="flex space-x-4">
            <button className="text-blue-600">Download</button>
            <button
              className="text-red-600"
              onClick={() => {
                setFile(null);
                setProgress(0);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
