import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((item) => {
          return (
            <li key={Math.random().toString()}>
              {item.user} ({item.age}){" "}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;
