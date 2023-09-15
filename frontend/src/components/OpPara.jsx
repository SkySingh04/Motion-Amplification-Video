import React from 'react';

const OpPara = ({ parameters }) => {
  var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
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
