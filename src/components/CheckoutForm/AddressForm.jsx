import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState('');

  const countries = Object.values(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const res = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(Object.entries(res.countries));
    const selected = Object.entries(res.countries).find((el) => el[0] === 'NL');
    if (selected) {
      setShippingCountry(selected[0]);
    } else {
      setShippingCountry(Object.entries(res.countries)[0][0]);
    }
  };

  const fetchDivisions = async (countryCode) => {
    const res = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(res.subdivisions);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setshippingOptions(options);
  };

  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken.id);
    }
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) {
      fetchDivisions(shippingCountry);
    }
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) {
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
    }
  }, [shippingSubdivision]);

  const methods = useForm();
  if (!checkoutToken) return 'Loading...';
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            });
          })}
        >
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First Name" required />
            <FormInput name="lastName" label="Last Name" required />
            <FormInput name="address1" label="Address" required />
            <FormInput name="email" label="Email" required />
            <FormInput name="city" label="City" required />
            <FormInput name="zip" label="Postcode" required />
            <Grid item xs={12} xm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => {
                  setShippingCountry(e.target.value);
                }}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {shippingCountry ? (
              <Grid item xs={12} xm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select
                  value={shippingSubdivision}
                  fullWidth
                  onChange={(e) => {
                    setShippingSubdivision(e.target.value);
                  }}
                >
                  {subdivisions.map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ) : (
              <></>
            )}
            {shippingSubdivision ? (
              <Grid item xs={12} xm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => {
                    setshippingOption(e.target.value);
                  }}
                >
                  {options.map((op) => (
                    <MenuItem key={op.id} value={op.id}>
                      {op.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
