import React, { useState } from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Banano', price: 1000, image: 'https://lavaquita.co/cdn/shop/products/76b6170a-f1e1-4a92-8622-cee94a659b91_1024x1024.png?v=1622197616' },
    { id: 2, name: 'Gaseosa', price: 3500, image: 'https://mistiendas.com.co/24280-large_default/cocacola-350.jpg' },
    { id: 3, name: 'Carne', price: 12000, image: 'https://magazine.medlineplus.gov/images/uploads/main_images/red-meat-v2.jpg' },
    { id: 4, name: 'Pan Tajado', price: 7000, image: 'https://megaredil.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzczMzkyLCJwdXIiOiJibG9iX2lkIn19--fff2b51d1da8e0a706d931ff1a270fc65dbf40eb/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwicmVzaXplX3RvX2ZpdCI6WzYwMCw2MDBdfSwicHVyIjoidmFyaWF0aW9uIn19--f071e30ecad735fd2ab55c9d9f5412fe02d64321/1458284.png?locale=es' }
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}) 
  );
  const handleIncrement = (productId) => {
    setQuantities({ ...quantities, [productId]: quantities[productId] + 1 });
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities({ ...quantities, [productId]: quantities[productId] - 1 });
    }
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(product.id)}>-</button>
            <span>{quantities[product.id]}</span>
            <button onClick={() => handleIncrement(product.id)}>+</button>
          </div>
          <button onClick={() => addToCart({ ...product, quantity: quantities[product.id] })}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
