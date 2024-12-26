import React from 'react';

const ItemCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Rs. {product.price}</p>
      <button>Buy</button>
    </div>
  );
};

export default ItemCard;
