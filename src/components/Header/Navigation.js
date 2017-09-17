import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import { createMuiTheme } from 'material-ui/styles'


const ITEM_HEIGHT = 48;

export default class Navigation extends Component {
    state = {
        open: false,
        anchorEl: null
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render(){
        return (
            <div>
            <IconButton
                aria-label="More"
                aria-owns={this.state.open ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                <MenuItem key="Refresh" primaryText="Refresh" onClick={this.handleRequestClose}/>
                <MenuItem key="Help" primaryText="Help" onClick={this.handleRequestClose}/>
                <MenuItem key="Sign out" primaryText="Sign out" onClick={this.handleRequestClose}/>
            </Menu>  
        </div>

        )
    }
}
