import React, { useState, useEffect } from 'react';
import vid1 from '../vid1.mp4';
import vid2 from "../vid2.mp4";
const VideoPreview = ({ selectedVideo, setSelectedVideo }) => {
  const [videos, setVideos] = useState([ vid1 , vid2]); // For testing

  const handleVideoClick = (video) => {
    setSelectedVideo(video); // Update the selected video
  };

  return (
    <div className="h-4/6 mt-4 rounded-md bg-gray-200 overflow-y-auto">
      <div className="grid gap-4 grid-cols-1 p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`p-2 bg-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
              video === selectedVideo ? 'border border-blue-500' : ''
            }`}
            onClick={() => handleVideoClick(video)}
          >
            {video.endsWith('.mp4') ? (
              <video
                controls
                src={video}
                className="max-w-full h-auto"
                style={{ outline: 'none' }}
              ></video>
            ) : (
              <p>{video}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPreview;
