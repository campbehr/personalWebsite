import styled from "styled-components"

export const StyledSquares = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  height: 400px;
  width: 60%;
  opacity: 99%;
  z-index: 1;
  bottom: 150px;

  div {
    border: 5px solid purple;

    :nth-child(1) {
      height: 4rem;
      width: 4rem;
      align-self: flex-end;
      margin: 0 0 30px 0;
      /* background-color: forestgreen; */
      animation: twinkle 2s infinite;
      @keyframes twinkle {
        0% {
          border-color: purple;
        }
        25% {
          border-color: fuchsia;
        }
        50% {
          border-color: purple;
        }
        75% {
          border-color: purple;
        }
        100% {
          border-color: purple;
        }
      }
    }
    :nth-child(2) {
      height: 3rem;
      width: 5rem;
      align-self: flex-start;
      margin: 35px 0 0 0;
      /* background-color: orange; */
      animation: twinkle 4s infinite;
      @keyframes twinkle {
        0% {
          border-color: purple;
        }
        25% {
          border-color: purple;
        }
        50% {
          border-color: fuchsia;
        }
        75% {
          border-color: purple;
        }
        100% {
          border-color: purple;
        }
      }
    }
    :nth-child(3) {
      height: 5rem;
      width: 4rem;
      align-self: center;
      margin: 10px 0 0 0;
      /* background-color: tan; */
      animation: twinkle 5s infinite;
      @keyframes twinkle {
        0% {
          border-color: purple;
        }
        25% {
          border-color: purple;
        }
        50% {
          border-color: purple;
        }
        75% {
          border-color: fuchsia;
        }
        100% {
          border-color: purple;
        }
      }
    }
    :nth-child(4) {
      height: 2rem;
      width: 5rem;
      align-self: flex-end;
      margin: 0 0 60px 20px;
      /* background-color: fuchsia; */
      animation: twinkle 3s infinite;
      @keyframes twinkle {
        0% {
          border-color: purple;
        }
        25% {
          border-color: fuchsia;
        }
        50% {
          border-color: purple;
        }
        75% {
          border-color: purple;
        }
        100% {
          border-color: purple;
        }
      }
    }
    :nth-child(5) {
      height: 5rem;
      width: 2rem;
      align-self: flex-start;
      margin: 0 0 0 0;
      /* background-color: slategray; */
      animation: twinkle 6s infinite;
      @keyframes twinkle {
        0% {
          border-color: purple;
        }
        25% {
          border-color: purple;
        }
        50% {
          border-color: purple;
        }
        75% {
          border-color: fuchsia;
        }
        100% {
          border-color: purple;
        }
      }
    }
  }
`
