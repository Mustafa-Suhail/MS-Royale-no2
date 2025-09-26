import React from 'react';
import { products } from '../../data'; 
import './Products.css';

const Products = () => {
  return (
    <div className="products-container col-lg-8 col-sm-10 col-12 mx-auto my-5">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.img} alt={product.title} className="product-img" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-desc">{product.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
