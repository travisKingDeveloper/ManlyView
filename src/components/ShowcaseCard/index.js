import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'
import Card, {
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'

import manCard_BW from '../../assets/ManCard-BW.jpg'
import logo from '../../assets/logo.png'
import twoGents from '../../assets/TwoGents.jpg'
import allOfThem from '../../assets/allOfThem.jpg'

import ShowcaseAvatar from './ShowcaseAvatar'

import './mancard.css';

export default class ShowcaseCard extends Component {
    constructor(args) {
        super(args)

        const keys = Object.keys(ShowcaseCard.ManCardImages)
        const current = ShowcaseCard.ManCardImages[keys[(Math.random() * keys.length) << 0]] //Bit Wise operator Rounds down from 2.9 > 2

        this.state = {
            currentPicture: current,
        }
    }

    static ManCardImages = {
        BlackWhite: 'bw',
        TwoGents: 'tg',
        AllOfThem: 'all',
    }

    renderImage = () => {
        switch (this.state.currentPicture) {
            case ShowcaseCard.ManCardImages.BlackWhite:
                return manCard_BW
            case ShowcaseCard.ManCardImages.TwoGents:
                return twoGents
            case ShowcaseCard.ManCardImages.AllOfThem:
                return allOfThem
            default:
                return manCard_BW
        }
    }

    setImageState = (event, image) => {
        this.setState(x => x.currentPicture = image);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="The Manly View"
                    subtitle="The Gents with Two Cents"
                    avatar={<ShowcaseAvatar logo={logo} />}
                />
                <CardMedia title="The Gents with Two Cents">
                    <img src={this.renderImage()} className="man-card"/>
                </CardMedia>

                <CardActions>
                    <Tabs value={this.state.currentPicture} onChange={this.setImageState}>
                        <Tab
                            label="The Gents"
                            value={ShowcaseCard.ManCardImages.BlackWhite}
                        />
                        <Tab
                            label="Hanging Out!"
                            value={ShowcaseCard.ManCardImages.TwoGents}
                        />
                        <Tab
                            label="Chilling"
                            value={ShowcaseCard.ManCardImages.AllOfThem}
                        />
                    </Tabs>
                </CardActions>
            </Card>
        )
    }
}