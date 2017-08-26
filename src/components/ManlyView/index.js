import React, { Component } from 'react'

import logo from '../../assets/logo.png';

import ManCave from './ManCave'
import util from '../SocialMediaUtility'
import Header from '../Header'

class ManlyView extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} className="logo"/>
        </Header>
        <util.Facebook />
        <ManCave />
        
      </div>
    )
  }
}

export default ManlyView
