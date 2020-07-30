import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Switch from "./switch"
import { MdMenu, MdClose } from "react-icons/md"
import Tippy from "@tippyjs/react"
import { useScrollDirection } from "../useScrollDirection"

const Navigation = () => {
  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  return (
    <Wrapper hide={useScrollDirection() === "down"}>
      <Inner>
        <Activator onClick={toggle}>
          {active ? <MdClose /> : <MdMenu />}
        </Activator>
        {active && (
          <List>
            <Tippy content="Home" placement="right">
              <Item to="/">🏠</Item>
            </Tippy>
            <Tippy content="Notes" placement="right">
              <Item to="/notes">📝</Item>
            </Tippy>
            <Tippy content="Contact" placement="right">
              <Item to="/contact">💌</Item>
            </Tippy>
            <Switch />
          </List>
        )}
      </Inner>
    </Wrapper>
  )
}

export default Navigation

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
`

const Item = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  border: none;
  text-align: center;
  padding: 1rem 0;
`

const Wrapper = styled.nav`
  z-index: 1;
  position: relative;

  ${props => (props.hide ? `display: none;` : `display: block;`)}
`

const Inner = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: var(--color-navigation);
  border-radius: 50px;
  padding: 0 1rem;

  @media (max-width: 1000px) {
    top: 0.5rem;
    left: 0.5rem;
  }
`

const Activator = styled.div`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  cursor: pointer;
`
