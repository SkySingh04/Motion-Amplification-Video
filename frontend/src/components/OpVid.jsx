import React, { useState } from 'react';

const OpVid = ({ videoPath }) => {
  const [selectedFile, setSelectedFile] = useState(videoPath);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="w-3/4 h-screen bg-light flex flex-col justify-center items-center">
      {!selectedFile ? (
        <div>
          {/* <label htmlFor="fileInput" className="bg-default text-white py-2 px-4 rounded-full hover:bg-darker cursor-pointer">
            Choose File
          </label> */}
          <input
            type="file"
            id="fileInput"
            accept=".mp4"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="w-3/4 h-3/4 rounded-2xl">
          <video controls className="w-full h-full">
            <source src={selectedFile} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default OpVid;
