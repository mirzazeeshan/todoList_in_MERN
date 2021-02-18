import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoSilce = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSilce.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSilce.reducer;
