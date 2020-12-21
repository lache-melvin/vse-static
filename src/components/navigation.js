import React from 'react'
import { Link } from 'gatsby'
// import styles from './navigation.module.css'

class Nav extends React.Component {
  render () {
    const { pathname } = this.props.location
    return (
        <div className="navbar" id="theNav">
          <Link
            to="/"
            style={pathname === '/' ? { color: '#abe' } : null}
          >Home</Link>
          <Link
            to="/staff/"
            style={pathname === '/staff/' ? { color: '#abe' } : null}
          >About Us</Link>
          <Link
            to="/contact/"
            style={pathname === '/contact/' ? { color: '#abe' } : null}
          >Contact</Link>
      </div> 
  )}
}

export default Nav
