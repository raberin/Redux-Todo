import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        completed: false
      };
      return {
        //Using spread operator i can pass down everything originally
        //in the state
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
};

export default todosReducer;
