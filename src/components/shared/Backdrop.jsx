import React from 'react';
import './backdrop.css';
const Backdrop = ({ handleSideBarClose }) => {
  return <div className="backdrop" onClick={handleSideBarClose}></div>;
};

export default Backdrop;
