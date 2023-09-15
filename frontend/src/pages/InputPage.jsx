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
  const [loading,setLoading] = useState(false)
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
    setLoading(true)

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
        navigate('/output',{
          state:{
            data: data
          }
        })
        setLoading(false)
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
    {!loading?(<div>
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
    MAV
  </button>
</div>
</div>
    </div>):(<div className='flex items-center justify-center h-screen'><svg className="animate-spin -ml-1 mr-3 h-1/3 w-1/3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg></div>)}
    </div>
  );
};

export default InputPage;
