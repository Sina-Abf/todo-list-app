import React, { Fragment } from 'react';
import Button from '../Ui/Button';
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
            placeholder="Enter Your Todo Description..."
          />
        </div>
        <Button>Submit</Button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
