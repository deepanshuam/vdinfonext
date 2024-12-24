import React, { useState } from "react";
import "./Calculator.scss";

const CalculatorForm = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
    setTotalPrice((prevTotal) => prevTotal - item.price);
  };

  const items = [
    { name: "Basic Website", price: 200 },
    { name: "E-commerce", price: 500 },
    { name: "SEO Optimization", price: 150 },
    { name: "Custom Design", price: 300 },
  ];

  return (
    <div className="calculator-container">
      <h2>Website Calculator</h2>
      <div className="calculator-items">
        {items.map((item) => (
          <div key={item.name} className="calculator-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p className="total-price">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CalculatorForm;
