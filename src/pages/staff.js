import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import styles from './blog.module.css'
import Layout from '../components/layout'
import StaffMember from '../components/staff-member'

class StaffIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const staff = get(this, 'props.data.allContentfulStaffMember.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Meet the Team</h2>
            <ul>
              {staff.map(({ node }) => {
                return (
                  <li key={node.name}>
                    <StaffMember member={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

// className="article-list" <<=== for the ul tag

export default StaffIndex

export const pageQuery = graphql`
  query StaffQuery  {
    allContentfulStaffMember {
      edges {
        node {
          name
          title
          email
          credentials
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
