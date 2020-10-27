import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .back {
    font-size: 1.2em;
    text-decoration: none;
    color: fuchsia;
  }
`
export const ImageContainer = styled.article`
  display: flex;
  height: 200px;

  div {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 450px) {
    height: 300px;
  }

  @media screen and (min-width: 750px) {
    width: 80%;
    height: 400px;
    justify-self: flex-end;
    box-shadow: 2px 2px 4px 1px black;
  }

  @media screen and (min-width: 1200px) {
    height: 500px;
  }
`

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 10px;
  text-align: justify;

  @media screen and (min-width: 750px) {
    width: 750px;
    justify-self: center;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`
