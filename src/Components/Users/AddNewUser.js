import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import classes from "./AddNewUser.module.css";

const AddNewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
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
    setUsername("");
    setAge("");
    const dataObj = {
      user: username,
      age: age,
    };
    props.onAddData(dataObj);
    console.log(username, age);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
    setUsername("");
    setAge("");
  };

  return (
    <Wrapper>
      {error && (
        <Modal
          heading={error.heading}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddNewUser;
