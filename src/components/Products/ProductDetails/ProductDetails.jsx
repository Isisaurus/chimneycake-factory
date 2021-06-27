import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import {
  Container,
  Grid,
  Typography,
  Button,
  Link as LinkEl,
} from '@material-ui/core';
import { Hero } from './../../index';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const ProductDetails = ({ handleAddToCart }) => {
  const classes = useStyles();
  const { id } = useParams();

  const [product, setProduct] = useState();

  const getProductById = async (id) => {
    const res = await commerce.products.retrieve(id);
    // console.log(res);
    // name, description, categories
    // img: media.source
    setProduct(res);
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  if (!product) return 'Loading...';

  return (
    <Container className={classes.container}>
      <Hero />
      <Container className={classes.product}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={classes.media}>
            <img
              src={product.media.source}
              alt={product.name}
              className={classes.image}
            ></img>
          </Grid>
          <Grid item xs={12} md={6} className={classes.details}>
            <div>
              <div className={classes.titleContainer}>
                <Typography gutterBottom variant="h6" className={classes.title}>
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h6">
                  {product.price.formatted_with_symbol}
                </Typography>
              </div>
              <Typography
                variant="body2"
                paragraph
                gutterBottom
                dangerouslySetInnerHTML={{ __html: product.description }}
                style={{ marginBottom: '2.5rem' }}
              ></Typography>
            </div>
            <div className={classes.actions}>
              <div className={classes.categories}>
                {product.categories.map((cat) => (
                  <LinkEl
                    key={cat.slug}
                    component={Link}
                    color="textSecondary"
                    to={`/shop/${cat.slug}`}
                    className={classes.link}
                  >
                    #{cat.name}
                  </LinkEl>
                ))}
              </div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<AddShoppingCart />}
                className={classes.button}
                onClick={() => {
                  handleAddToCart(product.id, 1);
                }}
                disableElevation
              >
                <Typography variant="button" style={{ textTransform: 'none' }}>
                  Add to Cart
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ProductDetails;