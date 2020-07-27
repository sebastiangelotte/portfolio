import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { List, ListItem } from "../components/list"
import SEO from "../components/seo"

const Notes = () => {
  const data = useStaticQuery(graphql`
    query notesQuery {
      allMarkdownRemark(limit: 26) {
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

  const notes = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Notes" />
      <h1>Notes</h1>
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
    </Layout>
  )
}

export default Notes
