// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ImportData from '../components/ImportData';
// import VideoAmp from '../components/VideoAmp';
// import FreqSpect from '../components/FreqSpect';
// import UserInput from '../components/UserInput';

// const InputPage = () => {
//   const [dialogVisible, setDialogVisible] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleCloseDialog = () => {
//     setDialogVisible(false);
//     navigate('/');
//   };

//   const selectedVideo = location.state?.selectedVideo;

//   // Define state for input parameters
//   const [inputParameters, setInputParameters] = useState({
//     phase: 'train',
//     config_file: '',
//     config_spec: 'configs/configspec.conf',
//     vid_dir: '',
//     frame_ext: 'png',
//     out_dir: '',
//     amplification_factor: 5,
//     velocity_mag: false,
//     fl: '',
//     fh: '',
//     fs: '',
//     n_filter_tap: '',
//     filter_type: 'Butter',
//     Temporal: Boolean,
//   });

//   // Handle changes in input fields and update the state
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     setInputParameters({
//       ...inputParameters,
//       [name]: newValue,
//     });
//   };

//   // Handle the JSON creation and logging
//   const handleJSONCreation = () => {
//     // Combine selected video with input parameters
//     const inputData = {
//       selectedVideo: selectedVideo,
//       inputParameters: inputParameters,
//     };

//     // Log the JSON object
//     console.log('Input Data:', inputData);

//     fetch('http://0.0.0.0:8000/send/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(inputData), // Send the form data as JSON
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Response from server:', data);
//         // You can handle the server response here
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle errors here
//       });
//   };

//   const handleFormSubmit = (formData) => {
//     // You can access the form data here
//     setInputParameters(formData)
//   }


//   useEffect(() => {
//     if (selectedVideo) {
//       console.log('selectedVideo', selectedVideo);
//     }}, [selectedVideo]);

//   return (
//     <div className={`bg-default flex w-full h-screen ${dialogVisible ? '' : 'hidden'}`}>
//       <div className="flex">
//         <div className="w-1/2 bg-gray-200">
//           <ImportData />
//           <VideoAmp />
//         </div>
//         <div className="w-1/2 bg-gray-300">
//           {/* Close Button */}
//           <div className="absolute top-4 right-4">
//             <button
//               onClick={handleCloseDialog}
//               className="text-red-500 hover:text-red-900 px-3 py-0.5 rounded-full shadow-lg max-h-screen overflow-y-auto"
//             >
//               x
//             </button>
//           </div>
//           <FreqSpect />
//           <UserInput onSubmit={handleFormSubmit} /> {/* Pass the onSubmit prop */}
//           {/* Rest of the content */}
          
          

//           {/* Button to create and log JSON */}
//           <div className="mt-4">
//             <button
//               onClick={handleJSONCreation}
//               className="bg-darker text-white px-4 py-2 rounded-md hover:bg-dark"
//             >
//               Create JSON
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputPage;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImportData from '../components/ImportData';
import VideoAmp from '../components/VideoAmp';
import FreqSpect from '../components/FreqSpect';
import UserInput from '../components/UserInput';

const InputPage = () => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseDialog = () => {
    setDialogVisible(false);
    navigate('/');
  };

  const selectedVideo = location.state?.selectedVideo;

  // Define state for input parameters
  const [inputParameters, setInputParameters] = useState({
    phase: 'train',
    config_file: '',
    config_spec: 'configs/configspec.conf',
    vid_dir: '',
    frame_ext: 'png',
    out_dir: '',
    amplification_factor: 5,
    velocity_mag: false,
    fl: '',
    fh: '',
    fs: '',
    n_filter_tap: '',
    filter_type: 'Butter',
    Temporal: Boolean,
  });

  // Handle changes in input fields and update the state
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setInputParameters({
      ...inputParameters,
      [name]: newValue,
    });
  };

  // Handle the JSON creation and logging
  const handleJSONCreation = () => {
    // Combine selected video with input parameters
    const inputData = {
      selectedVideo: selectedVideo,
      inputParameters: inputParameters,
    };

    // Log the JSON object
    console.log( inputData);
    

    fetch('http://localhost:8080/upload/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData), // Send the form data as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // You can handle the server response here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  const handleFormSubmit = (formData) => {
    // You can access the form data here
    setInputParameters(formData);
  };

  useEffect(() => {
    if (selectedVideo) {
      console.log('selectedVideo', selectedVideo);
    }
  }, [selectedVideo]);

  return (
    <div>
      <Navbar/>
    <div className={`bg-default flex flex-col h-screen justify-center  ${dialogVisible ? '' : 'hidden'}`}>
      <div className="mb-4 p-4">
        {/* Close Button */}
        <button
          onClick={handleCloseDialog}
          className="text-red-700 bg-light hover:text-red-900 px-3 py-0.5 rounded-full shadow-lg absolute top-28 right-28"
        >
          x
        </button>
      </div>
      <div className="rounded-lg ml-20 mr-20 flex-grow overflow-y-auto">
        <ImportData />
        <VideoAmp />
        <FreqSpect />
        <UserInput onSubmit={handleFormSubmit} className='bg-light'/> {/* Pass the onSubmit prop */}
      </div>
      {/* Button to create and log JSON */}
      <div className="mt-4 p-4 flex justify-center items-center">
  <button
    onClick={handleJSONCreation}
    className="bg-darker text-white px-4 py-2 rounded-md hover:bg-dark"
  >
    Create JSON
  </button>
</div>
</div>
    </div>
  );
};

export default InputPage;
