import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.heading}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
