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
import { Query } from '..';
import CATEGORIES_QUERY from '../../queries/category/categories';
import useStyles from './SideNav.styles';

const SideNav = () => {
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
    <Query query={CATEGORIES_QUERY} slug={null}>
      {({ data: { categories } }) => {
        console.log(categories);
        return (
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
      }}
    </Query>
  );

  return (
    <>
      <Button className={classes.menu} onClick={toggleDrawer('left', true)}>
        <MenuIcon />
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
