import React from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
    <div className="spinner-container">
      <img className="my-3" src={spinner} alt="Loading..." style={{ width: '50px', height: '50px' }} />
    </div>
};
export default Spinner;
