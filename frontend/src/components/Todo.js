import React from 'react'
import TodoItem from './TodoItem'

import { useDispatch, useSelector } from 'react-redux'
import { setCompeleted } from '../reducers/todo'
import { Container, TodoList } from '../styles/todo'

const Todo = () => {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  const checkedTodo = id => {
    dispatch(setCompeleted({ id }))
  }

  return (
    <Container>
      {todos.map(todo => (
        <TodoList key={todo.id}>
          <TodoItem
            id={todo.id}
            todo={todo.content}
            timer={todo.timer}
            handleToggle={() => checkedTodo(todo.id)}
            checked={todo.complete}
          />
        </TodoList>
      ))}
    </Container>
  )
}

export default Todo
