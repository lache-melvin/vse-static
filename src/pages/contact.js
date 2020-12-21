import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class Contact extends React.Component {
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
            <h2 className="section-headline">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-text">
                <div className="contact-info">
                  <p><span className="contact-type">Phone: </span><span className="contact-details">03 928 0860</span></p>
                  <div className="emails">
                    <p><span className="contact-type">For general enquiries: </span><span className="contact-details">admin@vse.co.nz</span></p>
                    <p><span className="contact-type">For accounts: </span><span className="contact-details">accounts@vse.co.nz</span></p>
                  </div>
                </div>

                <h3>Location</h3>
                <div className="contact-info">
                  <p>171 Rutherford Street</p>
                <p>Nelson</p>
                <p>New Zealand</p>
                </div>
              </div>

              <div id="map">
                <img src={assets.map} alt="171 Rutherford Street pinned on Google Maps" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
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
