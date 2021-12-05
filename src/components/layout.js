import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

class Template extends React.Component {
  render() {
    const { children, assets, location } = this.props;
    return (
      <Container>
        <div className="header">
          <div className="row">
            <div className="header-logo-div">
              <img className="header-logo" src={assets.logo} alt="VSE Logo" />
            </div>
            <Navigation location={location} />
          </div>
        </div>
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
