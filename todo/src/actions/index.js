export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

//toggleTodo requires an index to determine which todo item will be toggled
export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
