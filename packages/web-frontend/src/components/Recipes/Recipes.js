import React from 'react';
import Card from '../Card/Card';
import Grid from '@material-ui/core/Grid';

const Recipes = ({ recipes }) => {
  return (
    <Grid container spacing={1}>
      {recipes.map((recipe) => {
        return (
          <Grid item xl={3} lg={4} sm={6} xs={12} key={`recipe${recipe.slug}`}>
            <Card recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Recipes;
