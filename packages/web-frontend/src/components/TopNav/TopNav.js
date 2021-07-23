import React from 'react';
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SearchBar, SideNav } from '..';
import useStyles from './TopNav.styles';
import logo from '../../assets/fork-logo.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import forkText from '../../assets/fork-text.png';

const TopNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <div className={classes.topNav}>
        <Link to={`/`} className={classes.homeLogo}>
          <Avatar alt='Fork logo' src={logo} />
          <img src={forkText} alt='Fork logo text' className={classes.image} />
        </Link>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/fork.around.the.world'
          className={classes.instagram}
        >
          <InstagramIcon />
        </a>
      </div>

      <AppBar className={classes.app} position='static'>
        <Toolbar className={classes.toolbar}>
          <SideNav />
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNav;
