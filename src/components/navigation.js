import React from 'react'
import { Link } from 'gatsby'
// import styles from './navigation.module.css'

class Nav extends React.Component {
  render () {
    return (
        <div className="navbar" id="theNav">
          <Link to="/">Home</Link>
          <Link to="/staff/">About Us</Link>
          <Link to="/contact/">Contact</Link>
      </div> 
  )}
}

export default Nav