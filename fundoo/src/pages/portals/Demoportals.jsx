import React from 'react';
import ReactDOM from 'react-dom';

export const Demoportals = (props) => {
  return ReactDOM.createPortal(<div><h1>Hello portals</h1></div>,   document.getElementById('modelport'));
};



export default Demoportals;
