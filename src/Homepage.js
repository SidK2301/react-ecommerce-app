import React from 'react'; // Import React to use JSX
import ProductList from './ProductList'; // Importing ProductList component to display products
import './Homepage.css'; // Importing CSS for styling the homepage

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="store-header">
        <h1 className="store-name">Birdvision Mart</h1> {/* Store name */}
        <p>Welcome to our store</p> {/* Welcome message */}
      </header>
      <ProductList /> {/* Displaying the ProductList component */}
    </div>
  );
};

export default Homepage; // Exporting the Homepage component
