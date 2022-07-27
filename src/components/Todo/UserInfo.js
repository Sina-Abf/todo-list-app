import React, { Fragment } from 'react';
import classes from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={classes.info}>
      <h1>Welcome back, Sina</h1>
      <p>You've got 7 tasks coming up in the next days</p>
    </div>
  );
};

export default UserInfo;
