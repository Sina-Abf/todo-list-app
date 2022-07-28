import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  return (
    <li className={classes.items}>
      <div className={classes.title}>
        <input type="checkbox" />
        <h1>{props.title}</h1>
      </div>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.footer}>
        <h3>{props.subject}</h3>
        <div>
          <p>Pinned: 0</p>
          <p>Comments: 0</p>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
