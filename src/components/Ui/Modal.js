import React from 'react';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modal = (props) => {
  return (
    <div>
      <Backdrop />
      <Card className={classes.card}>{props.children}</Card>
    </div>
  );
};

export default Modal;
