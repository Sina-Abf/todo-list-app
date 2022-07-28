import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = () => {
  return (
    <li className={classes.items}>
      <div className={classes.title}>
        <input type="checkbox" />
        <h1>Design signup flow</h1>
      </div>
      <p>
        By the time a prospect arrives at your signup page, in most casses..
      </p>
      <div>
        <h3>Subject</h3>
        <p>Pinned:</p>
        <p>Comments:</p>
      </div>
    </li>
  );
};

export default TodoItem;
