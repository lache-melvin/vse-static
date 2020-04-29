import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import logo from '../../assets/logo.jpg'
import nzeng from '../../assets/eng-nz-logo.jpg'

class Template extends React.Component {
  render() {
    const { children } = this.props
    console.log(this.props.location)

    return (
      <Container>
        <img src={logo} alt='VSE Logo' />
        <Navigation />
        {children}
        <img src={nzeng} alt='NZ Engineering logo' />
      </Container>
    )
  }
}

export default Template
