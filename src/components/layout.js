import React from "react";
import "./base.css";
import Container from "./container";

class Template extends React.Component {
  render() {
    const { children, assets, location } = this.props;
    return (
      <Container location={location} logo={assets.logo}>
        {children}
      </Container>
    );
  }
}

export default Template;
