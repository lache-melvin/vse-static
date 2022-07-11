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
        <div style={{ background: '#53565A' }}>
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

              <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4488367354174!2d173.28100279999998!3d-41.277335099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3bed1ae5923c43%3A0x4a15a0375bebb24f!2s171%20Rutherford%20Street%2C%20Nelson%207010%2C%20New%20Zealand!5e0!3m2!1sen!2suk!4v1657525621203!5m2!1sen!2suk" title="171 Rutherford Street on Google Maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
