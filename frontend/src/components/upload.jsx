import React, { useState } from 'react';
import AWS from 'aws-sdk';

const accessKey = process.env.REACT_APP_ACCESS_KEY;
const secretKey = process.env.REACT_APP_SECRET_ACCESS_KEY;

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleUpload = async () => {
  //   if (!selectedFile) {
  //     setError('Please select a file.');
  //     return;
  //   }

  //   setError(null);
  //   setUploading(true);

  //   const s3 = new AWS.S3({
  //     accessKeyId: accessKey,
  //     secretAccessKey: secretKey,
  //   });

  //   const params = {
  //     Bucket: 'skillissuevid',
  //     Key: selectedFile.name,
  //     Body: selectedFile,
  //     ContentType:'video/mp4',
  //   };

  //   try {
  //     await s3.upload(params).promise();
  //     alert('File uploaded successfully.');
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     setError('An error occurred during upload.');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file.');
      return;
    }
  
    setError(null);
    setUploading(true);
  
    const s3 = new AWS.S3({
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    });
  
    const params = {
      Bucket: 'skillissuevid',
      Key: selectedFile.name,
      ContentType: 'video/mp4', // Set the Content-Type here
    };
  
    const xhr = new XMLHttpRequest();
    const url = s3.getSignedUrl('putObject', params);
  
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'video/mp4'); // Set the Content-Type header
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('File uploaded successfully.');
        } else {
          console.error('Error uploading file:', xhr.statusText);
          setError('An error occurred during upload.');
        }
        setUploading(false);
      }
    };
  
    xhr.send(selectedFile);
  };
  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        Upload
      </button>
      {uploading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UploadVideo;
