import React, { Fragment, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todo-slice';
import { uiActions } from '../../store/ui-slice';
import Button from '../Ui/Button';
import classes from './TodoForm.module.css';

const TodoForm = () => {
  const [isDefault, setIsDefault] = useState(false);
  const dispatch = useDispatch();
  const titleData = useRef();
  const descriptionData = useRef();
  const subjectData = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleData.current.value;
    const description = descriptionData.current.value;
    const subject = subjectData.current.value;
    if (subject === 'Select a Subject..') {
      setIsDefault(true);
      return;
    }

    if (!title || !description || !subject) return;
    dispatch(
      todoActions.addNewTodo({
        id: Math.random(),
        title,
        description,
        subject,
        date: new Date().toLocaleDateString('en-US'),
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
        <select ref={subjectData}>
          <option defaultValue="selected">Select a Subject..</option>
          <option>Design</option>
          <option>Graphic</option>
          <option>Programming</option>
          <option>Other..</option>
        </select>
        {isDefault && <p className="error">Please select a subject!</p>}
        <Button>Submit</Button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
