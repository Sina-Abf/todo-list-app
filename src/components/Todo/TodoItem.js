import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todo-slice';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const checkHandler = () => {
    console.log('checked');
    dispatch(todoActions.setIsChecked());
  };

  return (
    <li className={classes.items}>
      <div className={classes.title}>
        <div>
          <input onChange={checkHandler} type="checkbox" />
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.date}</p>
        </div>
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
