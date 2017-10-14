import React, { Component } from 'react'
import List from 'material-ui/List/List'
import Grid from 'material-ui/Grid'

import ProfileAvatar from './ProfileAvatar'
import Profiles from '../../util/Profiles'
import './BroOgraphies.css'

export default class BroOgraphies extends Component {
  state = {
    selectedBro: Profiles.Arman.name
  }

  changeBro = (name) => {
    this.setState({ selectedBro: name});
  }

  render() {
    const profilesProps = {
      onClick: this.changeBro,
      selected: (name) => this.state.selectedBro === name,
    }

    return (
      <div>
        <Grid className="avatars">
          <Grid item xs>
            <ProfileAvatar 
                name={Profiles.Arman.name} url={Profiles.Arman.url}
                {...profilesProps}
            />
          </Grid>
          <Grid item xs>
            <ProfileAvatar 
                name={Profiles.Chris.name} url={Profiles.Chris.url} 
                {...profilesProps}    
            />
          </Grid>
          <Grid item xs>
            <ProfileAvatar 
                name={Profiles.Isaiah.name} url={Profiles.Isaiah.url} 
                {...profilesProps}
            />
          </Grid>
          <Grid item xs>
            <ProfileAvatar 
                name={Profiles.Matt.name} url={Profiles.Matt.url} 
                {...profilesProps}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
