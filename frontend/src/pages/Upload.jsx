import React, { useCallback, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import Dropzone from '../components/Dropzone';
import VideoPreview from '../components/VideoPreview';
import DisplayVideo from '../components/DisplayVideo';
import s3 from '../aws-config';
import Navbar from '../components/Navbar';

function Upload() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreviewKey, setVideoPreviewKey] = useState(0);


  const onDrop = useCallback(async(acceptedFiles) => {
    const acceptedVideos = acceptedFiles.filter((file) =>
      file.name.match(/\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i)
    );

    if (acceptedVideos.length > 0) {
      // setSelectedVideo(URL.createObjectURL(acceptedVideos[0]));
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

  function uploadToS3(selectedVideo) {
    setLoading(true);
    const paramsListObjects = {
      Bucket: 'skillissuevid', // Your S3 bucket name
    };
  
    s3.listObjects(paramsListObjects, (err, data) => {
      if (err) {
        console.error('Error listing objects in S3:', err);
      } else {
        const objectCount = data.Contents.length; // Get the count of existing objects
  
        // Set the Key based on the count of existing objects
        const k = `video_${objectCount + 1}.${selectedVideo.name.split('.').pop()}`;
        const email = localStorage.getItem("email")
        const params = {
          Bucket: 'skillissuevid',
          Key: k,
          Body: selectedVideo,
          ContentType: 'video/mp4',
        };
  
        s3.putObject(params, async(uploadErr, uploadData) => {
          if (uploadErr) {
            console.error('Error uploading to S3:', uploadErr);
          } else {
            console.log('Successfully uploaded to S3:', uploadData);
            
            const link = "https://d175wanlbunlv0.cloudfront.net/"+k
            const res = await fetch('/vid',{
              method:'POST',
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  email,link
              })
      });
          }
          setLoading(false);
          setVideoPreviewKey((prevKey) => prevKey + 1);
        });
      }
    });
  }


  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4 h-screen">
          <Dropzone onDrop={onDrop} loading={loading}/>
          <VideoPreview
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            refreshKey={videoPreviewKey}
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
