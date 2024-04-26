import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30vh;
  justify-content: space-around;
  align-items: start;
`

export const FormContats = styled.form`
  width: 30vw;
  flex-direction: column;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 10px;
  padding: 1vw;
  background-color: #e3fdfd;
  border: 1px solid #a6e3e9;
  width: 80%;
  margin-bottom: 20px;
  font-size: 24px;
  padding-inline-start: 18px;
  min-width: 64px;
`

export const Button = styled.button`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  width: 85%;
  background-color: #71c9ce;
  border-radius: 50px;
  border: 1px solid #a6e3e9;
  font-size: 24px;
  padding: 1.5vh 0;
  &:hover {
    background-color: #3eb0b6;
  }
`
export const ContactList = styled.ul`
  width: 60vw;
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  list-style: none;
`

export const Title = styled.h1`
  font-size: 2vw;
  margin: 0;
  margin-bottom: 10px;
`
export const Contact = styled.li`
  font-size: 0.6vw;
  border-radius: 10px;
  padding-top: 1vh;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 2.5vh;
  background-color: #e3fdfd;

  div {
    display: flex;
    justify-content: space-between;
    div {
      .Email {
        text-align: end;
        width: 30vw;
      }
      h1 {
        width: 12vw;
      }
    }
  }

  button {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-weight: bolder;
    background-color: #71c9ce;
    border-radius: 50px;
    border: 1px solid #a6e3e9;
    margin-right: 8px;
    padding: 12px;
    &:hover {
      background-color: #3eb0b6;
    }
  }
`
