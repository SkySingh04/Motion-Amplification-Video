import React, { useCallback } from 'react';
import Dropzone from '../components/Dropzone';
import UserInput from '../components/UserInput';

function Dashboard() {
  const onDrop = useCallback((acceptedFiles) => {
    const acceptedVideos = acceptedFiles.filter((file) =>
      file.name.match(/\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i)
    );

    console.log(acceptedVideos);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 p-4 h-screen fixed left-0">
        <Dropzone onDrop={onDrop} />
      </div>
      <div className="w-2/4 p-4 mx-auto">
        
      </div>
      <div className="w-1/4">
      <UserInput />
      </div>
    </div>
  );
}

export default Dashboard;
