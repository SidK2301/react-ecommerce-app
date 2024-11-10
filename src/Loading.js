// src/Loading.js

import React from 'react';
import './Loading.css';  // We'll create a Loading.css file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
