import React from 'react';

const OpPara = ({ parameters }) => {
  var result = Object.keys(parameters).map((key) => [key, parameters[key]]);

  console.log(result);
  return (
    <div className="w-1/4 h-screen bg-dark p-4 text-white">
      <h2 className="text-xl font-sans text-center font-semibold mb-4">Output Parameters</h2>
      <ul>
        {result.map((param, index) => (
          <div key={index} className="mb-2">
            <p>{param[0]} : {param[1]}</p>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default OpPara;
