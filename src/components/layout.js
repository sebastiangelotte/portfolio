import React, { useEffect } from "react"
import Navigation from "../components/navigation"
import { useGlobalState } from "../globalState"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "tippy.js/dist/tippy.css"
import coronaCat1 from "../images/corona-cat-1.svg"
import coronaCat2 from "../images/corona-cat-2.svg"
import coronaCat3 from "../images/corona-cat-3.svg"
import GlobalStyle from "../globalCSS"

const Layout = ({ children }) => {
  const [darkMode] = useGlobalState("darkMode")
  let theme = darkMode ? "dark" : "light"

  return (
    <Wrapper>
      <GlobalStyle />
      <Helmet
        bodyAttributes={{
          class: theme,
        }}
      />
      <Navigation />
      <Main>
        {console.log(darkMode)}
        {children}
      </Main>
      <Bottom>
        <img src={coronaCat1} alt="#wearthedamnmask" title="#wearthedamnmask" />
        <img src={coronaCat3} alt="#wearthedamnmask" title="#wearthedamnmask" />
        <img src={coronaCat2} alt="#wearthedamnmask" title="#wearthedamnmask" />
      </Bottom>
      <Footer>
        <p>Designed and developed by Sebastian Gelotte.</p>
        <p>
          Built with{" "}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          . Hosted on{" "}
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .{" "}
        </p>
        <p>
          Source code on{" "}
          <a
            href="https://github.com/sebastiangelotte/portfolio"
            target="blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          . Design in{" "}
          <a
            href="https://www.figma.com/file/57DGRhOlTOcKh97hTjfmFE/Portfolio?node-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>
          .
        </p>
      </Footer>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  overflow: auto;
`

const Main = styled.main`
  max-width: 962px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  > * {
    margin-bottom: 4rem;
  }

  padding-top: 5rem;
`

const Footer = styled.footer`
  background-color: var(--color-highlight-secondary);
  padding: 3rem 0 3rem 0;
  margin-top: 3rem;

  > p {
    max-width: 962px;
    margin: 1rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const Bottom = styled.div`
  display: flex;
  max-width: 962px;
  margin: 0 auto -76px auto;
  justify-content: space-around;
`
