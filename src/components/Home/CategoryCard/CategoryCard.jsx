import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      component={Link}
      to={`/shop/${category.slug}`}
    >
      <CardContent className={classes.cardContent}>
        {/* <CardMedia /> */}
        <div className={classes.media}></div>
        <Typography variant="subtitle1" className={classes.title}>
          {category.name}
        </Typography>
      </CardContent>
      <Typography variant="body2" className={classes.description}>
        {category.description}
      </Typography>
    </Card>
  );
};

export default CategoryCard;
