import React, { Component } from 'react'

import logo from '../../assets/logo.png'
import './ManlyView.css'

import util from '../SocialMediaUtility'
import Header from '../Header'
import ManCard from '../Card'

class ManlyView extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} className="logo"/>
        </Header>

        <ManCard />
      </div>
    )
  }
}

export default ManlyView
