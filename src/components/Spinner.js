import React from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="Loading..." style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Spinner;
