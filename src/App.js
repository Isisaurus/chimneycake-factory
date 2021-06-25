import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {
  Navbar,
  Cart,
  Checkout,
  ProductDetails,
  Home,
  Shop,
} from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DFD1B2',
    },
    secondary: {
      main: '#13181F',
    },
    text: {
      primary: '#13181F',
      secondary: '#444749',
    },
  },
  typography: {
    fontFamily: "'Lora', serif",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      letterSpacing: '0.01em',
    },
    h2: {
      letterSpacing: '0.01em',
    },
    h3: {
      letterSpacing: '0.01em',
    },
    h4: {
      letterSpacing: '0.01em',
    },
    h5: {
      letterSpacing: '0.01em',
    },
    h6: {
      letterSpacing: '0.01em',
    },
    button: {
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const App = () => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [categories, setCategories] = useState([]);

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

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);

      refreshCart();
    } catch (err) {
      console.log(err);
      setErrorMessage(err.data.error.message);
    }
  };

  const fetchCategories = async () => {
    const res = await commerce.categories.list();
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar totalItems={cart ? cart.total_items : 0} />
          <Switch>
            <Route exact path="/">
              <Home categories={categories} />
            </Route>
            <Route exact path="/shop">
              <Shop products={products} handleAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/shop/:slug">
              <Shop products={products} handleAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/products/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

//https://youtu.be/377AQ0y6LPA?list=PLrOYMtcuZ2u_UOizYJIJvoI4EVGbbsMgv&t=9754
