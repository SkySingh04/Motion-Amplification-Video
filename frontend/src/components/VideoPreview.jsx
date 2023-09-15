import React, { useState, useEffect } from 'react';
import s3 from '../aws-config'; // Import the AWS configuration 

const VideoPreview = ({ selectedVideo, setSelectedVideo,refreshKey }) => {
  const [videos, setVideos] = useState([]);
  const handleVideoClick = (video) => {
    setSelectedVideo(video); // Update the selected video
  };

  const fetchMyVideos = async()=>{
    await fetch('/videos',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('email')
      })
    }).then(async(res)=>{
      let response = await res.json()
      console.log(response.videos)
       setVideos(response.videos)
    })
  }

  useEffect(()=>{
    fetchMyVideos()
  },[refreshKey])


  return (
    <div className="h-4/6 mt-4 rounded-md bg-gray-200 overflow-y-auto">
      <div className="grid gap-4 grid-cols-1 p-4">
        {videos.length >0 && videos.map((video, index) => (
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
