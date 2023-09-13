import React, { useCallback, useState } from 'react';
import Dropzone from '../components/Dropzone';
import VideoPreview from '../components/VideoPreview';
import DisplayVideo from '../components/DisplayVideo';
import s3 from '../aws-config'; // Import the AWS configuration
import Navbar from '../components/Navbar';

function uploadToS3(selectedVideo) {

  const params = {
    Bucket: 'skillissuevid',
    Key: selectedVideo.name,
    Body: selectedVideo,
    ContentType:'video/mp4',
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
    } else {
      console.log('Successfully uploaded to S3:', data);
    }
  });
}



function Upload() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedVideos = acceptedFiles.filter((file) =>
      file.name.match(/\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i)
    );

    // Assuming you want to select the first video from the accepted videos
    if (acceptedVideos.length > 0) {
      setSelectedVideo(URL.createObjectURL(acceptedVideos[0]));
      // adding files to aws
      const videoFile = acceptedVideos[0];
      uploadToS3(videoFile);
    }
  }, []);

  return (
    <div>
      <Navbar/>
    <div className="flex">
      <div className="w-1/4 p-4 h-screen">
        <Dropzone onDrop={onDrop} />
        <VideoPreview
          selectedVideo={selectedVideo} // Pass selectedVideo to VideoPreview
          setSelectedVideo={setSelectedVideo} // Pass setSelectedVideo to VideoPreview
        />
      </div>
      <div className="w-3/4 p-4 h-screen">
        <DisplayVideo selectedVideo={selectedVideo} /> {/* Pass selectedVideo */}
      </div>
    </div>
    </div>
  );
}

export default Upload;



