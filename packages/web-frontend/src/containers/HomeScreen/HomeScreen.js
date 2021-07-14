import React from 'react';
import Typewriter from 'typewriter-effect';
import shuffle from 'shuffle-array';
import { Link } from 'react-router-dom';
import { Query } from '../../components';
import useStyles from './HomeScreen.styles';
import {
  Typography,
  Grid,
  Paper,
  ImageList,
  ImageListItem,
} from '@material-ui/core';
import HOMEPAGE_QUERY from '../../queries/homepage/homepage';
import HOMEPAGE_RECIPES_QUERY from '../../queries/homepage/recipes';

const HomeScreen = () => {
  const classes = useStyles();
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
      <Query query={HOMEPAGE_RECIPES_QUERY}>
        {({ data: { recipes } }) => {
          const recipesArray = shuffle(recipes).slice(0, 8);
          return (
            <ImageList rowHeight={160} className={classes.imageList} cols={3}>
              {recipesArray.map((recipe, index) => (
                // <Link to={`/recipe/${recipe.slug}`}>
                <ImageListItem
                  key={recipe.title}
                  cols={index === 0 || index === 6 ? 2 : 1}
                >
                  <img src={recipe.image.url} alt={recipe.title} />
                </ImageListItem>
                // </Link>
              ))}
            </ImageList>
          );
        }}
      </Query>
      <Query query={HOMEPAGE_QUERY}>
        {({ data: { homepage } }) => {
          const welcomeTextArray = homepage.welcomeText.split('\n\n');
          return (
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
          );
        }}
      </Query>
    </Grid>
  );
};
export default HomeScreen;
