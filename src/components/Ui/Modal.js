import React from 'react';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const Modal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onClick} />
      <Card className={`${classes.card} ${props.className}`}>
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
