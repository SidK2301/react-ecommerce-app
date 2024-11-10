import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering components
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component

// Create a root element to attach the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
