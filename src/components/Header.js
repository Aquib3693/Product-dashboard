import React from 'react';
import './styles.css';
// import './App.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1 className="logo">99X.Store</h1>
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={(e) => onSearch(e.target.value)} 
        className="search-bar" 
      />
    </header>
  );
};

export default Header;
