import React, { useState } from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown'

import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { setCompeleted } from '../reducers/todo'

const TodoItem = ({ todo, timer, id, handleToggle, checked }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const checkedTodo = () => {
    dispatch(setCompeleted({ id }))
  }

  return (
    <Container>
      <Wrapper>
        <TodoWrapper>
          <Todo onClick={handleToggle} checked={checked}>
            {todo}
          </Todo>
        </TodoWrapper>
      </Wrapper>
      {open && <Modal id={id} onOpen={() => setOpen(!open)} />}
      <Timer>
        <Countdown
          date={timer}
          onComplete={checkedTodo}
          onPause={checkedTodo}
        />
      </Timer>
      <button onClick={() => setOpen(!open)}>Delete</button>
    </Container>
  )
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    padding: 1.2rem;
    font-size: 1rem;
    border: none;
    width: 20%;
    background: white;
    color: #ff6f47;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`

export const Wrapper = styled.div``

export const TodoWrapper = styled.ul`
  margin: 0.5rem;
  /* background: white; */
  font-size: 1.5rem;
  color: black;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;

  transition: all 1s ease;
`
export const Todo = styled.div`
  text-decoration: ${({ checked }) => (checked ? 'line-through' : '')};
  cursor: pointer;
`

export const Timer = styled.div`
  margin: 0;
  align-self: center;
`
export default TodoItem
