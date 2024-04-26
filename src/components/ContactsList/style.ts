import styled from 'styled-components'

export const ContactList = styled.ul`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 20px 5vw;
  list-style: none;
  padding-left: 12px;
`

export const Title = styled.h1`
  font-size: 42px;
`
export const Contact = styled.li`
  font-size: 0.7vw;
  border-radius: 10px;
  padding-top: 1vh;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 2.5vh;
  transition: background-color 0.2s linear;

  div {
    display: flex;
    justify-content: space-between;
    div {
      .Email {
        text-align: end;
        width: 35vw;
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
    font-size: 1.2vw;
    width: 7vw;
    background-color: #71c9ce;
    border-radius: 50px;
    border: 1px solid #a6e3e9;
    margin-right: 8px;
    padding: 1vh;
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s,
      opacity 0.5s linear;
    &:hover {
      background-color: #3eb0b6;
    }
  }
  &:hover {
    background-color: #e3fdfd;
    button {
      opacity: 1;
      visibility: visible;
    }
  }
`
