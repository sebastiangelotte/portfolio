import React from "react"
import Navigation from "../components/navigation"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	:root {
		--color-white: #fff;
		--color-gray: #30363D;
		--color-gray-dark: #0F171D;
		--color-gray-light: #3C444D; 
		--color-green: #82F9A1;
		--gradient-primary: linear-gradient(90deg, #F27A54 0%, #A154F2 186.42%);
	}

	body {
		margin: 0;
		background-color: var(--color-gray);
		color: var(--color-white);
		font-family: 'Open Sans';
	}

	h1, h2 {
		font-family: 'Volkorn';
	}

	h1 {
		font-size: 50px;
	}

	p {
	  line-height: 1.75rem;
	  font-size: 18px;
	}

	a {
	  text-decoration: none;
	  color: var(--color-white);
	  border-bottom: 0.12em solid currentColor;
	  padding-bottom: 1px;
	  transition: color 100ms ease-in-out;

	  &:hover {
	    color: var(--color-green) !important;
	  }
	}
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation />
      <Main>{children}</Main>
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

const Wrapper = styled.div``

const Main = styled.main`
  max-width: 962px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  > * {
    margin-top: 3rem;
  }
`

const Footer = styled.footer`
  background-color: var(--color-gray-dark);
  padding: 3rem 0;
  margin-top: 3rem;

  > p {
    max-width: 962px;
    margin: 1rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
