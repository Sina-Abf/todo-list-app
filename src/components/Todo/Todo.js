import React, { Fragment } from 'react';
import Modal from '../Ui/Modal';
import UserInfo from './UserInfo';
import TodoForm from './TodoForm';

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
