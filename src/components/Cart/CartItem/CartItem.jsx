import React from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
        component={Link}
        to={`/products/${item.product_id}`}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Typography variant="subtitle1">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <IconButton
            aria-label="remove"
            size="small"
            color="secondary"
            className={classes.icon}
            onClick={() => {
              onUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            <RemoveOutlinedIcon />
          </IconButton>
          <Typography color="textSecondary" variant="body1">
            {item.quantity}
          </Typography>
          <IconButton
            aria-label="add"
            size="small"
            color="secondary"
            className={classes.icon}
            onClick={() => {
              onUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            <AddOutlinedIcon />
          </IconButton>
        </div>
        <IconButton
          aria-label="delete"
          color="secondary"
          size="medium"
          className={classes.removeButton}
          onClick={() => {
            onRemoveFromCart(item.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
