import React from "react"
import styled from "styled-components"
import { useGlobalState } from "../globalState"

const Switch = () => {
  const [darkMode, setDarkMode] = useGlobalState("darkMode")

  return (
    <Wrapper>
      <Indicator onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌘"}
      </Indicator>
    </Wrapper>
  )
}

export default Switch

const Wrapper = styled.div``

const Indicator = styled.button`
  text-align: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 1rem 0;
`
