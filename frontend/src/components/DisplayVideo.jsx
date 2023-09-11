import React from 'react';

const DisplayVideo = ({ selectedVideo }) => {
  return (
    <div className="p-4 bg-gray-200 h-5/6 flex items-center justify-center">
      {selectedVideo ? (
        <video
          controls
          src={selectedVideo}
          className="max-w-full max-h-full"
        ></video>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default DisplayVideo;
