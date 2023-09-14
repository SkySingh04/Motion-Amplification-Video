import React, { useState } from 'react';

const ImportData = () => {
  const [filePath, setFilePath] = useState('');
  const [samplingRate, setSamplingRate] = useState('');
  const [unitChecked, setUnitChecked] = useState(false);

  const handleImportClick = () => {
    // Handle import logic here
  };

  const handleDoneClick = () => {
    // Handle done logic here
  };

  return (
    <div className="font-sans rounded-lg bg-light p-4 shadow-md">
      <h2 className="text-lg font-bold">Import Data</h2>
      <div className="text-sm mt-4">
        <p>Enter full path and frame rate</p>
        <p>Data dr</p>
        <input
          type="text"
          placeholder="Path to file or folder"
          value={filePath}
          className="block w-2/3 mt-1 border-gray-300 rounded-md focus:ring focus:ring-default"
          onChange={(e) => setFilePath(e.target.value)}
        />
      </div>
      <div className="text-sm mt-4">
        <p>Sampling Rate</p>
        <input
          type="number"
          placeholder="Sampling rate (Hz)"
          value={samplingRate}
          className="block w-2/3 mt-1 border-gray-300 rounded-md focus:ring focus:ring-default"
          onChange={(e) => setSamplingRate(e.target.value)}
        />
      </div>
      <div className="text-sm mt-2">
        <input
          type="checkbox"
          id="unitCheckbox"
          checked={unitChecked}

          onChange={() => setUnitChecked(!unitChecked)}
        />
        <label htmlFor="unitCheckbox" className='ml-1'>Change to units for denoising</label>
      </div>
      <div className="text-sm mt-4">
        <button
          className="bg-darker text-white px-3 py-1 rounded-2xl"
          onClick={handleImportClick}
        >
          Import
        </button>
        <button
          className="bg-dark text-white ml-2 mb-5 px-4 py-1 rounded-full"
          onClick={handleDoneClick}
        >
          Done
        </button>
      </div>

      {/* Image Enhancement Options */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Image Enhancement Options</h2>
      </div>

      {/* Denoising Options */}
      <div className="mt-4">
        <h3 className="font-semibold">Denoising Options</h3>
        <div className="mt-2">
          <label htmlFor="denoisingOptions" className="text-sm">Denoising Method</label>
          <select
            id="denoisingOptions"
            className="block text-sm w-2/3 mt-1 border-gray-300 rounded-md focus:ring focus:ring-default"
          >
            <option value="median">Median</option>
            <option value="mean">Mean</option>
            {/* Add more denoising options as needed */}
          </select>
        </div>
        <div className="mt-4 mb-2 flex space-x-4">
          <div>
            <label htmlFor="area" className="text-sm">Area</label>
            <input
              type="text"
              id="area"
              className="block w-full mt-1 text-sm border-gray-300 rounded-md focus:ring focus:ring-default"
            />
          </div>
          <div>
            <label htmlFor="x" className="text-sm">X</label>
            <input
              type="text"
              id="x"
              className="block w-full text-sm mt-1 border-gray-300 rounded-md focus:ring focus:ring-default"
            />
          </div>
        </div>
        <div className="text-sm mt-3">
          <button className="bg-darker text-white px-4 py-1 rounded-2xl">Apply</button>
          <button className="bg-red-700 text-white px-4 py-1 rounded-2xl ml-2">Cancel</button>
        </div>
      </div>

      {/* Color Intensity Bars */}
      <div className="mt-5">
        <h3 className="font-semibold">Color Intensity Bars</h3>
        <div className="mt-2 flex space-x-4">
          <div>
            <label htmlFor="cellIntensity" className="text-sm">Cell Intensity</label>
            <input
              type="range"
              id="cellIntensity"
              min="1"
              max="2"
              step="0.02"
              className="bg-darker block w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label htmlFor="matrixIntensity" className="text-sm">Matrix Intensity</label>
            <input
              type="range"
              id="matrixIntensity"
              min="1"
              max="2"
              step="0.02"
              className="block w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
        </div>
      </div>

      {/* Blind Convolution */}
      <div className="mt-4">
        <h3 className="font-semibold">Blind Convolution</h3>
        <div className="mt-2 text-sm ">
          <button className="bg-darker text-sm text-white px-4 py-1 rounded-2xl">Apply</button>
          <button className="bg-red-700 text-white px-4 py-1 rounded-2xl ml-2 mb-1">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ImportData;