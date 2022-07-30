import React from 'react';
import Card from '../Ui/Card';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import { useSelector } from 'react-redux';

// const staticContent = [
//   {
//     id: 'item1',
//     title: 'Learning React & Doing a TodoList project!',
//     description:
//       'Learning React Is Really fun and entertaining it contains a lot and i really love to work with it!',
//     subject: 'Programming',
//   },
//   {
//     id: 'item2',
//     title: 'Learning Vue & Doing a TodoList project!',
//     description:
//       'Learning Vue Is Really fun and entertaining it contains a lot and i really love to work with it!',
//     subject: 'Programming',
//   },
// ];

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.todoList);

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
                // subject={item.subject}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default TodoList;
