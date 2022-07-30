import classes from './UserInfo.module.css';
import Button from '../Ui/Button';
import { useSelector } from 'react-redux';

const UserInfo = (props) => {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <div className={classes.info}>
      <h1>Welcome back, Sina</h1>
      <p>You've got {todoList.length} tasks coming up in the next days...</p>
      <div className={classes.btnWrapper}>
        <Button onClick={props.onModalOpener} className={classes.btn}>
          Enter a Todo!
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
