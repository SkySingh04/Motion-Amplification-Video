import React from 'react';

const FreqSpect = () => {
  return (
    <div className="bg-light rounded-lg font-sans p-4 shadow-md">
      {/* Dominant Frequency Analysis */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Dominant Frequency Analysis</h2>



        {/* Manual choose of ...
        <div className="mt-4">
          <input type="checkbox" id="manualChooseCheckbox" />
          <label htmlFor="manualChooseCheckbox" className="text-sm">Manual choose of ...</label>
          <div className="flex space-x-4 mt-2">
            <div>
              <label htmlFor="correlationLength" className="text-sm">Correlation Length</label>
              <input type="text" id="correlationLength" className="block w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
            </div>
            <div>
              <label htmlFor="windowLength" className="text-sm">Window Length</label>
              <input type="text" id="windowLength" className="block w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
            </div>
          </div>
        </div> */}

        {/* Estimate the spectrum */}
        <div className="mt-4">
          <h3 className="font-semibold">Estimate the spectrum</h3>
          <div className="flex space-x-4 mt-2">
            <div>
              <label htmlFor="spectrumX" className="text-sm">X</label>
              <input type="text" id="spectrumX" className="block w-full text-sm mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
            </div>
            <div>
              <label htmlFor="spectrumY" className="text-sm">Y</label>
              <input type="text" id="spectrumY" className="block w-full text-sm mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
            </div>
          </div>
          <div className="mt-2">
            <button className="bg-darker text-sm text-white px-4 py-1 rounded-2xl">Calculate</button>
          </div>
        </div>

        {/* Save spectrum estimator */}
        <div className="mt-4">
          <h3 className="font-semibold">Save spectrum estimator</h3>
          <div className="flex space-x-4 mt-2">
            <div>
              <label htmlFor="spectrumName" className="text-sm">Name</label>
              <input type="text" id="spectrumName" className="block text-sm w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
            </div>
            <div>
              <label htmlFor="spectrumFormat" className="text-sm">Format</label>
              <select id="spectrumFormat" className="block text-sm w-full mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200">
                <option value=".jpg">.jpg</option>
                <option value=".png">.png</option>
                {/* Add more format options as needed */}
              </select>
            </div>
          </div>
          <div className="mt-2">
          <label htmlFor="spectrumFormat" className="text-sm">File Path</label>
            <input type="text" id="spectrumPath" placeholder="Enter the File Path" className="block text-sm w-1/3 mt-1 border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
          </div>
          <div className="mt-2">
            <button className="bg-darker text-sm text-white px-4 py-1 rounded-2xl">Save</button>
            <button className="bg-dark text-sm text-white px-4 py-1 ml-2 rounded-2xl">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreqSpect;