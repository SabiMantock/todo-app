import React, { useEffect } from 'react'
import Input from './Input'
import TodoItem from './TodoItem'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setCompeleted } from '../reducers/todo'

const Todo = () => {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  useEffect(() => {}, [])

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const TodoList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  list-style: none;
  padding: 10px;
  background-color: aliceblue;
  margin-top: 10px;
`

export default Todo
