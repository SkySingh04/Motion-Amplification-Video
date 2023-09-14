import React from 'react';
import Navbar from '../components/Navbar'; // Update the import path as needed
import OpVid from '../components/OpVid'; // Update the import path as needed
import OpPara from '../components/OpPara'; // Update the import path as needed

function Output() {
  const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3']; // Update with your parameters

  return (
    <div>
      <Navbar />
      <div className="text-centre font-sans bg-default flex">
        <OpVid />
        <OpPara parameters={parameters} />
      </div>
    </div>
  );
}

export default Output;
