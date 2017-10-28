import React, { Component } from 'react'
import List from 'material-ui/List/List'
import Grid from 'material-ui/Grid'

import ProfileAvatar from './ProfileAvatar'
import Profiles from '../../util/Profiles'
import BIO from './BIO'
import './BroOgraphies.css'

export default class BroOgraphies extends Component {
  state = {
    selectedBro: Profiles.Arman,
  }

  changeBro = (profile) => {
    this.setState({ selectedBro: profile });
  }

  render() {
    const profilesProps = {
      onClick: this.changeBro,
      selected: (name) => this.state.selectedBro.name === name,
    }

    return (
      <div className="biographies">
        <Grid className="avatars">
          <Grid item xs>
            <ProfileAvatar profile={Profiles.Arman} {...profilesProps} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar profile={Profiles.Chris} {...profilesProps} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar profile={Profiles.Isaiah} {...profilesProps} />
          </Grid>
          <Grid item xs>
            <ProfileAvatar profile={Profiles.Matt} {...profilesProps} />
          </Grid>
        </Grid>
        <Grid item xs>
          <BIO headline={this.state.selectedBro.name}>
            {this.state.selectedBro.bio}
          </BIO>
        </Grid>
      </div>
    );
  }
}
