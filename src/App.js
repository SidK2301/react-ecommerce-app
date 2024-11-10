import React from 'react'; // Importing React to use JSX
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components for routing
import Homepage from './Homepage'; // Importing the Homepage component
import ProductDetail from './ProductDetail'; // Importing the ProductDetail component

const App = () => {
  return (
    <Router> {/* Wrapping the app in Router to enable routing */}
      <Routes> {/* Defining the Routes component to manage different routes */}
        {/* Defining the route for Homepage */}
        <Route path="/" element={<Homepage />} />
        
        {/* Defining the route for Product Detail page using dynamic route with productId */}
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App; // Exporting the App component for use in other parts of the app
