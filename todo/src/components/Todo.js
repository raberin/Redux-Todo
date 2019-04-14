import React from "react";
import { connect } from "react-redux";
import { toggleCompleted } from "../actions";

const Todo = props => {
  const toggleCompleted = (e, index) => {
    console.log(index);
    e.preventDefault();
    props.toggleCompleted(index);
  };

  return (
    <li
      key={props.todo.id}
      index={props.todo.id}
      onClick={e => toggleCompleted(e, props.id)}
    >
      {props.todo.completed ? `${props.todo.task} DONE` : `${props.todo.task}`}
    </li>
  );
};

export default connect(
  null,
  { toggleCompleted }
)(Todo);
