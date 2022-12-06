import { ADD_Task, REMOVE_Task, TOGGLE_TODO } from "./ActionType";

export const addTodo = (id, todo) => {
  let task = {
    id: id,
    task: todo,
    complited: false,
  };

  return {
    type: ADD_Task,
    payload: task,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_Task,
    payload: id,
  };
};
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});
