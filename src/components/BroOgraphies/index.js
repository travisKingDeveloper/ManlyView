import React, { Component } from 'react'
import List from 'material-ui/List/List'
import Grid from 'material-ui/Grid'

import ProfileAvatar from './ProfileAvatar'
import Profiles from '../../util/Profiles'
import './BroOgraphies.css'

export default class BroOgraphies extends Component {
  state = {
    selectedBro: Profiles.Arman
  }

  changeBro = (name) => {
    this.setState(state => { selectedBro: name});
  }

  render() {
    return (
      <div>
        <Grid className="avatars">
          <Grid item xs>
            <ProfileAvatar name={Profiles.Arman.name} url={Profiles.Arman.url} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar name={Profiles.Chris.name} url={Profiles.Chris.url} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar name={Profiles.Isaiah.name} url={Profiles.Isaiah.url} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar name={Profiles.Matt.name} url={Profiles.Matt.url} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
