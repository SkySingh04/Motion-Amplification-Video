import React, { useState } from 'react';
import AWS from 'aws-sdk';
const acesskey = process.env.REACT_APP_ACCESS_KEY
const secretkey = process.env.REACT_APP_SECRET_ACCESS_KEY
const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const s3 = new AWS.S3({
      accessKeyId: acesskey,
      secretAccessKey: secretkey,
    });

    const params = {
      Bucket: 'skillissuevid',
      Key: selectedFile.name,
      Body: selectedFile,
    };

    try {
      await s3.upload(params).promise();
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadVideo;
