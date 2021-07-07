import React from 'react';
import { Recipes, Query } from '../../components';
import RECIPES_QUERY from '../../queries/recipe/recipes';

const Recipes = () => {
  return (
    <Query query={RECIPES_QUERY}>
      {({ data: { recipes } }) => {
        return <Recipes recipes={recipes} />;
      }}
    </Query>
  );
};

export default Recipes;
