import React, { Fragment } from 'react';
import classes from './TodoForm.module.css';

const TodoForm = () => {
  return (
    <Fragment>
      <h1 className={classes.modalForm}>Please Fill The Forms</h1>
      <form className={classes.form}>
        <div>
          <label htmlFor="todo-title">Title</label>
          <input
            id="todo-title"
            type="text"
            placeholder="Enter Your Todo Title..."
          />
        </div>
        <div>
          <label htmlFor="todo-description">Description</label>
          <textarea
            id="todo-title"
            type="text"
            placeholder="Enter Your Todo Title..."
          />
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
