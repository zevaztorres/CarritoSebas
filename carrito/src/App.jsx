import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya está en el carrito, sumamos la nueva cantidad
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      // Si no está en el carrito, lo agregamos
      return [...prevCart, product];
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          // Si el producto tiene más de 1 cantidad, disminuimos la cantidad
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          // Dejamos los demás productos iguales
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

