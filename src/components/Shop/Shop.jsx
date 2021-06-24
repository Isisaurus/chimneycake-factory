import React from 'react';
import { Products } from './../../components';

const Shop = ({ products, handleAddToCart }) => {
  return (
    <main style={{ marginTop: '200px' }}>
      <p>This is shop</p>
      <Products products={products} onAddToCart={handleAddToCart} />
    </main>
  );
};

export default Shop;
