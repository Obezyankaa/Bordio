import { createSlice } from '@reduxjs/toolkit';

const colors = [
  '#ABE9CE',
  '#D8DCFF',
  '#FFDFBA',
  '#FEC6B7',
  '#D9E6A2',
  '#F2BAE1',
  '#b7e1fe',
  '#cef8c9',
  '#a4d7db',
];

function pickChakraRandomColor(variant = '') {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color + variant;
}
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        color: pickChakraRandomColor(),
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    }
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
