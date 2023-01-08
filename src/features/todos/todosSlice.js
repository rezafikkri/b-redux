import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        const id = nanoid();
        return { payload: { id, text, completed: false } }
      }
    },
    toggleTodo: (state, action) => {
      state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      });
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
