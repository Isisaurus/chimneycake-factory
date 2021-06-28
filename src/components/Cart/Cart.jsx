import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Loading } from './../index';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Container className={classes.emptyMessage}>
      <Typography variant="subtitle1" color="textSecondary">
        You have no items in your shopping cart.
      </Typography>
      <Button
        component={Link}
        to="/shop"
        color="secondary"
        variant="outlined"
        size="large"
        style={{ marginTop: '1.5rem' }}
      >
        <Typography variant="subtitle1">Shop Now</Typography>
      </Button>
    </Container>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3} className={classes.grid}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5" className={classes.total}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className={classes.buttons}>
          <Button
            className={classes.emptyButton}
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleEmptyCart}
            disableElevation
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            disableElevation
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart) return <Loading />;
  return (
    <Container style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
      <Typography className={classes.title} variant="h5" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
