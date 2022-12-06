import { ADD_Task, REMOVE_Task, TOGGLE_TODO } from "./ActionType";

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Task:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
            completed: false,
          },
        ],
      };

    case REMOVE_Task:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    default:
      return state;
  }
};
