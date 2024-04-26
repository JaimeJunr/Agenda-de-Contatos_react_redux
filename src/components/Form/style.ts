import styled from 'styled-components'

export const FormContats = styled.form`
  background-color: #cbf1f5;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border-bottom: 1px solid black;
  flex-wrap: wrap;
`

export const Input = styled.input`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 10px;
  background-color: #e3fdfd;
  border: 1px solid #a6e3e9;
  height: 48px;
  width: 20%;
  margin-right: 8px;
  font-size: 24px;
  padding-inline-start: 18px;
  min-width: 64px;
`

export const Button = styled.button`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  background-color: #71c9ce;
  border-radius: 50px;
  border: 1px solid #a6e3e9;
  font-size: 24px;
  padding: 0 18px;
  height: 52px;
  &:hover {
    background-color: #3eb0b6;
  }
`
