import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-item">
      {/* Link to the product details page */}
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
