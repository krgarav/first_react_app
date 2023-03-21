import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorHandler} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={props.errorHandler}></Backdrop>,
        document.getElementById("back-drop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          heading={props.heading}
          message={props.message}
          errorHandler={props.errorHandler}
        ></ModalOverlay>,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
};
export default Modal;
