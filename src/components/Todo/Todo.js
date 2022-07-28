import React, { Fragment } from 'react';
import Modal from '../Ui/Modal';
import UserInfo from './UserInfo';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import TodoList from './TodoList';
const Todo = () => {
  const dispatch = useDispatch();

  const modalOpenHandler = () => {
    dispatch(uiActions.setIsVisible());
  };
  const modalCloseHandler = () => {
    dispatch(uiActions.setIsInvisible());
  };

  const modalSelector = useSelector((state) => state.ui.isVisible);

  return (
    <Fragment>
      <UserInfo onModalOpener={modalOpenHandler} />
      {modalSelector && (
        <Modal onClick={modalCloseHandler}>
          <TodoForm />
        </Modal>
      )}
      <TodoList />
    </Fragment>
  );
};

export default Todo;
