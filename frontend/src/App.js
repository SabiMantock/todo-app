import styled from 'styled-components'
import './App.css'
import Input from './components/Input'
import Todo from './components/Todo'

function App () {
  return (
    <div>
      <Input />
      <Todo />
    </div>
  )
}

export const Container = styled.div`
  width: 100%;
`

export default App
