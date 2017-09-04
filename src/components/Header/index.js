import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import logo from '../../assets/logo.png'
import './header.css'

const Navigation = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><Menu /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Navigation.muiName = 'IconMenu';

class AppBarExampleComposition extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<Navigation />}
          iconElementRight={<img className="header-image" src={logo} alt="Manly View"/>}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;