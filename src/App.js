import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const res = await commerce.cart.retrieve();
    setCart(res);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const res = await commerce.cart.update(productId, { quantity });

    setCart(res.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const res = await commerce.cart.remove(productId);

    setCart(res.cart);
  };

  const handleEmptyCart = async () => {
    const res = await commerce.cart.empty();

    setCart(res.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart ? cart.total_items : 0} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

//https://youtu.be/377AQ0y6LPA?list=PLrOYMtcuZ2u_UOizYJIJvoI4EVGbbsMgv&t=5356