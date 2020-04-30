import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import styles from './blog.module.css'
import Layout from '../components/layout'

class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
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
                
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact