import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'; // Update the import path as needed
import OpVid from '../components/OpVid'; // Update the import path as needed
import OpPara from '../components/OpPara'; // Update the import path as needed

function Output() {
  const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3']; // Update with your parameters

  // Function to handle the download action
  const handleDownload = () => {
    // Implement the download logic here
    // For example, you can create a download link or use the HTML5 download attribute
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="relative bg-light w-3/4">
          <OpVid />
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button
              className="bg-default text-white py-2 px-4 rounded-full hover:bg-darker"
              onClick={handleDownload}
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <OpPara parameters={parameters} />
      </div>
    </div>
  );
}

export default Output;
