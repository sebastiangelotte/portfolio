import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const DynamicLink = ({ className, to, children }) => {
  const linkIsInternal = !to.includes("https://")

  return (
    <>
      {linkIsInternal ? (
        <InternalLink className={className} to={to}>
          {children}
        </InternalLink>
      ) : (
        <ExternalLink className={className} href={to}>
          {children}
        </ExternalLink>
      )}
    </>
  )
}

export default DynamicLink

const commonStyles = `
`

const InternalLink = styled(Link)`
  ${commonStyles}
`

const ExternalLink = styled.a`
  ${commonStyles}
`
