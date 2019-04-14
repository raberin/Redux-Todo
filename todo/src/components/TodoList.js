import React from "react";
import { connect } from "react-redux";

const TodoList = () => {
  return (
    <ul>
      {this.props.todos.map((todo, index) => (
        <Todo />
      ))}
    </ul>
  );
};

// const mapStateToProps = state => ({
//   todos: state.todosReducer.todos
// })

export default TodoList;
