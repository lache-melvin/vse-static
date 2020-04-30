import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import projectImage from '../../assets/placeholder-project.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <div className="home-title-image row">
              <img src={projectImage} alt="some image" />
              <h1 className="home-title">Vector Structural Engineering</h1>
            </div>
            <p>A lovely lil explanation idk, a testimonial</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
