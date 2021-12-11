import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import StaffMember from "../components/staff-member";

class StaffIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const staff = get(this, "props.data.allContentfulStaffMember.edges");
    const assets = get(this, "props.data.allContentfulAsset.edges").reduce(
      (acc, { node }) => {
        acc[node.title] = node.file.url;
        return acc;
      },
      {}
    );

    return (
      <Layout assets={assets} location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline" style={{ paddingBottom: "3vmin" }}>
              Our Team
            </h2>
            <div className="staff">
              {staff.map(({ node }) => (
                <StaffMember key={node.name} member={node} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default StaffIndex;

export const pageQuery = graphql`
  query StaffQuery {
    allContentfulStaffMember(sort: { fields: sortId, order: ASC }) {
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
  }
`;
