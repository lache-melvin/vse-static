import React from "react";
import "./base.css";
import Container from "./container";

class Template extends React.Component {
  render() {
    const { children, assets, location } = this.props;
    return (
      <Container location={location} logo={assets.logo}>
        {children}
        <div className="footer">
          <div className="row">
            <img src={assets.engNZ} alt="Engineering New Zealand logo" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Template;
