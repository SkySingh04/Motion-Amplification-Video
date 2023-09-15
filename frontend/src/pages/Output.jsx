import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'; // Update the import path as needed
import OpVid from '../components/OpVid'; // Update the import path as needed
import OpPara from '../components/OpPara'; // Update the import path as needed
import { useNavigate,useLocation } from 'react-router-dom';
function Output() {
  const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3']; // Update with your parameters

  // Function to handle the download action
  // const handleDownload = async () => {
  //   try {
  //     // Send a GET request to the API endpoint
  //     const response = await fetch('http://localhost:8080/download', {
  //       method: 'GET',
  //     });

  //     if (response.ok) {
  //       // If the response is successful, trigger the download
  //       const blob = await response.blob();
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', 'your_file_name.ext'); // Replace with your desired file name
  //       document.body.appendChild(link);
  //       link.click();
  //     } else {
  //       console.error('Failed to download file');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

const location = useLocation()
const navigate = useNavigate()

const data = location.state?.data 
const params = location.state?.data.inputParameters
const link = location.state?.data.link
console.log("data:" + data)
console.log("params:" + params)
console.log("link:" + link)
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="relative bg-light w-3/4">
          <OpVid videoPath={link} />
          {/* <div className="absolute top-0 right-0 mt-4 mr-4">
            <button
              className="bg-default text-white py-2 px-4 rounded-full hover:bg-darker"
              onClick={handleDownload}
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div> */}
        </div>
        <OpPara parameters={params} />
      </div>
    </div>
  );
}

export default Output;
