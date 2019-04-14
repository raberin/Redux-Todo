import React from "react";
import { connect } from "react-redux";

const Todo = () => {
  return <div key={props.todo.id}>{props.todo.task}</div>;
};

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default Todo;
