import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 11%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: lightcyan;
  padding: 10px;
  border-radius: 14px;
  z-index: 2;
`

export const Text = styled.div`
  text-transform: capitalize;
  margin: 5px;
`
export const Button = styled.div`
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
