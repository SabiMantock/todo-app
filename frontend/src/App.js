import './App.css'
import Input from './components/Input'
import Todo from './components/Todo'
import { Container } from './styles/app'

function App () {
  return (
    <Container>
      <Input />
      <Todo />
    </Container>
  )
}

export default App
