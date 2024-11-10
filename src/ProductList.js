import React, { useEffect, useState } from 'react';
import Product from './Product';  // Product component for displaying individual product
import Loading from './Loading';  // Loading component to show during data fetch
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products from API based on the page number
  const fetchProducts = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="product-list">
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found</p>}
      {!loading && !error && products.length > 0 && (
        <>
          <div className="products-grid">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
