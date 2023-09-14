import React, { useCallback, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import Dropzone from '../components/Dropzone';
import VideoPreview from '../components/VideoPreview';
import DisplayVideo from '../components/DisplayVideo';
import s3 from '../aws-config';
import Navbar from '../components/Navbar';

function uploadToS3(selectedVideo) {
  const params = {
    Bucket: 'skillissuevid',
    Key: selectedVideo.name,
    Body: selectedVideo,
    ContentType: 'video/mp4',
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
  const navigate = useNavigate();
  

  const [selectedVideo, setSelectedVideo] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedVideos = acceptedFiles.filter((file) =>
      file.name.match(/\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i)
    );

    if (acceptedVideos.length > 0) {
      setSelectedVideo(URL.createObjectURL(acceptedVideos[0]));
      const videoFile = acceptedVideos[0];
      uploadToS3(videoFile);
    }
  }, []);

  const handleUpload = (id) => {
    if (selectedVideo) {
      // Create a FormData object to send the selected video
      navigate("/input" , {
        state:{
          selectedVideo: selectedVideo
        }
      })
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4 h-screen">
          <Dropzone onDrop={onDrop} />
          <VideoPreview
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
          {selectedVideo && (
            <Link 
            to="/input"
            state={{
              selectedVideo: selectedVideo
            }}
            >
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4 block"
              onClick={handleUpload}
            >
              Upload and Go to Input
            </button>
            </Link>
            
          )}
        </div>
        <div className="w-3/4 p-4 h-screen">
          <DisplayVideo selectedVideo={selectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default Upload;
