import React from "react"
import styled from "styled-components"
import kikki from "../images/kikki_face.svg"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <Wrapper>
      <h1>
        Sebastian is a front-end developer who loves HTML, CSS and JavaScript
      </h1>
      <p>
        Sebastian specializes in building things for the web. He talks about
        tech in his{" "}
        <a
          href="https://trevligmjukvara.se"
          style={{ color: "var(--color-1)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          podcast
        </a>
        , commits code to{" "}
        <a
          href="https://github.com/sebastiangelotte"
          style={{ color: "var(--color-2)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and documents his experiences in his{" "}
        <Link to="/notes" style={{ color: "var(--color-3)" }}>
          notes
        </Link>
        .
      </p>
      <Image src={kikki} alt="Kikki the cat" />
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "heading image"
    "paragraph image";
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0rem 4rem;

  @media (max-width: 1000px) {
    grid-template-areas:
      "image image"
      "heading heading"
      "paragraph paragraph";
  }

  > h1 {
    grid-area: heading;
    background: var(--gradient-primary);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline; // iOS fix for background-clip bug

    @media (max-width: 1000px) {
      font-size: 32px;
    }
  }

  > p {
    grid-area: paragraph;
    align-self: flex-start;
  }
`

const Image = styled.img`
  grid-area: image;
  width: 100%;
  object-fit: cover;
  max-height: 100%;
  grid-area: image;
  width: 100%;
  object-fit: cover;
  max-height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`
