import React from 'react'

import AppBar from 'material-ui/AppBar'

class Header extends React.Component {

  render() {
    return(
      <div>
        <AppBar title="Manly View">
          {this.props.children}
        </AppBar>
      </div>
    )
  }
}



export default Header;