import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => (
        <Todo todo={todo} id={index} key={index} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  {}
)(TodoList);
