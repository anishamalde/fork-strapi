import React from 'react';
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import { SearchBar, SideNav, Query } from '..';
import useStyles from './TopNav.styles';
import CATEGORIES_QUERY from '../../queries/category/categories';
import logo from '../../assets/fork-logo.png';
import forkText from '../../assets/fork-text.png';

const TopNav = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.topNav}>
        <Avatar className={classes.homeLogo} alt='Fork logo' src={logo} />
        <img src={forkText} alt='Fork logo text' />
      </div>
      <div className={classes.grow}>
        <AppBar className={classes.app} position='static'>
          <Toolbar>
            <Query query={CATEGORIES_QUERY} slug={null}>
              {({ data: { categories } }) => {
                return <SideNav categories={categories} />;
              }}
            </Query>

            <SearchBar />
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TopNav;
