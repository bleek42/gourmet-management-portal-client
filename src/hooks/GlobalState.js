import React, { useState, useContext, useReducer } from 'react';

export const GlobalState = () => {
  const [getEmployees, setEmployees] = useState([]);
  const [getEmployee, setEmployee] = useState(null);

  const [getProducts, setProducts] = useState([]);
  const [getProduct, setProduct] = useState(null);

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const newItemIdx = updatedCart.findIndex((item) => item.id === product.id);
    if (newItemIdx < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const newItem = {
        ...updatedCart[newItemIdx],
      };
      newItem.quantity++;
      updatedCart[newItemIdx] = newItem;
    }
  };

  return (
    <div>
      <p>this is the global state!</p>
    </div>
  );
};
