import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent
        className={classes.cardContent}
        component={Link}
        to={`/shop/${category.slug}`}
      >
        <CardMedia
          image={`/img/category_images/${category.slug}.jpg`}
          title={category.name}
          className={classes.media}
        />
        <div className={classes.title}>
          <Typography variant="subtitle1">{category.name}</Typography>
        </div>
        <div>
          <Typography variant="body2" className={classes.description}>
            {category.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
