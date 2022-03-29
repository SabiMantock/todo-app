import styled from 'styled-components'

export const Form = styled.form`
  padding: 10px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 50px auto 0 auto;
  border-radius: 5px;
`
export const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  button {
    padding: 1rem;

    border: none;
    width: 50%;
    background: white;
    color: #ff6f47;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
  }
`
