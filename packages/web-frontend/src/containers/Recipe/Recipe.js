import React from 'react';
import { useParams } from 'react-router';
import { Query } from '../../components';
import { IngredientsList, MethodList, RecipeInfoCard } from '../../components';
import Page from '../../templates/Page/Page';
import { Typography, Paper, Grid } from '@material-ui/core';
import RECIPE_QUERY from '../../queries/recipe/recipe';
import useStyles from './Recipe.styles';
import Image from 'material-ui-image';

const Recipe = () => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Query query={RECIPE_QUERY} slug={id}>
      {({ data: { recipes } }) => {
        if (recipes.length) {
          return (
            <Page>
              <Grid container className={classes.grid}>
                <Grid item xl={11} xs={12} className={classes.recipeTitle}>
                  <Typography variant='h3'>{recipes[0].title}</Typography>
                </Grid>
                <Grid item xl={6} lg={8} xs={10}>
                  <Image
                    alt={recipes[0].title}
                    className={classes.image}
                    src={recipes[0].image.url}
                  />
                </Grid>

                <Grid item xl={8} xs={12}>
                  <Paper elevation={3} className={classes.recipeCard}>
                    <RecipeInfoCard
                      cookingTime={recipes[0].cookingTime}
                      servingSize={recipes[0].servingSize}
                      calories={recipes[0].calories}
                    />
                    <Typography className={classes.title} variant='h4'>
                      Ingredients
                    </Typography>
                    <IngredientsList ingredients={recipes[0].ingredients} />
                    <Typography className={classes.title} variant='h4'>
                      Method
                    </Typography>
                    <MethodList method={recipes[0].method} />
                  </Paper>
                </Grid>
              </Grid>
            </Page>
          );
        }
      }}
    </Query>
  );
};

export default Recipe;
