import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  background-color: "lightred";
  min-height: 100vh;
  grid:
    "leftMain" 25%
    "rightMain" 75%
    "about" 80%
    "portfolio" auto /**change the width when adding material */
    "contact" 80% /
    1fr;

  aside {
    grid-area: leftMain;
    border: 3px solid red;
  }

  figure {
    grid-area: rightMain;
    border: 3px solid green;
  }

  article {
    grid-area: about;
    border: 3px solid grey;
  }

  section {
    grid-area: portfolio;
    border: 3px solid blue;
  }

  footer {
    grid-area: contact;
    border: 3px solid turquoise;
  }
`

export default Grid
