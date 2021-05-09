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
    background-color: #ff00ff;
  }

  &.inverted {
    background-color: #ff00ff;

    &:hover {
      background-color: black;
    }
  }
`
