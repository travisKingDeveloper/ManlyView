import React, { Component } from 'react'
import { createMuiTheme , MuiThemeProvider } from 'material-ui/styles'

import ManlyView from './ManlyView'

const theme = createMuiTheme()

export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ManlyView />
            </MuiThemeProvider>
        )
    }
}