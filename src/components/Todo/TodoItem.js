import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = () => {
  return (
    <li className={classes.items}>
      <div className={classes.title}>
        <input type="checkbox" />
        <h1>Design signup flow</h1>
      </div>
      <p className={classes.description}>
        By the time a prospect arrives at your signup page, in most casses..
      </p>
      <div className={classes.footer}>
        <h3>Subject</h3>
        <div>
          <p>Pinned:</p>
          <p>Comments:</p>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
