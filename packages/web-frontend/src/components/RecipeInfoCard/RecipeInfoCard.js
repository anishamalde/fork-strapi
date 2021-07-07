import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import KitchenIcon from '@material-ui/icons/Kitchen';
import useStyles from './RecipeInfoCard.styles';

const RecipeInfoCard = ({ cookingTime, servingSize, calories }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card} elevation={0}>
      <ScheduleIcon fontSize='large' className={classes.icon} />
      <Typography variant='body1'>{cookingTime}</Typography>
      <PersonIcon fontSize='large' className={classes.icon} />
      <Typography variant='body1'>{servingSize}</Typography>
      <KitchenIcon fontSize='large' className={classes.icon} />
      <Typography variant='body1'>{calories}</Typography>
    </Paper>
  );
};

export default RecipeInfoCard;
