import React from "react"
import styled from "styled-components"
import kikki from "../images/kikki_face.svg"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <Wrapper>
      <List>
        <Item to="/">
          <img height="40px" src={kikki} alt="Home" />
        </Item>
        <Item to="/notes">Notes</Item>
        <Item to="/contact">Contact</Item>
      </List>
          <List>
            <Switch />
          </List>
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
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  &:hover {
    &:after {
      content: "";
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--color-green);
      box-shadow: #00ff43 3px 0px 22px;
    }
  }
`

const Wrapper = styled.div`
  background-color: var(--color-gray-dark);
  z-index: 1;
`
