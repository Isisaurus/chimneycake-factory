import React, { useState, useEffect } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Hero, Loading } from './../index';

import ReactMarkdown from 'markdown-to-jsx';
// import { withStyles } from '@material-ui/core/styles';
import aboutText from './../../assets/markdown/about.md';
import chimneycakeText from './../../assets/markdown/chimneycake.md';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();

  const [about, setAbout] = useState(null);
  const [chimneyCake, setChimneyCake] = useState(null);

  const readMarkdownAbout = () => {
    fetch(aboutText)
      .then((data) => {
        const about = data.text();
        return about;
      })
      .then((about) => {
        setAbout(about);
      });
  };
  const readMarkdownCC = () => {
    fetch(chimneycakeText)
      .then((data) => {
        const cc = data.text();
        return cc;
      })
      .then((cc) => {
        setChimneyCake(cc);
      });
  };

  useEffect(() => {
    readMarkdownAbout();
    readMarkdownCC();
  }, []);

  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,

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
  const options2 = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,

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
        component: 'div',
        props: {
          className: `${classes.quote2}`,
        },
      },
    },
  };

  return about && chimneyCake ? (
    <>
      <Hero />
      <Container>
        <ReactMarkdown
          className={classes.parent}
          options={options}
          children={about}
        ></ReactMarkdown>
        <ReactMarkdown
          className={classes.parent}
          options={options2}
          children={chimneyCake}
        ></ReactMarkdown>
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default About;
