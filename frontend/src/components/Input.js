import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../reducers/todo'
import TextField from '@mui/material/TextField'
import moment from 'moment'
import { Form, FormGroup } from '../styles/input'
import { Button } from '@mui/material'

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

        <Button fullWidth size='small' onClick={submit}>
          Add Task
        </Button>
      </FormGroup>
    </Form>
  )
}

export default Input
