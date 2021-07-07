import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import useStyles from './IngredientsList.styles';

const IngredientsList = ({ ingredients }) => {
  const [checked, setChecked] = useState(
    new Array(ingredients.length).fill(false)
  );

  const handleChange = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedCheckedState);
  };

  const classes = useStyles();
  const ingredientsArray = ingredients.split('\n\n');

  return (
    <List className={classes.root} aria-label='ingredients'>
      {ingredientsArray.map((ingredient, index) => {
        return (
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox
                checked={checked[index]}
                onChange={() => handleChange(index)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <ListItemText primary={ingredient} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default IngredientsList;
