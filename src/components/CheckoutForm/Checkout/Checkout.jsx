import React, { useState, useEffect } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from '@material-ui/core';

import useStyles from './styles';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  //create checkout token
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token);
      } catch {
        if (activeStep !== steps.length) history.push('/');
      }
    };
    generateToken();
    // eslint-disable-next-line
  }, [cart]);

  const nextStep = () => setActiveStep((prevState) => prevState + 1);
  const backStep = () => setActiveStep((prevState) => prevState - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer && isFinished ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase,{' '}
            <span style={{ textTransform: 'capitalize' }}>
              {order.customer.firstname}.
            </span>
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h6">Sorry! Something went wrong!</Typography>
        <Typography variant="h6">Error: {error}</Typography>
        <br />
        <Button component={Link} to="shop" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
      />
    );
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout} style={{ minHeight: '50vh' }}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
