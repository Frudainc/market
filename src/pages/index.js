import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import {
  ArticlePreview,
  Base,
  Herald,
  NewExperience,
  UpcomingEvents,
  HomeIssueArticle,
  TableOfContents,
} from '../components'
import { LoopArrow } from '../svg'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Base location={this.props.location}>
        <Helmet title={siteTitle} />

        <div className="home-top">
          <div className="width">
            <div className="home-top-flex">
              <NewExperience />
              <UpcomingEvents />
            </div>
          </div>
        </div>

        <div className="home-issue">
          <div className="width">
            <div className="home-issue-left">
              <h2>
                January
                <br />
                Issue
              </h2>
              <p>
                Our top picks of the week. Come join us at the Market to see for
                yourself.
              </p>
            </div>

            <div className="home-issue-right">
              {posts.map(({ node }) => {
                return <HomeIssueArticle key={node.slug} article={node} />
              })}

              <Link className="home-issue-more" to="/">
                <span>More in our Magazine</span>
                <LoopArrow />
              </Link>
            </div>
          </div>
        </div>

        <TableOfContents />

        <Herald />
      </Base>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            id
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
