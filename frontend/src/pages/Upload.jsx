import React, { useCallback, useState } from 'react';
import Dropzone from '../components/Dropzone';
import VideoPreview from '../components/VideoPreview';
import DisplayVideo from '../components/DisplayVideo';

function Upload() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedVideos = acceptedFiles.filter((file) =>
      file.name.match(/\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i)
    );

    // Assuming you want to select the first video from the accepted videos
    if (acceptedVideos.length > 0) {
      setSelectedVideo(URL.createObjectURL(acceptedVideos[0]));
    }
  }, []);

  return (
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
  );
}

export default Upload;
