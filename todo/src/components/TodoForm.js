import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import "./TodoForm.css";

class TodoForm extends React.Component {
  state = {
    newTodo: ""
  };

  changeHandler = e => {
    //Tracks changes in the input and changes state whenever something is typed
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodoHandler = e => {
    e.preventDefault();
    //This accesses redux stores, addTodo action/reducer and runs it to add a todo
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.addTodoHandler}>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add Todo"
          onChange={this.changeHandler}
        />
        <button className="add-todo-button">Add Todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
