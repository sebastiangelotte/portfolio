import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { Link, useStaticQuery, graphql } from "gatsby"
import { List, ListItem } from "../components/list"
import styled from "styled-components"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import { useGlobalState } from "../globalState"

const IndexPage = () => {
  const [darkMode] = useGlobalState("darkMode")
  const gitHubCalendarTheme = {
    background: "transparent",
    text: darkMode ? "#fff" : "#000",
    grade4: "#8dfff2",
    grade3: "hsl(135.6, 90.8%, 75%)",
    grade2: "hsl(135.6, 90.8%, 75%)",
    grade1: "hsl(135.6, 90.8%, 75%)",
    grade0: darkMode ? "#3c444d" : "#dee5ec",
  }
  const data = useStaticQuery(graphql`
    query indexQuery {
      allFeedTrevligMjukvara(limit: 6) {
        edges {
          node {
            title
            link
            date: isoDate(formatString: "YYYY-MM-DD")
            itunes {
              duration
            }
          }
        }
      }
      allMarkdownRemark(limit: 6) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "YYYY-MM-DD")
              category
            }
            timeToRead
          }
        }
      }
    }
  `)

  const podcastEpisodes = data.allFeedTrevligMjukvara.edges
  const notes = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ListSection>
        <ListSectionInner size="60">
          <Heading>Latest notes</Heading>
          <Link to="/notes">See all</Link>
          <List>
            {notes.map((note, i) => (
              <ListItem
                item={{
                  link: note.node.frontmatter.slug,
                  timeToRead: note.node.timeToRead,
                  ...note.node.frontmatter,
                }}
                key={i}
              />
            ))}
          </List>
        </ListSectionInner>
        <ListSectionInner size="40">
          <Heading>Podcast</Heading>
          <a href="https://www.trevligmjukvara.se">trevligmjukvara.se</a>
          <List>
            {podcastEpisodes.map((episode, i) => (
              <ListItem item={{ ...episode.node, category: "pod" }} key={i} />
            ))}
          </List>
        </ListSectionInner>
      </ListSection>
      <StyledGitHubCalendar>
        <h2>
          <a
            target="_blank"
            href="https://github.com/sebastiangelotte"
            rel="noopener noreferrer"
          >
            @sebastiangelotte
          </a>
        </h2>
        <GitHubCalendar
          username="sebastiangelotte"
          showTotalCount={false}
          theme={gitHubCalendarTheme}
        >
          <ReactTooltip delayShow={30} html />
        </GitHubCalendar>
      </StyledGitHubCalendar>
    </Layout>
  )
}

export default IndexPage

const ListSection = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  grid-gap: 0 4rem;

  @media (max-width: 800px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
    grid-gap: 4rem 0;
  }
`

const ListSectionInner = styled.div`
  overflow: hidden;
`

const Heading = styled.h2`
  display: inline;
  padding-right: 1rem;
`

const StyledGitHubCalendar = styled.div`
  svg {
    width: 100%;
    text {
      font-weight: bold;
    }
  }
`
