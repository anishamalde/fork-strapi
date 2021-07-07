import React from 'react';
import { useParams } from 'react-router';
import { Recipes, Query } from '../../components';
import CATEGORY_RECIPES_QUERY from '../../queries/category/recipes';
import { Typography } from '@material-ui/core';
import useStyles from './Category.styles';

const Category = () => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Query query={CATEGORY_RECIPES_QUERY} slug={id}>
      {({ data: { categories } }) => {
        if (categories.length) {
          return (
            <>
              <div className={classes.title}>
                <Typography variant='h3'>{categories[0].name}</Typography>
              </div>
              <Recipes recipes={categories[0].recipes} />
            </>
          );
        }
      }}
    </Query>
  );
};

export default Category;
