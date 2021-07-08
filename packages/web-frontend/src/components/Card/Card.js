import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardMedia,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { SharePopover } from '..';
import useStyles from './Card.styles';

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/recipe/${recipe.slug}`}>
        <CardHeader
          title={recipe.title}
          subheader={recipe.cookingTime}
          className={classes.cardHeader}
        />
        <CardMedia
          className={classes.cardMedia}
          image={recipe.image.url}
          title={recipe.title}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {recipe.description}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <SharePopover />
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
