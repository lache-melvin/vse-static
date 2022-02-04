import React from "react";
import Navigation from "./navigation";

export default ({ children, location, logo }) => (
  <>
    <Navigation location={location} />
    <div className="header">
      <div className="header-logo-div">
        <img className="header-logo" src={logo} alt="VSE Logo" />
      </div>
    </div>
    <div style={{ maxWidth: 1180, margin: "0 auto", top: "100px" }}>
      {children}
    </div>
  </>
);
