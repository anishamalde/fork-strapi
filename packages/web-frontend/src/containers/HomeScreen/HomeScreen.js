import React from 'react';
import Typewriter from 'typewriter-effect';
import { Query } from '../../components';
import useStyles from './HomeScreen.styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import HOMEPAGE_QUERY from '../../queries/homepage/homepage';

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Query query={HOMEPAGE_QUERY}>
      {({ data: { homepage } }) => {
        const welcomeTextArray = homepage.welcomeText.split('\n\n');

        return (
          <Grid container className={classes.grid}>
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
            <Paper className={classes.welcomeText}>
              {welcomeTextArray.map((textItem, index) => {
                return (
                  <Typography
                    className={
                      index % 2 === 0 ? classes.redText : classes.blueText
                    }
                    key={`welcome-text ${index}`}
                  >
                    {textItem}
                  </Typography>
                );
              })}
            </Paper>
          </Grid>
        );
      }}
    </Query>
  );
};
export default HomeScreen;
