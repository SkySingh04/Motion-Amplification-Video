import React, { useState } from 'react';

function UserInput() {
  const [formData, setFormData] = useState({
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
  });

  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // Replace with your submission logic
  };

  return (
      <div className="bg-gray-200 mt-20 p-4 shadow-md rounded-md fixed right-4 top-1/2 transform -translate-y-1/2 md:w-1/4 h-screen">
        <h2 className="text-lg font-semibold">Parameters:</h2>
        <div className="max-h-full overflow-y-auto">
          <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Phase:</label>
          <select
            name="phase"
            value={formData.phase}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="train">Train</option>
            <option value="test">Test</option>
            <option value="run">Run</option>
            <option value="interactive">Interactive</option>
          </select>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Config File:</label>
          <input
            type="text"
            name="config_file"
            value={formData.config_file}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Config Spec:</label>
          <input
            type="text"
            name="config_spec"
            value={formData.config_spec}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Video Folder:</label>
          <input
            type="text"
            name="vid_dir"
            value={formData.vid_dir}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Frame Extension:</label>
          <input
            type="text"
            name="frame_ext"
            value={formData.frame_ext}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Output Folder:</label>
          <input
            type="text"
            name="out_dir"
            value={formData.out_dir}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Amplification Factor:</label>
          <input
            type="number"
            name="amplification_factor"
            value={formData.amplification_factor}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Enable Velocity Magnification:
          </label>
          <input
            type="checkbox"
            name="velocity_mag"
            checked={formData.velocity_mag}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Low Cutoff Frequency:</label>
          <input
            type="text"
            name="fl"
            value={formData.fl}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">High Cutoff Frequency:</label>
          <input
            type="text"
            name="fh"
            value={formData.fh}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Sampling Rate:</label>
          <input
            type="text"
            name="fs"
            value={formData.fs}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Number of Filter Taps:</label>
          <input
            type="number"
            name="n_filter_tap"
            value={formData.n_filter_tap}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Filter Type:</label>
          <select
            name="filter_type"
            value={formData.filter_type}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="Butter">Butter</option>
            <option value="FIR">FIR</option>
          </select>
        </div>

        <div className="mt-4 py-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <div>
            <br></br>
            
            <br></br>
            
            <br></br>
            
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default UserInput;
