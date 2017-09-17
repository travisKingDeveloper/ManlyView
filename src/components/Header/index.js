import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Navigation from './Navigation'
import logo from '../../assets/logo.png'
import './header.css'


export default class Header extends Component {

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Navigation/>
        </AppBar>
      </div>
    );
  }
}
