import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todo-slice';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  const [toEdit, setToEdit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const editedTitle = useRef();

  const editSubmitHandler = (e) => {
    e.preventDefault();
    const newTitle = editedTitle.current.value;
    setNewTitle(newTitle);
    dispatch(
      todoActions.updateTodo({
        title: newTitle,
        id: props.id,
      })
    );
    setToEdit((prevState) => !prevState);
  };

  const editHandler = () => {
    setToEdit((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.removeTodo(props.id));
  };

  return (
    <li className={classes.items}>
      <div className={classes.title}>
        <div>
          <input type="checkbox" />
          {!toEdit && <h1>{props.title}</h1>}
          {toEdit && (
            <form onSubmit={editSubmitHandler}>
              <input
                ref={editedTitle}
                type="text"
                placeholder="Edit your title.."
              />
            </form>
          )}
          <div className={classes.options}>
            <p onClick={editHandler} className={classes.edit}>
              Edit
            </p>
            <p onClick={deleteHandler} className={classes.delete}>
              Delete
            </p>
          </div>
        </div>
        <div>
          <p className={classes.date}>{props.date}</p>
        </div>
      </div>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.footer}>
        <h3>{props.subject}</h3>
      </div>
    </li>
  );
};

export default TodoItem;
