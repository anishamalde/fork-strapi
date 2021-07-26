import React from 'react';
import { useParams } from 'react-router';
import { IngredientsList, MethodList, RecipeInfoCard } from '../../components';
import Page from '../../templates/Page/Page';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useRecipeQuery } from '../../queries/recipe/recipe';
import useStyles from './Recipe.styles';
import Image from 'material-ui-image';

const Recipe = () => {
  const classes = useStyles();
  let { id } = useParams();

  const { data, loading, error } = useRecipeQuery({ variables: { slug: id } });

  return (
    <Page>
      {loading || error || !data ? (
        <></>
      ) : (
        <Grid container className={classes.grid}>
          <Grid item xl={11} xs={12} className={classes.recipeTitle}>
            <Typography variant='h3'>{data.recipes[0].title}</Typography>
          </Grid>
          <Grid item xl={6} lg={8} xs={10}>
            <Image
              alt={data.recipes[0].title}
              className={classes.image}
              src={data.recipes[0].image.url}
            />
          </Grid>

          <Grid item xl={8} xs={12}>
            <Paper elevation={3} className={classes.recipeCard}>
              <RecipeInfoCard
                cookingTime={data.recipes[0].cookingTime}
                servingSize={data.recipes[0].servingSize}
                calories={data.recipes[0].calories}
              />
              <Typography className={classes.title} variant='h4'>
                Ingredients
              </Typography>
              <IngredientsList ingredients={data.recipes[0].ingredients} />
              <Typography className={classes.title} variant='h4'>
                Method
              </Typography>
              <MethodList method={data.recipes[0].method} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Page>
  );
};

export default Recipe;
