import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const assets = get(this, 'props.data.allContentfulAsset.edges')
      .reduce((acc, { node }) => {
        acc[node.title] = node.file.url
        return acc
      }, {})

    return (
      <Layout assets={assets} location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <div className="home-title-image row">
              <img src={assets.teamFront} alt="VSE team outside the front of the office on Rutherford Street" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulAsset {
      edges {
        node {
          id
          title
          file {
            url
          }
          description
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
