import React, { useState } from "react";
import products from "../assets/products.json";
import "../styles/Offers.css";

function Offers() {
  const offerProducts = products.filter((product) => product.offer);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  return (
    <div className="Offers-container">
      <div className="offers-slide">
        <h2>Offers</h2>
        <div className="product-list" style={{ transform: `translateX(-${scrollPosition * 300}px)` }}>
          {offerProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discount}</p>
                <p>Discount Percentage: {product.discountPercentage}%</p>
                <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>&lt;</button>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default Offers;
