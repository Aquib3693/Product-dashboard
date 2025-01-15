import React from 'react';

const ProductCard = ({ product, onDetails, onFavorite }) => {
  return (
    <div className="product-card">
     <img className="product-image" src={product.image} alt={product.title}  />
     <h5>{product.title}</h5>
     <p>${product.price.toFixed(2)}</p>
     <button onClick={() => onDetails(product)}>Details</button>
      
   </div> 
  );
};

export default ProductCard;
