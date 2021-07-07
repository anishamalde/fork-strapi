import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './SideNav.styles';

const SideNav = ({ categories }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <>
          <Divider />
          <Link to={`/`}>
            <ListItem button>
              <ListItemText className={classes.listItem} primary='Home' />
            </ListItem>
          </Link>
        </>
        {categories.map((category) => {
          return (
            <div key={category.slug}>
              <Divider />
              <Link to={`/category/${category.slug}`}>
                <ListItem button>
                  <ListItemText
                    className={classes.listItem}
                    primary={category.name}
                  />
                </ListItem>
              </Link>
            </div>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer('left', true)}>
        <MenuIcon className={classes.menu} />
      </Button>
      <SwipeableDrawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </>
  );
};

export default SideNav;
