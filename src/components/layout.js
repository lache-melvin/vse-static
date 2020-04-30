import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import logo from '../../assets/logo.jpg'
import nzeng from '../../assets/eng-nz-logo.jpg'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <div className='header'>
          <div className="row">
            <div className="header-logo-div">
              <img className="header-logo" src={logo} alt='VSE Logo' />
            </div>
            <Navigation />
          </div>
        </div>
        {children}
        <div className='footer'>
          <div className='row'>
            <img src={nzeng} alt='Engineering New Zealand logo' />
          </div>
        </div>
      </Container>
    )
  }
}

export default Template
