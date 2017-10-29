import React, { Component } from 'react'

import ReactPlayer from 'react-player'
import Grid from 'material-ui/Grid'
import cn from 'classnames'

import './videos.css'

import logo from '../../assets/logo.png'

import VideoSelector from './VideoSelector'
import videos from '../../util/Videos'

export default class Videos extends Component {
    constructor(args) {
        super(args)

        const index = (Math.random() * videos.length) << 0
        const current = videos[index]

        this.state = {
            selectedVideo: current,
            selectedVideoIndex: index,
        }
    }

    selectVideo = (video, index) => {
        this.setState(v => {
            v.selectedVideo = video
            v.selectedVideoIndex = index
        })
    }

    render() {
        const videoComponenets = videos.map((video, index) =>
                <Grid item xs={6} md={4} lg={3}>
                    <VideoSelector 
                        title={video.title} 
                        selected={this.state.selectedVideoIndex == index}
                        onClick={() => this.selectVideo(video, index)}
                    >
                        <img src={video.img} />
                    </VideoSelector>
                </Grid>
        )

        return (
            <Grid container className="playing-video">
                <Grid item xs={12} className="video">
                    <ReactPlayer
                        url={this.state.selectedVideo.url} 
                        controls
                        width="95%"
                    />
                </Grid>
                {videoComponenets}
            </Grid>
        )
    }
}