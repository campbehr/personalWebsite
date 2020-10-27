import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 32px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 600px;

  @media screen and (min-width: 550px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    width: 600px;
  }

  p {
    width: 100%;
  }

  label {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  input {
    width: 90%;
    height: 30px;
    font-size: 18px;
    border-radius: 10px;
  }

  textarea {
    width: 90%;
    height: 200px;
    font-size: 18px;
    border-radius: 10px;
    overflow: auto;
    resize: none;
  }
`
