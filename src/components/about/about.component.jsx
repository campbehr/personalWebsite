import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import {
  AboutContainer,
  ContentContainer,
  SectionTitle,
  SectionPara,
  ButtonContainer,
  Background,
} from "./about.styles"

const About = () => {
  return (
    <Background>
      <AboutContainer>
        <ContentContainer>
          <SectionTitle>About</SectionTitle>
          <SectionPara>
            Thanks for stopping by my page! If you'd like to learn less of me as
            a person, than feel free to scroll to the next session titled,
            Portfolio. Otherwise, my hopes are that through navigating this site
            in its entirety, you will have a nice snapshot of who I am, and my
            overall ability as a web developer. Onto a little bit about myslef
          </SectionPara>
          <SectionPara>
            I consider myself a very reserved person who loves a lively room.
            When I have free time, I love to go on adventures with my finace´
            and crazy pup, Maverick. I tell him all the time that one day we'll
            get him a Goose, but I don't think he believes me anymore. Other
            things I love are endurance races and most other sports related
            activities. My favorite movies (becuase I can't just pick one) are
            <i>Hidalgo, Star Wars,</i> and <i>A Knight's Tale</i>. When working,
            I like to listen to Led Zepplin or Cream, and when I find time, I
            love to read series novels from Tolkein to Rowling and from Martin
            to Pierce Brown... not to be confused with the other Brown. Other
            than that, I consider myself a life long learner and love to find
            the detail in the devils.
          </SectionPara>
          <SectionPara>
            <h3>Skills proficient in</h3>
            Javascript // React // SASS // Styled-Components // GraphQL <br />
            <h3>Other Skills</h3>
            Git // CSS3 // HTML5 // Github // Bootstrap // npm
          </SectionPara>
        </ContentContainer>
        <ButtonContainer>
          {/* Resume linked to public google doc set for view only */}
          <a
            href="https://docs.google.com/document/d/1mA3o5YYVEyXDly46XLi9vap2lH-dH129Wj7ntH_qVzQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton>Resume</CustomButton>
          </a>
          <a
            href="https://medium.com/@hunter.campbell843"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton>Articles</CustomButton>
          </a>
        </ButtonContainer>
      </AboutContainer>
    </Background>
  )
}

export default About
