import React from "react";
import { connect } from "react-redux";

const TodoList = () => {
  return (
    <div>
      {this.props.todos.map((todo, index) => (
        <Todo id={props.id} key={props.id} />
      ))}
    </div>
  );
};

// const mapStateToProps = state => ({
//   todos: state.todosReducer.todos
// })

export default TodoList;
