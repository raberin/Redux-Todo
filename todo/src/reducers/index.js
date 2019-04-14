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
        friends: [...state.friends, newTodo]
      };
    // case TOGGLE_TODO:
    //   return state;
    default:
      return state;
  }
};
