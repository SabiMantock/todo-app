import React from 'react'
import { useDispatch } from 'react-redux'

import { removeTask } from '../reducers/todo'
import { Button, Container, Text } from '../styles/modal'
import { BackDrop } from './BackDrop'

const Modal = ({ id, onOpen }) => {
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeTask({ id }))
  }

  return (
    <>
      <BackDrop onClose={onOpen} />
      <Container onClick={onOpen}>
        <Text>delete this task?</Text>
        <Button>
          <button onClick={removeHandler}>Yes</button>
          <button>No</button>
        </Button>
      </Container>
    </>
  )
}

export default Modal
