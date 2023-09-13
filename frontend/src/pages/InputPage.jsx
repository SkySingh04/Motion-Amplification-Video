import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImportData from '../components/ImportData';
import VideoAmp from '../components/VideoAmp';
import FreqSpect from '../components/FreqSpect';

const InputPage = () => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setDialogVisible(false);
    navigate('/');
  };

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
          {/* Rest of the content */}
          <VideoAmp />
          <FreqSpect />
        </div>
      </div>
    </div>
  );
};

export default InputPage;