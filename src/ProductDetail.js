import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams(); // Get productId from URL parameters
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Fetch product details based on productId
    const fetchProductDetail = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json(); // Parse the response data
        setProduct(data); // Store product data in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Set error message if something goes wrong
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProductDetail(); // Call function to fetch product details
  }, [productId]); // Re-fetch if productId changes

  if (loading) return <p>Loading...</p>; // Display loading message
  if (error) return <p>{error}</p>; // Display error message if any

  return (
    <div className="product-detail">
      {/* Button to go back to the product list */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Products
      </button>
      
      {/* Product details */}
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
