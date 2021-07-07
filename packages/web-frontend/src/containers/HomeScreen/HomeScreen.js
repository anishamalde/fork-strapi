import React from 'react';
import Typewriter from 'typewriter-effect';
import useStyles from './HomeScreen.styles';
import { Typography } from '@material-ui/core';

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typewriter
        options={{
          cursor: ' ',
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Hello Foodie!').pauseFor(2500).start();
        }}
      />
    </div>
  );
};

export default HomeScreen;
