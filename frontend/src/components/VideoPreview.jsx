import React, { useState, useEffect } from 'react';
import s3 from '../aws-config'; // Import the AWS configuration 

const VideoPreview = ({ selectedVideo, setSelectedVideo }) => {
  const [videos, setVideos] = useState([]);
  const cloudFrontUrl=process.env.REACT_APP_CLOUD_FRONT_URL;
  // Define the regex pattern to match the S3 URL
  const s3Pattern = /^https:\/\/([a-zA-Z0-9\-_]+)\.s3\.amazonaws\.com\/(.+)$/;

  // console.log('cloudFrontUrl',cloudFrontUrl);
// Function to transform an S3 URL into a CloudFront URL
  function transformS3ToCloudFront(s3Url) {
    return s3Url.replace(s3Pattern, `${cloudFrontUrl}/$2`);
  }
  useEffect(() => {
    // Fetch videos from S3 bucket
    const params = {
      Bucket: 'skillissuevid',
    };

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error('Error fetching videos from S3:', err);
      } else {
        const videoUrls = data.Contents.map((video) => {
          return `https://${params.Bucket}.s3.amazonaws.com/${video.Key}`;
        });
        // console.log('Video URLs:', videoUrls); 
        const cloudFrontUrls = videoUrls.map(transformS3ToCloudFront);
        // console.log('CloudFront URLs:', cloudFrontUrls);
        setVideos(cloudFrontUrls);
      }
    });
  }, []); // Empty dependency array to run this effect only once

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
