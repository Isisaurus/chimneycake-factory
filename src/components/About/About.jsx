import React, { useState, useEffect } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Hero } from './../index';

import ReactMarkdown from 'markdown-to-jsx';
// import { withStyles } from '@material-ui/core/styles';
import about from './../../assets/markdown/about.md';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();

  const [text, setText] = useState({ post: null });

  const readMarkdown = () => {
    fetch(about)
      .then((data) => {
        const about = data.text();
        return about;
      })
      .then((about) => {
        setText({ post: about });
      });
  };

  useEffect(() => {
    readMarkdown();
  }, []);

  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h6',
          color: 'secondary',
          className: `${classes.header}`,
        },
      },
      p: {
        component: Typography,
        props: {
          paragraph: true,
          variant: 'body1',
        },
      },
      a: {
        component: Link,
        props: {
          className: `${classes.link}`,
          target: '_blank',
        },
      },
      blockquote: {
        component: Typography,
        props: {
          variant: 'subtitle1',
          className: `${classes.quote}`,
        },
      },
    },
  };

  return text.post ? (
    <>
      <Hero />
      <Container>
        <ReactMarkdown
          className={classes.parent}
          options={options}
          children={text.post}
        ></ReactMarkdown>
      </Container>
    </>
  ) : (
    'Loading...'
  );
};

export default About;
