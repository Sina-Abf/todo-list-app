import React from 'react';
import Card from '../Ui/Card';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <Card>
      <ul>
        <TodoItem />
      </ul>
    </Card>
  );
};

export default TodoList;
