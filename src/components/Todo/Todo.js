import React, { Fragment } from 'react';
import Modal from '../Ui/Modal';
import TodoForm from './TodoForm';
import UserInfo from './UserInfo';

const Todo = () => {
  return (
    <Fragment>
      <UserInfo />
      <Modal>
        <TodoForm />
      </Modal>
    </Fragment>
  );
};

export default Todo;
