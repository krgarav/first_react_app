import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import classes from "./AddNewUser.module.css";

const AddNewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const [collegename,setCollegename]=useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username === "" || age === "") {
      setError({
        heading: "Invalid Input",
        message: "Please enter valid Name and Age",
      });
      return;
    }
    if (Number(age) < 1) {
      setError({
        heading: "Invalid Age",
        message: "Please enter valid Name (Enter age > 0)",
      });
      return;
    }
    
    const dataObj = {
      user: username,
      age: age,
      collegename:collegename
    };
    props.onAddData(dataObj);
    setUsername("");
    setAge("");
    setCollegename("")
    console.log(username, age,collegename);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const collegenameHandler=(event)=>{
    setCollegename(event.target.value);
  }
  const errorHandler = () => {
    setError(null);
    setUsername("");
    setAge("");
    setCollegename("")
  };

  return (
    <React.Fragment>
      {error && (
        <Modal
          heading={error.heading}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <label htmlFor="clgname">College Name</label>
          <input id="clgname" type="text" value={collegename} onChange={collegenameHandler}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddNewUser;
