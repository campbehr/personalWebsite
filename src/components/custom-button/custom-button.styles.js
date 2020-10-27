import styled from "styled-components"

export const Button = styled.button`
  height: 55px;
  width: 135px;
  border-radius: 20px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: black;
  z-index: 2;
  /* text-align: center;
  line-height: 55px; */

  &:hover {
    background-color: rgb(255, 72, 72);
  }

  &.inverted {
    background-color: rgb(255, 72, 72);

    &:hover {
      background-color: black;
    }
  }
`
