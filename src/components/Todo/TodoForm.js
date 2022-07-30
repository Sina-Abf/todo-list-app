import React, { Fragment, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todo-slice';
import { uiActions } from '../../store/ui-slice';
import Button from '../Ui/Button';
import classes from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const titleData = useRef();
  const descriptionData = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleData.current.value;
    const description = descriptionData.current.value;
    if (!title && !description) return;
    dispatch(
      todoActions.addNewTodo({
        id: Math.random(),
        title,
        description,
      })
    );
    dispatch(uiActions.setIsInvisible());
    titleData.current.value = '';
    descriptionData.current.value = '';
  };

  return (
    <Fragment>
      <h1 className={classes.modalForm}>Please Fill The Forms</h1>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div>
          <label htmlFor="todo-title">Title</label>
          <input
            ref={titleData}
            id="todo-title"
            type="text"
            placeholder="Enter Your Todo Title..."
          />
        </div>
        <div>
          <label htmlFor="todo-description">Description</label>
          <textarea
            ref={descriptionData}
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
