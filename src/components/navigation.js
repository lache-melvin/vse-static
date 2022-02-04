import React from "react";
import { Link } from "gatsby";
import { stack as Menu } from "react-burger-menu";

class Nav extends React.Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <Menu right noOverlay>
        <Link to="/" style={pathname === "/" ? { color: "#abe" } : null}>
          Home
        </Link>
        <Link
          to="/staff/"
          style={pathname === "/staff/" ? { color: "#abe" } : null}
        >
          About Us
        </Link>
        <Link
          to="/contact/"
          style={pathname === "/contact/" ? { color: "#abe" } : null}
        >
          Contact
        </Link>
      </Menu>
    );
  }
}

export default Nav;
