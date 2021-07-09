import React from 'react';
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SearchBar, SideNav, Query } from '..';
import Image from 'material-ui-image';
import useStyles from './TopNav.styles';
import CATEGORIES_QUERY from '../../queries/category/categories';
import logo from '../../assets/fork-logo.png';
import forkText from '../../assets/fork-text.png';

const TopNav = () => {
  const classes = useStyles();

  return (
    <>
      <Link to={`/`} className={classes.topNav}>
        <Avatar className={classes.homeLogo} alt='Fork logo' src={logo} />
        <img src={forkText} alt='Fork logo text' className={classes.image} />
      </Link>
      <div className={classes.grow}>
        <AppBar className={classes.app} position='static'>
          <Toolbar>
            {/* <Query query={CATEGORIES_QUERY} slug={null}>
              {({ data: { categories } }) => {
                return <SideNav categories={categories} />;
              }}
            </Query> */}
            <SideNav />
            <SearchBar />
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TopNav;
