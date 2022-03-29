import React, { useState } from 'react'

import Countdown from 'react-countdown'
import { Button } from '@mui/material'

import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { setCompeleted } from '../reducers/todo'
import {
  Container,
  Timer,
  Todo,
  TodoWrapper,
  Wrapper
} from '../styles/todoItem'

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
      <Button fullWidth size='small' onClick={() => setOpen(!open)}>
        Delete
      </Button>
    </Container>
  )
}

export default TodoItem
