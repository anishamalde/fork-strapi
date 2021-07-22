import React from 'react';
import { TopNav } from '../../components';
import useStyles from './Page.styles';

const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <TopNav />
      <div className={classes.content}>{children}</div>
    </div>
  );
};
export default Page;
