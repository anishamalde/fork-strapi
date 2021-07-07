import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import useStyles from './MethodList.styles';

const MethodList = ({ method }) => {
  const classes = useStyles();
  const methodArray = method.split('\n\n');

  return (
    <List className={classes.root} aria-label='method'>
      {methodArray.map((methodItem, index) => {
        return (
          <ListItem>
            <ListItemIcon>{index + 1}</ListItemIcon>
            <ListItemText>{methodItem}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MethodList;
