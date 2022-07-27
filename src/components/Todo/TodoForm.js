import React, { Fragment } from 'react';
import Button from '../../Ui/Button';
import classes from './TodoForm.module.css';
const TodoForm = () => {
  return (
    <Fragment>
      <form className={classes.form}>
        <div>
          <label htmlFor="todo-title">Title:</label>
          <input placeholder="Enter a title..." type="text" id="todo-title" />
        </div>
        <div>
          <label htmlFor="todo-description">Description:</label>
          <textarea
            placeholder="Enter Your Description..."
            id="todo-description"
          />
        </div>
        <Button>Submit</Button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
