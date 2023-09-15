// components/VideoAmp.jsx
import React, { useState } from 'react';

const VideoAmp = () => {
  const [frequencyInputVisible, setFrequencyInputVisible] = useState(false);
  const [frequency, setFrequency] = useState(0);
  const [scaleValue, setScaleValue] = useState(0);

  const handleFrequencyCheckbox = () => {
    setFrequencyInputVisible(!frequencyInputVisible);
  };

  const handleScaleChange = (event) => {
    setScaleValue(event.target.value);
  };

  return (
    <div className="bg-light font-sans p-4 shadow-md">
      <h2 className="text-lg font-bold">Video Movement Amplification</h2>
      <div className="mt-4">
      <h3 className="font-semibold text-base">Channel of Interest</h3>
        <input type="radio" name="channel" id="matrix" value="matrix" />
        <label htmlFor="matrix" className='text-sm ml-1 mr-2'>Matrix channel</label>
        <input type="radio" name="channel" id="cell" value="cell" />
        <label htmlFor="cell" className='text-sm ml-1 mr-2'>Cell channel</label>
        <input type="radio" name="channel" id="both" value="both" />
        <label htmlFor="both" className='text-sm ml-1'>Both</label>
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id="frequencyCheckbox"
          checked={frequencyInputVisible}
          onChange={handleFrequencyCheckbox}
        />
        <label htmlFor="frequencyCheckbox" className='ml-1 text-sm'>Manual choice of amplification frequency</label>
        {frequencyInputVisible && (
          <input
            type="text"
            id="frequency"
            placeholder="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
        )}
        <div className="mt-4 relative">
  <input
    type="range"
    id="scale"
    min="0"
    max="100"
    value={scaleValue}
    onChange={handleScaleChange}
    onInput={handleScaleChange} // Add this line for real-time input
    className="w-1/3"
  />
  <p className="text-sm ml-2 mb-1">{scaleValue}</p>

  {/* Division Lines
  <div className="absolute bottom-0 w-full h-2 bg-gray-300">
    {Array.from({ length: 11 }).map((_, index) => (
      <div
        key={index}
        className="absolute w-px h-full bg-gray-600"
        style={{ left: `${(index * 10)}%` }}
      ></div>
    ))}
  </div> */}
</div>

      {/* </div>
      <div className="mt-4">
        <input
          type="range"
          id="scale"
          min="0"
          max="100"
          value={scaleValue}
          onChange={handleScaleChange}
        /> */}
        <button className="bg-darker text-sm text-white px-4 py-1 rounded-2xl">Start</button>
      </div>
      <div className="mt-4 mb-0">
        <input type="checkbox" id="anotherCheckbox" />
        <label htmlFor="anotherCheckbox" className='ml-1 text-sm'>Display markers for dominant motions when available</label>
      </div>
    </div>
  );
};

export default VideoAmp;