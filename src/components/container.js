import React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";

const Container = ({ children, location, logo }) => (
  <>
    <Navigation location={location} />
    <div className="header">
      <Link to="/">
        <div className="header-logo-div">
          <img className="header-logo" src={logo} alt="VSE Logo" />
        </div>
      </Link>
    </div>
    <div style={{ maxWidth: 1180, margin: "0 auto", top: "12vh", position: "relative" }}>
      {children}
    </div>
  </>
);

export default Container