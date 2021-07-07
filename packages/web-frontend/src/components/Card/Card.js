import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import {
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardMedia,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './Card.styles';

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();

  const imageUrl = process.env.REACT_APP_BACKEND_URL + recipe.image.url;

  console.log(imageUrl);
  return (
    <Card className={classes.card}>
      <Link to={`/recipe/${recipe.slug}`}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.title}
          subheader={recipe.cookingTime}
          className={classes.cardHeader}
        />
        <CardMedia
          className={classes.cardMedia}
          image={imageUrl}
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
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
