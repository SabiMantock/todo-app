import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { addTask } from '../reducers/todo'
import TextField from '@mui/material/TextField'
import moment from 'moment'

const Input = () => {
  const [state, setState] = useState('')
  const [timer, setTimer] = useState('')

  const dispatch = useDispatch()

  const handleChange = e => {
    setState(e.target.value)
  }

  const submit = e => {
    e.preventDefault()
    if (state === '' && timer === '') return
    dispatch(
      addTask({
        newContent: state,
        timer: moment()
          .add(Number(timer), 'm')
          .toISOString()
      })
    )

    setState(state)
    setTimer(timer)
    setState('')
    setTimer('')
  }

  return (
    <Form>
      <FormGroup>
        <TextField
          type='text'
          value={state}
          onChange={handleChange}
          fullWidth
          label='Todo'
        />

        <TextField
          type='number'
          value={timer}
          onChange={e => setTimer(e.target.value)}
          fullWidth
        />

        <button onClick={submit}>Add Task</button>
      </FormGroup>
    </Form>
  )
}

export const Form = styled.form`
  padding: 10px;
  background-color: antiquewhite;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto;
  width: 50%;
`
export const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  button {
    padding: 1.2rem;
    font-size: 1rem;
    border: none;
    width: 50%;
    background: white;
    color: #ff6f47;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`

export default Input
