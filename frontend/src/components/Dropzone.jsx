import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Storage } from 'aws-amplify';

const Dropzone = ({ onDrop,loading}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'video/*',
  });

  const dropzoneClasses = `border-dashed border-2 border-gray-300 rounded-md p-4 text-center ${
    isDragActive ? 'bg-gray-100' : 'bg-gray-200'
  }`;

  return (
    <div className={`h-1/6 w-full ${dropzoneClasses}`} {...getRootProps()}>
      <input className="hidden" {...getInputProps()} />
      {loading ? (
        <p className="text-gray-600">Loading</p>
      ) : (
        <div>
          <p className="text-gray-600">
            Drag 'n' drop video files here, or click to select video files
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;






