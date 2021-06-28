import React, { useState, useEffect } from 'react';
import { Container, Typography, Link, Button, Box } from '@material-ui/core';
import useStyles from './styles';
import ReactMarkdown from 'markdown-to-jsx';
import recipe from './../../assets/markdown/recipe.md';
import { Hero, Loading } from './../index';
import PrintIcon from '@material-ui/icons/Print';

const Recipe = () => {
  const classes = useStyles();
  const [text, setText] = useState();

  const readMarkup = async () => {
    fetch(recipe)
      .then((file) => file.text())
      .then((res) => setText(res));
  };
  const options = {
    overrides: {
      h2: {
        component: Typography,
        props: {
          variant: 'subtitle1',
          gutterBottom: true,
          color: 'secondary',
          className: `${classes.header}`,
        },
      },
      p: {
        component: Typography,
        props: {
          paragraph: true,
          variant: 'body2',
        },
      },
      a: {
        component: Link,
        props: {
          className: `${classes.link}`,
          target: '_blank',
        },
      },
      ul: {
        component: 'ul',
        props: {
          className: `${classes.list}`,
        },
      },
      li: {
        component: 'li',
        props: {
          className: `${classes.listItem}`,
        },
      },
      ol: {
        component: 'ol',
        props: {
          className: `${classes.steps}`,
        },
      },
    },
  };

  const printRecipe = () => {
    const recipeMarkup = document.getElementById('recipe');
    document.body.innerHTML = recipeMarkup.innerHTML;
    window.print();
    window.location.reload();
  };

  useEffect(() => {
    readMarkup();
  }, []);

  return text ? (
    <Container>
      <Hero />
      <Container className={classes.title}>
        <Typography>Chimney Cake at Home</Typography>
      </Container>
      <Container style={{ marginTop: '2rem' }}>
        <ReactMarkdown
          id="recipe"
          options={options}
          children={text}
        ></ReactMarkdown>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          startIcon={<PrintIcon />}
          style={{ marginTop: '2rem' }}
          onClick={printRecipe}
        >
          Print this recipe
        </Button>
      </Container>
      <Box className={classes.img}></Box>
    </Container>
  ) : (
    <Loading />
  );
};

export default Recipe;
