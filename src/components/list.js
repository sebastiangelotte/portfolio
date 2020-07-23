import React from "react"
import styled from "styled-components"
import DynamicLink from "./dynamicLink"
import { FaReact, FaMountain } from "react-icons/fa"
import PodLogo from "../images/pod-logo.png"
import NetlifyLogo from "../images/netlify-logo.svg"

const Icon = ({ category }) => {
  switch (category) {
    case "pod":
      return <img src={PodLogo} alt="category: pod" />
    case "react":
      return <FaReact />
    case "netlify":
      return <img src={NetlifyLogo} alt="category: netlify" />
    default:
      return <FaMountain />
  }
}

export const ListItem = ({
  item: { title, date, category, link, itunes, timeToRead },
}) => {
  return (
    <li>
      <Wrapper to={link}>
        <Icon category={category} />
        <Heading>{title}</Heading>
        <Date dateTime={date}>
          {date} • {itunes && `${itunes.duration.split(":")[0]} min listen`}
          {timeToRead && `${timeToRead} min read`}
        </Date>
      </Wrapper>
    </li>
  )
}

export const List = styled.ul`
  padding-left: 0;
  list-style: none;
  border-radius: 4px;
  overflow: hidden;
`

export const Wrapper = styled(DynamicLink)`
  padding: 1rem 1rem 1rem 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  text-decoration: none;
  background-color: var(--color-gray-light);
  border-bottom: 0;
  transition: background-color 100ms ease-out;

  &:hover,
  &:focus {
    background-color: #82f9a112;
    color: var(--color-white) !important;

    &:after {
      content: "";
      height: 100%;
      width: 4px;
      position: absolute;
      left: 0;
      background-color: var(--color-green);
      box-shadow: #00ff43 3px 0px 22px;
    }
  }

  > img,
  svg {
    position: absolute;
    left: 1rem;
    font-size: 40px;
    width: 40px;
  }
`

const Heading = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 0 0.25rem 0;
`

const Date = styled.time`
  font-size: 12px;
  color: #ffffff94;
`
