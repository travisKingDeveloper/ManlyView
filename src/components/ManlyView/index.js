import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import logo from '../../assets/logo.png'
import './ManlyView.css'

import util from '../SocialMediaUtility'
import Header from '../Header'
import ShowcaseCard from '../ShowcaseCard'
import BroOgraphies from '../BroOgraphies'

class ManlyView extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="manly-view">
          <Grid container spacing={16}>
            <Grid item xs md={4} className="centered">
              <div className="full-width">
                <BroOgraphies />
              </div>
            </Grid>
            <Grid item xs md>
              <div className="full-width">
                <ShowcaseCard />
              </div>
            </Grid>
        </Grid>
        </div>
      </div>
    )
  }
}

export default ManlyView
