import React, { Component } from 'react'
import MaintenanceView from './MaintenanceView'
import ManlyView from './ManlyView'

class App extends Component {

    isUnderMaintenance(){
        return true
    }

    render() {
        if(this.isUnderMaintenance()) {
            return (
              <MaintenanceView />
            )
        } else {
            return ( 
              <ManlyView />
            )
        }
    }
}

export default App
