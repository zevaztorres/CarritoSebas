import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  return (
    <div className="App"style={{ margin: 0, padding: 0, width: '100vw' }}>
      <Header />
      <main>
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

