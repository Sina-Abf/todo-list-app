import Card from '../Ui/Card';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.todoList);
  if (todoItems.length === 0) {
    return (
      <p className={classes.fallback}>Start By Adding Your Daily Todos!</p>
    );
  }

  return (
    <section className={classes.cardWrapper}>
      <Card>
        <ul className={classes.list}>
          {todoItems.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                subject={item.subject}
                date={item.date}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default TodoList;
