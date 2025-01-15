import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import Modal from '../components/Modal';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
      setCategories([...new Set(response.data.map((p) => p.category))]);
    };

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    setFilteredProducts(category ? products.filter(p => p.category === category) : products);
  };

  const handleSort = (order) => {
    setFilteredProducts([...filteredProducts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredProducts(products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())));
  };

  const handleFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(id)) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(fav => fav !== id)));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <FilterBar categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onDetails={setSelectedProduct} 
            onFavorite={handleFavorite} 
          />
        ))}
      </div>
      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default HomePage;
