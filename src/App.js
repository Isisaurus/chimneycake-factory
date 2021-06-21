import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState();
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
    console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      {products ? <Products products={products} /> : ''}
    </div>
  );
};

export default App;
