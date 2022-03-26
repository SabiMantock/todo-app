import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTask (state, action) {
      let newTodo = {
        id: Math.random(),
        content: action.payload.newContent,
        timer: action.payload.timer,
        complete: false
      }
      state.todos.push(newTodo)
    },
    removeTask (state, action) {
      let { todos } = state
      state.todos = todos.filter(todo => todo.id !== action.payload.id)
    },

    setCompeleted (state, action) {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      )
      if (state.todos[todoIndex].complete === false) {
        state.todos[todoIndex].complete = true
      } else {
        state.todos[todoIndex].complete = false
      }
    }
  }
})

export const { addTask, removeTask, setCompeleted } = todoSlice.actions

export default todoSlice.reducer
