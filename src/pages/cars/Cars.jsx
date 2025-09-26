import React from 'react';
import { products1 } from '../../data';
import './Cars.css';

const Supercars = () => (
  <div>
    <h4>The Legacy Of Pagani Starts from Here</h4>
    <div className="products-container col-lg-10 col-sm-4 col-12 mx-auto my-5">
      {products1.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.img} alt={product.title} className="product-img" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-desc">{product.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Supercars;

