import React from 'react';

const OpPara = ({ parameters }) => {
  return (
    <div className="w-1/4 h-screen bg-dark p-4 text-white">
      <h2 className="text-xl font-sans text-center font-semibold mb-4">Output Parameters</h2>
      <ul>
        {parameters.map((param, index) => (
          <li key={index} className="mb-2">
            {param}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpPara;
