// components/CloseButton.jsx
import React from 'react';

const CloseB = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-white">
      &#10006; {/* This is the HTML entity for the '×' symbol */}
    </button>
  );
};

export default CloseB;