import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { removeTask } from '../reducers/todo'

const Modal = ({ id, onOpen }) => {
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeTask({ id }))
  }

  return (
    <Container onClick={onOpen}>
      <Text>delete this task?</Text>
      <Button>
        <button onClick={removeHandler}>Yes</button>
        <button>No</button>
      </Button>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: lightcyan;
  padding: 10px;
  border-radius: 14px;
`

const Text = styled.div`
  text-transform: capitalize;
  margin: 5px;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    font-size: 10px;
    align-self: center;
    width: 50px;
    margin: 5px;
  }
`
export default Modal
