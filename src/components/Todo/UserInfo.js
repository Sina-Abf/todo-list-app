import classes from './UserInfo.module.css';
import Button from '../Ui/Button';

const UserInfo = (props) => {
  return (
    <div className={classes.info}>
      <h1>Welcome back, Sina</h1>
      <p>You've got 7 tasks coming up in the next days</p>
      <Button onClick={props.onModalOpener} className={classes.btn}>
        Enter a Todo!
      </Button>
    </div>
  );
};

export default UserInfo;
