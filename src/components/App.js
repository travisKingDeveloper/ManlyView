import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import ManCave from './ManCave'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Manly View</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
        <a href="#" className="button">I'm a Button</a>
        <ManCave />
      </div>
    )
  }
}

export default App
