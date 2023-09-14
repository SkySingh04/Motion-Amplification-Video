import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ImportData from '../components/ImportData';
import VideoAmp from '../components/VideoAmp';
import FreqSpect from '../components/FreqSpect';
import UserInput from '../components/UserInput';
const InputPage = () => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.selectedVideo);

  const handleCloseDialog = () => {
    setDialogVisible(false);
    navigate('/');
  };

  const selectedVideo = location.state?.selectedVideo;

  useEffect(() => {
    if (selectedVideo) {
      // Define the endpoint URL
      const endpoint = '/input';

      // Create a FormData object and append the selected video to it
      const formData = new FormData();
      formData.append('selectedVideo', selectedVideo);

      // Send a POST request to the server
      fetch(endpoint, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Server Response:', data);
          // Handle the server response as needed
        })
        .catch((error) => {
          console.error('Error sending POST request:', error);
        });
    }
  }, [selectedVideo]);

  return (
    <div className={`bg-default flex justify-center items-center h-screen ${dialogVisible ? '' : 'hidden'}`}>
      <div className="flex">
        <div className="w-1/2 bg-gray-200">
          <ImportData />
        </div>
        <div className="w-1/2 bg-gray-300 relative">
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handleCloseDialog}
              className="text-red-500 hover:text-red-900 px-3 py-0.5 rounded-full shadow-lg max-h-screen overflow-y-auto"
            >
                x
            </button>
          </div>
          <UserInput />
          {/* Rest of the content */}
          <VideoAmp />
          <FreqSpect />
        </div>
      </div>
    </div>
  );
};

export default InputPage;
