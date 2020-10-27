import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid:
    "leftMain" auto
    "rightMain" auto
    "about" auto
    "portfolio" auto /**change the width when adding material */
    "contact" 700px /
    1fr;

  aside {
    grid-area: leftMain;
    /* border: 3px solid red; */
  }

  figure {
    grid-area: rightMain;
    width: 98%; /**Fix this later down the road */
    margin: 0;
    /* border: 3px solid green; */
  }

  article {
    grid-area: about;
    /* border: 3px solid grey; */
  }

  section {
    grid-area: portfolio;
    /* border: 3px solid blue; */
  }

  footer {
    grid-area: contact;
    /* border: 3px solid turquoise; */
  }

  @media screen and (min-width: 750px) {
    grid:
      "leftMain rightMain" auto
      "about about" auto
      "portfolio portfolio" auto
      "contact contact" 700px /
      1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid:
      "leftMain rightMain" auto
      "about about" auto
      "portfolio portfolio" auto
      "contact contact" 750px /
      1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid:
      ". leftMain rightMain ." auto
      ". about about about" auto
      ". portfolio portfolio ." auto
      "contact contact contact ." 800px/
      1fr 720px 720px 1fr;
  }
`

export default Grid
