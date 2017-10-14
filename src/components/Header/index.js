import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import Navigation from './Navigation'
import logo from '../../assets/logo.png'
import './header.css'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Header extends Component {

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

export default withStyles(styles)(Header)