import React from 'react';
import Card from '../Ui/Card';
import TodoItem from './TodoItem';

import classes from './TodoList.module.css';

const TodoList = () => {
  return (
    <section className={classes.cardWrapper}>
      <Card>
        <ul>
          <TodoItem />
        </ul>
      </Card>
    </section>
  );
};

export default TodoList;
