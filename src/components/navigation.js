import React, { useState } from "react"
import styled from "styled-components"
import kikki from "../images/kikki_face.svg"
import { Link } from "gatsby"
import Switch from "./switch"
import { MdMenu, MdClose } from "react-icons/md"

const Navigation = () => {
  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  return (
    <Wrapper>
      <Inner>
        <Activator onClick={toggle}>
          {active ? <MdClose /> : <MdMenu />}
        </Activator>
        {active && (
          <List>
            <Item to="/">🏠</Item>
            <Item to="/notes">📝</Item>
            <Item to="/contact">💌</Item>
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
  position: sticky;
  top: 0;
`

const Inner = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: var(--color-highlight-primary);
  border-radius: 50px;
  padding: 0 1rem;
`

const Activator = styled.div`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  cursor: pointer;
`
