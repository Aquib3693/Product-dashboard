import React from 'react';

const Modal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
